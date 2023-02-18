import React from 'react'

import Popup from './Popup';
export default function Packages() {
  return (
    <>
    <div className="container py-5 my-5 package-sec">
        <div className="row justify-content-center">
            <div className="col-md-10 text-center">
                <h2>DO <span>Media marketing packages and pricing</span> </h2>
                <h3>Are you looking to grow your brand? Start a business? Outsource your marketing department?</h3>
                <p>Generally, marketing agencies offer a range of packages with different levels of service and pricing tiers to fit different budgets and needs. These packages may include services such as social media management, website design and development, search engine optimization, content marketing, and digital advertising. Pricing may be based on a monthly retainer fee, project-based fee, or a combination of both. The cost of these packages typically increases as the level of service and the scope of the project increases.</p>
            </div>
        </div>
        <div className="row justify-content-center my-5 py-5">
            <div className="col-md-11">
              <div className="row justify-content-center">
              <div className="col-md-2">
                <a href=""  data-bs-toggle="modal" data-bs-target="#exampleModal" >
                <div className='text-center py-5 pric-tab'>
              <img src="assets/images/icon1.png" className='img-fluid' alt="icon" />
              <h3 className='mt-4'>BASIC</h3>
              <h4><span>$ </span>5k <span>/mon</span></h4>
              </div>
                </a>
            
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2 mt-5 mt-md-0 text-center">
            <a href=""  data-bs-toggle="modal" data-bs-target="#exampleModal" >
              <div className='text-center py-5 pric-tab'>
              <img src="assets/images/icon2.png" className='img-fluid' alt="icon" />
              <h3 className='mt-4'>PRO</h3>
              <h4><span>$ </span>10k <span>/mon</span></h4>
              </div>
              </a>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2 mt-5 mt-md-0 text-center">
            <a href=""  data-bs-toggle="modal" data-bs-target="#exampleModal" >
              <div className='text-center py-5 pric-tab1'>
              <img src="assets/images/icon3.png" className='img-fluid' alt="icon" />
              <h3 className='mt-4'>GROWTH</h3>
              <h4><span>$ </span>20k <span>/mon</span></h4>
              </div>
              </a>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2 mt-5 mt-md-0 text-center">
            <a href=""  data-bs-toggle="modal" data-bs-target="#exampleModal" >
              <div className='text-center py-5 pric-tab'>
              <img src="assets/images/icon4.png" className='img-fluid' alt="icon" />
              <h3 className='mt-4'>Enterprise</h3>
              <h4><span>$ </span>40k <span>/mon</span></h4>
              </div>
              </a>
            </div>
              </div>
           
            </div>
           
        </div>
        <div className="row justify-content-center">
            <div className="col-md-10 text-center">
            <p>Our digital marketing packages are geared toward producing results—increased website traffic, targeted reach, leads, conversions, retention and sales. Choose from a standard package detailed below, or work with our digital marketing consultants and strategists to build a custom edition based on your unique needs and budgets. <b>Packages include a monthly allotment of points.</b> </p>
            <a className="nav-buttn" >More Details</a>
            {/* <!-- Modal --> */}
<Popup />
            </div>
        </div>
    </div>
    </>
  )
}
