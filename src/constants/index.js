import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    cjm,
    animatist_logo,
    front_logo,
    myshop,
    carrent,
    jobit,
    tripguide,
    threejs,
    ui,
    linkIcon,
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
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "UI/UX Design",
      icon: mobile,
    },
    {
      title: "Data Analysis",
      icon: backend,
    },
    {
      title: "Content Creation",
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
      name: "TypeScript",
      icon: typescript,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer & Digital Marketer",
      company_name: "Animatist (Pvt) Ltd",
      icon: animatist_logo,
      iconBg: "#E6DEDD",
      date: "2021 - 2024",
      points: [
        "Developed responsive websites and web apps using HTML, CSS, JavaScript and frameworks",
        "Designed UI/UX using Figma and Adobe XD, ensuring user-centric designs.",
        "Boosted organic search traffic by 60% through SEO strategies and analytics.",
        "Managed Google Ads campaigns, reducing cost per acquisition by 40%.",
        "Created content for social media, blogs, and email marketing.",
      ],
    },
    {
      title: "IT Auditor",
      company_name: "Frontier Advisory (Pvt) Ltd",
      icon: front_logo,
      iconBg: "#E6DEDD",
      date: "July 2021 - Feb 2022",
      points: [
        "Conducted thorough risk assessments of IT systems, identifying vulnerabilities and advising on controls tomitigate potential threats and ensure data integrity.",
        "Analyzed existing IT processes and controls, recommending and implementing improvements that enhancedefficiency, security and compliance.",
       
      ],
    },
    {
      title: "Information Technology Consultant",
      company_name: "Ceylon Jewelry Manufacturers",
      icon: cjm,
      iconBg: "#383E56",
      date: "2023",
      points: [
        "Optimized IT infrastructure for robust network performance and connectivity",
        "Integrated a new ERP system, enhancing operational efficiency and data accuracy.",
        "Trained staff on ERP functionalities, boosting productivity.",
        
      ],
    },
    {
      title: "Digital Marketing Specialist",
      company_name: "Myshop.lk (Pvt) Ltd 11/2017",
      icon: myshop,
      iconBg: "#E6DEDD",
      date: "2017 - 2021",
      points: [
        "Directed social media campaigns, increasing sales by 40%.",
        "Conducted SEO optimizations, resulting in a 60% traffic increase.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Leisure Diary Mobile Application",
      description:
        "Built a service booking platform includingmobile and web apps with secure authentication and real-time API integration.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "nodeJs",
          color: "red-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        
      ],
      image: carrent,
      source_code_link: "https://github.com/SabithF/Leisure-Diary---Web-and-Mobile-applicaiton",
    },
    {
      name: "Haskell Web Data Harvester",
      description:
        "Built a Haskell app to fetch, parse, store, andquery JSON data from TFL web API using a modular design.",
      tags: [
        {
          name: "Haskell",
          color: "pink-text-gradient",
        },
        {
          name: "sqLite",
          color: "white-text-gradient",
        },
        
      ],
      image: jobit,
      source_code_link: "https://github.com/Thananont/haskell-project",
    },
    {
      name: "Concurrent Web Simulator",
      description:
        "Designed a multi-threaded Haskellapp simulating a web server handling HTTP-like requests. Used MVars for thread-saferequest queuing and response handling.",
      tags: [
        {
          name: "haskell",
          color: "pink-text-gradient",
        },
        {
          name: "sqLite",
          color: "white-text-gradient",
        },
        {
          name: "concurrency",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/SabithF/Haskell_concurrency_threading/tree/main/haskellConcurrency",
    },
     {
      name: "UI/UX Designs",
      description:
        "Visit my Behance profile to see my UI/UX designs.",
      tags: [
        {
          name: "figma",
          color: "pink-text-gradient",
        },
        {
          name: "adobeXD",
          color: "white-text-gradient",
        },
        {
          name: "photoshop",
          color: "green-text-gradient",
        },
      ],
      image: ui,
      source_code_link: "https://www.behance.net/sabith_fariq",
      custom_icon: linkIcon,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };