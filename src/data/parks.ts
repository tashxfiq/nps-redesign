export type Park = {
  id: string;
  name: string;
  state: string;
  tagline: string;
  hero: string;
  rating: number;
  reviews: number;
  distance: string;
  pricing: string;
  tags: string[];
  best: string;
};

// Verified park photography from Wikimedia Commons — each image is the actual park.
export const PARKS: Park[] = [
  {
    id: "yosemite",
    name: "Yosemite",
    state: "California",
    tagline: "Granite cathedrals & giant sequoias",
    // Tunnel View — El Capitan, Half Dome, Bridalveil Fall
    hero: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg/1920px-Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg",
    rating: 4.97,
    reviews: 12480,
    distance: "210 mi away",
    pricing: "Free entry · permits vary",
    tags: ["Hiking", "Waterfalls", "Climbing"],
    best: "May – Sept",
  },
  {
    id: "zion",
    name: "Zion",
    state: "Utah",
    tagline: "Sandstone canyons carved by the Virgin River",
    // Angels Landing
    hero: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Angels_Landing.jpg/1920px-Angels_Landing.jpg",
    rating: 4.92,
    reviews: 9821,
    distance: "Shuttle access",
    pricing: "$35 / vehicle",
    tags: ["Canyon", "Hiking", "Photography"],
    best: "Apr – Oct",
  },
  {
    id: "acadia",
    name: "Acadia",
    state: "Maine",
    tagline: "Rocky Atlantic coast and pink granite peaks",
    // Bass Harbor Head Light Station
    hero: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bass_Harbor_Head_Light_Station_2016.jpg/1920px-Bass_Harbor_Head_Light_Station_2016.jpg",
    rating: 4.88,
    reviews: 6210,
    distance: "Coastal trails",
    pricing: "$30 / vehicle",
    tags: ["Coast", "Sunrise", "Cycling"],
    best: "Jun – Oct",
  },
  {
    id: "olympic",
    name: "Olympic",
    state: "Washington",
    tagline: "Three ecosystems in one rainforest park",
    // Hurricane Ridge panorama
    hero: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Hurricane_Ridge_panorama.jpg/1920px-Hurricane_Ridge_panorama.jpg",
    rating: 4.9,
    reviews: 5402,
    distance: "Rainforest trails",
    pricing: "$30 / vehicle",
    tags: ["Rainforest", "Beach", "Mountains"],
    best: "Jul – Sept",
  },
  {
    id: "great-smoky",
    name: "Great Smoky Mountains",
    state: "Tennessee",
    tagline: "Misty blue ridges and old-growth forest",
    // Great Smoky Mountains overlook
    hero: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Great_Smoky_Mountains.jpg/1920px-Great_Smoky_Mountains.jpg",
    rating: 4.85,
    reviews: 14210,
    distance: "Free entry",
    pricing: "Free",
    tags: ["Forest", "Wildlife", "Scenic Drives"],
    best: "Apr – Nov",
  },
  {
    id: "glacier",
    name: "Glacier",
    state: "Montana",
    tagline: "Alpine lakes and the Going-to-the-Sun Road",
    // Wild Goose Island, Saint Mary Lake
    hero: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Wild_Goose_Island.jpg",
    rating: 4.95,
    reviews: 7311,
    distance: "Backcountry permits",
    pricing: "$35 / vehicle",
    tags: ["Glaciers", "Wildlife", "Hiking"],
    best: "Jul – Sept",
  },
];

export const CATEGORIES = [
  { id: "hiking", name: "Hiking Trails", icon: "🥾", color: "from-forest-200 to-forest-400" },
  { id: "wildlife", name: "Wildlife", icon: "🦌", color: "from-bark-500 to-forest-500" },
  { id: "photography", name: "Photography", icon: "📷", color: "from-sand-200 to-forest-300" },
  { id: "camping", name: "Camping", icon: "⛺", color: "from-forest-400 to-forest-700" },
  { id: "stargazing", name: "Stargazing", icon: "✨", color: "from-forest-700 to-forest-900" },
  { id: "water", name: "Lakes & Rivers", icon: "🌊", color: "from-forest-300 to-forest-600" },
  { id: "scenic", name: "Scenic Drives", icon: "🛣️", color: "from-bark-500 to-bark-700" },
  { id: "wheelchair", name: "Accessible", icon: "♿", color: "from-forest-200 to-moss-500" },
];
