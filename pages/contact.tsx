import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMessage, MdLocationOn } from "react-icons/md";
import { GrGoogle } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import faq from "../assests/faq.png";
const contact = () => {
  return (
    <>
      <div className="contact pb-5">
        <Container>
          <div className="d-flex justify-content-center">
            <div>
              <h1 className="con_title fw-bold pb-3 pt-5 mt-5"> Contact Us</h1>
            </div>
          </div>
          <div className=" pb-5 mb-5 d-flex justify-content-center">
            <div className="con_description_para">
              <p>
                {" "}
                The list below gives you the 1000 ow gives you frequently used
                es you most frequentl
              </p>
              <p>
                {" "}
                The list below gives you frequentlyow used es you used es you
                the git
              </p>
            </div>
          </div>
        </Container>
      </div>
      <ContactForm />
      <Faq />
    </>
  );
};

export default contact;

const ContactForm = () => {
  return (
    <div>
      <Container>
        <div className="ContactForm row py-5 my-5 ">
          <div className="ContactForm pe-5 col-xl-6 col-lg-12">
            <h4 className="ContactForm_head fw-bold">Trew the True</h4>
            <div className="fw-semibold contactForm_description pb-3 pt-4">
              <p>
                The list below gives you the 1000 most frequently used English
                words in alphabetical order. Once youve mastered the shorter
                vocabulary lists, this is the next step. words in alphabetical
                order. Once youve mastered the shorter
              </p>
            </div>
            <div className=" d-flex py-4">
              <FaPhoneAlt className="fs-2 info" />
              <h5 className=" px-4 fw-semibold">+39 365 478 9145</h5>
            </div>
            <div className=" d-flex py-4">
              <MdMessage className="fs-2 info" />
              <h5 className=" px-4 fw-semibold">info@trustrevolution.io</h5>
            </div>
            <div className=" d-flex py-4">
              <MdLocationOn className="fs-2 info" />
              <h5 className=" px-4 fw-semibold">
                Indirizzo, Via G.A. Longhin 11 - 35129 Padova
              </h5>
            </div>

            <div className="d-flex  py-4">
              <div className="pe-5">
                <GrGoogle className="fs-2 info" />
              </div>
              <div className="pe-5">
                <BsFacebook className="fs-2 info" />
              </div>
              <div className="pe-5">
                <BsTwitter className="fs-2 info" />
              </div>
              <div className="">
                <BsLinkedin className="fs-2 info" />
              </div>
            </div>
          </div>
          <div className=" concard_left col-xl-6 col-lg-12">
            <div className="con_card_size">
              <form>
                <div className="mb-3 ">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    {/* Name */}
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    {/* Your Email */}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder=" Email address"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    Well never share your email with anyone else.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    {/* Message */}
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Leave a Message here"
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                  ></textarea>
                </div>

                <div className="con_btn d-flex py-4 justify-content-end">
                  <span className="con_button">Send a message</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Faq = () => {
  return (
    <>
      <Container>
        <div className="pt-5">
          <h4 className="ContactForm_head fw-bold">
            Frequently asked questions
          </h4>
          <div className="py-5 my-5">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  <Image
                    src={faq}
                    className="logo_trew me-5"
                    width={40}
                    alt=""
                  />
                  <h5 className=" fw-semibold">Do we have a free plan ?</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="m-0 accordion_description">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <Image
                    src={faq}
                    className="logo_trew me-5"
                    width={40}
                    alt=""
                  />
                  <h5 className=" fw-semibold">
                    {" "}
                    Do we have any physicsal class ?{" "}
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="m-0 accordion_description">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <Image
                    src={faq}
                    className="logo_trew me-5"
                    width={40}
                    alt=""
                  />
                  <h5 className=" fw-semibold"> Do we hire new Empolyes? </h5>
                </Accordion.Header>
                <Accordion.Body>
                  {" "}
                  <p className="m-0 accordion_description">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  {" "}
                  <Image
                    src={faq}
                    className="logo_trew me-5"
                    width={40}
                    alt=""
                  />
                  <h5 className=" fw-semibold"> what is our misson? </h5>
                </Accordion.Header>
                <Accordion.Body>
                  {" "}
                  <p className="m-0 accordion_description">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  {" "}
                  <Image
                    src={faq}
                    className="logo_trew me-5"
                    width={40}
                    alt=""
                  />
                  <h5 className=" fw-semibold"> what is our destiny ? </h5>
                </Accordion.Header>
                <Accordion.Body>
                  {" "}
                  <p className="m-0 accordion_description">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Container>
    </>
  );
};
