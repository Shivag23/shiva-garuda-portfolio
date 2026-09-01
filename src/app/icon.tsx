import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090a",
          color: "#3ee0b0",
          fontSize: 12,
          fontFamily: "monospace",
          letterSpacing: "0.04em",
          border: "1px solid #3ee0b0",
        }}
      >
        SG
      </div>
    ),
    { ...size },
  );
}
