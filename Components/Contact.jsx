import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                <img src="/assets/images/contact.png" className='img-fluid' alt="images" />
            </div>
            <div className="col-md-6 ps-md-5">
                <div className='p-4 contact-sec'>
                <h2>Love to here from you, <br className='d-none d-md-block' /> Get in touch 👋 </h2>

<form>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Name</label>
<input type="email" className="form-control" id="exampleInputEmail1" placeholder='Your name' aria-describedby="emailHelp" />
<label for="exampleInputEmail1" className="form-label">Email</label>
<input type="email" className="form-control" id="exampleInputEmail1" placeholder='Kashanbhatti00004@gmail.com' aria-describedby="emailHelp" />
</div>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">How can we help you?</label>
<input type="text" className="form-control" placeholder='Tell us little about your project......' id="exampleInputPassword1" />
</div>
<h4>What do you need help with?</h4>
<div className="row">
    <div className="col-md-3">
    <div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1" />
<label className="form-check-label" for="exampleCheck1">Website design</label>
</div>
<div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1" />
<label className="form-check-label" for="exampleCheck1">UX Design</label>
</div>
<div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1" />
<label className="form-check-label" for="exampleCheck1">User Research</label>
</div>
    </div>
    <div className="col-md-2"></div>
    <div className="col-md-5">
    <div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1" />
<label className="form-check-label" for="exampleCheck1">Content Creation</label>
</div>
<div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1" />
<label className="form-check-label" for="exampleCheck1">Strategy & Consulting</label>
</div>
<div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1" />
<label className="form-check-label" for="exampleCheck1">Other</label>
</div>
    </div>
</div>

<button type="submit" className="btn nav-buttn mt-5">Let’s Get Started</button>
</form>

                </div>
            

            </div>
        </div>
    </div>
    </>
  )
}
