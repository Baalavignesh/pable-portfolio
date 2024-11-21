import { is } from "@react-three/fiber/dist/declarations/src/core/utils";
import { practitioner, solution_architect } from "../static";
import { title } from "process";
import { comma } from "postcss/lib/list";

let badges: Badge[] = [
  {
    name: "AWS Certified Solutions Architect",
    badge: solution_architect.src,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    badge: practitioner.src,
  },
];

let certificates: Certificate[] = [
  {
    title: "The Complete 2024 Web Development Bootcamp",
    issuedBy: "Udemy",
    instructor: "Dr. Angela Yu",
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuedBy: "Amazon Web Services",
    instructor: "Amazon Web Services",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuedBy: "Amazon Web Services",
    instructor: "Amazon Web Services",
  },
  {
    title: "Microsoft Excel - From Beginner to Expert in 6 Hours",
    issuedBy: "Udemy",
    instructor: "Todd McLeod",
  },
  {
    title: "Blockchain Basics",
    issuedBy: "Coursera",
    instructor: "University at Buffalo",
  },
];

let hackathons: Hackathon[] = [
  {
    title: "Story3 Hackathon",
    issuedBy: "HackerEarth",
    company: "Story3",
    award: "Best Prototype Award",
    project: "NewEnd - GenMode",
  },
  {
    title: "DataPalooza",
    issuedBy: "Devpost",
    company: "DataPalooza",
    award: "Honorable Mentions",
    project: "HealthHub",
  },
];

export { badges, certificates, hackathons };
