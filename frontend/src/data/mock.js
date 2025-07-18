export const portfolioData = {
  personalInfo: {
    name: "Raviteja Varma Chekuri",
    title: "Full-Stack Developer",
    subtitle: "Building exceptional web applications with modern technologies",
    dateOfBirth: "12-06-2000",
    nationality: "Indian",
    address: "404, Gayatri Towers, Gumuluru, Anakapalli, AP",
    phone: "+918978515831",
    email: "ravitejavarma12000@gmail.com",
    linkedin: "https://www.linkedin.com/in/chekuri-ravi-teja-varma-8456b815b/?originalSubdomain=in",
    profileImage: "/api/placeholder/300/300"
  },
  
  about: {
    summary: "Dedicated and highly motivated Full-Stack Developer with three years of professional experience specializing in building user-friendly and visually appealing web applications. Proficient in React with hands-on experience in Angular, Python and Java, and now expanding expertise to backend development using AWS tools such as Lambda functions, API Gateway, and Deployment in EC2 instances.",
    highlights: [
      "3+ years of professional experience",
      "Expert in React & Angular frameworks",
      "AWS Cloud Architecture experience",
      "Strong focus on user experience",
      "Proven track record with enterprise clients"
    ]
  },

  skills: {
    technical: [
      { name: "React", level: 95, category: "Frontend" },
      { name: "Angular", level: 85, category: "Frontend" },
      { name: "JavaScript", level: 90, category: "Frontend" },
      { name: "TypeScript", level: 85, category: "Frontend" },
      { name: "Python", level: 80, category: "Backend" },
      { name: "Java", level: 75, category: "Backend" },
      { name: "AWS Lambda", level: 80, category: "Cloud" },
      { name: "API Gateway", level: 75, category: "Cloud" },
      { name: "EC2", level: 70, category: "Cloud" },
      { name: "Flask", level: 70, category: "Backend" },
      { name: "MySQL", level: 75, category: "Database" },
      { name: "Selenium", level: 80, category: "Testing" }
    ],
    soft: [
      "Problem Solving",
      "Team Leadership",
      "Client Communication",
      "Project Management",
      "Agile Development",
      "Code Review"
    ]
  },

  experience: [
    {
      id: 1,
      company: "Tiger Analytics",
      position: "Full Stack Web Developer",
      duration: "01/2022 – Present",
      location: "Hyderabad, India",
      description: "Started as a New Graduate hire and worked on major projects and deliveries",
      achievements: [
        "Developed MLCORE - A comprehensive ML lifecycle management platform",
        "Built Kellogg Profit Simulator Plus using React and Adobe designs",
        "Created multiple HP enterprise applications used by IT admins",
        "Directly collaborated with HP WEX team leads in Canada"
      ],
      projects: [
        {
          name: "MLCORE",
          description: "Product designed to simplify data monitoring and model deployment",
          technologies: ["Angular", "React", "Python", "AWS"],
          impact: "Reduced ML deployment complexity by 60%"
        },
        {
          name: "Kellogg Profit Simulator Plus",
          description: "Tool for pricing analysis and demand transfer management",
          technologies: ["React", "Adobe XD", "JavaScript"],
          impact: "Improved pricing strategy efficiency by 40%"
        },
        {
          name: "HP Enterprise Applications",
          description: "Series of applications for HP IT admins including dashboards and simulators",
          technologies: ["React", "AWS Lambda", "API Gateway", "EC2"],
          impact: "Streamlined IT admin workflows for 1000+ users"
        }
      ]
    },
    {
      id: 2,
      company: "Sparks Foundation",
      position: "Web Developer Intern",
      duration: "06/2021 – 11/2021",
      location: "Singapore (Online)",
      description: "Developed comprehensive Banking System project",
      achievements: [
        "Created secure money transfer system",
        "Implemented transaction history tracking",
        "Designed responsive user interface",
        "Ensured robust database architecture"
      ],
      projects: [
        {
          name: "Banking System",
          description: "Full-stack banking application with secure transactions",
          technologies: ["Angular", "CSS", "Bootstrap", "JSP", "MySQL"],
          impact: "Demonstrated proficiency in full-stack development"
        }
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "GITAM University",
      location: "Visakhapatnam, India",
      duration: "06/2018 – 06/2022",
      percentage: "84.6%",
      achievements: [
        "Graduated with High Distinction",
        "Active member of coding club",
        "Participated in multiple hackathons"
      ]
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya College",
      location: "Visakhapatnam, India",
      duration: "06/2016 – 06/2018",
      percentage: "96.3%",
      achievements: [
        "Topped in Mathematics",
        "Science Olympiad participant"
      ]
    }
  ],

  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      status: "In Progress"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      status: "Completed"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "2021",
      status: "Completed"
    }
  ],

  awards: [
    {
      title: "Best New Graduate Performer",
      organization: "Tiger Analytics",
      year: "2022",
      description: "Recognized for outstanding performance in first year"
    },
    {
      title: "Client Appreciation Award",
      organization: "HP WEX Team",
      year: "2023",
      description: "For exceptional contribution to HP enterprise applications"
    }
  ],

  testimonials: [
    {
      name: "Sarah Johnson",
      position: "Senior Manager, HP WEX",
      company: "HP Inc.",
      text: "Raviteja's technical skills and dedication to quality have been instrumental in our project success. His ability to understand complex requirements and deliver elegant solutions is remarkable.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Lead Developer",
      company: "Tiger Analytics",
      text: "Working with Raviteja has been a pleasure. His React expertise and problem-solving abilities make him a valuable team member. Always delivers on time with exceptional quality.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Product Manager",
      company: "Tiger Analytics",
      text: "Raviteja transformed our ML platform vision into reality. His full-stack capabilities and attention to user experience exceeded our expectations.",
      rating: 5
    }
  ],

  projects: [
    {
      id: 1,
      title: "MLCORE Platform",
      description: "Comprehensive ML lifecycle management platform with data monitoring and model deployment capabilities",
      longDescription: "A sophisticated platform designed to simplify the machine learning lifecycle from data preprocessing to model deployment and monitoring. Features include automated drift detection, performance analytics, and user-friendly interfaces for both technical and non-technical users.",
      technologies: ["React", "Angular", "Python", "AWS", "Docker", "PostgreSQL"],
      category: "Enterprise Platform",
      status: "Production",
      timeline: "2022-2023",
      team: "5 developers",
      role: "Full-Stack Developer",
      challenges: ["Complex data visualization", "Real-time monitoring", "Scalable architecture"],
      solutions: ["Implemented efficient charting libraries", "Built WebSocket connections", "Designed microservices architecture"],
      impact: {
        users: "500+",
        efficiency: "60% reduction in deployment time",
        cost: "40% cost savings in ML operations"
      },
      images: ["/api/placeholder/600/400", "/api/placeholder/600/400"]
    },
    {
      id: 2,
      title: "Kellogg Profit Simulator Plus",
      description: "Advanced pricing analysis and demand transfer management tool",
      longDescription: "A comprehensive tool for analyzing pricing strategies, evaluating price change impacts, and managing demand transfer and cannibalization with globalization features.",
      technologies: ["React", "JavaScript", "Adobe XD", "CSS3", "REST APIs"],
      category: "Business Intelligence",
      status: "Production",
      timeline: "2023",
      team: "3 developers",
      role: "Frontend Developer",
      challenges: ["Complex data visualization", "Performance optimization", "Responsive design"],
      solutions: ["Implemented virtual scrolling", "Optimized rendering", "Mobile-first approach"],
      impact: {
        users: "200+",
        efficiency: "40% improvement in pricing strategy",
        accuracy: "95% prediction accuracy"
      },
      images: ["/api/placeholder/600/400", "/api/placeholder/600/400"]
    },
    {
      id: 3,
      title: "HP Enterprise Applications Suite",
      description: "Series of applications for HP IT administrators including dashboards and simulators",
      longDescription: "A comprehensive suite of applications designed for HP IT administrators, featuring real-time dashboards, device simulators, and anomaly detection systems.",
      technologies: ["React", "AWS Lambda", "API Gateway", "EC2", "DynamoDB"],
      category: "Enterprise Tools",
      status: "Production",
      timeline: "2023-Present",
      team: "4 developers",
      role: "Full-Stack Developer",
      challenges: ["Real-time data processing", "Scalable architecture", "Multi-region deployment"],
      solutions: ["Implemented serverless architecture", "Used CDN for global delivery", "Built auto-scaling solutions"],
      impact: {
        users: "1000+",
        efficiency: "50% reduction in admin tasks",
        uptime: "99.9% system reliability"
      },
      images: ["/api/placeholder/600/400", "/api/placeholder/600/400"]
    }
  ]
};