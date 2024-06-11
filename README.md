# Psychologists Services App

### Overview

The Psychologists Services App is a web application that allows users to explore and book sessions with professional psychologists. The app offers a user-friendly interface with features like sorting psychologists based on various criteria, adding psychologists to favorites, and making appointments. The app is built with React and uses Firebase for authentication and real-time database functionalities.

### Features

1. **Home Page**: Includes the site header, company slogan, and a call-to-action link that redirects to the "Psychologists" page.
2. **Psychologists Page**: Displays a list of psychologists that users can sort by name, price, or popularity.
3. **Favorites Page**: A private page that shows psychologists added to the favorites list by the user.

### Technical Specifications

1. **Authentication**: Implemented using Firebase Authentication, allowing users to register, log in, get current user data, and log out.
2. **Forms**: Registration and login forms with validation using react-hook-form and yup. Forms close on clicking the close button, backdrop, or pressing Esc.
3. **Database**: Psychologists data is stored in Firebase Realtime Database with fields such as name, avatar_url, experience, reviews, price_per_hour, rating, license, specialization, initial_consultation, and about.
4. **Psychologist Cards**: Render psychologist details in cards. Load more cards on clicking the "Load more" button.
5. **Favorites Functionality**:
   - Non-authenticated users see a modal or push notification that this feature is available only for authenticated users.
   - Authenticated users can add psychologists to favorites, with changes reflected in the UI and persisted in Firebase.
   - Favorites status is retained after page reload.
   - Clicking the heart button again removes the psychologist from favorites.
6. **Detailed View**: Clicking "Read more" on a card expands it to show detailed information and client reviews.
7. **Appointment Form**: Opens a modal with a form to book a session with a psychologist. Uses react-hook-form and yup for validation. Closes on clicking the close button, backdrop, or pressing Esc.
8. **Routing**: Implemented with React Router.

### Technologies Used

- **Frontend**: React, React Router, react-hook-form, yup
- **Backend**: Firebase (Authentication, Realtime Database)
- **Build Tool**: Webpack
- **Deployment**: Netlify

### Setup and Installation

1. **Clone the repository**

2. **Install dependencies**:

```
npm install
```

3. **Create a .env file in the root directory and add your Firebase configuration**:

```
REACT_APP_API_KEY=your-api-key
REACT_APP_AUTH_DOMAIN=your-auth-domain
REACT_APP_PROJECT_ID=your-project-id
REACT_APP_STORAGE_BUCKET=your-storage-bucket
REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_APP_ID=your-app-id
REACT_APP_DATABASE_URL=your-database-url
```

4. **Start the development server**:

```
npm start

```

5. **Build the project for production**:

```
npm run build

```

6. **Deploy the project to your chosen hosting service.**

### Folder Structure

```
psychologists-services/
├── public/
├── src/
│   ├── components/
│   │   ├── generic/
│   │   ├── layout/
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Psychologists/
│   │   │   ├── Favorites/
│   ├── helpers/
│   │   ├── firebaseConfig.js
│   │   ├── ProtectedRoute.jsx
│   ├── img/
│   ├── App.jsx
│   ├── index.html
│   ├── firebase.js
├── .env
├── package.json
├── README.md
```
