import React from "react";
import man from "../../assests/insect.png";
import bug from "../../assests/software-engineer.png";
import { BsFillBugFill } from "react-icons/bs";
import { MdSettingsSystemDaydream } from "react-icons/md";
import { Container } from "react-bootstrap";
const Service = () => {
  return (
    <>
      <Container>
        <div className="service pt-5">
          <div className="service_center">
            <h4 className="service_head">Service </h4>
            <div className="line_service"></div>
          </div>
          <div className="service_heading py-4">
            <div>
              <h1 className="service_title"> The 1000 most frequently used</h1>
              <h1 className="service_title "> The 1000 most frequently </h1>
            </div>
          </div>
          <div className="service_description pb-5">
            <div className="service_description_para">
              <p>
                {" "}
                The list below gives you the 1000 most frequently used English
                es you the 1000 most frequently used
              </p>
              <p>
                {" "}
                The list below gives you frequently used es you the 1000 most
                frequently used English
              </p>
            </div>
          </div>
        </div>
        <div className="service_box mb-5">
          <div className="service_box_things">
            <div className="service_img">
              {/* <img src={bug} />  */}
              <MdSettingsSystemDaydream />
            </div>
            <h5 className="service_box_title">Software Service</h5>
            <div className="service_box_description">
              <p>
                The list below gives you the 1000 most frequently used English
                es you the 1000 most frequently usedThe list below gives you the
                1000 most frequently used English es you the 1000 most
                frequently used
              </p>
            </div>
          </div>
          <div className="service_box_things">
            <div className="service_img">
              {/* <img src={man}  />  */}
              <BsFillBugFill />
            </div>
            <h5 className="service_box_title">Software Service</h5>
            <div className="service_box_description">
              <p>
                The list below gives you the 1000 most frequently used English
                es you the 1000 most frequently usedThe list below gives you the
                1000 most frequently used English es you the 1000 most
                frequently used
              </p>
            </div>
          </div>
          {/* <div className="service_box_things">
          <div className="service_img">
            <MdSettingsSystemDaydream />
          </div>
          <div className="service_box_title">Software Service</div>
          <div className="service_box_description">
            <p>
              The list below gives you the 1000 most frequently used English es
              you the 1000 most frequently usedThe list below gives you the 1000
              most frequently used English es you the 1000 most frequently used
            </p>
          </div>
        </div> */}
        </div>
      </Container>
    </>
  );
};

export default Service;
