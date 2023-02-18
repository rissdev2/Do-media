import React from "react";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <div className="container hero-sec">
        <div className="row align-items-center">
          <div className="col-md-5">
            <h1>WE DO EVERYTHING</h1>
            <p>
              DO media is a marketing agency specialized in online and offline
              marketing. We are an agency that are responsible for research,
              analysis, Strategy, branding and promotion of product and
              services.
            </p>
            <Link href="/Contct" className="mt-5 nav-buttn ">
              Join Us
            </Link>
          </div>
          <div className="col-md-7 mt-5 mt-md-0 text-end">
            <img src="assets/images/hero.png" className="img-fluid" alt="man-image" />
          </div>
        </div>
      </div>
    </>
  );
}
