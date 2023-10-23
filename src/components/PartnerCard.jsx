import Image from "next/image";
import React from "react";

export default function PartnerCard({ name, description, image }) {
  return (
    <>
      <div className="col-lg-5 col-md-6 col-sm-6">
        <div className="service-item mb-5">
          <Image src={image} width={85} height={85}></Image>
          <div>
            <h4 className="mb-1">{name}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
