import { fastapi, tailwind } from "@/app/public/static";
import { aws, js, mysql, nextjs, node, openai, python, react, ts } from "../static";

let portProjects: PortProjects[] = [
  {
    title: "Pager 2077",
    key: "Pager2077",
    description: "Retro-futuristic messaging app with 90s pager aesthetics and T9 input.",
    tags: ["React Native", "TypeScript"],
    tagImg: [react.src, ts.src],
    url: "projects/Pager2077",
    when: "2025",
  },
  {
    title: "StudyQuest",
    key: "StudyQuest",
    description: "Gamified learning platform with AI-powered course generation.",
    tags: ["Next.js", "TypeScript", "OpenAI"],
    tagImg: [nextjs.src, ts.src, openai.src],
    url: "projects/StudyQuest",
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
    title: "MiResume",
    key: "MiResume",
    description: "Generates personalized resumes using LaTeX and OpenAI.",
    tags: ["React", "TypeScript"],
    tagImg: [react.src, ts.src],
    url: "projects/MiResume",
    when: "2024",
  },
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
    title: "Story3",
    key: "Story3",
    description: "AI-powered storytelling with customization and performance.",
    tags: ["React", "OpenAI"],
    tagImg: [react.src, openai.src],
    url: "projects/Story3",
    when: "2024",
  },
];

export { portProjects };
