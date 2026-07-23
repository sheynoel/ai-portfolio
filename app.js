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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Shane Noel Pelayo | AI Software Engineer', projects });
});

app.use((req, res) => {
  res.status(404).render('pages/404', { title: 'Page Not Found' });
});

app.listen(port, () => {
  console.log(`Portfolio site running at http://localhost:${port}`);
});
