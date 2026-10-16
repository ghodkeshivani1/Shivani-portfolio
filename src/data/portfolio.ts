export const profile = {
  name: 'Shivani Ghodke',
  title: 'Computer Science & Engineering Student',
  titles: [
    'Aspiring Software Engineer',
    'Java & C Programmer',
    'Technology Enthusiast',
    'Creative Problem Solver',
  ],
  tagline: 'Building Skills. Creating Solutions. Shaping the Future with Technology.',
  altHeadline: 'Curious Mind. Creative Thinker. Future Software Engineer.',
  intro:
    "I turn curiosity into code, ideas into projects, and learning into opportunities. Explore my journey in software development, emerging technologies, and student leadership.",
  about:
    "I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at Shri Siddheshwar Women's College of Engineering, Solapur. My journey in technology is driven by curiosity, a willingness to learn, and the desire to turn concepts into working solutions. I have explored programming, web development, academic software projects, and electric-vehicle technology through hands-on learning experiences.\n\nBeyond academics, I value teamwork, leadership, discipline, and collaboration. My participation in sports and student initiatives has helped me appreciate the importance of working together, taking responsibility, and continuously improving.\n\nI believe that every project, challenge, and learning opportunity is a step toward becoming a better engineer.",
  philosophy: 'Learn with curiosity. Build with purpose. Grow through collaboration.',
  college: "Shri Siddheshwar Women's College of Engineering, Solapur, Maharashtra, India",
  linkedin: 'https://www.linkedin.com/in/shivani-ghodke-6b812a397/',
  email: '', // Replace with your professional email (e.g., shivani.ghodke@email.com)
  github: '', // Replace with your GitHub profile URL
  resumeUrl: '/Shivani_Ghodke_Professional_Resume.docx',
  profileImage: '/image.jpeg',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const aboutCards = [
  {
    num: '01',
    title: 'Technical Growth',
    desc: 'Learning programming fundamentals, software development, and emerging technologies.',
  },
  {
    num: '02',
    title: 'Practical Learning',
    desc: 'Applying concepts through academic projects, internships, and experimentation.',
  },
  {
    num: '03',
    title: 'Leadership & Teamwork',
    desc: 'Contributing to campus initiatives and collaborating with others to achieve common goals.',
  },
];

export const skillsData = [
  {
    category: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'C', level: 'Working knowledge' },
      { name: 'Java', level: 'Working knowledge' },
      { name: 'Python', level: 'Foundational knowledge' },
    ],
  },
  {
    category: 'Web Development',
    icon: 'Globe',
    skills: [
      { name: 'HTML', level: 'Working knowledge' },
      { name: 'CSS', level: 'Working knowledge' },
    ],
  },
  {
    category: 'CS Fundamentals',
    icon: 'Cpu',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Learning & practising' },
      { name: 'Problem-solving', level: 'Developing' },
      { name: 'File handling', level: 'Practised' },
      { name: 'Object-oriented programming', level: 'Learning' },
      { name: 'Debugging & logical thinking', level: 'Developing' },
    ],
  },
  {
    category: 'Technology Interests',
    icon: 'Sparkles',
    skills: [
      { name: 'Artificial Intelligence', level: 'Exploring' },
      { name: 'Electric Vehicles', level: 'Explored through internship' },
      { name: 'Battery Management Systems', level: 'Studied' },
      { name: 'Software Development', level: 'Building skills' },
      { name: 'Web Technologies', level: 'Learning' },
    ],
  },
];

export const projects = [
  {
    title: 'Hospital Management System',
    tech: ['C'],
    description:
      'A console-based Hospital Management System designed to simplify basic patient and doctor record management.',
    features: [
      'Add and view patient records',
      'Add and view doctor records',
      'Store and retrieve information using file handling',
      'Generate bills based on doctor fees and medicine costs',
      'Delete patient records',
    ],
    keyLearning:
      'Structures, functions, file handling, modular programming, and record management.',
    link: '', // Add GitHub or live demo link if available
    linkLabel: 'Project Details',
  },
  {
    title: 'Personal Portfolio Website',
    tech: ['HTML', 'CSS'],
    description:
      'A personal website created to practise web development and present my technical background, projects, and achievements professionally.',
    features: [],
    keyLearning: 'Webpage structure, styling, layout design, and personal branding.',
    link: '',
    linkLabel: 'Project Details',
  },
  {
    title: 'EV Battery Management System Simulation',
    org: 'Codec Technologies',
    tech: ['EV Technology', 'Simulation'],
    description:
      'An internship-related project focused on exploring Battery Management System concepts and simulation in the electric-vehicle domain.',
    features: [],
    areas: [
      'Battery Management System fundamentals',
      'Battery State of Charge (SOC) and State of Health (SOH) concepts',
      'Battery monitoring and thermal-management concepts',
      'Simulation-based modelling',
    ],
    keyLearning:
      'Understanding EV battery systems and their role in electric-vehicle performance and safety.',
    link: '',
    linkLabel: 'Project Details',
  },
];

export const experience = [
  {
    role: 'EV Technology Intern',
    org: 'Codec Technologies',
    focus: 'Battery Management System (BMS) Simulation',
    description:
      'Completed an EV Technology internship that introduced me to electric-vehicle technology and battery-management concepts. The internship provided an opportunity to explore battery-system fundamentals, simulation-based modelling, and the role of battery monitoring in electric vehicles.',
    skills: [
      'Electric Vehicle Technology',
      'Battery Management System fundamentals',
      'SOC and SOH concepts',
      'Battery monitoring concepts',
      'Simulation-based problem-solving',
      'Technical research and learning',
    ],
    certificateUrl: '', // Add certificate link/file when available
  },
];

export const leadership = {
  title: 'TATA IMAGINATION CHALLENGE 2026',
  role: 'Campus Ambassador',
  description:
    'Selected as a Campus Ambassador for the Tata Imagination Challenge 2026, with an interest in encouraging student participation, sharing opportunities, and promoting creative thinking.',
  strengths: [
    'Student engagement',
    'Communication and collaboration',
    'Creative thinking',
    'Initiative and responsibility',
    'Teamwork',
  ],
};

export const certifications = [
  {
    title: 'HP LIFE Ambassador Badge',
    org: 'HP LIFE',
    date: '',
    imageUrl: '', // Add certificate image path when available
    credentialUrl: '', // Add credential link when available
  },
  {
    title: 'Campus Crew 100K Milestone Honor Certificate',
    org: 'Campus Crew',
    date: '',
    imageUrl: '',
    credentialUrl: '',
  },
  {
    title: 'EV Technology Internship',
    org: 'Codec Technologies',
    date: '',
    imageUrl: '',
    credentialUrl: '',
  },
];

export const sports = [
  {
    achievement: 'Division-Level Baseball',
    icon: 'Dumbbell',
  },
  {
    achievement: 'District-Level Kho-Kho',
    icon: 'Activity',
  },
];

export const sportsQualities = [
  'Teamwork and collaboration',
  'Discipline and consistency',
  'Time management',
  'Resilience',
  'Working toward shared goals',
];

export const sportsQuote =
  'Great results come from individual effort, shared responsibility, and a team that moves forward together.';

export const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    institution:
      "Shri Siddheshwar Women's College of Engineering, Solapur, Maharashtra, India",
    status: 'Currently pursuing',
    graduationYear: '', // Add expected graduation year (e.g., 2027)
    cgpa: '', // Add current CGPA or percentage when available
    coursework: '', // Add relevant coursework when available
    achievements: '', // Add academic achievements when available
  },
];
