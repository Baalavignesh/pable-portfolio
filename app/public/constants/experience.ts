import { faaster, presidio, toast, zoho, motate } from "../static";

let experience: IExperience[] = [
  {
    company: "Motate",
    role: "Software Engineer",
    type: "Internship",
    location: "United States",
    duration: "May 2025 - Present",
    length: "3 months",
    description: "Building a serverless multilingual content platform using AWS Lambda/API Gateway with automated scaling. Implemented Terraform/GitHub Actions for AWS environments and optimized DynamoDB schemas with secondary indexes for improved query performance.",
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
    skills: ["Amazon Web Services (AWS)", "React.js"],
    logo: presidio.src,
    url: "https://www.linkedin.com/company/presidio-/posts/?feedView=all"
  },
  {
    company: "Presidio",
    role: "Software Engineer Intern",
    type: "Internship",
    location: "Chennai, Tamil Nadu, India",
    duration: "Mar 2023 - Aug 2023",
    length: "6 months",
    description: "Completed foundational training in C#, Azure, GIT, and mobile app development, gaining a solid understanding of these technologies. Utilized this knowledge to develop and implement several internal applications for the organization, improving operational efficiency and streamlining internal processes.",
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
    url: "https://www.linkedin.com/company/zoho/posts/?feedView=all"
  },
];

export default experience;
