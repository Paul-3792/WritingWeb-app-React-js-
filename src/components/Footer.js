import React from 'react'

const Footer = () => {
  return (
    <div className="bg-cover">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row gy-5">
            <div className="col-lg-2">
              <img
                src="./img/formyce copy.png"
                className="img-fluid mt-3"
                alt=""
              />
            </div>
            <div className="col-lg-3 ms-3">
              <h6 className=" mb-2 mt-3">CONTACT US</h6>
              <a className="foot" href="https://goo.gl/maps/Pmsy6V979KQtt3sa6">
                <p className="mb-0  social-media">
                  <i className="bi bi-geo-alt-fill"></i> B22, City Of David
                  Estate
                </p>
              </a>
              <a className="foot" href="tel:07064957027">
                <p className="mb-1  social-media">
                  <i className="bi bi-telephone-fill"></i> Phone Number:
                  07064957027
                </p>
              </a>
              <a className="foot" href="mailto:formycecopy@gmail.com">
                <p className="mb-1  social-media">
                  <i className="bi bi-envelope-fill"></i> Email-address:
                  formycecopy@gmail.com
                </p>
              </a>
              {/* <!-- <p className="mb-0">A: 14 Paramore Street Mornington Peninsula Victoria 3552</p> --> */}
            </div>
            <div className="social-media col-lg-3">
              <h6 className=" mb-2 mt-3">SOCIAL MEDIA</h6>
              <a className="foot" href="https://www.instagram.com/formycecopy/">
                <p className="mb-1">
                  <i className="bi bi-instagram"></i> Instagram
                </p>
              </a>
              <a className="foot" href="https://twitter.com/formyce_copy">
                <p className="mb-1">
                  <i className="bi bi-twitter"></i> Twitter
                </p>
              </a>
              <a className="foot" href="https://www.facebook.com/formycecopy">
                <p className="mb-1">
                  <i className="bi bi-facebook icon"></i> Facebook
                </p>
              </a>
              <a className="foot" href="https://wa.me/7064957026?text=">
                <p className="mb-1">
                  <i className="bi bi-whatsapp"></i> WhatsApp
                </p>
              </a>
              <a className="foot" href="mailto:formycecopy@gmail.com">
                <p className="mb-1">
                  <i className="bi bi-envelope-fill"></i> Email-address
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row gy-3 justify-content-between">
            <div className="col-auto">
              <p className="mb-0 social-media">
                Copyrights all rights reserved
              </p>
            </div>
            {/* <!-- <div className="col-auto">
                        <p className="mb-0">Designed By <a
                                href="https://www.youtube.com/c/SA7MAN">Salman</a></p>
                    </div> --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
