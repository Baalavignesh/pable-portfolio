import { faaster, presidio, toast, zoho, motate, gmu } from "../static";
import { IExperience } from "../models/experience";

let experience: IExperience[] = [
  {
    company: "George Mason University",
    role: "Graduate Research Assistant",
    type: "Part-time",
    location: "Fairfax, Virginia, United States",
    duration: "Aug 2025 - Present",
    length: "2 months",
    description: "Researching game theory applications using Multi-Agent Reinforcement Learning (MARL) with Python and RLlib, implementing Q-learning algorithms to model strategic interactions in competitive business environments. Investigating the Bertrand competition model through experimental simulations to analyze pricing strategies, Nash equilibrium convergence, and market dynamics in various scenarios.",
    bullets: [
      "Built a Q-learning simulation framework modeling Bertrand price competition between two firms across parallel markets, implementing the full economic model (demand functions, profit functions, Nash equilibrium benchmarks) and a custom convergence-detection algorithm",
      "Designed and ran an 'algorithmic collusion' experiment showing Q-learning agents tacitly converge to supra-competitive prices above the Bertrand-Nash equilibrium, including a post-convergence undercut experiment to test deviation incentives",
      "Developed a multi-agent LLM simulation on Google DeepMind's Concordia framework, modeling a two-stage cyber-conflict wargame (9 subgames + a 3x3 meta-game) to test whether LLM-backed agents' strategic decisions align with formal game-theoretic equilibria",
      "Implemented five distinct agent decision-making personas (rational expected-utility, bounded-rational/satisficing, prospect-theory, hawkish, retaliatory) and built cross-play infrastructure to run asymmetric matchups between mismatched agent types",
      "Built supporting research tooling including a parallelized batch simulator (multiprocessing), a results dashboard (React), and configurable LLM backends (Ollama, Gemini) for running experiments locally and in the cloud",
    ],
    skills: ["Python", "Multi-Agent Reinforcement Learning", "RLlib", "Game Theory"],
    logo: gmu.src,
    url: "https://www.gmu.edu/"
  },
  {
    company: "Motate",
    role: "Software Engineer",
    type: "Internship",
    location: "United States",
    duration: "May 2025 - Aug 2025",
    length: "4 months",
    description: "Building a serverless multilingual content platform using AWS Lambda/API Gateway with automated scaling. Implemented Terraform/GitHub Actions for AWS environments and optimized DynamoDB schemas with secondary indexes for improved query performance.",
    bullets: [
      "Architected and built the complete cloud infrastructure (frontend, backend, and AWS resources) from the ground up as an early engineering hire, standing up dev and production environments end-to-end",
      "Designed a CI/CD pipeline using GitHub Actions and Terraform, so every push automatically deployed infrastructure-as-code changes across both environments with zero manual provisioning",
      "Built the video processing pipeline for an AI dubbing product, orchestrating lip-sync generation (AWS SageMaker), audio translation, and transcription through AWS Step Functions",
      "Integrated and deployed open-source lip-sync models on SageMaker, adapting third-party GitHub packages into a production-ready cloud inference workflow",
      "Optimized DynamoDB schemas with secondary indexes to improve query performance across the platform",
    ],
    skills: ["Amazon Web Services (AWS)", "Terraform", "Next.js"],
    logo: motate.src,
    url: "https://www.linkedin.com/company/motate-us/posts/?feedView=all"
  },
  {
    company: "Presidio",
    role: "Associate Engineer",
    type: "Full-time",
    location: "Chennai, Tamil Nadu, India",
    duration: "Sep 2023 - Jul 2024",
    length: "11 months",
    description:"Developed internal learning platforms and retro tools using React and AWS with a serverless approach. Worked on projects involving WebRTC, CI/CD pipeline design, and mobile app development. Gained hands-on experience with Azure, DevOps, Flutter, Kotlin, AWS, and React Native through various trainings and projects.",
    bullets: [
      "Built an internal employee recognition/awards platform with a multi-cloud architecture -- Azure AD/SSO for authentication, AWS (Lambda, database, microservices) for the backend",
      "Developed the awards platform's backend as Node.js microservices on AWS Lambda, with a React frontend for viewing award history, recipients, and award dates",
      "Contributed to internal enterprise tooling, including a learning platform and other retro tools, alongside the awards system",
      "Gained hands-on experience with CI/CD pipeline design and mobile app development (Flutter, Kotlin, React Native) through internal trainings and projects",
      "Worked on the Sorenson client engagement as part of the Mercury team -- using WebRTC to reproduce reported bugs, perform root-cause analysis, and deliver fixes for production issues",
    ],
    skills: ["Amazon Web Services (AWS)", "React.js"],
    logo: presidio.src,
    url: "https://www.linkedin.com/company/presidio-/posts/?feedView=all"
  },
  {
    company: "Toast",
    role: "Software Engineer Intern",
    type: "Internship",
    location: "Chennai, Tamil Nadu, India",
    duration: "Jun 2022 - Jul 2022",
    length: "2 months",
    description: "Developed a full-stack application using React and AWS services, focusing on AWS architecture. Utilized API Gateway for request management, Lambda for serverless computing, and DynamoDB for scalable data storage. Gained experience in serverless architecture and coding best practices while optimizing both frontend and backend components.",
    skills: ["Amazon Web Services (AWS)", "React.js"],
    logo: toast.src,
    url: "https://www.linkedin.com/company/toast-inc/posts/?feedView=all"
  },
  {
    company: "Zoho",
    role: "Software Engineer Intern",
    type: "Internship",
    location: "Chennai, Tamil Nadu, India",
    duration: "May 2021 - Nov 2021",
    length: "7 months",
    description:
      "Developed an application in Angular using the Zoho Catalyst. Used NgRx for state management and implemented authentication with AuthGuard and Services. Developed a product using Node.js called Impact Analyzer. Found files affected between two git commits using AST traversal",
    skills: ["Node.js", "AngularJS"],
    logo: zoho.src,
    url: "https://www.linkedin.com/company/zoho/posts/?feedView=all"
  },
  {
    company: "FASSTER Vyazhan Technologies",
    role: "App Developer Intern",
    type: "Internship",
    location: "Tamil Nadu, India",
    duration: "Feb 2020 - Jun 2020",
    length: "5 months",
    description:
      "In the early stages of working with a startup, I developed the Flutter UI/UX for an image-to-text extraction app and designed the UI/UX for a new matrimony application, focusing on creating intuitive and user-friendly interfaces in a fast-paced environment.",
    skills: ["Flutter"],
    logo: faaster.src,
    url: "https://www.linkedin.com/company/vyazhan-technologies/about/"
  },
  // {
  //   company: "Zoho Corporation",
  //   role: "Web Development Intern",
  //   type: "Internship",
  //   location: "Chennai, Tamil Nadu, India",
  //   duration: "May 2019 - May 2019",
  //   length: "1 month",
  //   description:
  //     "Built an end-to-end Node.js app to send push notifications to users. Developed a web plugin to generate customized thumbnails of images",
  //   skills: ["Node.js"],
  //   logo: zoho.src,
  //   url: "https://www.linkedin.com/company/zoho/posts/?feedView=all"
  // },
];

export default experience;
