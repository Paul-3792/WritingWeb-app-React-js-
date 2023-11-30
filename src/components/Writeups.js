import React from 'react'

const Writeups = () => {
  return (
    <div className="bg-img" id='writeups'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 intro-text pt-5">
            <h1>Write-Ups</h1>
            {/* <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sint temporibus natus optio
                        eveniet nobis accusantium?</p> --> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <div>
            <div className="row gy-4">
              <div className="col-lg-3 col-sm-6">
                <div className="menu-item bg-white shadow-on-hover">
                  <img
                    src="/img/Assignment-Writing.jpg"
                    className="img-fluid"
                    alt="assignment writing"
                  />
                  <div className="menu-item-content p-4">
                    <h5 className="mt-1 mb-2">
                      <a href="Checkout.html" className="write">
                        Assignment Writing
                      </a>
                    </h5>
                    {/* <!-- <p className="small">₦1,700</p> -->
                                    <!-- <button className="btn-6">Add to Cart</button><button className="btn-6-2">Buy Now</a></button> --> */}
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-sm-6">
                <div className="menu-item bg-white shadow-on-hover">
                  <img
                    src="/img/Business-Writing.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="menu-item-content p-4">
                    <h5 className="mt-1 mb-2">
                      <a href="Checkout.html" className="write">
                        Business-Writing
                      </a>
                    </h5>
                    {/* <!-- <p className="small">₦3,000</p> -->
                                    <!-- <button className="btn-6">Add to Cart</button><button className="btn-6-2">Buy Now</a></button> --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="menu-item bg-white shadow-on-hover">
                  <img
                    src="./img/Copy-writing.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="menu-item-content p-4">
                    {/* <!-- <div>
                                        <span>Rated(5)</span>
                                        <span className="stars">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </span>
                                    </div> --> */}
                    <h5 className="mt-1 mb-2">
                      <a href="Checkout.html" className="write">
                        Copy-Writing
                      </a>
                    </h5>
                    {/* <!-- <p className="small">₦1,000</p> -->
                                    <!-- <button className="btn-6">Add to Cart</button><button className="btn-6-2">Buy Now</button> --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="menu-item bg-white shadow-on-hover">
                  <img src="./img/Novel.jpg" className="img-fluid" alt="" />
                  <div className="menu-item-content p-4">
                    <h5 className="mt-1 mb-2">
                      <a href="Checkout.html" className="write">
                        Novel-Writing
                      </a>
                    </h5>
                    {/* <p className="small">₦2,000</p>
                    <button className="btn-6">Add to Cart</button>
                    <button className="btn-6-2">Buy Now</button> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 menu-item-1">
                <div className="menu-item bg-white shadow-on-hover">
                  <img
                    src="/img/Project-writing.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="menu-item-content p-2"></div>
                  <h5 className="pb-3 ps-3 mb-3">
                    <a href="Checkout.html" className="write">
                      Project-Writing
                    </a>
                  </h5>
                  {/* <p className="small">₦4,000</p>
                  <button className="btn-6">Add to Cart</button>
                  <button className="btn-6-2">Buy Now</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writeups
