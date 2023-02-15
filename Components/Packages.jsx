import React from 'react'

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
        <div className="row">
            <div className="col-md-1"></div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-10 text-center">
            <p>Our digital marketing packages are geared toward producing results—increased website traffic, targeted reach, leads, conversions, retention and sales. Choose from a standard package detailed below, or work with our digital marketing consultants and strategists to build a custom edition based on your unique needs and budgets. <b>Packages include a monthly allotment of points.</b> </p>
            <a className="nav-buttn "  data-bs-toggle="modal" data-bs-target="#exampleModal" >More Details</a>
            {/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    </div>
    </>
  )
}
