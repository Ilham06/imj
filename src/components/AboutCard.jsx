import React from "react";

export default function AboutCard({ no, title, description }) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="about-info-item mb-4 mb-lg-0">
          <h3 className="mb-3">
            <span className="text-color mr-2 text-md">{no}.</span>{title}
          </h3>
          <p>
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
