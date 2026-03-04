import { kubernetes } from "../portfolio/public/static";
import { nextjs, ts,  python, aws, git, firebase, mysql, c, cpp, angular, net, fastapi, azure, docker, mongo, postgresql, postman, node, redux, reactjs, flutter, terraform, swift } from "../static";


let myskills: ISkills = {
  daily: [
    {
      image: reactjs.src,
      heading: "React",
      subheading: "Javascript Library",
    },
    {
      image: python.src,
      heading: "Python",
      subheading: "Programming Language",
    },
    {
      image: node.src,
      heading: "Node.js",
      subheading: "JavaScript Runtime",
    },
    {
      image: ts.src,
      heading: "TypeScript",
      subheading: "JavaScript Superset",
    },
    {
      image: swift.src,
      heading: "Swift",
      subheading: "Programming Language",
    },
    {
      image: postgresql.src,
      heading: "PostgreSQL",
      subheading: "Database",
    },
  ],
  other: [
    {
      image: terraform.src,
      heading: "Terraform",
      subheading: "Infrastructure as Code",
    },
    {
      image: docker.src,
      heading: "Docker",
      subheading: "Containerization Platform",
    },
    {
      image: kubernetes.src,
      heading: "Kubernetes",
      subheading: "Container Orchestration",
    },
    {
      image: aws.src,
      heading: "AWS",
      subheading: "Cloud Services",
    },
    {
      image: mysql.src,
      heading: "MySQL",
      subheading: "Database",
    },
    {
      image: firebase.src,
      heading: "Firebase",
      subheading: "Backend as a Service",
    },
    {
      image: fastapi.src,
      heading: "FastAPI",
      subheading: "Web Framework",
    },
    {
      image: azure.src,
      heading: "Azure",
      subheading: "Cloud Services",
    },
    {
      image: mongo.src,
      heading: "MongoDB",
      subheading: "Database",
    },
    {
      image: redux.src,
      heading: "Redux",
      subheading: "State Management",
    },
    {
      image: flutter.src,
      heading: "Flutter",
      subheading: "UI Toolkit",
    },
    {
      image: angular.src,
      heading: "Angular",
      subheading: "Web Framework",
    },
    {
      image: net.src,
      heading: ".NET",
      subheading: "Framework",
    },
  ],
};

export default myskills;

// Simplified skills array for home page display
// Convention: Languages first, then skills. 
// All languages -> bg-indigo-600; all skills -> bg-emerald-500
export const portlang = [
  // Languages
  { name: "TypeScript", color: "bg-indigo-600" },
  { name: "React", color: "bg-indigo-600" },
  { name: "Python", color: "bg-indigo-600" },
  { name: "Node.js", color: "bg-indigo-600" },
  { name: "Swift", color: "bg-indigo-600" },
  { name: "MySQL", color: "bg-indigo-600" },

  // Skills
  { name: "AWS", color: "bg-emerald-500" },
  { name: "Docker", color: "bg-emerald-500" },
  { name: "Terraform", color: "bg-emerald-500" },
  // { name: "MongoDB", color: "bg-emerald-500" },
  
];
