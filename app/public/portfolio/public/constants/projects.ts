import { fastapi, tailwind } from "@/app/public/static";
import { aws, js, mysql, node, openai, python, react, ts } from "../static";

let portProjects: PortProjects[] = [
  {
    title: "HealthBridge AI",
    key: "HealthBridgeAI",
    description: "AI platform removes language barriers in healthcare communication.",
    tags: ["React", "AWS", "OpenAI"],
    tagImg: [react.src, aws.src, openai.src],
    url: "projects/HealthBridgeAI",
    when: "2024",
  },
  {
    title: "MiResume",
    key: "MiResume",
    description: "Generates personalized resumes using LaTeX and OpenAI.",
    tags: ["React", "TypeScript"],
    tagImg: [react.src, ts.src],
    url: "projects/MiResume",
    when: "2024",
  },
  {
    title: "SkillAgent",
    key: "SkillAgent",
    description: "Helps users acquire new skills efficiently using OpenAI Assistant.",
    tags: ["React", "TypeScript", "OpenAI"],
    tagImg: [react.src, ts.src, openai.src],
    url: "projects/SkillAgent",
    when: "2024",
  },
  {
    title: "Story3",
    key: "Story3",
    description: "AI-powered storytelling with customization and performance.",
    tags: ["React", "OpenAI"],
    tagImg: [react.src, openai.src],
    url: "projects/Story3",
    when: "2024",
  },
  {
    title: "HealthHub",
    key: "HealthHub",
    description: "Healthcare platform for appointments and health alerts.",
    tags: ["React", "AWS"],
    tagImg: [react.src, aws.src],
    url: "projects/HealthHub",
    when: "2023",
  },
  {
    title: "SecureFileStore",
    key: "SecureFileStore",
    description: "Secure file storage with encryption for user data.",
    tags: ["Python", "AWS", "MySQL"],
    tagImg: [python.src, aws.src, mysql.src],
    url: "projects/SecureFileStore",
    when: "2022",
  },
];

export { portProjects };
