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
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    // {
    //   id: "Resume",
    //   title: "Download Resume",
      
    // },
    
  ];


  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Django Developer",
      icon: creator,
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
      name: "Smart Face Recognition",
      description:
        "This is an Artificial intelligence-based Web Application. One can register to the app. Then using any image(royalty-free) link from the web. This will locate the human face from the app. Also, there is a rank functionality that updates according to how many times a user has posted and used the app.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restful_api",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: smartfacerecognition,
      source_code_link: "https://github.com/",
      live_project_link: "https://face-recognition-frontend-cio2.onrender.com/",
    },
    {
      name: "Robo Companion",
      description:
        "This is a fully responsive React app. Where RoboHash API is used for generating different data. It generates new data for every unique IP address. This app also provides dynamic search functionality. Tachyons has been used as a CSS toolkit for styling the components. This project is live on Render.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "robohash",
          color: "green-text-gradient",
        },
        {
          name: "dom",
          color: "pink-text-gradient",
        },
      ],
      image: robocompanion,
      source_code_link: "https://github.com/Israq/RoboFriends-App",
      live_project_link: "https://robo-friends.onrender.com/",
    },
    {
      name: "Background Generator(Css Gradient)",
      description:
        "This app will allow user to chose any types of gradient for the project and will generate Css code to use as a project background",
      tags: [
        {
          name: "Css_toolkit",
          color: "blue-text-gradient",
        },
        {
          name: "gradient_color",
          color: "green-text-gradient",
        },
        {
          name: "Css_code",
          color: "pink-text-gradient",
        },
      ],
      image: backgroundgenerator,
      source_code_link: "https://github.com/",
      live_project_link: "https://background-generator.onrender.com/",
    },
    {
      name: "Background Generator(Css Gradient)",
      description:
        "This app will allow user to chose any types of gradient for the project and will generate Css code to use as a project background",
      tags: [
        {
          name: "Css_toolkit",
          color: "blue-text-gradient",
        },
        {
          name: "gradient_color",
          color: "green-text-gradient",
        },
        {
          name: "Css_code",
          color: "pink-text-gradient",
        },
      ],
      image: backgroundgenerator,
      source_code_link: "https://github.com/",
      live_project_link: "https://background-generator.onrender.com/",
    },
    {
      name: "Background Generator(Css Gradient)",
      description:
        "This app will allow user to chose any types of gradient for the project and will generate Css code to use as a project background",
      tags: [
        {
          name: "Css_toolkit",
          color: "blue-text-gradient",
        },
        {
          name: "gradient_color",
          color: "green-text-gradient",
        },
        {
          name: "Css_code",
          color: "pink-text-gradient",
        },
      ],
      image: backgroundgenerator,
      source_code_link: "https://github.com/",
      live_project_link: "https://background-generator.onrender.com/",
    },
    {
      name: "Background Generator(Css Gradient)",
      description:
        "This app will allow user to chose any types of gradient for the project and will generate Css code to use as a project background",
      tags: [
        {
          name: "Css_toolkit",
          color: "blue-text-gradient",
        },
        {
          name: "gradient_color",
          color: "green-text-gradient",
        },
        {
          name: "Css_code",
          color: "pink-text-gradient",
        },
      ],
      image: backgroundgenerator,
      source_code_link: "https://github.com/",
      live_project_link: "https://background-generator.onrender.com/",
    },
  ];
  const cards = [
    {
      name: "Smart Face Recognition",
      description:
        "This is an Artificial intelligence-based Web Application. One can register to the app. Then using any image(royalty-free) link from the web. This will locate the human face from the app. Also, there is a rank functionality that updates according to how many times a user has posted and used the app.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restful_api",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      video: "https://static.clipdrop.co/web/homepage/tools/ReplaceBackground.webm#t=0.1",
      source_code_link: "https://github.com/",
      live_project_link: "https://face-recognition-frontend-cio2.onrender.com/",
    },
  ];
  
  export { services, technologies, experiences, cards, testimonials, projects };
  