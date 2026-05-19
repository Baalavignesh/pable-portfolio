import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Baalavignesh A | Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const profileData = readFileSync(
    join(process.cwd(), "app/public/static/profile.jpeg")
  );
  const profileSrc = `data:image/jpeg;base64,${profileData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f0f0f",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "80px",
          gap: "60px",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={profileSrc}
          style={{
            width: 260,
            height: 260,
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #333",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            Baalavignesh A
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#aaaaaa",
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#666",
            }}
          >
            baalavignesh21@gmail.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
