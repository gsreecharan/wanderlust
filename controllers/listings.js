const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = async (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Listing doesn't exist.");
        return res.redirect('/listings');
    }
    res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
    // CHANGE: Guard against missing file upload
    if (!req.file) {
        req.flash("error", "Please upload a listing image.");
        return res.redirect("/listings/new");
    }

    let response = await geocodingClient.forwardGeocode({
        query: `${req.body.listing.location}, ${req.body.listing.country}`,
        limit: 1,
    }).send();

    // CHANGE: Guard against unrecognized Mapbox locations instead of crashing
    if (!response.body.features || response.body.features.length === 0) {
        req.flash("error", "Could not locate that address on the map. Please enter a valid city or location.");
        return res.redirect("/listings/new");
    }

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = response.body.features[0].geometry;

    await newListing.save();

    req.flash("success", "New listing created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing doesn't exist.");
        // CHANGE: Added missing return to prevent crash & ERR_HTTP_HEADERS_SENT
        return res.redirect('/listings');
    }
    let originalImageURL = listing.image.url;
    originalImageURL = originalImageURL.replace("/upload", "/upload/h_300,w_250");
    return res.render("listings/edit.ejs", { listing, originalImageURL });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });

    if (!listing) {
        req.flash("error", "Listing doesn't exist.");
        return res.redirect("/listings");
    }

    // CHANGE: Safely update Mapbox geometry only if valid coordinates are returned
    let response = await geocodingClient.forwardGeocode({
        query: `${req.body.listing.location}, ${req.body.listing.country}`,
        limit: 1,
    }).send();

    if (response.body.features && response.body.features.length > 0) {
        listing.geometry = response.body.features[0].geometry;
    }

    // CHANGE: Removed duplicate await listing.save() call
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
    }

    await listing.save();
    req.flash("success", "Listing updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted.");
    res.redirect("/listings");
};

module.exports.search = async (req, res) => {
    // CHANGE: Trim query, escape regex special chars, and search across location, title, and country
    let q = (req.query.q || "").trim();
    if (!q) {
        return res.redirect("/listings");
    }

    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "i");

    const allListings = await Listing.find({
        $or: [
            { location: regex },
            { title: regex },
            { country: regex },
        ],
    });

    if (allListings.length === 0) {
        req.flash("error", `No stays found matching "${q}".`);
        return res.redirect("/listings");
    }
    res.render("listings/index.ejs", { allListings });
};