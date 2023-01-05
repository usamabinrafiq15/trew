import React from "react";
import { Container } from "react-bootstrap";
import shield from "../../assests/secure-shield.png";
import Image from "next/image";
const Pricing = () => {
  return (
    <>
      <div className="pricing_screen">
        <Container>
          <div className="pricing row">
            <div className="pricing_right col-xl-9 col-lg-12">
              <h4 className="pricing_head">Pricing</h4>
              <div className="line_pricing"></div>

              <div className="pricing_title py-4">
                <h1>Find the Packages</h1>
                <h1>That Suits Best for You.</h1>
              </div>
              <div className="pricing_description pb-5">
                <p>
                  The list below gives you the 1000 most frequently used English
                  words in alphabetical order. Once youve mastered the shorter
                  vocabulary lists, this is the next step. words in alphabetical
                  order. Once youve mastered the shorter
                </p>
              </div>
              <div className="pricing_checks">
                <div className="side">
                  <div className="pricing_side">
                  {/* <Image src={shield} alt="" width={40} /> */}
                  <div className="dot"></div>
                    <div className="checkbox_options"> We Are Different</div>
                  </div>
                  <div className="pricing_side">
                  {/* <Image src={shield} alt="" width={40} /> */}
                  <div className="dot"></div>
                    <div className="checkbox_options">
                      {" "}
                      Contrary To Popular Belief
                    </div>
                  </div>
                  <div className="pricing_side">
                  {/* <Image src={shield} alt="" width={40} /> */}
                  <div className="dot"></div>
                    <div className="checkbox_options">
                      {" "}
                      Looked Up One Of the More{" "}
                    </div>
                  </div>
                </div>
                <div className="side2">
                  <div className="pricing_side">
                  {/* <Image src={shield} alt="" width={40} /> */}
                  <div className="dot"></div>
                    <div className="checkbox_options"> We Are Different</div>
                  </div>
                  <div className="pricing_side">
                  {/* <Image src={shield} alt="" width={40} /> */}
                  <div className="dot"></div>
                    <div className="checkbox_options">
                      Contrary To Popular Belief
                    </div>
                  </div>
                  <div className="pricing_side">
                  {/* <Image src={shield} alt="" width={40} /> */}
                  <div className="dot"></div>
                    <div className="checkbox_options">
                      {" "}
                      Looked Up One Of the More{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing_left col-xl-3 col-lg-12">
              <div className="card_size">
                <div className="pricing_left_card_title">Free Credits</div>
                <div className="card_descriptions">
                  <p>Looked Up One Of the More</p>
                  <p>Looked Up the More</p>
                </div>
                <div className="card_rupee">
                  <span className="sym">&#36;</span>
                  <div className="rupee">100.00</div>
                </div>
                <div className="checkbox_button">
                  <div className="button_big">
                    <div className="button_words">Lorem ipsum</div>
                  </div>
                  <div className="button_big">
                    <div className="button_words">Lorem ipsum</div>
                  </div>
                  <div className="button_big">
                    <div className="button_words">Lorem ipsum</div>
                  </div>
                </div>
                <div className="experience">
                  <span className="experience_button">Experience it!</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Pricing;
