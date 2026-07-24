const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const projects = [
  {
    title: 'Mobile-Based Automated Quail Feeding System',
    role: 'Lead Developer',
    year: '2025',
    status: 'Capstone',
    image: '/images/projects/quail_pg1.jpg',
    gallery: [
      '/images/projects/quail_pg1.jpg',
      '/images/projects/quail_pg2.jpg',
      '/images/projects/quail_pg3.jpg',
      '/images/projects/quail_pg4.jpg'
    ],
    description: 'Led the development of an automated mobile feeding system with real-time notifications.',
    technologies: ['Kotlin', 'Firebase', 'ESP32', 'Cursor AI'],
    overview: 'A mobile-connected feeding system designed to automate feeding schedules and give users timely updates on feeder activity.',
    contributions: ['Led the end-to-end application development', 'Connected the mobile experience to Firebase-backed events', 'Integrated ESP32 device communication and notifications'],
    challenges: 'Coordinating reliable communication between the mobile application, cloud services, and embedded hardware.',
    lessons: 'Effective IoT products depend on clear event flows, graceful failure states, and simple feedback for users.'
  },
  {
    title: 'ERP & Inventory Management System',
    role: 'Full Stack Web Developer Intern',
    year: '2025',
    status: 'Internship',
    image: '/images/projects/erp_pg1.jpg',
    gallery: [
      '/images/projects/erp_pg1.jpg',
      '/images/projects/erp_pg2.jpg',
      '/images/projects/erp_pg3.jpg',
      '/images/projects/erp_pg4.jpg'
    ],
    description: 'Developed backend APIs and frontend modules during my internship.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'REST API', 'Git', 'Jira', 'OpenAI Codex'],
    overview: 'An internal ERP and inventory platform supporting business workflows and inventory operations.',
    contributions: ['Developed backend REST API endpoints', 'Built and improved Vue.js frontend modules', 'Collaborated through GitHub and Jira workflows'],
    challenges: 'Working within an established codebase while protecting client and internal business information.',
    lessons: 'Clear API contracts, careful version control, and concise team communication make iterative delivery more reliable.'
  },
  {
    title: 'Medical Inventory Management System',
    role: 'Full Stack Developer',
    year: '2024',
    status: 'Completed',
    image: '/images/projects/med_pg1.jpg',
    gallery: [
      '/images/projects/med_pg1.jpg',
      '/images/projects/med_pg2.jpg',
      '/images/projects/med_pg3.jpg',
      '/images/projects/med_pg4.jpg'
    ],
    description: 'Built a system for managing medicine inventory and stock records.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    overview: 'A web application for organizing medicine inventory, tracking stock records, and supporting day-to-day inventory management.',
    contributions: ['Designed database-backed inventory workflows', 'Built responsive management interfaces', 'Implemented stock record handling'],
    challenges: 'Keeping inventory records clear and usable while accounting for frequent stock changes.',
    lessons: 'Data-heavy tools become easier to use when the most important actions and statuses remain visible.'
  },
  {
    title: 'Library Management System',
    role: 'Full Stack Developer',
    year: '2024',
    status: 'Completed',
    image: '/images/projects/lib_pg1.jpg',
    gallery: [
      '/images/projects/lib_pg1.jpg',
      '/images/projects/lib_pg2.jpg',
      '/images/projects/lib_pg3.jpg',
      '/images/projects/lib_pg4.jpg'
    ],
    description: 'Built a simple library management system with book and borrowing management.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    overview: 'A focused system for maintaining book records and managing borrowing activity in a simple, accessible interface.',
    contributions: ['Built book catalog and borrowing workflows', 'Designed relational MySQL data structures', 'Created responsive Bootstrap interfaces'],
    challenges: 'Modeling clear borrowing states while keeping the interface approachable for everyday users.',
    lessons: 'Small systems benefit from simple domain models and well-defined user flows.'
  },
  {
    title: 'AI Portfolio Website',
    role: 'Full Stack Developer',
    year: '2026',
    status: 'Current',
    image: '/images/projects/portfolio_pg1.jpg',
    gallery: [
      '/images/projects/portfolio_pg1.jpg',
      '/images/projects/portfolio_pg2.jpg',
      '/images/projects/portfolio_pg3.jpg'
    ],
    description: 'Responsive portfolio showcasing my software engineering and AI journey.',
    technologies: ['JavaScript', 'Vercel', 'Node.js', 'Express.js', 'EJS', 'Bootstrap'],
    overview: 'A responsive personal portfolio that presents my engineering work, experience, and AI-focused software development journey.',
    contributions: ['Structured the Express and EJS application', 'Designed responsive reusable portfolio sections', 'Added interactive Bootstrap-powered project details'],
    challenges: 'Creating a focused portfolio narrative while balancing visual polish, performance, and maintainability.',
    lessons: 'A portfolio is most effective when it gives each project a concise story, technical context, and clear outcome.'
  }
];

const skillCategories = [
  {
    title: 'Artificial Intelligence',
    icon: 'bi-stars',
    skills: [
      ['OpenAI Codex', 'AI-assisted software development and code iteration.'],
      ['ChatGPT', 'Research, debugging, and development support.'],
      ['Cursor', 'Using AI-powered tools to build and refine code.'],
      ['Claude', 'Exploring AI-assisted analysis and problem-solving.'],
      ['Prompt Engineering', 'Crafting focused prompts for coding and problem-solving.'],
      ['AI-assisted Development', 'Using AI to accelerate thoughtful software delivery.']
    ]
  },
  {
    title: 'Programming Languages',
    icon: 'bi-code-slash',
    skills: [
      ['JavaScript', 'Building interactive web and backend features.'],
      ['PHP', 'Developing full-stack web applications.'],
      ['Kotlin', 'Creating Android applications for connected systems.'],
      ['Java', 'Applying object-oriented programming principles.'],
      ['Python', 'Automating tasks and writing utility scripts.'],
      ['C++', 'Strengthening programming fundamentals.'],
      ['SQL', 'Writing database queries and designing data models.']
    ]
  },
  {
    title: 'Frameworks & Technologies',
    icon: 'bi-boxes',
    skills: [
      ['Node.js', 'Powering server-side portfolio features.'],
      ['Express.js', 'Structuring web routes and application logic.'],
      ['Laravel', 'Building backend APIs and business workflows.'],
      ['Vue.js', 'Developing responsive ERP interface modules.'],
      ['Bootstrap 5', 'Creating responsive, accessible interfaces.'],
      ['EJS', 'Building reusable server-rendered page views.'],
      ['Firebase', 'Connecting apps to realtime cloud services.']
    ]
  },
  {
    title: 'Software Engineering',
    icon: 'bi-diagram-3',
    skills: [
      ['Object-Oriented Programming (OOP)', 'Modeling maintainable application logic.'],
      ['Data Structures & Algorithms', 'Choosing efficient approaches to technical problems.'],
      ['REST API Development', 'Designing clear endpoints for connected applications.'],
      ['Database Design', 'Modeling reliable relational data workflows.'],
      ['Agile SDLC', 'Contributing through iterative team delivery.'],
      ['Software Architecture', 'Organizing systems around clear responsibilities.'],
      ['Problem Solving', 'Turning requirements into practical solutions.'],
      ['Debugging', 'Tracing issues and improving application reliability.']
    ]
  },
  {
    title: 'Databases',
    icon: 'bi-database',
    skills: [
      ['MySQL', 'Building data-backed inventory and library systems.'],
      ['PostgreSQL', 'Learning robust relational database development.'],
      ['Firebase Realtime Database', 'Synchronizing connected application events.'],
      ['Firebase Firestore', 'Managing cloud-hosted application data.']
    ]
  },
  {
    title: 'Developer Tools',
    icon: 'bi-tools',
    skills: [
      ['Git', 'Versioning code through collaborative workflows.'],
      ['GitHub', 'Collaborating on repositories and code changes.'],
      ['VS Code', 'Developing and debugging daily projects.'],
      ['Jira', 'Tracking development work during internship projects.'],
      ['Postman', 'Testing and validating REST API endpoints.'],
      ['XAMPP', 'Running local PHP and MySQL development environments.'],
      ['npm', 'Managing JavaScript packages and project scripts.'],
      ['Vercel', 'Deploying modern web projects.']
    ]
  },
  {
    title: 'Operating Systems & Platforms',
    icon: 'bi-pc-display',
    skills: [
      ['Linux Mint', 'Using a Linux environment for development.'],
      ['Windows', 'Developing and supporting desktop applications.'],
      ['Windows Server', 'Working with server administration fundamentals.'],
      ['Microsoft Entra ID (Azure AD)', 'Learning identity and access administration.'],
      ['Microsoft 365 Admin Center', 'Managing Microsoft 365 platform settings.']
    ]
  },
  {
    title: 'Currently Learning',
    icon: 'bi-mortarboard',
    learning: true,
    skills: [
      ['AI Engineering', 'Expanding practical AI systems expertise.'],
      ['n8n Automation', 'Exploring workflow automation and integrations.'],
      ['AI Agents', 'Learning autonomous task-oriented AI patterns.'],
      ['Model Context Protocol (MCP)', 'Exploring AI tool and context integrations.'],
      ['Advanced Node.js', 'Deepening backend application development skills.'],
      ['Advanced REST APIs', 'Improving scalable API design practices.']
    ]
  }
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Shane Noel Pelayo | AI Software Engineer', projects, skillCategories });
});

app.use((req, res) => {
  res.status(404).render('pages/404', { title: 'Page Not Found' });
});

app.listen(port, () => {
  console.log(`Portfolio site running at http://localhost:${port}`);
});
