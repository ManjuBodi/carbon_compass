# Carbon Compass 🌍🌱

Carbon Compass is an interactive platform designed to empower individuals and businesses to understand and reduce their carbon footprints. By providing a comprehensive carbon footprint calculator, personalized insights, and a competitive leaderboard, the platform encourages proactive environmental stewardship. Individuals are motivated to reduce their emissions through friendly competition, while businesses can earn carbon credits and rewards for significant reductions, fostering a community dedicated to sustainability and climate action.

## Table of Contents
- [Overview](#overview)
- [Aim](#aim)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Overview
Carbon Compass helps individuals and businesses track, analyze, and reduce their carbon footprints. By integrating AI-powered insights and carbon tracking, Carbon Compass empowers users to make sustainable choices and rewards them with points or carbon credits for eco-friendly actions.

## Aim
- Develop an interactive platform that helps users understand and reduce their carbon footprints.
- Provide a comprehensive carbon footprint calculator for personalized insights.
- Encourage community engagement through a competitive leaderboard.

## Features

### Carbon Form and Calculator
- Estimates emissions based on user-provided data on transportation, energy consumption, and lifestyle choices.
- Integrates diverse inputs, including waste generation and dietary habits, to provide accurate emissions estimates.
- Empowers users to identify areas for improvement and track progress toward sustainability goals.

### Insights
- Provides personalized recommendations and alternative suggestions for reducing carbon footprints.
- Summarizes user emissions data, enabling informed decision-making for sustainability goals.

### Goal Tracker
- Enables users to monitor progress toward carbon reduction milestones.
- Offers visual metrics that highlight achievements and remaining goals.
- Motivates users to stay engaged in their sustainability efforts and adjust strategies as needed.

### Optimization with Local Storage Caching
- Uses local storage caching to optimize performance and improve the user experience.
- Ensures data consistency and allows quicker access to frequently accessed information.

## Tech Stack
- *Frontend:* React.js, TypeScript
- *Backend Services:* Gemini API for carbon reduction insights
- *Database:* Firebase Firestore
- *Authentication:* Firebase Authentication
- *AI Integration:* Gemini API
- *Deployment:* Netlify

## Setup and Installation

### Prerequisites
- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation

1. *Clone the Repository:*
   bash
   git clone https://github.com/ManjuBodi/carbontrial2
   cd carbon-compass
   

2. *Install Dependencies:*
   npm install
   

3. *Firebase Setup:*
   - Go to [Firebase Console](https://firebase.google.com/), create a project, and enable Authentication and Firestore.
   - Download your Firebase configuration file and add it to the src folder as firebaseConfig.js.

4. *Environment Variables:*
   Create a .env file in the root directory with the following keys:
   bash
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key
   

5. *Run the Application:*
   bash
   npm start
   

   The app should now be running on http://localhost:3000.

## Usage

### Authentication
- Users can register and log in using Firebase Authentication.
- *Dashboard Access:* Upon logging in, users can access the dashboard, which includes the CarbonForm and Insights pages.

### Carbon Tracking
- Users can fill out the *CarbonForm* to submit data related to their carbon emissions.
- Data submitted is stored in Firebase Firestore and cached in local storage for optimized access.

### AI-Powered Insights
- Collected data is sent to the *Gemini API* for analysis, returning personalized insights on reducing carbon footprint.
- Insights are displayed on the *Insights page*, along with accumulated reward points or carbon credits.


## Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and open a pull request.
