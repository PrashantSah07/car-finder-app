# 🚗 Car Finder Web App

The **Car Finder Web App** is a modern, responsive web application that allows users to explore and search for cars based on specific filters like brand, fuel type, price range, and transmission type. The main goal of this project is to build a smooth, user-friendly platform for discovering car details, while also showcasing modern frontend development skills using **React.js or Next.js**.

In this project, an API is used to fetch dynamic and structured vehicle information such as model names, categories, engine specs, and more. The app also implements wishlist functionality using LocalStorage, smooth animations with Framer Motion, and a full-featured dark mode for better accessibility and user experience.

---

## 🧾 Project Overview

This app was created to showcase frontend development skills using modern tools like:

- **React.js / Next.js** for building interactive UIs
- **Tailwind CSS** for utility-first styling and responsiveness
- **Framer Motion** for smooth UI animations
- **LocalStorage** for persisting user wishlist
- **Routing and filtering** for dynamic navigation and car exploration
- **Dark Mode Toggle** for theme personalization

The app is scalable, responsive, and optimized for both desktop and mobile views.

---

## 🧑‍💻 Technologies Used

| Category             | Technology                  |
|----------------------|------------------------------|
| Frontend Framework   | React.js / Next.js           |
| Styling              | Tailwind CSS                 |
| Animations           | Framer Motion                |
| State Management     | React Hooks, Context API     |
| Routing              | React Router / Next.js Routing |
| Storage              | LocalStorage                 |
| Theming              | Light / Dark Mode Switch     |

---

## 🚀 Key Features

- 🔍 **Search & Filter:**  
  Users can search cars and filter them by:
  - Brand
  - Type (SUV, Sedan, Hatchback, etc.)
  - Price range
  - Fuel type
  - Transmission type

- 📄 **Dynamic Car Details:**  
  Each car card displays:
  - Model name
  - Image
  - Price
  - Specifications
  - Availability

- ❤️ **Wishlist with LocalStorage:**  
  Add cars to favorites and access them later—even after page reload.

- 🌐 **Routing & Navigation:**  
  Smooth routing between homepage, car detail pages, and wishlist using dynamic routing.

- 🌓 **Dark Mode Support:**  
  Toggle between light and dark themes for a better user experience.

- 🎞️ **Smooth Animations:**  
  Engaging transitions and animations using Framer Motion.

- 📱 **Responsive Design:**  
  Mobile-first layout built with Tailwind CSS ensures optimal performance on all devices.

---

## ⚙️ Setup Instructions

### 🔗 Prerequisites

- Node.js (v14+ recommended)
- NPM or Yarn
- A working API key

### 📦 Installation

```bash
git clone https://github.com/PrashantSah07/car-finder-app.git
cd car-finder-app
npm install

▶️ Run the App

npm run dev   # For Next.js
# OR
npm start     # For Create React App


📁 Folder Structure

/components         # Reusable UI elements like CarCard, Navbar, etc.
/context            # Context API for wishlist and theme
/hooks              # Custom React hooks
/pages              # Pages (Next.js) or Routes (React Router)
/styles             # Tailwind & global styles
/utils              # Helper functions (filtering, localStorage, etc.)

Made with by Prashant Sah