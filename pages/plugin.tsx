import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import logot from "../assests/TREW.png";
import star from "../assests/star.png";
import ui1 from "../assests/ui1.jpg";
import shield from "../assests/secure-shield.png";
import { MdAutoGraph, MdBusinessCenter } from "react-icons/md";

const plugin = () => {
  return (
    <>
      <div className="plugin">
        <Container>
          <div className="top_area row">
            <div className="right_area col-xl-4 col-lg-12">
              <div className="plugin_logo">
                <div>
                  <Image src={logot} alt="" className="logot" width={90} />
                </div>
                <div className="logotitle">
                  <p>Trew.com Product</p>
                  <p>Reviews</p>
                </div>
              </div>
              <div className="plan"> Free plan available</div>
              <div className="rrd">
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
              <div className="app_btn">
                <span className="btn_title">Add PlugIn</span>
              </div>
            </div>
            <div className="left_area col-xl-8 col-lg-12">
              <div className="area_img_box row  ">
                <div className="area_img_big col-xl-9">
                  <iframe
                    width="100%"
                    height="410px"
                    src="https://www.youtube.com/embed/CQt26KNuGdo"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>

                <div className="area_img_small col-xl-3">
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
                </div>
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
            <div className="highlights_title">Highlights</div>
            <div className="highlights_description">
              <div className="high_ico">
                <MdAutoGraph />
              </div>
              <div className="high_heading">
                <div className=" high_heading_description">
                  <div>Popular with businesses like yours</div>
                  <div className="sub_high"> Based in India</div>
                </div>
              </div>
            </div>
            <div className="highlights_description1">
              <div className="high_ico">
                <MdBusinessCenter />
              </div>
              <div className="high_heading">
                <div className=" high_heading_description">
                  <div>Built for your business</div>
                  <div className="sub_high"> Works with the latest themes</div>
                  <div className="sub_high"> Use directly in trew admin</div>
                </div>
              </div>
            </div>
            <div className="highlights_about_title_">About this app</div>
            <div className="sub_high"> Launched</div>
            <div className="sub_high"> June 25,2015.</div>
            <div className="lang">Languages</div>
            <div className="sub_high">
              Italian, English, French, Spanich and Protuguese ( Brazil ){" "}
            </div>
            <div className="lang">Categories</div>
            <div className="categories_link sub_high">
              {" "}
              <a>Store design, </a>
              <a>Marketing </a> and <a> Conversion</a>
            </div>
            <div className="lang">Intergrates with</div>
            <div className="sub_high">
              Loyalty Points VIP Referral Programs by Smile.io, PushOwl - Web
              Push Notifications, Tracking &amp; Delivery Updates by AfterShip,
              Google Shopping Feed, LoyaltyLion - Loyalty rewards and referrals,
              Klaviyo: Marketing Klaviyo: Marketing
            </div>
            <div className="sub_high mt-4">
              Loyalty Points VIP Referral Programs by Smile.io, PushOwl - Web
              Push Notifications, Tracking &amp; Delivery Updates by AfterShip,
              Google Shopping Feed, LoyaltyLion - Loyalty rewards and referrals,
              Klaviyo: Marketing
            </div>
          </div>
          <div className="highlights_left col-xl-8 col-lg-12">
            <div className="highlights_left_title">
              Collect and display product reviews and star ratings. Build trust
              and boost sales with social proof.
            </div>
            <div className="highlights_left_description">
              Judge.me is a fast-loading, fully customizable review app in 37
              languages. Schedule automatic emails to get reviews with photos
              and videos after order fulfillment or delivery, or import them
              from other apps. Improve your conversion rate by showing reviews
              and UGC on your storefront widgets, sharing them on social media,
              and adding stars on Google for SEO. Setup is easy and tailored to
              your store: customize widget texts, colors, and themes, or ask our
              24/7 support team for basic design tweaks.
            </div>
            <div className="highlights_left_small">
              <div className="highlights_left_img">
                <Image src={shield} alt="" width={40} />
              </div>
              <div>
                Unlimited email review requests with photo and video, and
                in-email review forms
              </div>
            </div>
            <div className="highlights_left_small">
              <div className="highlights_left_img">
                <Image src={shield} alt="" width={40} />
              </div>
              <div>
                Unlimited email review requests with photo and video, and
                in-email review forms
              </div>
            </div>
            <div className="highlights_left_small">
              <div className="highlights_left_img">
                <Image src={shield} alt="" width={40} />
              </div>
              <div>
                Unlimited email review requests with photo and video, and
                in-email review forms
              </div>
            </div>
            <div className="highlights_left_small">
              <div className="highlights_left_img">
                <Image src={shield} alt="" width={40} />
              </div>
              <div>
                Unlimited email review requests with photo and video, and
                in-email review forms
              </div>
            </div>
            <div className="highlights_left_small">
              <div className="highlights_left_img">
                <Image src={shield} alt="" width={40} />
              </div>
              <div>
                Unlimited email review requests with photo and video, and
                in-email review forms
              </div>
            </div>
            <div className="highlights_left_small">
              <div className="highlights_left_img">
                <Image src={shield} alt="" width={40} />
              </div>
              <div>
                Unlimited email review requests with photo and video, and
                in-email review forms
              </div>
            </div>
            <div className="highlights_left_small">
              <div className="highlights_left_img">
                <Image src={shield} alt="" width={40} />
              </div>
              <div>
                Unlimited email review requests with photo and video, and
                in-email review forms
              </div>
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
            {" "}
            Pricing
            <div className="pricingplugin_line"></div>
          </div>

          <div className="pricingplugin_area row ">
            <div className="pricingplugin_right col-xl-5 col-lg-12 ">
              <div className="free">FOREVER FREE</div>
              <div className="free_title"> Free</div>
              <div className="free_description">
                Unlimited product review requests
              </div>
              <div className="free_description">Photos & Videos</div>
              <div className="free_description">Review carousel themes</div>
              <div className="free_description">In-email reviews</div>
              <div className="free_description">Curate reviews</div>
              <div className="free_description">SEO snippets</div>
              <div className="free_description">Manual social push</div>
            </div>
            <div className="pricingplugin_left col-xl-5 col-lg-12">
              <div className="free">AWESOME</div>
              <div className="free_title"> &#36; 15/month</div>
              <div className="free_description">Site reviews</div>
              <div className="free_description">All Reviews Page</div>
              <div className="free_description">Q & A</div>
              <div className="free_description">Custom forms</div>
              <div className="free_description">Coupons</div>
              <div className="free_description">Products groups</div>
              <div className="free_description">Cross shop Syndication</div>
              <div className="free_description">Google Shopping</div>
              <div className="free_description">No branding</div>
            </div>
            <div className="rate_plan">
              All charges are billed in USD. Recurring and usage-based charges
              are billed every 30 days.
            </div>
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
            <div className="reviews_count">12383 reviews</div>
            <div className="overall">Overall rating</div>
            <div className="starrating_reviews">
              <div className="count">5</div>
              <Image src={star} alt="" width={20} />
              <Image src={star} alt="" width={20} />
              <Image src={star} alt="" width={20} />
              <Image src={star} alt="" width={20} />
              <Image src={star} alt="" width={20} />
            </div>
            <div className="overall_starrating">
              <div className="overall_starrating1">
                <span className="rating_count">5</span>
                <div className="for_middle_rating">
                  <Image src={star} alt="" width={20} />
                  <span className="rating_line"></span>
                  <span className="rating_count">12k</span>
                </div>
              </div>
              <div className="overall_starrating1">
                <span className="rating_count">4</span>
                <div className="for_middle_rating">
                  <Image src={star} alt="" width={20} />
                  <span className="rating_line"></span>
                  <span className="rating_count">148</span>
                </div>
              </div>
              <div className="overall_starrating1">
                <span className="rating_count">3</span>
                <div className="for_middle_rating">
                  <Image src={star} alt="" width={20} />
                  <span className="rating_line"></span>
                  <span className="rating_count">19</span>
                </div>
              </div>
              <div className="overall_starrating1">
                <span className="rating_count">2</span>
                <div className="for_middle_rating">
                  <Image src={star} alt="" width={20} />
                  <span className="rating_line"></span>
                  <span className="rating_count">12</span>
                </div>
              </div>
              <div className="overall_starrating1">
                <span className="rating_count">1</span>
                <div className="for_middle_rating">
                  <Image src={star} alt="" width={20} />
                  <span className="rating_line"></span>
                  <span className="rating_count">40</span>
                </div>
              </div>
            </div>
            <div className="review_btn">
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
                <div className="date"> December 22, 2022</div>
              </div>
              <div className="staranddate_description">
                The customer support is best. They helped me to quickly resolve
                all my issues. I would definitely recommend this app.
              </div>
              <div className="reviewer_name"> Satttva Natural</div>
              <div className="country"> United States</div>
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
                <div className="date"> December 22, 2022</div>
              </div>
              <div className="staranddate_description">
                The customer support is best. They helped me to quickly resolve
                all my issues. I would definitely recommend this app.
              </div>
              <div className="reviewer_name"> Satttva Natural</div>
              <div className="country"> United States</div>
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
                <div className="date"> December 22, 2022</div>
              </div>
              <div className="staranddate_description">
                The customer support is best. They helped me to quickly resolve
                all my issues. I would definitely recommend this app.
              </div>
              <div className="reviewer_name"> Satttva Natural</div>
              <div className="country"> United States</div>
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
                <div className="date"> December 22, 2022</div>
              </div>
              <div className="staranddate_description">
                The customer support is best. They helped me to quickly resolve
                all my issues. I would definitely recommend this app.
              </div>
              <div className="reviewer_name"> Satttva Natural</div>
              <div className="country"> United States</div>
            </div>

            <div className="view_btn">
                <span className="view_title">All Reviews</span>
              </div>
          </div>
        </div>
      </Container>
    </>
  );
};
