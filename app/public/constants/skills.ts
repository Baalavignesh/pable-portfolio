import js from "../../public/static/skills/js.png";
import ts from "../../public/static/skills/ts.png";
import python from "../../public/static/skills/python.svg";
import html from "../../public/static/skills/html.png";
import css from "../../public/static/skills/css.png";
import dart from "../../public/static/skills/dart.svg";
import c from "../../public/static/skills/c.svg";
import cpp from "../../public/static/skills/c++.svg";

import react from "../../public/static/skills/react.png";
import nextjs from "../../public/static/skills/nextjs.svg";
import angular from "../../public/static/skills/angular.png";
import express from "../../public/static/skills/express.svg";
import net from "../../public/static/skills/net.svg";
import fastapi from "../../public/static/skills/fastapi.png";

import aws from "../../public/static/skills/aws.svg";
import azure from "../../public/static/skills/azure.svg";
import docker from "../../public/static/skills/docker.png";
import firebase from "../../public/static/skills/firebase.png";
import git from "../../public/static/skills/git.png";
import node from "../../public/static/skills/node.svg";
import linux from "../../public/static/skills/linux.svg";
import mongo from "../../public/static/skills/mongo.svg";
import mysql from "../../public/static/skills/mysql.png";
import postgresql from "../../public/static/skills/postgresql.png";
import postman from "../../public/static/skills/postman.png";
import redux from "../../public/static/skills/redux.svg";
import bootstrap from "../../public/static/skills/bootstrap.png";
import windows from "../../public/static/skills/windows.png";
import tailwind from "../../public/static/skills/tailwind.svg";

let myskills: ISkills = {
  daily: [
    {
      image: react.src,
      heading: "React",
      subheading: "Javascript Library",
    },
    {
      image: nextjs.src,
      heading: "NextJs",
      subheading: "React Framework",
    },
    {
      image: ts.src,
      heading: "TypeScript",
      subheading: "JavaScript Superset",
    },
    {
      image: js.src,
      heading: "JavaScript",
      subheading: "Programming Language",
    },
    {
      image: express.src,
      heading: "Express",
      subheading: "Node.js Framework",
    },
    {
      image: python.src,
      heading: "Python",
      subheading: "Programming Language",
    },
    {
      image: aws.src,
      heading: "AWS",
      subheading: "Cloud Services",
    },
    {
      image: git.src,
      heading: "Git",
      subheading: "Version Control",
    },
    {
      image: firebase.src,
      heading: "Firebase",
      subheading: "Backend as a Service",
    },
    {
      image: mysql.src,
      heading: "MySQL",
      subheading: "Database",
    },
    {
      image: tailwind.src,
      heading: "Tailwind CSS",
      subheading: "CSS Framework",
    },
  ],
  other: [
    {
      image: dart.src,
      heading: "Dart",
      subheading: "Programming Language",
    },
    {
      image: c.src,
      heading: "C",
      subheading: "Programming Language",
    },
    {
      image: cpp.src,
      heading: "C++",
      subheading: "Programming Language",
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
      image: docker.src,
      heading: "Docker",
      subheading: "Containerization",
    },
    {
      image: mongo.src,
      heading: "MongoDB",
      subheading: "Database",
    },
    {
      image: postgresql.src,
      heading: "PostgreSQL",
      subheading: "Database",
    },
    {
      image: postman.src,
      heading: "Postman",
      subheading: "API Testing",
    },
    {
      image: node.src,
      heading: "Node.js",
      subheading: "JavaScript Runtime",
    },
    {
      image: redux.src,
      heading: "Redux",
      subheading: "State Management",
    },
  ],
};

export default myskills;
