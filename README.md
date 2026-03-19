# 🌴 Odisha Tourism

A responsive tourism web application built with React that helps users explore the beautiful destinations of Odisha — from pristine beaches and ancient temples to rich wildlife reserves and scenic hill stations.

🔗 **Live Demo:** [odisha-tourism-seven.vercel.app](https://odisha-tourism-seven.vercel.app)  
📂 **GitHub:** [github.com/JayadevBemal/Odisha-Tourism](https://github.com/JayadevBemal/Odisha-Tourism)

---

## 📸 Screenshots

> Add screenshots of your app here

---

## ✨ Features

- 🗺️ **Multiple Destinations** — Beaches, Temples, Wildlife, Waterfalls and Hills across Odisha
- 🔍 **Search** — Search destinations by name or location in real time
- 🏷️ **Category Filter** — Filter destinations by Beach, Temple, Wildlife, Waterfall or Hills
- ❤️ **Favourites System** — Save and remove favourite destinations, persisted using localStorage
- 📄 **Destination Detail Page** — View detailed info including best time to visit, entry fee, how to reach and nearby places
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet and desktop

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React | Frontend UI library |
| React Router DOM | Client side routing and navigation |
| Tailwind CSS | Utility first styling |
| localStorage | Persisting favourites data |
| Vite | Build tool and dev server |
| Vercel | Deployment |

---

## 📁 Project Structure
```
src/
├── assets/          # Destination images
├── components/      # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── DestinationCard.jsx
├── data/
│   └── destinations.js   # All destination data
├── hooks/
│   └── useFavourites.js  # Custom hook for favourites logic
├── pages/
│   ├── Home.jsx
│   ├── Destinations.jsx
│   ├── DestinationDetail.jsx
│   └── Favourites.jsx
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/JayadevBemal/Odisha-Tourism.git
```

2. **Navigate to the project folder**
```bash
cd Odisha-Tourism
```

3. **Install dependencies**
```bash
npm install
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:5173
```

---

## 🔑 Key Concepts Used

- **Custom Hook** — `useFavourites` hook encapsulates all favourites logic including add, remove and localStorage sync
- **React Router** — Nested routes with dynamic route parameters (`/destinations/:id`) for detail pages
- **Component Based Architecture** — Reusable `DestinationCard` component used across Home and Destinations pages
- **Controlled Components** — Search input and category filter managed with `useState`
- **Array Methods** — `.filter()` and `.find()` used for search, filtering and data lookup

---

## 🌱 Work in Progress

Odisha is a land of countless hidden gems — every district has its own stories, temples, nature spots and cultural treasures waiting to be discovered. This app is a growing collection that will keep expanding with more destinations, deeper guides and richer experiences over time.

*— More destinations · More features · Always evolving*

---

## 👨‍💻 Author

**Jayadev Bemal**  
📂 [GitHub](https://github.com/JayadevBemal)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).