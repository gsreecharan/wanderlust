# Wanderlust 🌍

A full-stack MVC booking platform inspired by Airbnb, built to handle property listings, secure user authentication, and interactive map locations. 

**Live Demo:** [https://airbnb-gfxe.onrender.com](https://airbnb-gfxe.onrender.com)

**Tech Stack**
* **Frontend:** HTML, CSS, JavaScript, EJS, Bootstrap
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **APIs & Services:** Mapbox (Geocoding), Cloudinary (Image Uploads), Passport.js (Authentication)

**Core Features**
* **User Authentication:** Secure signup/login using Passport.js with session management.
* **Listing Management:** Full CRUD operations for property owners to create, edit, and delete their listings.
* **Interactive Maps:** Forward geocoding converts text addresses into live Mapbox markers.
* **Cloud Storage:** Image uploads are securely routed to Cloudinary.
* **Authorization:** Middleware ensures only listing owners can modify their properties and only logged-in users can leave reviews.

**Local Installation**
1. Clone the repository: `git clone https://github.com/gsreecharan/wanderlust.git`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory and add your API keys (Cloudinary, Mapbox, MongoDB).
4. Start the server: `node app.js`
