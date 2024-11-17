import {  FaReact, FaNodeJs,} from 'react-icons/fa';
import {  SiSocketdotio, SiMongodb, SiTailwindcss, SiReact, SiAxios, SiCss3, SiVercel, SiJsonwebtokens, SiGoogleauthenticator, SiSass, SiRender, SiRedux } from 'react-icons/si';
import { Project } from '../types/types';


export const projects:Project[] = [
  {
    id: 1,
    title: "Real-time Chat Application",
    description: "A modern chat platform built with Next.js and Socket.io, featuring real-time messaging. username:admin, password: admin1234, username: sample password: sample1234",
    image: "/projects/chatapp.png", // Add your image
    technologies: [
      { name: "Reactjs", icon: SiReact },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      {name: "Vercel", icon: SiVercel}
    ],
    features: [
      "Real-time messaging with Socket.io",
      "Message history",
    ],
    github: "https://github.com/reyleal27/chat-app",
    live: "https://chat-app-delta-beige-57.vercel.app/login",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Slim mom application",
    description: "Slim Mom is a health and fitness app designed specifically for mothers who want to track their fitness goals, manage nutrition, and engage in workout plans tailored to their needs. The app provides personalized fitness routines, meal planning, and progress tracking to help moms stay healthy and active while managing their busy lifestyles. email: testreyvincent@gmail.com password: test1234",
    image: "/projects/slimmom.png", // Add your image
    technologies: [
      { name: "ReactJs", icon: FaReact },
      {name: "Sass", icon: SiSass},
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "GoogleAuth", icon: SiGoogleauthenticator },
      {name: "Redux", icon: SiRedux},
      {name: "Render", icon: SiRender}
    ],
    features: [
 "User Authentication: Secure login and registration with Google Auth integration.",
"Personalized Fitness Plans: Custom workout routines based on user goals and preferences.",
"Meal Tracker: Log daily meals, track calories, and get nutrition advice.",
"Progress Tracker: Visualize progress through charts for weight, fitness, and nutrition.",
"JWT Authentication: Secure user data and sessions using JSON Web Tokens.",
"Responsive Design: Mobile-friendly UI for a seamless experience across devices"
    ],
    github: "https://github.com/reyleal27/teamoutfit",
    live: "https://reyleal27.github.io/teamoutfit",
    category: "Full Stack"
  },
   {
    id: 3,
    title: "Image Finder",
    description: "Developed a responsive image search application using ReactJS and the Pixabay API. The app allows users to search for high-quality images by entering keywords.",
    image: "/projects/imagefinder.png", // Add your image
    technologies: [
      { name: "ReactJs", icon: SiReact},
      { name: "Axios", icon: SiAxios},
      { name: "Vanilla CSS", icon: SiCss3}
    ],
    features: [
        "Search image by description",
        "Responsive design"
    ],
    github: "https://github.com/reyleal27/goit-react-hw-04-images/",
    live: "https://reyleal27.github.io/goit-react-hw-04-images/",
    category: "Frontend"
  },
   {
    id: 4,
    title: "Movie Search",
    description: "Developed a movie application using React.js, designed to provide users with an engaging experience for browsing and discovering movies. The app leverages modern React features and integrates with an external movie database API for data fetching.",
    image: "/projects/movies.png", // Add your image
    technologies: [
      { name: "ReactJs", icon: SiReact},
      { name: "Axios", icon: SiAxios},
      { name: "Vanilla CSS", icon: SiCss3}
    ],
    features: [
        "Search movies by title",
    "Browse movie details and ratings",
    "Responsive design"
    ],
    github: "https://github.com/yourusername/chat-app",
    live: "https://chat-app-demo.com",
    category: "Frontend"
  },
  // Add more projects as needed
];
