import { is } from "@react-three/fiber/dist/declarations/src/core/utils";
import { ckad, practitioner, solution_architect, terraform_cert } from "../static";
import { title } from "process";
import { comma } from "postcss/lib/list";

let badges: Badge[] = [
  {
    name: "CKAD - Certified Kubernetes Application Developer",
    badge: ckad.src,
    link: "https://www.credly.com/badges/5396b331-4edb-4df4-8707-622d17e417d9/public_url",
  },
  {
    name: "AWS Certified Solutions Architect",
    badge: solution_architect.src,
    link: "https://www.credly.com/badges/60a34dc7-0735-41fb-b92c-930fc9922bae/linked_in_profile",
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    badge: terraform_cert.src,
    link: "https://www.credly.com/badges/ff42c6c7-1d83-4609-b678-c695ed78667a/public_url",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    badge: practitioner.src,
    link: "https://www.credly.com/badges/1e437970-3a19-47c8-955e-ccd11a9974cd/linked_in_profile",
  },
];

let certificates: Certificate[] = [
  {
    title: "Kubernetes for the Absolute Beginners - Hands-on Tutorial",
    issuedBy: "KodeKloud",
    instructor: "Mumshad Mannambeth",
  },
  {
    title: "Docker Training Course for the Absolute Beginner",
    issuedBy: "KodeKloud",
    instructor: "Mumshad Mannambeth",
  },
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
    title: "Story3",
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
