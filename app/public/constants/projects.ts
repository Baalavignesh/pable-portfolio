import {
  convchemybg,
  healthbridgebg,
  healthhub,
  justpaintbg,
  miresumebg,
  myclipbookbg,
  securefilestorebg,
  seeyanonymouschatbg,
  shareitpythonbg,
  skillagentbg,
  social2,
  story3bg,
  vitruhealbg,
  donatelifebg,
} from "../static";

let allProjects: IProject[] = [
  {
    title: "Donate Life",
    key: "DonateLife",
    description: "Donate Life is a real-time blood donation platform that connects blood banks with nearby donors during emergencies. The platform uses geospatial search to find and notify potential donors via SMS and email, while also leveraging machine learning to predict future blood demand patterns.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "AWS", "Tailwind CSS"],
    bg: donatelifebg.src,
    inspiration: "Blood banks often struggle to maintain adequate supplies and quickly find donors during emergencies. Donate Life addresses this critical healthcare challenge by creating an efficient, technology-driven connection between blood banks and willing donors, potentially saving countless lives through timely donations.",
    technologies: "The platform utilizes React.js with Leaflet for interactive maps and Tailwind CSS for the frontend. The backend runs on Node.js and Express.js, with MongoDB's geospatial indexing enabling location-based donor searches. AWS services (Lambda, EC2, S3, SES) handle cloud infrastructure and notifications, while a machine learning model predicts blood demand trends.",
    what: "Donate Life revolutionizes blood donation by enabling real-time connections between blood banks and donors. Key features include instant SMS/email notifications to nearby donors, dynamic search radius expansion, interactive donor mapping, and AI-powered demand prediction. The platform ensures a reliable and efficient blood donation ecosystem.",
    github: "https://github.com/Baalavignesh/donatelife",
    when: "2024",
    other: "https://devpost.com/software/donate-life"
  },
  {
    title: "HealthBridge AI",
    key: "HealthBridgeAI",
    description: "HealthBridge AI is a telemedicine platform that breaks down language barriers in healthcare using AI-driven multilingual support. It enables seamless communication between patients and doctors through features like voice-based symptom analysis, intelligent doctor matching, and real-time translation.",
    tags: ["React", "FastAPI", "AWS", "OpenAI", "Tailwind CSS"],
    bg: healthbridgebg.src,
    inspiration: "The healthcare industry faces significant challenges in providing equitable care due to language barriers and cultural differences. HealthBridge AI aims to bridge this gap by leveraging AI technologies to create a more inclusive and accessible healthcare experience for patients from diverse linguistic backgrounds.",
    technologies: "The platform integrates multiple AI services including OpenAI for voice-to-text conversion, Hugging Face for symptom analysis, and Amazon Translate for multilingual support. The frontend is built with React and Tailwind CSS, while FastAPI powers the backend. DynamoDB handles data storage, and Socket.io will enable real-time communication features.",
    what: "HealthBridge AI revolutionizes telemedicine by offering AI-powered symptom analysis through voice messages, automated doctor specialization recommendations, and seamless multilingual communication. The platform matches patients with nearby doctors in real-time while ensuring language barriers don't impede quality healthcare delivery.",
    github: "https://github.com/Baalavignesh/HealthBridge-AI",
    when: "2024",
    other: "https://devpost.com/software/healthbridge-ai"
  },
  {
    title: "MiResume",
    key: "MiResume",
    description:
      "MiResume generates personalized resumes using a uniform template based on LaTeX formatting using OpenAI. This ensures that the final document is not only aesthetically pleasing but also professional and organized.",
    tags: ["React", "Node.js", "CosmoDB", "OpenAI", "Azure"],
    bg: miresumebg.src,
    inspiration:
      "Applying for part-time and summer internships often involves a tedious process of reading job descriptions and crafting personalized resumes and cover letters. This task can be extremely time-consuming, especially for students juggling assignments, college work, personal projects, and hobbies. MiResume aims to streamline this process, enabling users to create a tailored resume for their desired job role in under a minute.",
    technologies:
      "We harnessed the powerful capabilities of Microsoft Azure AI to develop MiResume. The application utilizes Microsoft Cosmos DB to store user information, allowing for seamless access by the AI services. This integration leverages the full spectrum of Azure’s AI tools for enhanced functionality and user experience.",
    what: "MiResume is an AI-powered tool that quickly creates tailored resumes for specific job roles. By analyzing job descriptions and user input, it generates a personalized, professionally formatted resume in under a minute using a LaTeX-based template. Built with Microsoft Azure AI and Cosmos DB, MiResume is ideal for students and job seekers needing high-quality resumes for internships and part-time roles.",
    github: "https://github.com/Baalavignesh/MiResume-React",
    when: "2024",
    other:"https://devpost.com/software/miresume"
  },
  {
    title: "SkillAgent",
    key: "SkillAgent",
    description:
      "SkillAgent helps users acquire new skills efficiently using AI. The platform generates personalized learning plans tailored to user preferences, enabling both individuals and businesses to streamline skill acquisition and onboarding processes.",
    tags: ["React", "Node.js", "Firebase", "OpenAI", "Tailwind CSS", "Vite.js"],
    bg: skillagentbg.src,
    inspiration:
      "The need to rapidly acquire skills for personal growth or professional onboarding can be daunting and time-intensive. SkillAgent aims to simplify this process by leveraging AI to create customized learning plans, making it easier for users and businesses to adapt to evolving skill demands in a fast-paced world.",
    technologies:
      "SkillAgent leverages modern technologies including React with Tailwind CSS for an interactive UI, Node.js with TypeScript for backend operations, and Firebase for authentication and data storage. OpenAI's Assistant powers personalized learning experiences, while Vite.js, Redux Toolkit, and Axios ensure a seamless development and user experience.",
    what: "SkillAgent is an AI-powered learning platform that helps users achieve skill development goals efficiently. It provides personalized learning plans, AI-tutor conversations, and tracks progress, making it an ideal tool for individuals seeking skill improvement and businesses streamlining employee onboarding processes.",
    github: "https://github.com/Baalavignesh/SkillAgent-React",
    when: "2024",
    other:"https://devpost.com/software/skillagent"
  },
  {
    title: "ConvChemy",
    key: "ConvChemy",
    description:
      "ConvChemy is an alchemy-based real-time multiplayer game where players challenge friends to create the most elements within a set time. Built with Convex for seamless real-time updates, the game delivers an intuitive and addictive gaming experience.",
    tags: ["React", "Convex", "Tailwind CSS"],
    bg: convchemybg.src,
    inspiration:
      "The inspiration behind ConvChemy stems from a passion for both gaming and science. By combining alchemy concepts with competitive gameplay, ConvChemy challenges players to engage in an intellectually stimulating yet fun experience.",
    technologies:
      "ConvChemy uses Convex as the backend to provide real-time updates without WebSocket complexities. The frontend is built with React and styled using Tailwind CSS, ensuring a dynamic and engaging gaming experience.",
    what: "ConvChemy allows players to host rooms, invite friends, and compete to create unique elements in a limited time. With seamless updates powered by Convex, players enjoy a collaborative and competitive environment where creativity and speed are key.",
    github: "https://github.com/Baalavignesh/ConvChemy",
    when: "2024",
    other:"https://devpost.com/software/convchemy"
  },
  {
    title: "Story3",
    key: "Story3",
    description:
      "NewEnd GenMode revolutionizes storytelling with AI-powered customization. Users can create personalized stories, explore narrative twists, and track story performance using the Story3 API, offering endless creative possibilities.",
    tags: ["React", "OpenAI", "Story3 API", "TypeScript", "Firebase"],
    bg: story3bg.src,
    inspiration:
      "NewEnd GenMode draws inspiration from the limitless potential of storytelling and the desire to put creative control in the hands of users. It combines AI innovation with interactive storytelling for a truly unique experience.",
    technologies:
      "The platform utilizes React for its interactive frontend, OpenAI for generating stories, Story3 API for analytics and twists, and Firebase for seamless data management and authentication.",
    what: "NewEnd GenMode enables users to generate AI-driven stories based on their preferences. With dynamic twists, narrative branches, and comprehensive analytics through Story3 API, it empowers storytellers to craft unique and immersive tales.",
    github: "https://github.com/Baalavignesh/NewEnd-GenMode",
    when: "2024",
    other:"https://devpost.com/software/healthhub-0czr47"
  },
  {
    title: "HealthHub",
    key: "HealthHub",
    description:
      "HealthHub is a comprehensive healthcare appointment platform enabling seamless doctor recommendations, appointment booking, and real-time community health alerts based on user symptoms and location.",
    tags: ["React", "Node.js", "MySQL", "Databricks", "AWS"],
    bg: healthhub.src,
    inspiration:
      "Inspired by the evolving challenges in healthcare, HealthHub aims to enhance accessibility to medical services, promote proactive health management, and foster community health awareness through innovative technology.",
    technologies:
      "The app utilizes React for its user-friendly frontend, Node.js for a scalable backend, MySQL for reliable data management, Databricks for advanced analytics, Customer.io for communication services, and AWS for secure cloud infrastructure.",
    what: "HealthHub empowers users to book doctor appointments, receive location-based recommendations, and stay informed about potential health risks through community health alerts. It streamlines healthcare access while promoting community well-being.",
    github: "https://github.com/Baalavignesh/HealthHub",
    when: "2023",
  },
  {
    title: "VirtuHeal",
    key: "VirtuHeal",
    description:
      "VirtuHeal is a virtual healing platform designed to connect users with professional psychiatrists easily, offering mental health support during challenging times. Built during the COVID-19 pandemic, it aims to make mental health resources more accessible.",
    tags: ["ASP.NET", "C#", "React"],
    bg: vitruhealbg.src,
    inspiration:
      "The COVID-19 pandemic brought significant challenges to mental health. VirtuHeal was inspired by the need for accessible mental health support, allowing users to connect with professional psychiatrists effortlessly.",
    technologies:
      "The backend was developed using ASP.NET with C#, while the frontend was built with React. Key features implemented include authentication, protected routes, and middleware, showcasing foundational web development concepts.",
    what: "VirtuHeal provides a seamless platform for users to book sessions and connect with professional psychiatrists. It supports secure authentication, ensures user privacy, and offers a reliable space for mental health consultations.",
    github: "https://github.com/Baalavignesh/VirtuHeal-ASP.NET",
    when: "2023",
  },
  {
    title: "SecureFileStore",
    key: "SecureFileStore",
    description:
      "SecureFileStore is a secure file storage solution that uses encryption to protect user data. It allows users to upload, share, and manage files securely.",
    tags: ["FastAPI", "AWS S3", "MySQL", "JWT"],
    bg: securefilestorebg.src,
    inspiration:
      "During a time when numerous data breaches were reported across major MNCs, I was motivated to create a platform where user data could remain confidential. The goal was to build a file storage system where only the user could access their files, ensuring high levels of security and privacy.",
    technologies:
      "SecureFileStore leverages FastAPI for backend development, AWS S3 for secure file storage, and MySQL for storing metadata. It also employs Fernet encryption to ensure the security of user files, with user authentication and password hashing implemented via JWT and bcrypt.",
    what: "SecureFileStore is a cloud-based file storage application that provides an additional layer of security by encrypting files before uploading them to AWS S3. It ensures that the user's data is only accessible to them, with encryption keys stored securely in a relational database (RDS). The application supports file upload, version tracking, and secure file downloads through a verified password process.",
    github: "https://github.com/Baalavignesh/secure_filestore",
    when: "2022",
  },
  {
    title: "MyClipbook",
    key: "MyClipbook",
    description:
      "MyClipbook is a clone of Google Keep that allows users to create and share personalized notes without requiring authentication. Users can simply add a name to a unique URL to share notes.",
    tags: ["React", "Firebase"],
    bg: myclipbookbg.src,
    inspiration:
      "MyClipbook was inspired by the simplicity and ease of use of Google Keep. The goal was to create a straightforward and accessible note-taking app for users who need to quickly jot down ideas or reminders and share them without any complex authentication process.",
    technologies:
      "MyClipbook is built with React for the frontend, allowing users to create and edit notes efficiently. Firebase Firestore is used for data storage, ensuring that notes are securely stored and easily retrieved when shared with a unique URL.",
    what: "MyClipbook is a digital note-taking application that allows users to create, edit, and share notes easily. The app doesn't require user authentication, and notes can be shared by appending a name to the URL. It is built with React for frontend functionality and Firebase Firestore for storing and retrieving user data.",
    github: "https://github.com/Baalavignesh/MyClipbook",
    when: "2022",
  },
  {
    title: "Shareit Python",
    key: "ShareitPython",
    description:
      "Shareit Python is a file-sharing application built with Python, enabling users to send and receive files over a local network. It incorporates a fragmentation concept during transmission to ensure smooth file sharing, even for large files, while also providing security features to prevent unauthorized access.",
    tags: ["Python", "Tkinter", "Socket.io"],
    bg: shareitpythonbg.src,
    inspiration:
      "The inspiration behind Shareit Python came during my time in the hostel while pursuing my Masters in college in 2019. I needed an easy way to share files with friends, similar to AirDrop on macOS, but tailored for Windows users. This led to the creation of a file-sharing application that would allow seamless transfer of files over a local network.",
    technologies:
      "Shareit Python uses Tkinter for the user interface, Python for backend logic, and Socket.io for establishing communication between devices. Flask was used to set up a simple backend for handling requests. Additionally, security measures have been implemented to protect data during transmission over WiFi and Hotspot.",
    what: "Shareit Python allows users to choose any file from their directory and send it securely over a local network. The file is fragmented during transmission, ensuring smooth delivery, while robust security features help protect the data from potential threats.",
    github: "https://github.com/Baalavignesh/Shareit-in-Python",
    when: "2020",
  },
  {
    title: "Social 2.0",
    key: "Social2.0",
    description:
      "Social 2.0 is a next-generation social networking platform that focuses on user privacy and data security. It allows users to meet and interact with people who share similar interests, without the clutter of unrelated content.",
    tags: ["Flutter", "Firebase", "Node.js"],
    bg: social2.src,
    inspiration:
      "I used to be an introvert during my college days and realized that many people shared similar interests, such as gaming, video editing, and beatboxing. Inspired by this, I wanted to create an application where people could easily connect with others who share their passions, especially during the quarantine lockdown when it was difficult to meet new people in person.",
    technologies:
      "Social 2.0 is built with Flutter for cross-platform mobile development, Firebase for real-time data storage and authentication, and Node.js for the backend. The app ensures high privacy and security by encrypting user data and providing the option to hide identities when necessary.",
    what: "Social 2.0 is a social networking application that helps users connect with others who share similar interests. It focuses on user privacy, showing only posts and people relevant to a user's interests. Users can browse posts, send friend requests, chat, and interact with others while maintaining complete control over their personal information.",
    github: "https://github.com/Baalavignesh/Social-2.0",
    when: "2020",
  },
  {
    title: "Just Paint",
    key: "JustPaint",
    description:
      "Just Paint is a basic painting application built to explore p5.js, allowing users to create simple digital art.",
    tags: ["React", "p5.js", "JavaScript"],
    bg: justpaintbg.src,
    inspiration:
      "I created this application to explore p5.js after watching some YouTube tutorials.",
    technologies:
      "Just Paint is built using React for the frontend and p5.js for rendering interactive graphics.",
    what: "Just Paint is a straightforward painting app where users can draw and experiment with simple tools, designed as a learning project for p5.js.",
    github: "https://github.com/Baalavignesh/Just-Paint",
    when: "2020",
  },
  {
    title: "Seeya Anonymous Chat",
    key: "SeeyaAnonymousChat",
    description:
      "Seeya Anonymous Chat lets users connect and chat anonymously with others in real-time.",
    tags: ["Flutter", "Firebase"],
    bg: seeyanonymouschatbg.src,
    inspiration:
      "The idea came from creating a real-time platform where people could communicate without revealing their identity.",
    technologies:
      "Developed using React for the interface, Node.js for the backend, and WebSocket for real-time communication.",
    what: "Seeya Anonymous Chat is a secure, real-time anonymous chat platform built with a focus on privacy and simplicity.",
    github: "https://github.com/Baalavignesh/SeeYa-Anonymous-Chat",
    when: "2020",
  },
];

export { allProjects };
