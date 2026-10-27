# Wanderlust

A full-stack MVC web application for booking and reviewing travel accommodations. Built with Node.js, Express, and MongoDB, integrating Mapbox for geospatial data and Cloudinary for cloud-based media management.

**Live Deployment:** airbnb-gfxe.onrender.com

---

## Overview

Wanderlust replicates core marketplace functionalities for property rentals. It features a robust RESTful API backend handling complex relational data between users, property listings, and reviews. The application implements secure session-based authentication, server-side data validation, and responsive server-rendered views.

### Key Features
- **Authentication & Authorization:** Secure user registration, login, and session management using Passport.js. Protected routes ensure only authorized property owners can modify or delete listings and reviews.
- **Geospatial Mapping:** Integrates the Mapbox Geocoding API to convert user-entered locations into GeoJSON coordinates, rendering dynamic interactive maps on listing pages.
- **Cloud Media Storage:** Implements Multer and Cloudinary for seamless image upload, storage, and dynamic resizing.
- **Advanced Search:** Case-insensitive search functionality allowing users to query destinations via the database.
- **MVC Architecture:** Clean separation of concerns routing requests through dedicated controllers, models, and EJS views.

---

## Technical Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose ODM
- **Frontend:** HTML5, CSS3, EJS (Embedded JavaScript templates)
- **APIs & Services:** Mapbox API, Cloudinary API
- **Authentication:** Passport.js (Local Strategy)
- **Deployment:** Render

---

## Project Structure

```text
├── controllers/        # Route logic and request handling
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── init/               # Database seeding scripts and initial data
│   ├── data.js
│   └── index.js
├── models/             # Mongoose schemas and database models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/             # Static assets (CSS, client-side JS)
│   ├── css/
│   │   ├── rating.css
│   │   └── style.css
│   └── js/
│       ├── map.js      # Mapbox integration logic
│       └── script.js   # Form validation and UI interactions
├── routes/             # Express router definitions
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/              # Custom error handling classes
│   └── ExpressError.js
├── views/              # EJS templates (listings, reviews, layouts)
├── app.js              # Main application entry point
└── package.json        # Project metadata and dependencies


---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (Local instance or MongoDB Atlas URI)

### Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/gsreecharan/wanderlust.git
   cd wanderlust
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and securely add the following keys:
   ```env
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAP_TOKEN=your_mapbox_public_token
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SECRET=your_session_secret
   ```

4. Seed the database (Optional):
   ```bash
   node init/index.js
   ```

5. Start the development server:
   ```bash
   node app.js
   ```

---

## Author

- **G. Sree Charan** — [GitHub](https://github.com/gsreecharan)
