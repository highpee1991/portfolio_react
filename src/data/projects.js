const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce website built for a client, featuring product listing, cart functionality, and payment integration.",
    liveDemo: "https://www.aafoodstore.com/home",
    github:
      "https://github.com/highpee1991/authentic-afrobeats-full-stack-project",
    techStack: ["React", "Styled Components", "Supabase", "Stripe API"],
    challenges: [
      "Implementing secure authentication with supabase",
      "Integrating real-time cart updates",
      "Optimizing performance for mobile devices",
    ],
    image: "/assets/portfolio/e_commerce.png",
  },
  {
    title: "Relitorin Web Client",
    description:
      "A business website for Relitorin International showcasing services and handling customer inquiries.",
    liveDemo: "https://relitorin-web.vercel.app/",
    github: "https://github.com/highpee1991/relitorin-web",
    techStack: ["React", "Vite", "Styled Components ", "MailerJS"],
    challenges: [
      "Building multiple responsive pages for company sections",
      "Implementing contact form with MailerJS for backend email support",
      "Ensuring fast load speed with Vite bundling",
    ],
    image: "/assets/portfolio/rel.png",
  },
  {
    title: "Expense Tracker App",
    description:
      "A simple expense tracking app to help users record and visualize daily spending habits.",
    liveDemo: "https://expense-app-cyan.vercel.app/",
    github: "https://github.com/highpee1991/expense-app",
    techStack: ["React", "JavaScript", "CSS", "Context API"],
    challenges: [
      "Handling unique ID errors across multiple components",
      "Implementing a global state management for transactions",
      "Designing an intuitive, clean interface for users",
    ],
    image: "/assets/portfolio/expense.png",
  },
  {
    title: "Notepad App",
    description:
      "A minimal and responsive notepad for quick note-taking with a clean UI.",
    liveDemo: "https://notepad-alpha.vercel.app/",
    github: "https://github.com/highpee1991/Notepad",
    techStack: ["React", "CSS", "Local Storage"],
    challenges: [
      "Added mobile responsiveness for better usability",
      "Storing and retrieving notes from local storage",
      "Implementing text editing and state saving logic",
    ],
    image: "/assets/portfolio/note.png",
  },

  {
    title: "Trivia Quiz App",
    description:
      "A fun and interactive quiz game app that generates trivia questions using an API.",
    liveDemo: "https://trivia-quiz-phi.vercel.app/",
    github: "https://github.com/highpee1991/Trivia-quiz",
    techStack: ["React", "JavaScript", "CSS", "Open Trivia API"],
    challenges: [
      "Consuming and displaying trivia questions from an API",
      "Managing question states and answers",
      "Improving UX by cleaning up console logs and unnecessary renders",
    ],
    image: "/assets/portfolio/trivia.png",
  },
  {
    title: "Stake Strategy App",
    description:
      "A staking strategy planner for betting systems, helping users track and manage session-based staking progress using visual insights.",
    liveDemo: "https://stake-strategy.vercel.app/",
    github: "https://github.com/highpee1991/Stake-strategy",
    techStack: ["React", "Tailwind CSS", "Redux Toolkit", "Vite"],
    challenges: [
      "Persisting session count and staking data across reloads using local storage",
      "Creating modular and reusable features with Redux Toolkit",
      "Designing a clean, responsive UI using Tailwind CSS",
    ],
    image: "/assets/portfolio/stake.png",
  },
];

export default projects;
