import React from "react";
import about from "../../assests/about.jpg";
import img from "../../assests/img.svg";
import medal from "../../assests/medal.png";
import message from "../../assests/message.png";
import stick from "../../assests/magic.png";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";
const AboutUs = () => {
  return (
    <>
      <div className="aboutus">
        <Container>
          <div className="about row">
            <div className="about_left col-xl-6 col-lg-12">
              <Image src={about} alt="" />
            </div>
            <div className="about_right col-xl-6 col-lg-12">
              <h4 className="about_head ">About Us </h4>
              <div className="line"></div>

              <h1 className="about_title py-4" >Be so Trustworthy, consumers cant ignore you.</h1>
              <div className="about_description pb-5">
                <p>
                  The list below gives you the 1000 most frequently used English
                  words in alphabetical order. Once youve mastered the shorter
                  vocabulary lists, this is the next step. It would take time to
                  learn the entire list from scratch, but you are probably
                  already familiar with some of these words. Feel free to copy
                  this list into your online flashcard management tool, an app,
                  or print it out to make paper flashcards. Youll have to look
                  up the definitions on your own either in English or in your
                  own language. Good luck improving your English vocabulary!
                </p>
              </div>
            </div>
          </div>
          <div className="options pb-5">
            <Row className="options_down">
              <div className="options_things col-xl-4 col-lg-12 ">
                <div className="icons">
                  <Image src={medal} alt="" width={60} />
                </div>
                <div className="options_heading">
                  <h5 className="options_title">First & Best</h5>
                  <div className="options_descriptions">
                    <p>definitions on your own </p>
                    <p>definitions on your </p>
                  </div>
                </div>
              </div>
              <div className="options_things col-xl-4 col-lg-12 ">
                <div className="icons">
                  <Image src={message} alt="" width={60} />
                </div>
                <div className="options_heading">
                  <h5 className="options_title">Coustom Request</h5>
                  <div className="options_descriptions">
                    <p>definitions on your own </p>
                    <p>definitions on your </p>
                  </div>
                </div>
              </div>
              <div className="options_things col-xl-4 col-lg-12 ">
                <div className="icons">
                  <Image src={stick} alt="" width={60} />
                </div>
                <div className="options_heading">
                  <h5 className="options_title">Free Credits</h5>
                  <div className="options_descriptions">
                    <p>definitions on your own </p>
                    <p>definitions on your </p>
                  </div>
                </div>
              </div>
            </Row>
            <Row className="options_down ">
              <div className="options_things col-xl-4 col-lg-12 ">
                <div className="icons">
                  <Image src={medal} alt="" width={60} />
                </div>
                <div className="options_heading">
                  <h5 className="options_title">Intergrated APIs</h5>
                  <div className="options_descriptions">
                    <p>definitions on your own </p>
                    <p>definitions on your </p>
                  </div>
                </div>
              </div>
              <div className="options_things col-xl-4 col-lg-12 ">
                <div className="icons">
                  <Image src={message} alt="" width={60} />
                </div>
                <div className="options_heading">
                  <h5 className="options_title">Separate Portal</h5>
                  <div className="options_descriptions">
                    <p>definitions on your own </p>
                    <p>definitions on your </p>
                  </div>
                </div>
              </div>
              <div className="options_things col-xl-4 col-lg-12">
                <div className="icons">
                  <Image src={stick} alt="" width={60} />
                </div>
                <div className="options_heading">
                  <h5 className="options_title">Support 24/7</h5>
                  <div className="options_descriptions">
                    <p>definitions on your own </p>
                    <p>definitions on your </p>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
