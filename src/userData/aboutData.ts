import { IAboutData } from "../component/interfaces";

export const aboutData: IAboutData = {
  fullName: "Mike Veilleux",
  sector: "Software development",
  location: "Hong Kong",
  contact: "mvxdesign.hk@gmail.com",
  gitHubName: "mike-veilleux",
  gitHubUrl: "https://github.com/Mike-Veilleux",
  urlLinkedIn: "http://linkedin.com/in/mike-veilleux-54052610",
  bio: [
    "I was born and raised in Canada, I grew up coding on commodore computers in the 80’s. I spent nearly fifteen years in Europe, working in the Computer Aided Design (CAD) softwares sector.",
    "I'm now based in Hong Kong for the last six years and working in education. I've been teaching and supporting students on various projects using Autodesk products, WebGL and Virtual Reality with Unity3D, microcontroller and many more.",
    "I’ve recently joined the college ICT team as database analyst and I am currently doing a full stack (MongoDB, Express, React, NodeJS) developer course at M.I.T.",
  ],
  skills: [
    { name: "Web ~ MERN", level: 40 },
    { name: "Gaming ~ Unity3D", level: 70 },
    { name: "Mobile ~ Xamarin/MAUI", level: 60 },
    { name: "Desktop ~ .NET", level: 80 },
  ],
};
