/**
 * AJAI SELVAM M — Central Portfolio Configuration
 * 
 * Central project configuration, resume link, and portfolio details.
 */

const projectUrls = {
  cropManagement: {
    deployedUrl: "https://phoenix-ai-pi-lime.vercel.app/",
    sourceCodeUrl: "https://github.com/AAKAS-07/phoenix-ai"
  },
  royalTours: {
    deployedUrl: "https://royal-tours-sigma.vercel.app/",
    sourceCodeUrl: "https://github.com/AJAISELVAMM/-ROYAL-TOURS"
  }
};

const projectsData = [
  {
    id: "crop-management",
    slug: "crop-management",
    number: "01",
    title: "Smart Dynamic Crop Management System",
    event: "NEXERA 2K26 – TECHNOVA, Coimbatore Institute of Technology",
    description: "Developed a technology-driven solution for dynamic crop management. Designed responsive interfaces for monitoring and managing crop-related information. Contributed to system planning, frontend development, UI/UX design, and feature implementation. Collaborated with team members to develop and present the solution at the technical hackathon.",
    technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
    image: "/images/crop-management.jpg",
    fallbackImage: "/images/crop-management.jpg",
    previewImage: "/images/phoenix-ai-preview.png",
    deployedUrl: projectUrls.cropManagement.deployedUrl,
    sourceCodeUrl: projectUrls.cropManagement.sourceCodeUrl,
    githubUrl: projectUrls.cropManagement.sourceCodeUrl,
    keyFeatures: [
      "Crop monitoring dashboard with real-time analytics",
      "Responsive web interface for mobile & desktop access",
      "Real-time sensor data visualization and status alerts",
      "User-friendly UI/UX design optimized for farmers & agronomists",
      "Dynamic irrigation and fertilizer scheduling insights"
    ],
    role: [
      "Frontend Development",
      "UI/UX Design (Wireframing & Prototyping)",
      "Feature Implementation & System Planning",
      "Hackathon Presentation & Technical Demonstration"
    ],
    gallery: [
      "/images/crop-management.jpg"
    ]
  },
  {
    id: "royal-tours",
    slug: "royal-tours",
    number: "02",
    title: "ROYAL TOURS – AI-Powered Smart Travel & Tourism Platform",
    event: "Smart India Hackathon 2026 (SIH) Internal Hackathon",
    description: "Developed a full-stack smart travel platform integrating trip planning, destination discovery, transportation, fare analysis, translation, budgeting, and safety assistance. Implemented location-aware services using OpenStreetMap, Leaflet, Nominatim, Overpass API, OSRM, and Browser Geolocation API. Developed group trip management with member-wise budgeting, live-location support, emergency facility discovery, and SOS assistance. Integrated AI/ML-based fare and safety analysis features with language translation support. Served as Team Captain, leading project planning, development, UI/UX design, and hackathon presentation.",
    technologies: [
      "React.js", "JavaScript", "Node.js", "Express.js", 
      "PostgreSQL", "Supabase", "Prisma", "Leaflet", 
      "OpenStreetMap", "Python", "AI/ML"
    ],
    image: "/images/royal-tours.jpg",
    fallbackImage: "/images/royal-tours.jpg",
    previewImage: "/images/royal-tours-preview.png",
    deployedUrl: projectUrls.royalTours.deployedUrl,
    sourceCodeUrl: projectUrls.royalTours.sourceCodeUrl,
    githubUrl: projectUrls.royalTours.sourceCodeUrl,
    keyFeatures: [
      "Trip planning and itinerary generation",
      "Destination discovery & interactive digital mapping",
      "Smart transportation booking & schedule tracking",
      "AI/ML-based Fair Fare Analysis & fraud prevention",
      "Multi-language translation assistance for travelers",
      "Group trip management with member-wise budgeting",
      "Live location tracking & SOS emergency assistance",
      "Emergency facility discovery (hospitals, police, embassies)"
    ],
    role: [
      "Team Captain & Lead Architect",
      "Project Planning & System Architecture",
      "Full-Stack Development (React, Node.js, Leaflet, PostgreSQL)",
      "UI/UX Design & Interactive Wireframing",
      "SIH Hackathon Presentation & Live Demonstration"
    ],
    gallery: [
      "/images/royal-tours.jpg"
    ]
  }
];

// Attach named project keys to the projects array for dual object/array access
projectsData.cropManagement = projectUrls.cropManagement;
projectsData.royalTours = projectUrls.royalTours;

export const portfolioConfig = {
  // Personal Details
  name: "AJAI SELVAM M",
  role: "B.Tech Information Technology Student",
  college: "Bannari Amman Institute of Technology",
  location: "Kovilpatti, Tamil Nadu, India",
  email: "ajaiselvam05@gmail.com",
  phone: "7548823390",
  
  // Profile Image URL Configuration (Google Drive file ID: 18QXtTXIrRpZmNmpm4co4GploxeEjAdAk)
  profileImage: "https://lh3.googleusercontent.com/d/18QXtTXIrRpZmNmpm4co4GploxeEjAdAk",
  profileImageFallback: "/images/ajai-profile.jpg",

  // Resume URL: Google Drive Share Link
  resume: "https://drive.google.com/file/d/1UMfSJcl7LYIGRlO318fnP8-BQK1Qg9Hz/view?usp=sharing",
  resumeUrl: "https://drive.google.com/file/d/1UMfSJcl7LYIGRlO318fnP8-BQK1Qg9Hz/view?usp=sharing",

  // Social Profiles
  social: {
    github: "https://github.com/AJAISELVAMM",
    linkedin: "https://www.linkedin.com/in/ajai-selvam-m-a70a21354/",
    hackerrank: "https://www.hackerrank.com/profile/ajaiselvam05",
    leetcode: "https://leetcode.com/u/ajai_25/"
  },

  // Centralized Project URLs mapping
  projectsConfig: projectUrls,

  // Projects Configuration (both array for list/detail and object keys for direct access)
  projects: projectsData,

  // Education Records
  education: [
    {
      id: "bannari",
      institution: "Bannari Amman Institute of Technology",
      degree: "B.Tech – Information Technology",
      period: "2024 – 2028",
      scoreType: "CGPA",
      score: "6.86 / 10",
      type: "college"
    },
    {
      id: "kamaraj-hsc",
      institution: "Kamaraj Matriculation Higher Secondary School",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2023 – 2024",
      scoreType: "Percentage",
      score: "76.5%",
      type: "school"
    },
    {
      id: "kamaraj-sslc",
      institution: "Kamaraj Matriculation Higher Secondary School",
      degree: "Secondary School Leaving Certificate (SSLC)",
      period: "2021 – 2022",
      scoreType: "Percentage",
      score: "72.8%",
      type: "school"
    }
  ],

  // Skills Categories
  skills: {
    programming: [
      { name: "C", icon: "c" },
      { name: "C++", icon: "cpp" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" }
    ],
    web: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" }
    ],
    database: [
      { name: "MySQL", icon: "mysql" },
      { name: "Basic SQL", icon: "sql" }
    ],
    design: [
      { name: "Figma", icon: "figma" },
      { name: "Wireframing", icon: "wireframe" },
      { name: "Prototyping", icon: "prototype" }
    ],
    core: [
      { name: "Problem Solving", icon: "problem-solving" },
      { name: "Basic Software Development", icon: "software-dev" },
      { name: "Frontend Development", icon: "frontend-dev" }
    ]
  },

  // Certifications
  certifications: [
    {
      id: "cisco",
      provider: "Cisco Networking Academy",
      logo: "cisco",
      items: [
        "Introduction to Data Science",
        "Python Essentials 1",
        "Introduction to IoT and Digital Transformation",
        "Introduction to Cybersecurity"
      ]
    },
    {
      id: "ibm",
      provider: "IBM SkillsBuild",
      logo: "ibm",
      items: [
        "AI Fundamentals with IBM SkillsBuild"
      ]
    }
  ],

  // Achievements
  achievements: [
    {
      id: "1",
      icon: "trophy",
      text: "Participated in NEXERA 2K26 – TECHNOVA at Coimbatore Institute of Technology."
    },
    {
      id: "2",
      icon: "star",
      text: "Developed technology-based solutions for Smart Tourism and Smart Agriculture problem statements."
    },
    {
      id: "3",
      icon: "star",
      text: "Continuously improving programming and problem-solving skills through coding platforms such as HackerRank and LeetCode."
    }
  ]
};

// Google Drive Direct Profile Image URL (File ID: 18QXtTXIrRpZmNmpm4co4GploxeEjAdAk)
export const GOOGLE_DRIVE_PROFILE_IMAGE_URL = "https://lh3.googleusercontent.com/d/18QXtTXIrRpZmNmpm4co4GploxeEjAdAk";
export const PROFILE_IMAGE_URL = GOOGLE_DRIVE_PROFILE_IMAGE_URL;


