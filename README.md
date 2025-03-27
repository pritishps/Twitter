# X.com (Twitter) Clone - Frontend Documentation

## Introduction

This project is a frontend-only clone of X.com (formerly Twitter) built using Vite and React (JavaScript). It dynamically displays data using JSON files to mimic real-time interactions. The project focuses on UI/UX replication of X’s feed system, allowing for post rendering, filtering, and basic state management.

## Project Structure
```
├──public
│   ├── data/
│   │   ├── allPostData.json
│   │   ├──messages.json
│   │   ├──notifications.json
│   ├── fonts
│   ├── images
│   │   ├── profile-images
│   │   ├── user-images
│
├── src/
│   ├── components/
│   │   ├── Communities.jsx
│   │   ├── Explore.jsx
│   │   ├── Feed.jsx
│   │   ├── FeedFilterComponent.jsx
│   │   ├── FollowSuggestions.jsx
│   │   ├── Home.jsx
│   │   ├── Messages.jsx
│   │   ├── ModalComponent.jsx
│   │   ├── NavPanel.jsx
│   │   ├── NewPostHomeElement.jsx
│   │   ├── PageHeadingElement.jsx
│   │   ├── Post.jsx
│   │   ├── Profile.jsx
│   │   ├── UsersCards.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   
│   ├── styles/
│   │   ├── App.css
│   │   ├── Communities.css
│   │   ├── Explore.css
│   │   ├── Feed.css
│   │   ├── FeedFilterComponent.css
│   │   ├── FollowSuggestions.css
│   │   ├── Home.css
│   │   ├── Messages.css
│   │   ├── ModalComponent.css
│   │   ├── NavPanel.css
│   │   ├── NewPostHomeElement.css
│   │   ├── PageHeadingElement.css
│   │   ├── Post.css
│   │   ├── Profile.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── vite.config.js
```

---

## Overview of Components

Each component in the application serves a specific role in rendering and managing the UI. Below is a categorized breakdown:

### Core Components

- **Home.jsx**: Main feed display, manages post filtering and rendering.
- **Feed.jsx**: Fetches and renders posts from JSON data, implements filtering logic.
- **Post.jsx**: Displays an individual post with user interactions (like, share, comment) (static counts).
- **Profile.jsx**: Displays user-specific posts and interactions.
- **Communities.jsx**: Displays community posts based on selected filter.
- **Explore.jsx**: Displays trending and various filter based posts and also availbilty of search functionality.
- **Notifications.jsx**: Displays the notifications in a compact view.
- **Messages.jsx**: Displays the messages in a compact view.

### UI Components

- **NewPostHomeElement.jsx**: UI for composing a new post.
- **FeedFilterComponent.jsx**: Allows users to filter posts by categories (e.g., "For You", "Feed").
- **UserCards.jsx**: UI for  displaying a list of users.

### Utility & Data Handling

- **public/data/allPostData.json**: Stores all posts used in the feed.
- **styles/**: Contains CSS files for styling individual components and all the styles for each page is divided into its own css file where it can be easily viewed.

---

## State Management & Data Flow

The application follows a structured approach for handling UI state and data flow:

- **Local State (useState)**: Used for handling small UI interactions (e.g., like toggling, post selection).
- **Global State (Redux)**: Used for managing application-wide state theme settings. Redux ensures efficient data flow and predictable state management across components. It ca be further used to handle login data of the user to manage sessions and otherthings
- **Data Fetching**: JSON files serve as a data source, mimicking an API response. All posts are in a so

---

## Styling & Theming

- Uses **CSS Modules** for scoped styles.
- Supports **Dark Mode** via global theme settings using Redux.
- Responsive design ensures usability across different screen sizes.

---

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/pritishps/Twitter.git
   cd Twitter
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Start the build server:
   ```sh
   npm run build
   ```
5. Open the browser and visit:
   ```
   http://localhost:5173
   ```

## Testing and Debuging

-Each module canbe testing using the jest library for an rendering of compoents and updation of state variables

## Deployment

- The project is deployed on netlify at https://pritishps-x-clone.netlify.app/
- The project file is available on github at  https://github.com/pritishps/Twitter.git

---

## Future Enhancements

- Implement backend support for real-time updates.
- Add authentication and user management.
- Implemet other interacting features like post coments like etc.

---

## Conclusion

This project is a minimal frontend-only clone of X.com designed to simulate a real social media feed experience. 

## Refferences

To build this application the following refferences and components are taken 
- X.com : https://x.com/home  For UI Refferences
- Bootstrap : https://getbootstrap.com/     For CSS libraries
- Bootstrap Icons : https://getbootstrap.com/    For Icons
- React : https://react.dev/     For React Library
- React Redux : https://react-redux.js.org/      For redux state management
