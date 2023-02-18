import React from 'react'
import Link from "next/link";
export default function Popup() {
  return (
    <>
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
     
      <div className="modal-body">
        <div className="row">
          <div className="col-md-6 text-center py-5">
            <img src="assets/images/pop.png" className='img-fluid' alt="image" />
            <h3 className='mt-5'>Hi Kashan,</h3>
            <p>It is really great that you decided to move forward with <br className='d-none d-md-block' /> this offer, Now please confirm your choice to proceed.</p>
          </div>
          <div className="col-md-6 p-5 text-start  pop-data">
              <img src="assets/images/logo.png" className='img-fluid' alt="" />
              <h2 className='text-center mt-5'>we do everything</h2>
              <div>
                <div className="row mt-5 align-items-center border-bottom">
                  <div className="col-3 col-md-2">
                    <img src="assets/images/avatar.png" className='img-fluid' alt="avatar image" />
                  </div>
                  <div className="col-9 col-md-6">
                    <p>Kashan Bhatti</p>
                    <div className='d-flex align-items-center'>
                      <i class="fa-sharp fa-solid fa-star me-2"></i>
                      <i class="fa-sharp fa-solid fa-star me-2"></i>
                      <i class="fa-sharp fa-solid fa-star me-2"></i>
                      <i class="fa-sharp fa-solid fa-star me-2"></i>
                      <i class="fa-sharp fa-solid fa-star"></i>
                      <p className='ms-3'>(112)</p>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom mt-4 align-items-center">
                  <div className="col-6 col-md-6">
                    <p>Choose Plan</p>
                  </div>
                  <div className="col-6 col-md-6 text-end">
                    <h5>Basic</h5>
                  </div>
                </div>
                <div className="row border-bottom mt-4 align-items-center">
                  <div className="col-6 col-md-6">
                    <p>Delivery Time</p>
                  </div>
                  <div className="col-6 col-md-6 text-end">
                    <h5>7 Days</h5>
                  </div>
                </div>
                <div className="row border-bottom mt-4 align-items-center">
                  <div className="col-6 col-md-6">
                    <p>Revision</p>
                  </div>
                  <div className="col-6 col-md-6 text-end">
                    <h5>2</h5>
                  </div>
                </div>
                <div className="row mt-4 align-items-center">
                  <div className="col-6 col-md-6">
                    <p>Total Pay</p>
                  </div>
                  <div className="col-6 col-md-6 text-end">
                    <h5>5,000.00 USD</h5>
                  </div>
                </div> 
                <div className="row mt-5">
                  <div className="col-md-12 text-center">
                  <Link href="/contct" className="nav-buttn ">
                  Buy Basic Plan
              </Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    






















<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
     
      <div className="modal-body">
        <div className="row align-items-center">
          <div className="col-md-6 text-center p-5">
            <img src="assets/images/pop.png" className='img-fluid' alt="image" />
            {/* <h3 className='mt-5'>Hi Kashan,</h3>
            <p>It is really great that you decided to move forward with <br className='d-none d-md-block' /> this offer, Now please confirm your choice to proceed.</p> */}
          </div>
          <div className="col-md-6 p-5 text-start  pop-data">
              <img src="assets/images/logo.png" className='img-fluid' alt="" />
              <h2 className='text-center mt-5'>Thank You!</h2>
              {/* <div>
                <div className="row mt-5 align-items-center border-bottom">
                  <div className="col-3 col-md-2">
                    <img src="assets/images/avatar.png" className='img-fluid' alt="avatar image" />
                  </div>
                  <div className="col-9 col-md-6">
                    <p>Kashan Bhatti</p>
                    <div className='d-flex align-items-center'>
                      <i class="fa-sharp fa-solid fa-star me-2"></i>
                      <i class="fa-sharp fa-solid fa-star me-2"></i>
                      <i class="fa-sharp fa-solid fa-star me-2"></i>
                      <i class="fa-sharp fa-solid fa-star me-2"></i>
                      <i class="fa-sharp fa-solid fa-star"></i>
                      <p className='ms-3'>(112)</p>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom mt-4 align-items-center">
                  <div className="col-6 col-md-6">
                    <p>Choose Plan</p>
                  </div>
                  <div className="col-6 col-md-6 text-end">
                    <h5>Basic</h5>
                  </div>
                </div>
                <div className="row border-bottom mt-4 align-items-center">
                  <div className="col-6 col-md-6">
                    <p>Delivery Time</p>
                  </div>
                  <div className="col-6 col-md-6 text-end">
                    <h5>7 Days</h5>
                  </div>
                </div>
                <div className="row border-bottom mt-4 align-items-center">
                  <div className="col-6 col-md-6">
                    <p>Revision</p>
                  </div>
                  <div className="col-6 col-md-6 text-end">
                    <h5>2</h5>
                  </div>
                </div>
                <div className="row mt-4 align-items-center">
                  <div className="col-6 col-md-6">
                    <p>Total Pay</p>
                  </div>
                  <div className="col-6 col-md-6 text-end">
                    <h5>5,000.00 USD</h5>
                  </div>
                </div> 
                <div className="row mt-5">
                  <div className="col-md-12 text-center">
                  <Link href="/contct" className="nav-buttn ">
                  Buy Basic Plan
              </Link>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
