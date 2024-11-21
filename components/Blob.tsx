import { useEffect } from "react";

const BlobMover: React.FC = () => {
    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        const blob = document.getElementById("blob");
        if (blob) {
          const blobRect = blob.getBoundingClientRect();
          const blobWidth = blobRect.width;
          const blobHeight = blobRect.height;
  
          const constrainedX = Math.min(
            Math.max(clientX, blobWidth / 2),
            window.innerWidth - blobWidth / 2
          );
          const constrainedY = Math.min(
            Math.max(clientY , blobHeight / 2),
            window.innerHeight - blobHeight / 2
          );
  
          blob.animate(
            {
              left: `${constrainedX}px`,
              top: `${constrainedY}px`,
            },
            { duration: 3000, fill: "forwards" }
          );
        }
      };
      window.addEventListener("pointermove", handleMouseMove);
  
      return () => {
        window.removeEventListener("pointermove", handleMouseMove);
      };
    }, []);
  
    return <Blob />;
  };
  
  const Blob: React.FC = () => {
    return (
      <div
        id="blob"
        className="absolute w-28 h-28 2xl:w-72 2xl:h-72 3xl:w-[38rem] 3xl:h-[38rem] blur-2xl rounded-full -z-10 bg-gradient-to-r from-blue-100 to-purple-100 opacity-80 myblob"
        style={{
          left: "100%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    );
  };

  export default BlobMover;