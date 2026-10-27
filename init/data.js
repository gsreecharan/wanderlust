const sampleListings = [
  {
    title: "Modern Glass Villa",
    description: "Experience luxury in this all-glass villa surrounded by nature.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=60" },
    price: 8500,
    location: "Lonavala",
    country: "India",
    geometry: { type: "Point", coordinates: [73.4072, 18.7481] }
  },
  {
    title: "Historic Castle Stay",
    description: "Live like royalty in this renovated 18th-century castle.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60" },
    price: 15000,
    location: "Jaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Cozy Beachfront Hut",
    description: "Wake up to the sound of waves in this private beach hut.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60" },
    price: 4500,
    location: "Goa",
    country: "India",
    geometry: { type: "Point", coordinates: [73.8180, 15.2993] }
  },
  {
    title: "Snowy Mountain Cabin",
    description: "Perfect winter getaway with a fireplace and hot tub.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60" },
    price: 6000,
    location: "Manali",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1892, 32.2396] }
  },
  {
    title: "Urban Loft Apartment",
    description: "Sleek, modern loft right in the center of the city.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60" }, // Fixed Image
    price: 3500,
    location: "Bangalore",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Serene Backwater Houseboat",
    description: "Float through the tranquil backwaters in a traditional houseboat.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=60" },
    price: 7500,
    location: "Alleppey",
    country: "India",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] }
  },
  {
    title: "Luxury Tent in the Desert",
    description: "Sleep under the stars in a luxurious desert camp.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=60" },
    price: 5500,
    location: "Jaisalmer",
    country: "India",
    geometry: { type: "Point", coordinates: [70.9168, 26.9157] }
  },
  {
    title: "Clifftop Ocean View Villa",
    description: "Breathtaking panoramic views of the Arabian Sea.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60" },
    price: 12000,
    location: "Varkala",
    country: "India",
    geometry: { type: "Point", coordinates: [76.7114, 8.7378] }
  },
  {
    title: "Royal Heritage Haveli",
    description: "Experience the grandeur of Rajasthani architecture.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=60" },
    price: 9000,
    location: "Udaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.6828, 24.5854] }
  },
  {
    title: "Himalayan Apple Orchard Farmhouse",
    description: "Cozy farmhouse surrounded by lush apple orchards.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=60" },
    price: 4000,
    location: "Shimla",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1734, 31.1048] }
  },
  {
    title: "Riverside Jungle Camp",
    description: "Adventure and peace combined right on the banks of the Ganges.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=60" },
    price: 3000,
    location: "Rishikesh",
    country: "India",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] }
  },
  {
    title: "Colonial French Villa",
    description: "A piece of French history in the heart of White Town.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60" },
    price: 6500,
    location: "Pondicherry",
    country: "India",
    geometry: { type: "Point", coordinates: [79.8083, 11.9416] }
  },
  {
    title: "Tea Estate Bungalow",
    description: "Wake up to misty hills and sprawling emerald tea gardens.",
    image: { 
      filename: "listingimage", 
      url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60" 
    },
    price: 7800,
    location: "Munnar",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0595, 10.0889] }
  },
  {
    title: "Eco-Friendly Treehouse",
    description: "Unplug and reconnect with nature high up in the canopy.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60" },
    price: 5200,
    location: "Coorg",
    country: "India",
    geometry: { type: "Point", coordinates: [75.7392, 12.3375] }
  },
  {
    title: "Spacious City Penthouse",
    description: "Premium penthouse with a private terrace and city skyline views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=60" },
    price: 11000,
    location: "Mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Boutique Art Deco Home",
    description: "A stylish, vibrant home for artists and creatives.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60" },
    price: 4200,
    location: "Delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2090, 28.6139] }
  },
  {
    title: "Rustic Stone Cottage",
    description: "A cozy stone cottage perfect for writers and remote workers.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60" },
    price: 3800,
    location: "Darjeeling",
    country: "India",
    geometry: { type: "Point", coordinates: [88.2636, 27.0360] }
  },
  {
    title: "Ganges River View Studio",
    description: "Peaceful studio apartment overlooking the holy river.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60" },
    price: 2500,
    location: "Varanasi",
    country: "India",
    geometry: { type: "Point", coordinates: [82.9995, 25.3176] }
  },
  {
    title: "Island Bamboo Retreat",
    description: "Minimalist bamboo huts right on the pristine white sands.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60" },
    price: 6000,
    location: "Andaman",
    country: "India",
    geometry: { type: "Point", coordinates: [92.6586, 11.7401] }
  },
  {
    title: "Lakeside Wooden Chalet",
    description: "A serene wooden chalet perched right on the edge of the lake.",
    image: { 
      filename: "listingimage", 
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60" 
    },
    price: 8200,
    location: "Srinagar",
    country: "India",
    geometry: { type: "Point", coordinates: [74.7973, 34.0837] }
  },
  {
    title: "High Altitude Homestay",
    description: "Experience local Ladakhi culture in this warm homestay.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=800&q=60" },
    price: 3200,
    location: "Leh",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5828, 34.1526] }
  },
  {
    title: "Surf Break Hostel Room",
    description: "Private room in a lively surfer's hostel with great vibes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=60" },
    price: 1500,
    location: "Gokarna",
    country: "India",
    geometry: { type: "Point", coordinates: [74.3188, 14.5375] }
  },
  {
    title: "Ski Resort Log Cabin",
    description: "Direct access to the ski slopes from your front door.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=60" },
    price: 9500,
    location: "Auli",
    country: "India",
    geometry: { type: "Point", coordinates: [79.5603, 30.5338] }
  },
  {
    title: "Heritage Boulder House",
    description: "Unique architecture integrated with natural giant boulders.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60" },
    price: 4800,
    location: "Hampi",
    country: "India",
    geometry: { type: "Point", coordinates: [76.4600, 15.3350] }
  }
];

module.exports = { data: sampleListings };