import React from "react";
import medal from "../../assests/medal.png";
import message from "../../assests/message.png";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";
const Contact = () => {
  return (
    <>
      <Container>
        <div className="contacts row ">
          <div className="contact_left col-xl-6 col-lg-12">
            <h4 className="contact_head_left">Lets Connect</h4>
            <div className="line_contact_left"></div>

            <form className="py-4">
              <div className="mb-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  Well never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Service
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              {/* <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div> */}
              <div className="btn mt-5">
                <div className="submit_btn"> Submit </div>
              </div>
            </form>
          </div>
          <div className="contact_right col-xl-6 col-lg-12">
            <h4 className="contact_head">
              Contact
              </h4>
              <div className="line_contact"></div>
         
            <h1 className="contact_title py-4">
              Call Our Customer Service We will Help for Your Convenience
            </h1>
            <div className="contact_description pb-5">
              <p>
                The list below gives you the 1000 most frequently used English
                words in alphabetical order.   The list below gives you the 1000 most frequently used English
            
              </p>
            </div>
            <div className="Contact_options">
              <Row className="Contact_options_down ">
                <div className="Contact_options_things col-6 ">
                  <div className="Contact_icons">
                    <Image src={medal} alt="" width={60} />
                  </div>
                  <div className="Contact_options_heading">
                    <h5 className="Contact_options_title">Phone Number</h5>
                    <div className="Contact_options_descriptions">
                      <p> +(1600) 4567890 </p>
                    </div>
                  </div>
                </div>
                <div className="Contact_options_things col-6 ">
                  <div className="Contact_icons">
                    <Image src={message} alt="" width={60} />
                  </div>
                  <div className="Contact_options_heading">
                    <h5 className="Contact_options_title">Official Location</h5>
                    <div className="Contact_options_descriptions">
                      <p>123 Fifth Avenue, New York.</p>
                    </div>
                  </div>
                </div>
              </Row>
              <Row className="Contact_options_down">
                <div className="Contact_options_things col-6 ">
                  <div className="Contact_icons">
                    <Image src={medal} alt="" width={60} />
                  </div>
                  <div className="Contact_options_heading">
                    <h5 className="Contact_options_title">E-mail Address</h5>
                    <div className="Contact_options_descriptions">
                      <p>yourid@example.com</p>
                    </div>
                  </div>
                </div>
                <div className="Contact_options_things col-6 ">
                  <div className="Contact_icons">
                    <Image src={message} alt="" width={60} />
                  </div>
                  <div className="Contact_options_heading">
                    <h5 className="Contact_options_title">Working Hours</h5>
                    <div className="Contact_options_descriptions">
                      <p>Everyday (7AM - 4PM) </p>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
