import { presidio, toast, zoho, faaster } from "../static";

let portExperience: IExperience[] = [
  {
    company: "Presidio",
    role: "Associate Engineer",
    type: "Full-time",
    location: "Chennai, Tamil Nadu, India",
    duration: "Sep 2023 - Jul 2024",
    length: "11 months",
    description:"Developed internal learning platforms and retro tools using React and AWS with a serverless approach. Worked on projects involving WebRTC, CI/CD pipeline design, and mobile app development. Gained hands-on experience with Azure, DevOps, Flutter, Kotlin, AWS, and React Native through various trainings and projects.",
    skills: ["Amazon Web Services (AWS)", "React.js"],
    logo: presidio.src,
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
  },
  {
    company: "Zoho Corporation",
    role: "Web Development Intern",
    type: "Internship",
    location: "Chennai, Tamil Nadu, India",
    duration: "May 2019 - May 2019",
    length: "1 month",
    description:
      "Built an end-to-end Node.js app to send push notifications to users. Developed a web plugin to generate customized thumbnails of images",
    skills: ["Node.js"],
    logo: zoho.src,
  },
];

export default portExperience;
