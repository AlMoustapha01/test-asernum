import React from "react";
import "./styles.scss";

export default function Loader({ backgroundColor }: { backgroundColor: string }) {
  return (
    <div className="wave-wrapper">
      <span style={{ backgroundColor: backgroundColor }} className="wave-line"></span>
      <span style={{ backgroundColor: backgroundColor }} className="wave-line"></span>
      <span style={{ backgroundColor: backgroundColor }} className="wave-line"></span>
      <span style={{ backgroundColor: backgroundColor }} className="wave-line"></span>
      <span style={{ backgroundColor: backgroundColor }} className="wave-line"></span>
      <span style={{ backgroundColor: backgroundColor }} className="wave-line"></span>
    </div>
  );
}
