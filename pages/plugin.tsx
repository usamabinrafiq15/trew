import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import logot from "../assests/TREW.png";
import star from "../assests/star.png";
import ui1 from "../assests/ui1.jpg";
import shield from "../assests/secure-shield.png";
import { MdAutoGraph, MdBusinessCenter } from "react-icons/md";
import Link from "next/link";

const plugin = () => {
  return (
    <>
      <div className="plugin">
        <Container>
          <div className="top_area   row">
            <div className="right_area col-xl-5 col-lg-12 pe-lg-5">
              <div className="plugin_logo">
                <div>
                  <Link href="/" className="">
                    <Image src={logot} alt="" className="logot" width={90} />
                  </Link>
                </div>
                <div className="logotitle">
                  <h1>Trew.com Product</h1>
                  <h2>Reviews</h2>
                </div>
              </div>
              <div className="plan py-4">
                {" "}
                <p>
                  So,we will be your first blockchain digital partner for youto
                  identify the product problem, improvise it, and
                </p>
              </div>
              <div className="rrd py-4">
                <div className="area">
                  <div className="rtitle">Rating (5)</div>
                  <div className="starrating">
                    <Image src={star} alt="" width={20} />
                    <Image src={star} alt="" width={20} />
                    <Image src={star} alt="" width={20} />
                    <Image src={star} alt="" width={20} />
                    <Image src={star} alt="" width={20} />
                  </div>
                </div>
                <div className="area_review">
                  <div className="rtitle">Reviews</div>
                  <div className="rtitle_num">12,382</div>
                </div>
                <div className="area">
                  <div className="rtitle">Developer</div>
                  <div className="rtitle">Trew.com</div>
                </div>
              </div>
              <div className="app_btn mt-4">
                <span className="btn_title">Add PlugIn</span>
              </div>
            </div>
            <div className="left_area col-xl-7  col-lg-12">
              <div className="area_img_box row  ">
                <div className="area_img_big col-xl-12 pt-md-5 pt-lg-0">
                  <iframe
                    width="100%"
                    height="410px"
                    src="https://www.youtube.com/embed/CQt26KNuGdo"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>

                {/* <div className="area_img_small col-xl-3">
                  <div className="area_collage-img">
                    <div className="collage_img">
                      <Image src={ui1} alt="" />
                    </div>
                    <div className="collage_img">
                      <Image src={ui1} alt="" />
                    </div>
                    <div className="collage_img">
                      <Image src={ui1} alt="" />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Highlight />
      <PricingPlugIn />
      <Reviews />
    </>
  );
};

export default plugin;

const Highlight = () => {
  return (
    <>
      <Container>
        <div className="highlights_area row">
          <div className="highlights_rights col-xl-4 col-lg-12">
            <h5 className="highlights_title">Highlights</h5>
            <div className="highlights_description">
              <div className="high_ico">
                <MdAutoGraph />
              </div>
              <div className="high_heading">
                <div className=" high_heading_description">
                  <p>Popular with businesses like yours</p>
                  <p className="sub_high"> Based in India</p>
                </div>
              </div>
            </div>
            <div className="highlights_description1">
              <div className="high_ico">
                <MdBusinessCenter />
              </div>
              <div className="high_heading pb-5">
                <div className=" high_heading_description">
                  <p>Built for your business</p>
                  <p className="sub_high"> Works with the latest themes</p>
                  <p className="sub_high"> Use directly in trew admin</p>
                </div>
              </div>
            </div>
            <h5 className="highlights_about_title_">About this app</h5>
            <p className="sub_high"> Launched</p>
            <p className="sub_high"> June 25,2015.</p>
            <div className="lang">Languages</div>
            <p className="sub_high">
              Italian, English, French, Spanich and Protuguese ( Brazil ){" "}
            </p>
            <div className="lang">Categories</div>
            <p className="categories_link sub_high">
              {" "}
              <a>Store design, </a>
              <a>Marketing </a> and <a> Conversion</a>
            </p>
            <div className="lang">Intergrates with</div>
            <p className="sub_high">
              Loyalty Points VIP Referral Programs by Smile.io, PushOwl - Web
              Push Notifications, Tracking &amp; Delivery Updates by AfterShip,
              Google Shopping Feed, LoyaltyLion - Loyalty rewards and referrals,
              Klaviyo: Marketing Klaviyo: Marketing
            </p>
            <p className="sub_high mt-4">
              Loyalty Points VIP Referral Programs by Smile.io, PushOwl - Web
              Push Notifications, Tracking &amp; Delivery Updates by AfterShip,
              Google Shopping Feed, LoyaltyLion - Loyalty rewards and referrals,
              Klaviyo: Marketing
            </p>
          </div>
          <div className="highlights_left ps-lg-5 col-xl-8 col-lg-12 mt-md-5 mt-lg-0">
            <h4 className="highlights_left_title">
              Collect and display product reviews and star ratings. Build trust
              and boost sales with social proof.
            </h4>
            <p className="highlights_left_description py-5">
              Judge.me is a fast-loading, fully customizable review app in 37
              languages. Schedule automatic emails to get reviews with photos
              and videos after order fulfillment or delivery, or import them
              from other apps. Improve your conversion rate by showing reviews
              and UGC on your storefront widgets, sharing them on social media,
              and adding stars on Google for SEO. Setup is easy and tailored to
              your store: customize widget texts, colors, and themes, or ask our
              24/7 support team for basic design tweaks.
            </p>
            <div className="highlights_left_small py-3">
              <div className="dot_plug me-3"></div>
              <p>
                Unlimited email review requests with photo and video, and
                in-email review forms
              </p>
            </div>
            <div className="highlights_left_small py-3">
              <div className="dot_plug me-3"></div>
              <p>
                Unlimited email review requests with photo and video, and
                in-email review forms
              </p>
            </div>
            <div className="highlights_left_small py-3">
              <div className="dot_plug me-3"></div>
              <p>
                Unlimited email review requests with photo and video, and
                in-email review forms
              </p>
            </div>
            <div className="highlights_left_small py-3">
              <div className="dot_plug me-3"></div>
              <p>
                Unlimited email review requests with photo and video, and
                in-email review forms
              </p>
            </div>
            <div className="highlights_left_small py-3">
              <div className="dot_plug me-3"></div>
              <p>
                Unlimited email review requests with photo and video, and
                in-email review forms
              </p>
            </div>
            <div className="highlights_left_small py-3">
              <div className="dot_plug me-3"></div>
              <p>
                Unlimited email review requests with photo and video, and
                in-email review forms
              </p>
            </div>
            <div className="highlights_left_small py-3">
              <div className="dot_plug me-3"></div>
              <p>
                Unlimited email review requests with photo and video, and
                in-email review forms
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const PricingPlugIn = () => {
  return (
    <>
      <div className="pricingplugin">
        <Container>
          <div className="pricingplugin_title">
            <h4> Pricing</h4>
            <div className="pricingplugin_line"></div>
          </div>

          <div className="pricingplugin_description py-5">
            <div className="pricingplugin_description_para">
              <p>
                {" "}
                The list below gives you the 1000 most frequently used English
                es you the 1000 
              </p>
              <p>
                {" "}
                The list below gives you frequently used es you the 1000 most
                frequently use
              </p>
            </div>
          </div>

          <div className="pricingplugin_area row  ">
            <div className="pricingplugin_right col-xl-5 col-lg-12  ">
              <h6 className="free">FOREVER FREE</h6>
              <h2 className="free_title"> Free</h2>
              <p className="free_description mt-4">
                Unlimited product review requests
              </p>
              <p className="free_description">Photos & Videos</p>
              <p className="free_description">Review carousel themes</p>
              <p className="free_description">In-email reviews</p>
              <p className="free_description">Curate reviews</p>
              <p className="free_description">SEO snippets</p>
              <p className="free_description">Manual social push</p>
            </div>
            <div className="pricingplugin_left col-xl-5 col-lg-12 mt-md-5 mt-lg-0">
              <h6 className="free">AWESOME</h6>
              <h2 className="free_title"> &#36; 15/month</h2>
              <p className="free_description mt-4">Site reviews</p>
              <p className="free_description">All Reviews Page</p>
              <p className="free_description">Q & A</p>
              <p className="free_description">Custom forms</p>
              <p className="free_description">Coupons</p>
              <p className="free_description">Products groups</p>
              <p className="free_description">Cross shop Syndication</p>
              <p className="free_description">Google Shopping</p>
              <p className="free_description">No branding</p>
            </div>
            <p className="rate_plan ps-5 pt-5">
              All charges are billed in USD. Recurring and usage-based charges
              are billed every 30 days.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

const Reviews = () => {
  return (
    <>
      <Container>
        <div className="reviews row">
          <div className="reviews_right col-xl-4 col-lg-12">
            <h2 className="reviews_count">12383 reviews</h2>
            <h5 className="overall pb-3">Overall rating</h5>
            <div className="starrating_reviews pb-4">
              <h2 className="count">5</h2>
              <div className="rating1">
                <Image src={star} alt="" width={20} />
                <Image src={star} alt="" width={20} />
                <Image src={star} alt="" width={20} />
                <Image src={star} alt="" width={20} />
                <Image src={star} alt="" width={20} />
              </div>
            </div>
            <div className="overall_starrating">
              <div className="overall_starrating1 py-3">
                <h5 className="rating_count">5</h5>
                <div className="for_middle_rating">
                  <Image src={star} alt="" width={20} />
                  <span className="rating_line"></span>
                  <h5 className="rating_count">12k</h5>
                </div>
              </div>
              <div className="overall_starrating1 py-3">
                <h5 className="rating_count">4</h5>
                <div className="for_middle_rating">
                  <Image src={star} alt="" width={20} />
                  <span className="rating_line"></span>
                  <h5 className="rating_count">148</h5>
                </div>
              </div>
              <div className="overall_starrating1 py-3">
                <h5 className="rating_count">3</h5>
                <div className="for_middle_rating">
                  <Image src={star} alt="" width={20} />
                  <span className="rating_line"></span>
                  <h5 className="rating_count">19</h5>
                </div>
              </div>
              <div className="overall_starrating1 py-3">
                <h5 className="rating_count">2</h5>
                <div className="for_middle_rating">
                  <Image src={star} alt="" width={20} />
                  <span className="rating_line"></span>
                  <h5 className="rating_count">12</h5>
                </div>
              </div>
              <div className="overall_starrating1 py-3">
                <h5 className="rating_count">1</h5>
                <div className="for_middle_rating">
                  <Image src={star} alt="" width={20} />
                  <span className="rating_line"></span>
                  <h5 className="rating_count">40</h5>
                </div>
              </div>
            </div>
            <div className="review_btn py-5">
              <span className="review_title">Write Review</span>
            </div>
          </div>
          <div className="reviews_left col-xl-8 col-lg-12  ">
            <div className="reviews_left1">
              <div className="staranddate">
                <div className="starrating">
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                </div>
                <p className="date"> December 22, 2022</p>
              </div>
              <h5 className="staranddate_description pb-4">
                The customer support is best. They helped me to quickly resolve
                all my issues. I would definitely recommend this app.
              </h5>
              <p className="reviewer_name"> Satttva Natural</p>
              <p className="country pb-5"> United States</p>
            </div>
            <div className="reviews_left2">
              <div className="staranddate">
                <div className="starrating">
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                </div>
                <p className="date"> December 22, 2022</p>
              </div>
              <h5 className="staranddate_description pb-4">
                The customer support is best. They helped me to quickly resolve
                all my issues. I would definitely recommend this app.
              </h5>
              <p className="reviewer_name"> Satttva Natural</p>
              <p className="country pb-5"> United States</p>
            </div>
            <div className="reviews_left2">
              <div className="staranddate">
                <div className="starrating">
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                </div>
                <p className="date"> December 22, 2022</p>
              </div>
              <h5 className="staranddate_description pb-4">
                The customer support is best. They helped me to quickly resolve
                all my issues. I would definitely recommend this app.
              </h5>
              <p className="reviewer_name"> Satttva Natural</p>
              <p className="country pb-5"> United States</p>
            </div>
            <div className="reviews_left2">
              <div className="staranddate">
                <div className="starrating">
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                  <Image src={star} alt="" width={20} />
                </div>
                <p className="date"> December 22, 2022</p>
              </div>
              <h5 className="staranddate_description pb-4">
                The customer support is best. They helped me to quickly resolve
                all my issues. I would definitely recommend this app.
              </h5>
              <p className="reviewer_name"> Satttva Natural</p>
              <p className="country pb-5"> United States</p>
            </div>

            <div className="view_btn py-5">
              <span className="view_title">All Reviews</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
