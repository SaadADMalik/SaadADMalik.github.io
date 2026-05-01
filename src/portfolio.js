/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saad Waleed",
  title: "Hi, I'm Saad",
  subTitle: emoji(
    "Applied AI / LLM Engineer with 5 years of experience building AI-powered products across LLM apps, retrieval pipelines, backend APIs, analytics dashboards, and ML-driven decision tools. Specialized in agentic LLM systems with multi-step reasoning, tool integration, and production-grade orchestration (RAG + decision loops + async workflows)."
  ),
  resumeLink: "https://drive.google.com/file/d/1uf1zskca48_RKbFaPDFFNAY6AZGy9xxT/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SaadADMalik",
  linkedin: "https://linkedin.com/in/saadwaleedmalik",
  gmail: "saadadmalik04@gmail.com",
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // twitter: "",
  // instagram: "",
  // kaggle: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Applied AI and LLM engineer focused on production-grade systems",
  skills: [
    emoji(
      "⚡ Build agentic LLM systems with multi-step reasoning, tool calling, and orchestration"
    ),
    emoji(
      "⚡ Design RAG pipelines with hybrid search, re-ranking, and confidence gating"
    ),
    emoji(
      "⚡ Ship AI-enabled products with Python APIs, async workflows, and cloud deployment"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "LLM Orchestration",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "RAG Pipelines",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Superior University",
      logo: require("./assets/images/skill.svg"),
      subHeader: "ADP in Artificial Intelligence",
      duration: "",
      desc: "Focused on applied AI systems and machine learning.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI/LLM Systems",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend APIs",
      progressPercentage: "80%"
    },
    {
      Stack: "Data/ML",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Engineer",
      company: "Autosmart Tech",
      companylogo: require("./assets/images/autosmarttech_logo.png"),
      date: "July 2025 - Present",
      desc:
        "Full-stack development of mobile and backend applications for automotive workshop automation, including customer management, vehicle tracking, job scheduling, and analytics.",
      descBullets: [
        "Architected agentic AI workflows (intent parsing -> decision routing -> backend execution -> response generation) using OpenAI APIs for 15+ workshops.",
        "Led voice-first interface design for multilingual mechanics, achieving 84% intent accuracy through iterative prompt engineering.",
        "Implemented secure intent-based JSON boundaries so LLM services never access databases directly.",
        "Shipped features end-to-end, including real-time job tracking, SLA monitoring, and labor-time analytics.",
        "Established code review practices and CI/CD pipelines for mobile releases."
      ]
    },
    {
      role: "AI / ML Engineer",
      company: "Optivex Solutions",
      companylogo: require("./assets/images/optivex.png"),
      date: "Feb 2023 - July 2025",
      desc:
        "Built a scalable RAG system for an internal casino knowledge base with role-based access and 8TB of data.",
      descBullets: [
        "Implemented a hybrid offline LLM architecture to keep sensitive data local while sending only embeddings to the cloud.",
        "Deployed on AWS EC2 with metadata-based caching and precise chunking to reduce latency and cost.",
        "Designed efficient retrieval workflows to support real-time querying across multiple roles without compromising security."
      ]
    },
    {
      role: "ML Engineer / Data Scientist",
      company: "Freelance",
      companylogo: require("./assets/images/jsFramework.svg"),
      date: "Jan 2021 - Feb 2023",
      desc:
        "Delivered ML-driven decision tools for ecommerce and subscription businesses using Python, scikit-learn, and API-based inference.",
      descBullets: [
        "Built a hybrid recommendation system that improved user engagement by 15-20%.",
        "Deployed churn prediction (~80-85% accuracy) enabling targeted retention efforts.",
        "Automated data pipelines and ML workflows, reducing analysis turnaround time by 25-30%.",
        "Improved model stability with feature engineering and validation, increasing key metrics by 10-15%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle: "Production-grade AI systems and platforms",
  projects: [
    {
      image: require("./assets/images/research.png"),
      projectName: "Autonomous Agentic Research Assistant",
      projectDesc:
        "Built a tool-calling LLM system with retrieval orchestration, confidence gating, and async decision loops. Reduced runtime errors from 12% to 0% while maintaining ~2.3s/query average throughput.",
      footerLink: []
    },
    {
      image: require("./assets/images/mastercard.png"),
      projectName: "Identity Theft Protection (IDP MasterCard)",
      projectDesc:
        "Delivered a .NET + Angular subscription orchestration platform integrating telcos via APIs, webhooks, vouchers, and SFTP. Implemented idempotent event ingestion, secure PII handling, and AI-driven reconciliation anomaly detection.",
      footerLink: []
    },
    {
      image: require("./assets/images/casino.png"),
      projectName: "Casino Knowledge Base RAG System",
      projectDesc:
        "Built a scalable RAG system for an 8TB knowledge base with hybrid BM25 + vector retrieval, cross-encoder reranking, and role-based access control on AWS EC2.",
      footerLink: []
    },
    {
      image: require("./assets/images/auto_insight.png"),
      projectName: "AutoInsight (Digitizing Workshops)",
      projectDesc:
        "Created a Flutter + .NET workshop operations app with voice assistant support (Urdu/Hinglish), intent-based JSON boundaries, and real-time job tracking with SLAs.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle: "Professional certifications and coursework",

  achievementsCards: [
    {
      title: "Large Language Models on AWS",
      subtitle: "Certification coursework in LLM deployment on AWS.",
      image: require("./assets/images/skill.svg"),
      imageAlt: "LLM on AWS",
      footerLink: []
    },
    {
      title: "MLOps Essentials: Model Deployment and Monitoring",
      subtitle: "Best practices for deploying and monitoring ML systems.",
      image: require("./assets/images/skill.svg"),
      imageAlt: "MLOps Deployment",
      footerLink: []
    },
    {
      title: "MLOps Essentials: Model Development and Integration",
      subtitle: "End-to-end ML development and integration workflows.",
      image: require("./assets/images/skill.svg"),
      imageAlt: "MLOps Development",
      footerLink: []
    },
    {
      title: "MLflow and Hugging Face Tools",
      subtitle: "Experiment tracking and model tooling ecosystem.",
      image: require("./assets/images/skill.svg"),
      imageAlt: "MLflow and Hugging Face",
      footerLink: []
    },
    {
      title: "AWS Machine Learning / Deployment Coursework",
      subtitle: "Applied machine learning deployment coursework on AWS.",
      image: require("./assets/images/skill.svg"),
      imageAlt: "AWS ML Deployment",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or want to collaborate? My inbox is open.",
  number: "+92-306-4009748",
  email_address: "saadadmalik04@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
