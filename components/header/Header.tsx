import React from "react";
import img from "../../assests/img.svg";
import star from "../../assests/star.png";
import heart from "../../assests/heart.png";
import { Container } from "react-bootstrap";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className="header" id="main">
        <Container>
          <div className="parent">
            <div className="hero row ">
              <div className="left_side  col-xl-6 col-lg-12">
                <div className="header_title pt-5">
                  <h1>Influence people with TREW.</h1>
                  <h1>Because Trust brings</h1>
                  <h1>customers, not a sale.</h1>
                </div>
                <div className="header_descriptions py-4">
                  <p>
                    So,we will be your first blockchain digital partner for you
                  </p>
                  <p>to identify the product problem, improvise it, and</p>
                  <p>increase the rate of audience with TREW.</p>
                </div>
                <div className="header_buttton">
                  <div className="header_buttton_green">Get started</div>
                </div>
              </div>
              <div className="right_side col-xl-6 col-lg-12">
                <Image src={img} alt="" />
              </div>
            </div>
            <div className="positioned row">
              <div className="hero_middle col-12">
                <div className="middle">
                  <div className="middle_title"> Reviews are believed like</div>
                  <div className="middle_title"> Personal recommendations</div>
                </div>
                <div className="both_rating">
                  <div className="rating">
                    <div className="number">
                      <Image src={star} alt="" width={30} />
                      <span>4.8</span>{" "}
                    </div>
                    <div className="inwords"> Has 4.8 Rating</div>
                  </div>
                  <div className="rating">
                    <div className="number">
                      {" "}
                      <Image src={heart} alt="" width={30} />
                      <span>20K</span>{" "}
                    </div>
                    <div className="inwords"> Satisfied Client</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
