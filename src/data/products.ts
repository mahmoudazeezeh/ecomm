export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  salePrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  description: string;
  features?: string[];
  specifications?: Record<string, string>;
  stock: number;
  isFeatured?: boolean;
  isNew?: boolean;
  isTrending?: boolean;
  brand: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Professional Kitchen Knife Set",
    category: "kitchen",
    subcategory: "cutlery",
    price: 129.99,
    salePrice: 99.99,
    discount: 23,
    rating: 4.8,
    reviewCount: 254,
    image: "https://www.betterkitchens.co.uk/web/image/kitchen.style/19/banner_image?unique=0467832",
    images: [
      "https://www.betterkitchens.co.uk/web/image/kitchen.style/25/banner_image?unique=2bb6d95",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUftfThbeaqAO9LuzgWx0xjYxRVaxFQ7JV3bJF6q7Cs_zvNH4DhE539IyOTpsF5aPNp5c&usqp=CAU",
      "https://www.harveyjones.com/wp-content/uploads/2025/04/Harvey-Jones-Bicester-March-2025_5817-copy-e1745912949497.jpg"
    ],
    description: "This premium kitchen knife set includes 8 professional-grade knives made with high-carbon stainless steel for precision cutting. Each knife features an ergonomic handle for comfortable grip and control.",
    features: [
      "High-carbon stainless steel blades",
      "Full tang construction for balance",
      "Ergonomic handles for comfortable grip",
      "Includes storage block with built-in sharpener",
      "Dishwasher safe"
    ],
    specifications: {
      "Material": "High-carbon stainless steel",
      "Number of Pieces": "8",
      "Blade Length": "8 inches (chef knife)",
      "Handle Material": "Polymer",
      "Dishwasher Safe": "Yes",
      "Weight": "4.5 lbs"
    },
    stock: 45,
    isFeatured: true,
    isNew: false,
    isTrending: true,
    brand: "ChefsElite"
  },
  {
    id: 2,
    name: "Cordless Power Drill",
    category: "tools",
    subcategory: "power tools",
    price: 149.99,
    rating: 4.7,
    reviewCount: 187,
    image: "https://images.pexels.com/photos/3780148/pexels-photo-3780148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/3780148/pexels-photo-3780148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1598113/pexels-photo-1598113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "A powerful 20V cordless drill with long-lasting battery, perfect for DIY projects. Features variable speed control and LED light for working in dim areas.",
    features: [
      "20V lithium-ion battery with 2-hour runtime",
      "Variable speed (0-1,500 RPM)",
      "Built-in LED work light",
      "11-position clutch",
      "Ergonomic grip design",
      "Includes carrying case and charger"
    ],
    specifications: {
      "Power": "20V",
      "Battery Type": "Lithium-ion",
      "Chuck Size": "1/2 inch",
      "Max Torque": "430 in-lbs",
      "Speed": "0-1,500 RPM",
      "Weight": "3.4 lbs"
    },
    stock: 34,
    isFeatured: true,
    isNew: false,
    isTrending: true,
    brand: "PowerMaster"
  },
  {
    id: 3,
    name: "Smart Robot Vacuum Cleaner",
    category: "cleaning",
    subcategory: "vacuums",
    price: 299.99,
    salePrice: 249.99,
    discount: 17,
    rating: 4.5,
    reviewCount: 326,
    image: "https://images.pexels.com/photos/4108737/pexels-photo-4108737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/4108737/pexels-photo-4108737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4108738/pexels-photo-4108738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4108756/pexels-photo-4108756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Advanced robot vacuum with smart mapping technology to efficiently clean your entire home. Compatible with Alexa and Google Assistant for voice control.",
    features: [
      "Smart mapping and navigation",
      "3-stage cleaning system",
      "Wi-Fi connectivity with smartphone app",
      "Voice control with Alexa and Google Assistant",
      "Automatic recharging",
      "Scheduled cleaning"
    ],
    specifications: {
      "Suction Power": "2,500 Pa",
      "Battery Life": "120 minutes",
      "Dust Bin Capacity": "0.6 L",
      "Noise Level": "65 dB",
      "Charging Time": "3 hours",
      "Dimensions": "13.8 x 13.8 x 3.9 inches"
    },
    stock: 18,
    isFeatured: true,
    isNew: true,
    isTrending: false,
    brand: "CleanTech"
  },
  {
    id: 4,
    name: "Expandable Storage Shelves",
    category: "storage",
    subcategory: "shelving",
    price: 89.99,
    rating: 4.6,
    reviewCount: 142,
    image: "https://images.pexels.com/photos/4202326/pexels-photo-4202326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/4202326/pexels-photo-4202326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6186524/pexels-photo-6186524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Modular storage shelves that expand to fit your space. Perfect for organizing kitchens, garages, or closets with adjustable heights and configurable layout.",
    features: [
      "Modular design with expandable width",
      "Adjustable shelf heights",
      "Tool-free assembly",
      "Heavy-duty steel construction",
      "Weight capacity of 50 lbs per shelf",
      "Anti-tip safety feature"
    ],
    specifications: {
      "Material": "Steel with wood shelves",
      "Adjustable Height": "Yes (5 positions)",
      "Width Range": "36-60 inches",
      "Weight Capacity": "50 lbs per shelf",
      "Number of Shelves": "4",
      "Finish": "Matte black"
    },
    stock: 27,
    isFeatured: false,
    isNew: true,
    isTrending: true,
    brand: "OrganizeIt"
  },
  {
    id: 5,
    name: "Smart LED Ceiling Light",
    category: "lighting",
    subcategory: "ceiling lights",
    price: 79.99,
    rating: 4.4,
    reviewCount: 98,
    image: "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1309770/pexels-photo-1309770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Smart LED ceiling light with adjustable brightness and color temperature. Control via smartphone app or voice commands with compatible smart home systems.",
    features: [
      "Dimmable with adjustable color temperature",
      "Wi-Fi connectivity with smartphone app",
      "Voice control compatibility",
      "Energy efficient (18W equivalent to 100W traditional)",
      "Scheduling and scene settings",
      "Easy installation"
    ],
    specifications: {
      "Wattage": "18W",
      "Lumens": "1,600",
      "Color Temperature Range": "2700K-6500K",
      "Lifespan": "25,000 hours",
      "Connectivity": "Wi-Fi",
      "Diameter": "12 inches"
    },
    stock: 36,
    isFeatured: false,
    isNew: true,
    isTrending: false,
    brand: "BrightHome"
  },
  {
    id: 6,
    name: "Non-Stick Cookware Set",
    category: "kitchen",
    subcategory: "cookware",
    price: 199.99,
    salePrice: 159.99,
    discount: 20,
    rating: 4.7,
    reviewCount: 215,
    image: "https://images.pexels.com/photos/5825371/pexels-photo-5825371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/5825371/pexels-photo-5825371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/12511628/pexels-photo-12511628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://cdn.prod.website-files.com/5e50fe1a8c34f832ff4401f5/5e5e5e0b3a300b338137bcd7_IND_9_Murray_Street_8W_New_York_NY_Studio_-_5_Photos_2_20181016-100146.jpeg"
    ],
    description: "10-piece premium non-stick cookware set including pots, pans, and utensils. Made with durable materials for even heating and easy cleaning.",
    features: [
      "Premium non-stick coating",
      "Even heat distribution",
      "Stay-cool handles",
      "Oven safe up to 450°F",
      "Tempered glass lids",
      "Compatible with all stovetops including induction"
    ],
    specifications: {
      "Material": "Hard-anodized aluminum",
      "Non-stick Type": "PFOA-free triple layer",
      "Number of Pieces": "10",
      "Dishwasher Safe": "Yes",
      "Induction Compatible": "Yes",
      "Warranty": "Limited lifetime"
    },
    stock: 22,
    isFeatured: true,
    isNew: false,
    isTrending: true,
    brand: "ChefsElite"
  },
  {
    id: 7,
    name: "Electric Pressure Washer",
    category: "cleaning",
    subcategory: "outdoor cleaning",
    price: 189.99,
    rating: 4.6,
    reviewCount: 176,
    image: "https://images.pexels.com/photos/5725599/pexels-photo-5725599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/5725599/pexels-photo-5725599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5414388/pexels-photo-5414388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5414401/pexels-photo-5414401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Powerful electric pressure washer for cleaning driveways, decks, vehicles, and more. Includes multiple nozzle attachments for different cleaning needs.",
    features: [
      "2000 PSI cleaning power",
      "1.4 GPM water flow",
      "20-foot high-pressure hose",
      "35-foot power cord with GFCI protection",
      "Quick-connect spray tips",
      "Built-in detergent tank"
    ],
    specifications: {
      "Motor": "13 Amp",
      "Pressure": "2000 PSI",
      "Flow Rate": "1.4 GPM",
      "Hose Length": "20 feet",
      "Power Cord": "35 feet",
      "Weight": "28 lbs"
    },
    stock: 19,
    isFeatured: false,
    isNew: false,
    isTrending: true,
    brand: "PowerMaster"
  },
  {
    id: 8,
    name: "Smart Home Security Camera",
    category: "tools",
    subcategory: "smart home",
    price: 129.99,
    salePrice: 109.99,
    discount: 15,
    rating: 4.5,
    reviewCount: 203,
    image: "https://images.pexels.com/photos/3007347/pexels-photo-3007347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/3007347/pexels-photo-3007347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4219101/pexels-photo-4219101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6969754/pexels-photo-6969754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Wireless security camera with 1080p HD video, two-way audio, and motion detection. Connects to Wi-Fi for remote monitoring via smartphone app.",
    features: [
      "1080p HD video quality",
      "130° wide-angle view",
      "Night vision up to 30 feet",
      "Two-way audio communication",
      "Motion and sound detection alerts",
      "Cloud storage options"
    ],
    specifications: {
      "Resolution": "1080p HD",
      "Field of View": "130°",
      "Power Source": "Wireless (rechargeable battery)",
      "Storage": "Cloud and local SD card",
      "Weather Resistance": "IP65",
      "Connectivity": "2.4GHz Wi-Fi"
    },
    stock: 42,
    isFeatured: true,
    isNew: true,
    isTrending: true,
    brand: "SafeGuard"
  },
  {
    id: 9,
    name: "Under-Cabinet Lighting Kit",
    category: "lighting",
    subcategory: "under cabinet lights",
    price: 49.99,
    rating: 4.4,
    reviewCount: 87,
    image: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "LED under-cabinet lighting kit to illuminate countertops and workspaces. Easy to install with adhesive backing and includes dimmer switch.",
    features: [
      "Ultra-thin profile design",
      "Dimmable with included controller",
      "Linkable up to 6 units",
      "Easy installation with adhesive backing",
      "Energy efficient (uses 80% less energy than halogen)",
      "No visible wires or cords"
    ],
    specifications: {
      "Light Type": "LED",
      "Color Temperature": "3000K (Warm White)",
      "Length": "3 x 12-inch bars",
      "Brightness": "250 lumens per bar",
      "Power Source": "AC adapter (included)",
      "Lifespan": "50,000 hours"
    },
    stock: 54,
    isFeatured: false,
    isNew: false,
    isTrending: false,
    brand: "BrightHome"
  },
  {
    id: 10,
    name: "Multi-Purpose Storage Containers",
    category: "storage",
    subcategory: "containers",
    price: 34.99,
    rating: 4.3,
    reviewCount: 124,
    image: "https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4226870/pexels-photo-4226870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4226880/pexels-photo-4226880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Set of 8 stackable containers with snap-lock lids for organizing kitchen, office, or craft supplies. Clear design for easy content visibility.",
    features: [
      "Air-tight seal prevents moisture and pests",
      "Stackable design saves space",
      "Clear body for easy content identification",
      "Dishwasher and freezer safe",
      "BPA-free plastic construction",
      "Multiple sizes for different storage needs"
    ],
    specifications: {
      "Material": "BPA-free plastic",
      "Number of Pieces": "8 containers with lids",
      "Sizes": "Various (0.5L to 3L)",
      "Stackable": "Yes",
      "Dishwasher Safe": "Yes",
      "Microwave Safe": "Yes (containers only, not lids)"
    },
    stock: 67,
    isFeatured: false,
    isNew: true,
    isTrending: false,
    brand: "OrganizeIt"
  },
  {
    id: 11,
    name: "Digital Multimeter",
    category: "tools",
    subcategory: "measurement",
    price: 39.99,
    rating: 4.6,
    reviewCount: 145,
    image: "https://images.pexels.com/photos/5598288/pexels-photo-5598288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/5598288/pexels-photo-5598288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5598288/pexels-photo-5598288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5598293/pexels-photo-5598293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Professional-grade digital multimeter for measuring voltage, current, resistance, and more. Features auto-ranging capability and backlit display.",
    features: [
      "Auto-ranging functionality",
      "Measures AC/DC voltage, current, resistance",
      "Continuity, diode, and transistor testing",
      "Large backlit LCD display",
      "Data hold function",
      "Protective rubber holster"
    ],
    specifications: {
      "Display": "4000 count LCD with backlight",
      "Voltage Range": "AC/DC 0.1mV to 600V",
      "Current Range": "AC/DC 0.1μA to 10A",
      "Resistance Range": "0.1Ω to 40MΩ",
      "Battery": "9V (included)",
      "Auto Power Off": "Yes (15 minutes)"
    },
    stock: 39,
    isFeatured: false,
    isNew: false,
    isTrending: false,
    brand: "PowerMaster"
  },
  {
    id: 12,
    name: "Eco-Friendly Cleaning Kit",
    category: "cleaning",
    subcategory: "cleaning solutions",
    price: 59.99,
    salePrice: 49.99,
    discount: 17,
    rating: 4.7,
    reviewCount: 189,
    image: "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4239033/pexels-photo-4239033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5824682/pexels-photo-5824682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Complete eco-friendly cleaning kit with plant-based formulas, reusable spray bottles, and microfiber cloths. Safe for families, pets, and the environment.",
    features: [
      "100% plant-based cleaning solutions",
      "Reusable glass spray bottles",
      "Microfiber cleaning cloths",
      "Compostable scrubbing pads",
      "Free from harmful chemicals",
      "Refill packets for sustainable use"
    ],
    specifications: {
      "Contents": "3 cleaning solutions, 3 spray bottles, 5 cloths",
      "Solution Types": "All-purpose, bathroom, glass",
      "Cloth Material": "Microfiber",
      "Bottle Material": "Amber glass with silicone sleeve",
      "Refill Option": "Yes, subscription available",
      "Certifications": "Cruelty-free, Vegan"
    },
    stock: 48,
    isFeatured: true,
    isNew: false,
    isTrending: true,
    brand: "CleanTech"
  }
];

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

// Helper function to get products by feature
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getTrendingProducts = (): Product[] => {
  return products.filter(product => product.isTrending);
};

// Helper function to get a specific product
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// Helper function to get related products
export const getRelatedProducts = (id: number, limit = 4): Product[] => {
  const product = getProductById(id);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== id && p.category === product.category)
    .slice(0, limit);
};

// Helper function to search products
export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    (product.subcategory && product.subcategory.toLowerCase().includes(searchTerm))
  );
};