import React from 'react'
import Link from "next/link";
export default function Clients() {
  return (
    <>
    <div className="container py-5 my-5 client-sec">
        <div className="row">
            <div className="col-md-12 text-center">
                <h2>Our Clients</h2>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-10 text-center">
                <img src="assets/images/client.png" className='img-fluid' alt="image" />
                <Link href="/Contct" className="nav-buttn ">
                See More
              </Link>
            </div>
        </div>
    </div>
    </>
  )
}
