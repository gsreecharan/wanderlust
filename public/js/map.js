mapboxgl.accessToken = mapToken;

// CHANGE: Safe coordinate fallback in case a listing has missing geometry
const coords =
    listing && listing.geometry && Array.isArray(listing.geometry.coordinates) && listing.geometry.coordinates.length === 2
        ? listing.geometry.coordinates
        : [78.4867, 17.385]; // Fallback: Hyderabad, India

const map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v12",
    center: coords,
    zoom: 9,
});

// CHANGE: Added zoom and compass controls for better UX
map.addControl(new mapboxgl.NavigationControl());

const marker = new mapboxgl.Marker({ color: '#fe424d' })
    .setLngLat(coords)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h6 style="margin:0 0 4px 0;">${listing.title}</h6><p style="margin:0;font-size:0.85rem;">Exact location provided after booking</p>`
        )
    )
    .addTo(map);