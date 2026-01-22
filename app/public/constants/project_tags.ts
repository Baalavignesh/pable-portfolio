import { js, ts, python, dart, c, cpp, nextjs, angular, express, net, fastapi, aws, azure, docker, firebase, git, node, mongo, mysql, postgresql, postman, redux, tailwind, reactjs, openai, databricks, flutter, vite, convex, cosmo, s3, jwt, socketio, swift } from "../static";

const tagToImage: Record<string, string> = {
    "JavaScript": js.src,
    "TypeScript": ts.src,
    "Python": python.src,
    "Dart": dart.src,
    "C": c.src,
    "C++": cpp.src,
    "Swift": swift.src,
    "React": reactjs.src,
    "Next.js": nextjs.src,
    "Angular": angular.src,
    "Express.js": express.src,
    "ASP.NET": net.src,
    "FastAPI": fastapi.src,
    "AWS": aws.src,
    "Azure": azure.src,
    "Docker": docker.src,
    "Firebase": firebase.src,
    "Git": git.src,
    "Node.js": node.src,
    "MongoDB": mongo.src,
    "MySQL": mysql.src,
    "PostgreSQL": postgresql.src,
    "Postman": postman.src,
    "Redux": redux.src,
    "Tailwind CSS": tailwind.src,
    "OpenAI": openai.src,
    "Databricks": databricks.src,
    "Flutter" : flutter.src,
    "Vite.js": vite.src,
    "Convex": convex.src,
    "CosmoDB": cosmo.src,
    "AWS S3": s3.src,
    "JWT": jwt.src,
    "Socket.io": socketio.src
  };
  

  export default tagToImage;