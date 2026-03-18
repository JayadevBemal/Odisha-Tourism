import barehipani from '../assets/barehipani.jpg'
import bhitarkanika from '../assets/bhitarkanika.jpg'
import chandrabhaga from '../assets/chandrabhaga.jpg'
import chilika from '../assets/chilika.jpg'
import daringbadi from '../assets/daringbadi.jpg'
import deomali from '../assets/deomali.jpg'
import duduma from '../assets/duduma.jpg'
import gopalpur from '../assets/gopalpur.jpg'
import joranda from '../assets/joranda.jpg'
import konark from '../assets/konark.jpg'
import koraput from '../assets/koraput.jpg'
import lingaraj from '../assets/lingaraj.jpg'
import puri from '../assets/puri.jpg'
import puriBeach from '../assets/puribeach.jpg'
import similipal from '../assets/similipal.jpg'

const destinations = [
  {
    id: 1,
    name: "Puri Beach",
    category: "Beach",
    location: "Puri, Odisha",
    description:
      "One of the most famous beaches in India, located in the holy city of Puri. Known for its golden sands, religious significance and the famous Rath Yatra festival. The beach is dotted with fishermen's boats and is a paradise for sunrise lovers.",
    bestTimeToVisit: "October to February",
    howToReach:
      "3 hours from Bhubaneswar by road. Direct trains available from major cities including Delhi, Mumbai and Kolkata.",
    entryFee: "Free",
    distanceFromBhubaneswar: "60 km",
    image:
      puribeach,
    featured: true,
    nearbyPlaces: ["Jagannath Temple", "Chilika Lake", "Konark Sun Temple"],
  },
  {
    id: 2,
    name: "Konark Sun Temple",
    category: "Temple",
    location: "Konark, Odisha",
    description:
      "A 13th century UNESCO World Heritage Site built in the shape of a giant chariot with 24 elaborately carved wheels. One of the finest examples of Kalinga architecture dedicated to the Sun God Surya.",
    bestTimeToVisit: "November to March",
    howToReach:
      "35 km from Puri, 65 km from Bhubaneswar by road. Regular buses and taxis available.",
    entryFee: "₹40 for Indians, ₹600 for foreigners",
    distanceFromBhubaneswar: "65 km",
    image: konark,
    featured: true,
    nearbyPlaces: ["Puri Beach", "Chandrabhaga Beach", "ASI Museum Konark"],
  },
  {
    id: 3,
    name: "Chilika Lake",
    category: "Wildlife",
    location: "Chilika, Odisha",
    description:
      "Asia's largest brackish water lagoon spread over 1100 sq km. Famous for rare Irrawaddy dolphins, over 160 species of migratory birds in winter and the beautiful Nalabana Bird Sanctuary.",
    bestTimeToVisit: "November to February",
    howToReach:
      "50 km from Bhubaneswar by road. Nearest railway station is Balugaon.",
    entryFee: "Boat charges ₹100-500 per person",
    distanceFromBhubaneswar: "50 km",
    image: chilika,
    featured: true,
    nearbyPlaces: ["Satapada", "Nalabana Island", "Kalijai Temple"],
  },
  {
    id: 4,
    name: "Simlipal National Park",
    category: "Wildlife",
    location: "Mayurbhanj, Odisha",
    description:
      "One of India's largest tiger reserves and a UNESCO Biosphere Reserve. Home to Royal Bengal Tigers, elephants, leopards and over 300 species of birds. Famous for its dense sal forests and beautiful waterfalls.",
    bestTimeToVisit: "November to June",
    howToReach:
      "320 km from Bhubaneswar. Nearest town is Baripada, well connected by road.",
    entryFee: "₹150 for Indians, ₹600 for foreigners",
    distanceFromBhubaneswar: "320 km",
    image: Similipal,
    featured: true,
    nearbyPlaces: ["Barehipani Waterfall", "Joranda Waterfall", "Jashipur"],
  },
  {
    id: 5,
    name: "Barehipani Waterfall",
    category: "Waterfall",
    location: "Mayurbhanj, Odisha",
    description:
      "One of the highest waterfalls in India with a drop of 399 meters. Located inside Simlipal National Park, surrounded by lush green forests. A breathtaking sight especially during and after monsoon season.",
    bestTimeToVisit: "July to December",
    howToReach:
      "Inside Simlipal National Park, 20 km from Jashipur. Entry through forest department.",
    entryFee: "Included in Simlipal entry fee",
    distanceFromBhubaneswar: "340 km",
    image:barehipani,
    featured: false,
    nearbyPlaces: ["Joranda Waterfall", "Simlipal National Park", "Baripada"],
  },
  {
    id: 6,
    name: "Bhitarkanika National Park",
    category: "Wildlife",
    location: "Kendrapara, Odisha",
    description:
      "Home to the world's largest population of saltwater crocodiles and a Ramsar wetland site. Famous for its rich mangrove ecosystem, Olive Ridley sea turtles and diverse bird life.",
    bestTimeToVisit: "October to March",
    howToReach:
      "130 km from Bhubaneswar. Take road to Rajnagar, then boat into the park.",
    entryFee: "₹200 for Indians, ₹1000 for foreigners",
    distanceFromBhubaneswar: "130 km",
    image: bhitarkanika,
    featured: true,
    nearbyPlaces: ["Gahirmatha Beach", "Kendrapara", "Rajnagar"],
  },
  {
    id: 7,
    name: "Daringbadi",
    category: "Hills",
    location: "Kandhamal, Odisha",
    description:
      "Known as the Kashmir of Odisha, Daringbadi sits at 3000 feet above sea level. Famous for coffee plantations, pine forests, beautiful valleys and the rare sight of snowfall in winters.",
    bestTimeToVisit: "October to February",
    howToReach:
      "300 km from Bhubaneswar. Regular buses from Phulbani and Bhubaneswar.",
    entryFee: "Free",
    distanceFromBhubaneswar: "300 km",
    image: daringbadi,
    featured: true,
    nearbyPlaces: ["Lover's Point", "Nature Park", "Hill View Point"],
  },
  {
    id: 8,
    name: "Lingaraj Temple",
    category: "Temple",
    location: "Bhubaneswar, Odisha",
    description:
      "The largest temple in Bhubaneswar and one of the most important Hindu shrines in India. Built in the 11th century, it is dedicated to Lord Shiva and is a stunning example of Kalinga architecture.",
    bestTimeToVisit: "October to March",
    howToReach:
      "Located in the heart of Bhubaneswar. Easily accessible by auto, cab or bus.",
    entryFee: "Free (Non-Hindus not allowed inside)",
    distanceFromBhubaneswar: "0 km",
    image: lingaraj,
    featured: false,
    nearbyPlaces: ["Mukteswar Temple", "Bindu Sagar", "Odisha State Museum"],
  },
  {
    id: 9,
    name: "Gopalpur Beach",
    category: "Beach",
    location: "Ganjam, Odisha",
    description:
      "A serene and less crowded beach town, once a major port during British rule. Known for its calm waters, old lighthouse, casuarina groves and laid back atmosphere perfect for a peaceful getaway.",
    bestTimeToVisit: "October to February",
    howToReach:
      "180 km from Bhubaneswar. Nearest railway station is Berhampur, 15 km away.",
    entryFee: "Free",
    distanceFromBhubaneswar: "180 km",
    image: gopalpur,
    featured: false,
    nearbyPlaces: ["Berhampur", "Chilika Lake", "Taptapani Hot Springs"],
  },
  {
    id: 10,
    name: "Duduma Waterfall",
    category: "Waterfall",
    location: "Koraput, Odisha",
    description:
      "A spectacular waterfall on the Machkund River with a drop of 175 meters. Located on the border of Odisha and Andhra Pradesh, surrounded by dense forest. Perfect for nature lovers and photographers.",
    bestTimeToVisit: "July to December",
    howToReach:
      "100 km from Koraput. Jeep or cab required for the last stretch.",
    entryFee: "₹20 per person",
    distanceFromBhubaneswar: "480 km",
    image: duduma,
    featured: false,
    nearbyPlaces: ["Koraput", "Jagdalpur", "Machkund Dam"],
  },
  {
    id: 11,
    name: "Jagannath Temple Puri",
    category: "Temple",
    location: "Puri, Odisha",
    description:
      "One of the four sacred dhams in Hinduism and home to Lord Jagannath. The 12th century temple is famous worldwide for its annual Rath Yatra chariot festival that attracts millions of devotees.",
    bestTimeToVisit: "October to March, or during Rath Yatra in June-July",
    howToReach:
      "60 km from Bhubaneswar by road or train. Well connected to all major cities.",
    entryFee: "Free (Non-Hindus not allowed inside)",
    distanceFromBhubaneswar: "60 km",
    image: puri,
    featured: true,
    nearbyPlaces: ["Puri Beach", "Konark Sun Temple", "Chilika Lake"],
  },
  {
    id: 12,
    name: "Chandrabhaga Beach",
    category: "Beach",
    location: "Konark, Odisha",
    description:
      "A pristine and peaceful beach near Konark, famous for hosting the Chandrabhaga Mela during Magha Saptami. Much less crowded than Puri, with clear waters and beautiful sunrise views.",
    bestTimeToVisit: "October to March",
    howToReach: "3 km from Konark Sun Temple, 68 km from Bhubaneswar.",
    entryFee: "Free",
    distanceFromBhubaneswar: "68 km",
    image: chandrabhaga,
    featured: false,
    nearbyPlaces: ["Konark Sun Temple", "Puri Beach", "ASI Museum"],
  },
  {
    id: 13,
    name: "Koraput",
    category: "Hills",
    location: "Koraput, Odisha",
    description:
      "A scenic hill district famous for its tribal culture, lush green valleys, coffee and cardamom plantations. Home to several indigenous tribes and known for its rich handicrafts and the famous Koraput tribal market.",
    bestTimeToVisit: "October to February",
    howToReach:
      "420 km from Bhubaneswar. Direct trains from Bhubaneswar and Vizag.",
    entryFee: "Free",
    distanceFromBhubaneswar: "420 km",
    image: koraput,
    featured: false,
    nearbyPlaces: ["Duduma Waterfall", "Deomali Peak", "Jagdalpur"],
  },
  {
    id: 14,
    name: "Joranda Waterfall",
    category: "Waterfall",
    location: "Mayurbhanj, Odisha",
    description:
      "A stunning two-tiered waterfall inside Simlipal National Park dropping 150 meters. Surrounded by thick forest and accessible only through the park. One of the most beautiful waterfalls in eastern India.",
    bestTimeToVisit: "July to December",
    howToReach:
      "Inside Simlipal National Park. Entry from Pithabata gate, 25 km from Baripada.",
    entryFee: "Included in Simlipal entry fee",
    distanceFromBhubaneswar: "330 km",
    image: joranda,
    featured: false,
    nearbyPlaces: [
      "Barehipani Waterfall",
      "Simlipal National Park",
      "Baripada",
    ],
  },
  {
    id: 15,
    name: "Deomali Peak",
    category: "Hills",
    location: "Koraput, Odisha",
    description:
      "The highest peak in Odisha at 1672 meters above sea level. Surrounded by dense forests and tribal villages, offering panoramic views of the Eastern Ghats. A paradise for trekkers and nature lovers.",
    bestTimeToVisit: "October to February",
    howToReach:
      "40 km from Koraput town. Jeep or cab required. Local guide recommended.",
    entryFee: "Free",
    distanceFromBhubaneswar: "460 km",
    image: deomali,
    featured: false,
    nearbyPlaces: ["Koraput", "Duduma Waterfall", "Tribal Markets"],
  },
];

export default destinations;
