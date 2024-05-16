import React from "react";
import CustomerReview from "../Components/CustomerReview";
import Exclusive from "./Components/Exclusive";
import Chefs from "./Components/Chefs";


export default function Home() {
  return (
    <>
      {/* banner part start*/}
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h5>Expensive but the best</h5>
                  <h1>Deliciousness jumping into the mouth</h1>
                  <p>
                    Together creeping heaven upon third dominion be upon won't
                    darkness rule land behold it created good saw after she'd Our
                    set living. Signs midst dominion creepeth morning
                  </p>
                  <div className="banner_btn">
                    <div className="banner_btn_iner">
                      <a href="#" className="btn_2">
                        Reservation <img src="img/icon/left_1.svg" alt="" />
                      </a>
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                      className="popup-youtube video_popup"
                    >
                      <span>
                        <img src="img/icon/play.svg" alt="" />
                      </span>{" "}
                      Watch our story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner part start*/}
      {/*::exclusive_item_part start::*/}
      <Exclusive />
      {/*::exclusive_item_part end::*/}
      {/* about part start*/}
      <section className="about_part">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-4 col-lg-5 offset-lg-1">
              <div className="about_img">
                <img src="img/about.png" alt="" />
              </div>
            </div>
            <div className="col-sm-8 col-lg-4">
              <div className="about_text">
                <h5>Our History</h5>
                <h2>Where The Food’s As Good As The Root Beer.</h2>
                <h4>Satisfying people hunger for simple pleasures</h4>
                <p>
                  May over was. Be signs two. Spirit. Brought said dry own firmament
                  lesser best sixth deep abundantly bearing, him, gathering you
                  blessed bearing he our position best ticket in month hole deep{" "}
                </p>
                <a href="#" className="btn_3">
                  Read More <img src="img/icon/left_2.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about part end*/}
      {/* intro_video_bg start*/}
      <section className="intro_video_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro_video_iner text-center">
                <h2>Expect The Best</h2>
                <div className="intro_video_icon">
                  <a
                    id="play-video_1"
                    className="video-play-button popup-youtube"
                    href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                  >
                    <span className="ti-control-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* intro_video_bg part start*/}
      {/* food_menu start*/}
      <section className="food_menu gray_bg">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="section_tittle">
                <p>Popular Menu</p>
                <h2>Delicious Food Menu</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="nav nav-tabs food_menu_nav" id="myTab" role="tablist">
                <a
                  className="active"
                  id="Special-tab"
                  data-toggle="tab"
                  href="#Special"
                  role="tab"
                  aria-controls="Special"
                  aria-selected="false"
                >
                  Special <img src="img/icon/play.svg" alt="play" />
                </a>
                <a
                  id="Breakfast-tab"
                  data-toggle="tab"
                  href="#Breakfast"
                  role="tab"
                  aria-controls="Breakfast"
                  aria-selected="false"
                >
                  Breakfast <img src="img/icon/play.svg" alt="play" />
                </a>
                <a
                  id="Launch-tab"
                  data-toggle="tab"
                  href="#Launch"
                  role="tab"
                  aria-controls="Launch"
                  aria-selected="false"
                >
                  Launch <img src="img/icon/play.svg" alt="play" />
                </a>
                <a
                  id="Dinner-tab"
                  data-toggle="tab"
                  href="#Dinner"
                  role="tab"
                  aria-controls="Dinner"
                  aria-selected="false"
                >
                  Dinner <img src="img/icon/play.svg" alt="play" />{" "}
                </a>
                <a
                  id="Sneaks-tab"
                  data-toggle="tab"
                  href="#Sneaks"
                  role="tab"
                  aria-controls="Sneaks"
                  aria-selected="false"
                >
                  Sneaks <img src="img/icon/play.svg" alt="play" />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active single-member"
                  id="Special"
                  role="tabpanel"
                  aria-labelledby="Special-tab"
                >
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_1.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pork Sandwich</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_2.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Roasted Marrow</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_3.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Summer Cooking</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_4.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Easter Delight</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_5.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Tiener Schnitze</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_6.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Chicken Roast</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Breakfast"
                  role="tabpanel"
                  aria-labelledby="Breakfast-tab"
                >
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_4.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Easter Delight</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_5.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Tiener Schnitze</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_6.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Chicken Roast</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_1.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pork Sandwich</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_2.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Roasted Marrow</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_3.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Summer Cooking</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Launch"
                  role="tabpanel"
                  aria-labelledby="Launch-tab"
                >
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_1.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pork Sandwich</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_2.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Roasted Marrow</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_3.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Summer Cooking</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_4.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Easter Delight</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_5.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Tiener Schnitze</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_6.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Chicken Roast</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Dinner"
                  role="tabpanel"
                  aria-labelledby="Dinner-tab"
                >
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_4.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Easter Delight</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_5.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Tiener Schnitze</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_6.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Chicken Roast</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_1.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pork Sandwich</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_2.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Roasted Marrow</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_3.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Summer Cooking</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Sneaks"
                  role="tabpanel"
                  aria-labelledby="Sneaks-tab"
                >
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_1.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pork Sandwich</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_2.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Roasted Marrow</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_3.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Summer Cooking</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_4.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Easter Delight</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_5.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Tiener Schnitze</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_6.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Chicken Roast</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* food_menu part end*/}
      <Chefs />
      {/*::regervation_part start::*/}
      <section className="regervation_part section_padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section_tittle">
                <p>Reservation</p>
                <h2>Book A Table</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="regervation_part_iner">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Name *"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Email address *"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <select className="form-control" id="Select">
                        <option value={1} selected="">
                          Persons *
                        </option>
                        <option value={2}>Number of guests 1</option>
                        <option value={3}>Number of guests 2</option>
                        <option value={4}>Number of guests 3</option>
                        <option value={5}>Number of guests 4</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="pnone"
                        placeholder="Phone number *"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <div className="input-group date">
                        <input
                          id="datepicker"
                          type="text"
                          className="form-control"
                          placeholder="Date *"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <select className="form-control" id="Select2">
                        <option value="" selected="">
                          Time *
                        </option>
                        <option value={1}>8 AM TO 10AM</option>
                        <option value={1}>10 AM TO 12PM</option>
                        <option value={1}>12PM TO 2PM</option>
                        <option value={1}>2PM TO 4PM</option>
                        <option value={1}>4PM TO 6PM</option>
                        <option value={1}>6PM TO 8PM</option>
                        <option value={1}>4PM TO 10PM</option>
                        <option value={1}>10PM TO 12PM</option>
                      </select>
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        className="form-control"
                        id="Textarea"
                        rows={4}
                        placeholder="Your Note *"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="regerv_btn">
                    <a href="#" className="btn_4">
                      Book A Table
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*::regervation_part end::*/}
      <CustomerReview />
      {/*::exclusive_item_part start::*/}
      <section className="blog_item_section blog_section section_padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section_tittle">
                <p>Recent News</p>
                <h2>Latest From Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/blog/blog_1.png" alt="" />
                </div>
                <div className="single_blog_text">
                  <div className="date">
                    <a href="#" className="date_item">
                      Apr 06, 2019{" "}
                    </a>
                    <a href="#" className="date_item">
                      {" "}
                      <span>#</span> Food News{" "}
                    </a>
                  </div>
                  <h3>
                    <a href="blog.html">
                      Adama kind deep gatherin first over fter his great
                    </a>
                  </h3>
                  <a href="#" className="btn_3">
                    Read More <img src="img/icon/left_1.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/blog/blog_2.png" alt="" />
                </div>
                <div className="single_blog_text">
                  <div className="date">
                    <a href="#" className="date_item">
                      Apr 06, 2019{" "}
                    </a>
                    <a href="#" className="date_item">
                      {" "}
                      <span>#</span> Food News{" "}
                    </a>
                  </div>
                  <h3>
                    <a href="blog.html">
                      Adama kind deep gatherin first over fter his great
                    </a>
                  </h3>
                  <a href="#" className="btn_3">
                    Read More <img src="img/icon/left_1.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/blog/blog_3.png" alt="" />
                </div>
                <div className="single_blog_text">
                  <div className="date">
                    <a href="#" className="date_item">
                      Apr 06, 2019{" "}
                    </a>
                    <a href="#" className="date_item">
                      {" "}
                      <span>#</span> Food News{" "}
                    </a>
                  </div>
                  <h3>
                    <a href="blog.html">
                      Adama kind deep gatherin first over fter his great
                    </a>
                  </h3>
                  <a href="#" className="btn_3">
                    Read More <img src="img/icon/left_1.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/blog/blog_1.png" alt="" />
                </div>
                <div className="single_blog_text">
                  <div className="date">
                    <a href="#" className="date_item">
                      Apr 06, 2019{" "}
                    </a>
                    <a href="#" className="date_item">
                      {" "}
                      <span>#</span> Food News{" "}
                    </a>
                  </div>
                  <h3>
                    <a href="blog.html">
                      Adama kind deep gatherin first over fter his great
                    </a>
                  </h3>
                  <a href="#" className="btn_3">
                    Read More <img src="img/icon/left_1.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*::exclusive_item_part end::*/}
    </>

  )
}