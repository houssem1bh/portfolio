import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#171717",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 56,
            height: 4,
            background: "#3fae7d",
            marginBottom: 40,
          }}
        />
        <div style={{ fontSize: 30, color: "#3fae7d", display: "flex" }}>
          Houssem Ben Hassen
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 600,
            marginTop: 16,
            maxWidth: 900,
            lineHeight: 1.15,
            display: "flex",
          }}
        >
          Frontend Technical Lead
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#a1a1a1",
            marginTop: 24,
            display: "flex",
          }}
        >
          Architecting large-scale web platforms. Expanding into AI engineering.
        </div>
      </div>
    ),
    { ...size }
  );
}
