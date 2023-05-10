import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  //typescript,
  python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  //docker,
  django,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  smartfacerecognition,
  jobit,
  tripguide,
  robocompanion,
  backgroundgenerator,
  threejs,
 
} from "../assets";

export const navLinks = [
 
  {
    id: "about",
    title: "AI Tools",
  },
  {
    id: "work",
    title: "Cleanup",
  },
  {
    id: "contact",
    title: "Image Upscaler",
  },
  // {
  //   id: "Resume",
  //   title: "Download Resume",
    
  // },
  
];


const services = [
  {
    
    image: "https://static.clipdrop.co/web/replace-background/examples/car.jpg",
  },
  {
    image: "https://static.clipdrop.co/web/replace-background/examples/dish.jpg",

  },
  {
   
    image: "https://static.clipdrop.co/web/replace-background/examples/shoes.jpg",

  },
  {
   
    image: "https://static.clipdrop.co/web/replace-background/examples/woman.jpg",

  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "django",
    icon: django,
  },
];

const experiences = [
  {
    title: "Backend Engineer(Full time)",
    company_name: "Bizstring.tech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Januay 2021 - October 2022",
    points: [
      "Developed dynamic web applications using Django(Python) as a Backend Engineer for different business organizations. Orchestrated in multiple projects as project lead which reduced project completion duration.Coordinated with the designing team and clients to make applications workflow more efficient for business growth.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Created dashboards and dynamic features that helped business organizations evaluate their expansion.",
      "experienced in building full-stack web applications as a sole developer. Coordinated with the front-endteam for efficient execution.Deployed applications on the server. Run different tests after production. Reviewing and restructuring code to improve user experience.",
    ],
  },
  {
    title: "Full Stack Developer(Contract)",
    company_name: "Healthtech Startup",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Ferbruary 2017 - March 2020",
    points: [
      "Developed Full Stack Web Application(ecommerce). Designed the workflow of the application.Created user interface according to client's requirement.",
      "Collaborating with product managers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback on the App workflow to achieve more great user experience.",
      "Debugging and reconstruct the app according feedback."
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
    name: "Tim Berners-Lee",
    designation: "Inventor",
    company: "World Wide Web ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.",
    name: "Stewart Brand",
    designation: "Writer",
    company: "USCO and Merry Pranksters",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Technology is best when it brings people together.",
    name: "Matt Mullenweg",
    designation: " Social Media Entrepreneur",
    company: " WordPress",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Cleanup",
    description:
      "Remove objects, people, text and defects from your pictures automatically.",
    
    video: "https://static.clipdrop.co/web/homepage/tools/Cleanup.webm#t=0.1",
    source_code_link: "https://github.com/",
    live_project_link: "https://face-recognition-frontend-cio2.onrender.com/",
  },
  {
    name: "Remove",
    description:
      "Extract the main subject from a picture with incredible accuracy. It's like magic.",
    
    video: "https://static.clipdrop.co/web/homepage/tools/RemoveBG.webm#t=0.1",
    source_code_link: "https://github.com/Israq/RoboFriends-App",
    live_project_link: "https://robo-friends.onrender.com/",
  },
  {
    name: "Relight",
    description:
      "Relight your images with beautiful lights",
    
    video: "https://static.clipdrop.co/web/homepage/tools/Relight.webm#t=0.1",
    source_code_link: "https://github.com/",
    live_project_link: "https://background-generator.onrender.com/",
  },
  {
    name: "Image upscaler",
    description:
      "Upscale your images by 2x or 4x in seconds. It can also remove noise and recover beautiful details.",
   
    video: "https://static.clipdrop.co/web/homepage/tools/Enhance.webm#t=0.1",
    source_code_link: "https://github.com/",
    live_project_link: "https://background-generator.onrender.com/",
  },
  {
    name: "Stable Diffusio",
    description:
      "Generate high-resolution realistic images with AI",
   
    video: "https://static.clipdrop.co/web/homepage/tools/StableDiffusion.webm#t=0.1",
    source_code_link: "https://github.com/",
    live_project_link: "https://background-generator.onrender.com/",
  },
  {
    name: "Text Remover",
    description:
      "Remove text from any image",

    video: "https://static.clipdrop.co/web/homepage/tools/TextRemover.webm#t=0.1",
    source_code_link: "https://github.com/",
    live_project_link: "https://background-generator.onrender.com/",
  },
  {
    name: "Stable Diffusion",
    description:
      "Create multiple variants of an image",

    video: "https://static.clipdrop.co/web/homepage/tools/TextRemover.webm#t=0.1",
    source_code_link: "https://github.com/",
    live_project_link: "https://background-generator.onrender.com/",
  },
];
const cards = [
  {
    name: "Replace Background",
    description:
      "Teleport anything, anywhere with AI",
    
    video: "https://static.clipdrop.co/web/homepage/tools/ReplaceBackground.webm#t=0.1",
    source_code_link: "https://github.com/",
    live_project_link: "https://face-recognition-frontend-cio2.onrender.com/",
  },
];

export { services, technologies, experiences, cards, testimonials, projects };
