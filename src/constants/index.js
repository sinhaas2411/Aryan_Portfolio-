export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Experience',
    href: '#work',
  },
  {
    id: 4,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review: "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects."
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review: "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional! Fantastic work."
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech',
    img: 'assets/review3.png',
    review: "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding."
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review: "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch."
  }
];

export const myProjects = [
  {
    title: 'Park & Ride: Smart Urban Mobility Platform',
    desc: 'A comprehensive Spring Boot microservice ecosystem integrating Leaflet.js and OpenStreetMap for urban mobility solutions. Features include data-driven ride-sharing services and real-time analytics dashboard.',
    subdesc: 'Built with Spring Boot, Spring Data JPA, Leaflet.js, and Bootstrap, serving 1,000+ simulated users with real-time analytics and congestion simulation.',
    href: 'https://github.com/sinhaas2411/park-and-ride',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Spring Boot',
        path: '/assets/spring.svg',
      },
      {
        id: 2,
        name: 'Java',
        path: 'assets/java.png',
      },
      {
        id: 3,
        name: 'Leaflet.js',
        path: '/assets/leaflet.png',
      },
      {
        id: 4,
        name: 'Bootstrap',
        path: '/assets/bootstrap.png',
      },
    ],
  },
  {
    title: 'Conversational AI Chatbot',
    desc: 'An advanced Amazon Lex-Lambda chatbot processing 100+ intents with 98% accuracy across 1,000+ interaction scenarios. Integrated with Twilio for enhanced user engagement.',
    subdesc: 'Built with Amazon Lex v2, AWS Lambda, Boto3, and Twilio, demonstrating 25% improvement in user engagement metrics and 20% reduction in booking interaction times.',
    href: 'https://drive.google.com/file/d/174fRxY9w1NT4UQxmYM9QLoRmk9O7Ucrq/view',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'AWS Lex',
        path: '/assets/aws.svg',
      },
      {
        id: 2,
        name: 'Python',
        path: 'assets/python.png',
      },
      {
        id: 3,
        name: 'Boto3',
        path: '/assets/boto3.png',
      },
      {
        id: 4,
        name: 'Twilio',
        path: '/assets/twilio.png',
      },
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Enterprise Cloud Solutions',
    pos: 'Cloud Computing Intern',
    duration: 'May 2024 - Jul 2024',
    title: "Engineered 5+ AWS Lambda and Amazon Lex prototypes, enhancing system scalability by 20% across multi-cloud environments. Optimized data processing workflows using Boto3, achieving 30% performance improvement.",
    icon: '/assets/aws.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Google Developer Student Clubs',
    pos: 'AI & Software Development Trainee',
    duration: 'May 2024',
    title: "Developed 3 advanced generative AI models using PyTorch, ranking in top 16% (80/500+) of Generative AI Challenge. Implemented comprehensive unit testing strategy, improving code precision by 20%.",
    icon: '/assets/google.svg',
    animation: 'clapping',
  },
];

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Java', 'Python', 'JavaScript', 'C++']
  },
  {
    category: 'Cloud Technologies',
    items: ['AWS Lambda', 'Amazon Lex', 'Boto3', 'Terraform', 'Kubernetes']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Spring Boot', 'React', 'Node.js', 'Flutter']
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL', 'H2']
  },
  {
    category: 'Developer Tools',
    items: ['Git', 'Docker', 'Jenkins', 'CI/CD Pipelines']
  }
];

export const education = [
  {
    school: 'Bennett University',
    location: 'Greater Noida, India',
    degree: 'Bachelor of Science in Computer Science',
    duration: 'Sep 2022 - Present',
    gpa: 'CGPA: 7.92/10.0'
  },
  {
    school: 'St. Thomas College',
    location: 'Lucknow, India',
    degree: 'High School Diploma',
    duration: 'May 2022',
    achievement: 'Academic Excellence Award'
  }
];
