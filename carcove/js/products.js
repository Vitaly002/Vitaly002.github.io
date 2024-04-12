/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "NC1",
    title: 'Hybrid Compact Car: "Toyota Prius"',
    imageUrl: "./images/NewCars/NC1.jpeg",
    description: "Silver hybrid, efficiency meets style",
    price: 2800000,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "NC2",
    title: 'Family SUV: "Honda CR-V"',
    imageUrl: "./images/NewCars/NC2.jpeg",
    description: "Silver hybrid, efficiency meets style",
    price: 4000000,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "NC3",
    title: 'Sporty Coupe: "Ford Mustang"',
    imageUrl: "./images/NewCars/NC3.webp",
    description: "Red coupe, adrenaline on wheels",
    price: 4500000,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "NC4",
    title: 'Electric Hatchback: "Nissan Leaf"',
    imageUrl: "./images/NewCars/NC4.avif",
    description: "Blue hatchback, eco-friendly cruising",
    price: 3200000,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "NC5",
    title: 'Silver Luxe Cruiser: "Mercedes-Benz GLE 450"',
    imageUrl: "./images/NewCars/NC5.avif",
    description: "Luxury SUV by Mercedes-Benz",
    price: 6500000,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "NC6",
    title: 'Luxury Sedan: "Genesis G80"',
    description: "Sleek black sedan, luxury redefined",
    price: 3500000,
    discontinued: true,
    categories: ["c1"]
  },
  {
    id: "UC1",
    title: 'Pre-Owned Pickup Truck: "Chevrolet Silverado"',
    imageUrl: "./images/UsedCars/UC1.jpeg",
    description: "Gray pickup, reliable workhorse",
    price: 2500000,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "UC2",
    title: 'Certified Used Sedan: "Toyota Camry"',
    imageUrl: "./images/UsedCars/UC2.jpeg",
    description: "Black sedan, certified quality",
    price: 2000000,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "UC3",
    title: 'Second-Hand Luxury SUV: "BMW X5"',
    description: "Silver luxury SUV, affordable opulence",
    price: 3000000,
    discontinued: true,
    categories: ["c2"]
  },
  {
    id: "UC4",
    title: 'Budget-Friendly Compact Car: "Honda Civic"',
    imageUrl: "./images/UsedCars/UC3.webp",
    description: "Blue compact, smart savings",
    price: 1500000,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "UC5",
    title: 'Reliable Used Minivan: "Toyota Sienna"',
    imageUrl: "./images/UsedCars/UC4.avif",
    description: "White minivan, dependable family ride",
    price: 1800000,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "UC6",
    title: 'Crimson Commuter: "Toyota Corolla Hatchback"',
    imageUrl: "./images/UsedCars/UC5.png",
    description: "Efficient city hatchback by Toyota",
    price: 2000000,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "EV1",
    title: 'All-Electric Sedan: "Tesla Model S"',
    imageUrl: "./images/ElectricVeh/EV1.avif",
    description: "Dark gray electric sedan, emission-free elegance",
    price: 3800000,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "EV2",
    title: 'Long-Range Electric SUV: "Tesla Model X"',
    imageUrl: "./images/ElectricVeh/EV2.webp",
    description: "Blue electric SUV, go the distance",
    price: 4200000,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "EV3",
    title: 'Compact Electric Hatchback: "Chevrolet Bolt EV"',
    imageUrl: "./images/ElectricVeh/EV3.avif",
    description: "White electric hatchback, city-friendly efficiency",
    price: 3000000,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "EV4",
    title: 'High-Performance Electric Sports Car: "Porsche Taycan"',
    imageUrl: "./images/ElectricVeh/EV4.jpeg",
    description: "Red electric sports car, electrifying speed",
    price: 5500000,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "EV5",
    title: 'Luxury Electric Coupe: "Audi e-tron GT"',
    imageUrl: "./images/ElectricVeh/EV5.jpeg",
    description: "Black electric coupe, luxury electrified",
    price: 5000000,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "CC1",
    title: 'Vintage Convertible: "Ford Thunderbird"',
    imageUrl: "./images/ClassicCars/CC1.jpeg",
    description: "Red convertible, timeless elegance",
    price: 6000000,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "CC2",
    title: 'Classic Muscle Car: "Chevrolet Camaro"',
    imageUrl: "./images/ClassicCars/CC2.webp",
    description: "Black muscle car, raw power reborn",
    price: 5000000,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "CC3",
    title: 'Antique Roadster: "Ford Model T"',
    imageUrl: "./images/ClassicCars/CC3.png",
    description: "Black roadster, a journey through time",
    price: 7000000,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "CC4",
    title: 'Retro Volkswagen Beetle: "Volkswagen Beetle"',
    description: "Yellow Beetle, iconic charm",
    price: 2500000,
    discontinued: true,
    categories: ["c4"]
  },
  {
    id: "CC5",
    title: 'Iconic Ford Mustang: "Ford Mustang Shelby GT500"',
    imageUrl: "./images/ClassicCars/CC4.jpeg",
    description: "Black Mustang, legendary performance",
    price: 5500000,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "CC6",
    title: 'T-Bucket Time Capsule: "Ford Model T Hot Rod"',
    imageUrl: "./images/ClassicCars/CC5.jpeg",
    description: "Iconic roadster from Ford",
    price: 4000000,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "PC1",
    title: 'High-Speed Supercar: "Lamborghini Aventador"',
    imageUrl: "./images/PerCars/PC1.jpeg",
    description: "Orange supercar, unleash the beast",
    price: 15000000,
    discontinued: false,
    categories: ["c5"]
  },
  {
    id: "PC2",
    title: 'Track-Ready Racing Car: "Porsche 911 GT3"',
    imageUrl: "./images/PerCars/PC2.webp",
    description: "Green racing car, built for victory",
    price: 10000000,
    discontinued: false,
    categories: ["c5"]
  },
  {
    id: "PC3",
    title: 'Turbocharged Performance Sedan: "Subaru WRX STI"',
    imageUrl: "./images/PerCars/PC3.png",
    description: "Gray sedan, turbocharged thrill",
    price: 7000000,
    discontinued: false,
    categories: ["c5"]
  },
  {
    id: "PC4",
    title: 'Exotic Italian Sports Car: "Ferrari 488 GTB"',
    imageUrl: "./images/PerCars/PC4.jpeg",
    description: "Yellow sports car, Italian flair",
    price: 20000000,
    discontinued: false,
    categories: ["c5"]
  },
  {
    id: "PC5",
    title: 'Muscle Car with V8 Engine: "Dodge Challenger SRT Hellcat"',
    imageUrl: "./images/PerCars/PC5.webp",
    description: "Black muscle car, V8 growl",
    price: 8000000,
    discontinued: false,
    categories: ["c5"]
  },
  {
    id: "TS1",
    title: 'Heavy-Duty Pickup Truck: "Ford F-150"',
    imageUrl: "./images/Trucks/TS1.jpeg",
    description: "Black pickup, unstoppable force",
    price: 4500000,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "TS2",
    title: 'Full-Size SUV with 4WD: "Toyota Land Cruiser"',
    imageUrl: "./images/Trucks/TS2.png",
    description: "Gray SUV, conquer any terrain",
    price: 5500000,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "TS3",
    title: 'Midsize Crossover SUV: "Honda Pilot"',
    imageUrl: "./images/Trucks/TS3.webp",
    description: "Black crossover, city to countryside",
    price: 3500000,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "TS4",
    title: 'Off-Road Adventure Truck: "Jeep Wrangler"',
    imageUrl: "./images/Trucks/TS4.png",
    description: "Blue adventure truck, off-road ready",
    price: 6000000,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "TS5",
    title: 'Urban Compact SUV: "Nissan Rogue"',
    imageUrl: "./images/Trucks/TS5.png",
    description: "Red compact SUV, urban explorer",
    price: 3000000,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "CCU1",
    title: 'Custom Paint Job Muscle Car: "Chevrolet Camaro SS"',
    imageUrl: "./images/CustCars/CCU1.jpeg",
    description: "Black muscle, personalized power",
    price: 8000000,
    discontinued: false,
    categories: ["c7"]
  },
  {
    id: "CCU2",
    title: 'Modified Tuner Car: "Honda Civic Type R"',
    imageUrl: "./images/CustCars/CCU2.jpeg",
    description: "Dark gray tuner, customized performance",
    price: 4000000,
    discontinued: false,
    categories: ["c7"]
  },
  {
    id: "CCU3",
    title: 'Lifted Off-Road Truck: "Ford F-250 Super Duty"',
    imageUrl: "./images/CustCars/CCU3.jpeg",
    description: "Camouflage truck, rugged custom",
    price: 6500000,
    discontinued: false,
    categories: ["c7"]
  },
  {
    id: "CCU4",
    title: 'Customized Luxury Sedan: "Mercedes-Benz S-Class"',
    description: "Gold luxury, tailored elegance",
    price: 9000000,
    discontinued: true,
    categories: ["c7"]
  },
  {
    id: "CCU5",
    title: 'Unique Hot Rod: "Ford Model A"',
    imageUrl: "./images/CustCars/CCU4.jpeg",
    description: "Flames hot rod, one-of-a-kind style",
    price: 7500000,
    discontinued: false,
    categories: ["c7"]
  },
  {
    id: "CCU6",
    title: 'Midnight Titan: "Chevrolet Silverado 1500"',
    imageUrl: "./images/CustCars/CCU5.png",
    description: "Customized pickup by Chevrolet",
    price: 5500000,
    discontinued: false,
    categories: ["c7"]
  },
  {
    id: "CV1",
    title: 'Cargo Van for Delivery: "Ford Transit"',
    imageUrl: "./images/CommerVeh/CV1.png",
    description: "White cargo van, efficient transport",
    price: 3000000,
    discontinued: false,
    categories: ["c8"]
  },
  {
    id: "CV2",
    title: 'Utility Truck with Crane: "Chevrolet Silverado 2500HD"',
    imageUrl: "./images/CommerVeh/CV2.jpeg",
    description: "Black utility truck, heavy lifting",
    price: 5000000,
    discontinued: false,
    categories: ["c8"]
  },
  {
    id: "CV3",
    title: 'Refrigerated Box Truck: "Isuzu NPR"',
    imageUrl: "./images/CommerVeh/CV3.jpeg",
    description: "White refrigerated truck, fresh deliveries",
    price: 6500000,
    discontinued: false,
    categories: ["c8"]
  },
  {
    id: "CV4",
    title: 'Passenger Bus for Tours: "Mercedes-Benz Sprinter"',
    description: "Red tour bus, explore in comfort",
    price: 8000000,
    discontinued: true,
    categories: ["c8"]
  },
  {
    id: "CV5",
    title: 'Tow Truck for Roadside Assistance: "Ford F-550 Super Duty"',
    imageUrl: "./images/CommerVeh/CV4.webp",
    description: "Dark green tow truck, rescue on wheels",
    price: 5500000,
    discontinued: false,
    categories: ["c8"]
  },
  {
    id: "CV6",
    title: 'Urban Hauler: "Ford Transit Connect"',
    imageUrl: "./images/CommerVeh/CV5.avif",
    description: "Versatile delivery van by Ford",
    price: 3000000,
    discontinued: false,
    categories: ["c8"]
  }
];
