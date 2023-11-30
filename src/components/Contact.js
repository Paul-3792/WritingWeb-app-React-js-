import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="pt-5 contact section-padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="text-white section-header text-center pb-2">
              <h2>Contact Us</h2>
              {/* <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis maiores error facere!</p> --> */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 p-0 pt-4 pb-4">
            <form
              action="https://formspree.io/f/mnqkpapw"
              method="post"
              className="p-4.m-auto"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                      placeholder="Your Full Name...."
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required
                      placeholder="Your Email Here...."
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <textarea
                      rows="3"
                      name="message"
                      className="form-control"
                      required
                      placeholder="Enter Your Message Here"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn-2 mt-3">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
