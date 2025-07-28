# Book Store App

A full-stack web application for managing and browsing books. This project consists of a Node.js/Express backend and a React frontend styled with Tailwind CSS.

## Features

- User authentication (signup, login, logout)
- Browse, add, and manage books
- Responsive UI with modern design
- RESTful API backend

## Project Structure

```
Backend/
  controller/        # Controllers for business logic
  model/             # Mongoose models
  route/             # Express routes
  index.js           # Entry point for backend server
  package.json       # Backend dependencies

Frontend/
  src/
    components/      # React components
    context/         # Context providers
    courses/         # Course-related components
    home/            # Home page
    App.jsx          # Main React app
    index.css        # Global styles
    main.jsx         # Entry point for React
  public/            # Static assets
  index.html         # Main HTML file
  package.json       # Frontend dependencies
  tailwind.config.js # Tailwind CSS config
  vite.config.js     # Vite config
```

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Backend Setup
1. Navigate to the `Backend` folder:
   ```sh
   cd Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file for environment variables (e.g., MongoDB URI, JWT secret).
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the `Frontend` folder:
   ```sh
   cd Frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```

## Technologies Used
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React, Vite, Tailwind CSS

## License

This project is licensed under the MIT License.
