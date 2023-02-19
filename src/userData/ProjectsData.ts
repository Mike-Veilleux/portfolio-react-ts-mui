import { IProjectCard } from "../interfaces/interfaces";
/*
{
title: "",
urlScreenshot: "",
urlLive:"",  
urlGit: "",
body: "",
},
*/

export const projectData: IProjectCard[] = [
  {
    title: "Tic Tac Toe",
    urlScreenshot:
      "https://raw.githubusercontent.com/Mike-Veilleux/Tic-Tac-Toe_Exercise/main/src/assets/Tic-Tac-Toe_Screenshot.png",
    urlLive: "https://mike-veilleux.github.io/Tic-Tac-Toe_Exercise/",
    urlGit: "https://github.com/Mike-Veilleux/Tic-Tac-Toe_Exercise",
    body: [
      "A simple Tic Tac Toe app created with React and Vite toolchain. For this exercise I decided to rewrite the whole project from scratch with the following updrades:",
      "- Codebase to functional components",
      "- Pure CSS",
      "Future implementation",
      "- Login / Register",
      "- Scoreboard Statistics",
    ],
  },
  {
    title: "Shopping Cart",
    urlScreenshot:
      "https://raw.githubusercontent.com/Mike-Veilleux/Shopping-Cart-Exercise/main/client/src/assets/shoppinCartScreenshot.png",
    urlLive: "https://mike-veilleux.github.io/Shopping-Cart-Exercise/",
    urlGit: "https://github.com/Mike-Veilleux/Shopping-Cart-Exercise",
    body: [
      "A simple shopping cart app using React and Vite toolchain. This exercise targets a few skills building:",
      "- Use of React hooks",
      "- Custom hooks",
      "- Passing hooks as props to components",
    ],
  },

  {
    title: "ATM",
    urlScreenshot:
      "https://raw.githubusercontent.com/Mike-Veilleux/ATM-Exercise/main/src/assets/ATM_Screenshot.png",
    urlLive: "https://mike-veilleux.github.io/ATM-Exercise/",
    urlGit: "https://github.com/Mike-Veilleux/ATM-Exercise",
    body: [
      "A simple ATM app with deposit and cash withdrawal using React, Formik and Vite toolchain. For this exercise I've refactored the original project with the following updrades:",
      "- Added custom hooks",
      "- Codebase to functional components",
      "- implemented state lifting",
      "- Usage of Formik validation",
    ],
  },

  {
    title: "Todo List",
    urlScreenshot:
      "https://raw.githubusercontent.com/Mike-Veilleux/Todo-Exercise/main/src/assets/ReactTodoExercise.png",
    urlLive: "https://mike-veilleux.github.io/Todo-Exercise/",
    urlGit: "https://github.com/Mike-Veilleux/Todo-Exercise",
    body: [
      "A simple todo app using React and Vite toolchain. This exercise targets a few skills building:",
      "- JSX list mapping",
      "- State management",
      "- Component base structure",
      "- Passing States as props to components",
    ],
  },
  {
    title: "Currency Converter",
    urlScreenshot:
      "https://raw.githubusercontent.com/Mike-Veilleux/Fetch-Currency/main/src/assets/Fetch-Currency.png",
    urlLive: "", //"https://mike-veilleux.github.io/Fetch-Currency/",
    urlGit: "https://github.com/Mike-Veilleux/Fetch-Currency",
    body: [
      "A currency conversion app using React, Axios and Vite toolchain. I'm using this API for exchangerate references. This exercise is focusing on aspects:",
      "- State management with async API call",
      "- Component based architecture",
      "- Usage of useEffect",
      "- Usage of Props",
      "- Usage of reducers",
    ],
  },

  {
    title: "Formik Login",
    urlScreenshot:
      "https://raw.githubusercontent.com/Mike-Veilleux/Formik-exercise/main/src/assets/LoginExercise.png",
    urlLive: "https://mike-veilleux.github.io/Formik-exercise/",
    urlGit: "https://github.com/Mike-Veilleux/Formik-exercise",
    body: [
      "A simple login form using the Formik library. This exercise targets a few skills building:",
      "- Using the useFormik hook",
      "- Validate input data",
      "- Use regular expressions",
    ],
  },

  {
    title: "Live Bus Tracking",
    urlScreenshot:
      "https://raw.githubusercontent.com/Mike-Veilleux/bus-tracking-exercise/main/screenshots/github-bus-tracking-001.png",
    urlLive:
      "https://mike-veilleux.github.io/exercises/bus-tracking-exercise/index.html",
    urlGit: "https://github.com/Mike-Veilleux/bus-tracking-exercise",
    body: [
      "Follow Boston’s buses live on their route with real time tracking and information update. For this project I used MapboxGL and the MBTA public API.",
      "I decided to build my code around JavaScript class. I was able to integrate the Json data and the Mapbox.Marker in the same class instead of maintaining two separate arrays in the main program loop.",
      "By having all my elements encapsulated in a class, the code in the main loop became clearer and easy to follow.",
      "I think this will also help for further expansions and reduce complexity.",
    ],
  },
  {
    title: "Eyes Tracker",
    urlScreenshot: "https://mike-veilleux.github.io/images/cards/eye.png",
    urlLive:
      "https://mike-veilleux.github.io/exercises/eye-exercise/index.html",
    urlGit: "https://github.com/Mike-Veilleux/eye-exercise",
    body: [
      "A truly eye popping exercise from my training at MIT. A great introduction to event driven graphic animation. This exercise targets a few skills building:",
      "- Mousemove event subscription",
      "- Reading mouse event properties",
      "- Usage of absolute and relative in CSS",
      "There are many upgrades possible for this project. Here's a few on my mind:",
      "- Use a real picture instead of html shapes",
      "- Update the eyes tracking system to account for when the mouse is between both eyes",
    ],
  },
  {
    title: "PacMan",
    urlScreenshot: "https://mike-veilleux.github.io/images/cards/pacman.png",
    urlLive:
      "https://mike-veilleux.github.io/exercises/pacman-exercise/index.html",
    urlGit: "https://github.com/Mike-Veilleux/pacman-exercise",
    body: [
      "Create some Pacmans and have them bounce around. This exercise targets a few skills building:",
      "- Dynamically create HTML elements",
      "- Random direction and velocity",
      "- Edge Detection for direction changes",
      "- Manage an update loop",
    ],
  },
  {
    title: "Fusion 360 Plugin",
    urlScreenshot:
      "https://mike-veilleux.github.io/images/cards/fusion_plugin.png",
    urlLive: "",
    urlGit:
      "https://github.com/Mike-Veilleux/Fusion360-Plugin-TabJoint-LivingHinge",
    body: [
      "As a Fusion 360 instructor and active maker, I realized the need for an automated tab joints and living hinges generator. I wrote those two plugins to accelerate the process in the native environment.",
      "Tab Joint transforms a sketchline into a male or female tab joint pattern where you can configure many characteristics.",
      "Living Hinge creates a sketchline pattern within a user defined area where you can configure many characteristics.",
    ],
  },
  {
    title: "Unity3D Asset",
    urlScreenshot:
      "https://mike-veilleux.github.io/images/cards/lift_unity.png",
    urlLive: "",
    urlGit: "https://github.com/Mike-Veilleux/Unity-Elevator-System",
    body: [
      "A Simple event based elevator system for Unity3D. Here's a few features highlight:",
      "- Animated doors",
      "- Operating buttons",
      "- Floor selection UI",
      "- Easy to expand and configure",
    ],
  },
  {
    title: ".NET Asset manager",
    urlScreenshot:
      "https://mike-veilleux.github.io/images/cards/asset_manager.png",
    urlLive: "",
    urlGit: "",
    body: [
      "This project was born at Discovery College in the design department. The teachers and I wanted a system to manage and inspect our machine park.",
      "This is a .NET base project targeting WPF, ASP and Xamarin. This project is not available on my github as it is developed specifically for our college. I'm planning to create an open source React/NodeJS version so stay tuned...",
    ],
  },
];
