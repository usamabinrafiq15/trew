import React from "react";
import logo from "../../assests/trew_white.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container } from "react-bootstrap";
import avatar from "../../assests/avatarprofile.png";

import Image from "next/image";
const Team = () => {
  return (
    <>
      <Container>
        <div className="whole_team">
          <div className="team pt-5 mt-5">
            <div className="team_center">
              <h4 className="team_head">Team </h4>
              <div className="line_team"></div>
            </div>
            <div className="team_heading py-4">
              <div>
                <h1 className="team_title"> Trust over competition</h1>
              </div>
            </div>
            <div className="team_description pb-5">
              <div className="team_description_para">
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
          <div className="team_box">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={2}
              // navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="team_box_things">
                  <div className="team_box_description">
                    <p>
                      The list below gives you the 1000 most frequently used
                      English es you the 1000 most frequently usedThe list below
                      gives you the 1000 most frequently used English es you the
                      1000 most frequently used
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-4">
                    <div>
                      {" "}
                      <h5 className="team_box_title">Michele Bevilacqua </h5>
                      <h6 className="co">Co-Founder</h6>
                    </div>

                    <div className="team_img">
                      {" "}
                      <Image src={avatar} alt="" width={60} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="team_box_things">
                  <div className="team_box_description">
                    <p>
                      The list below gives you the 1000 most frequently used
                      English es you the 1000 most frequently usedThe list below
                      gives you the 1000 most frequently used English es you the
                      1000 most frequently used
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-4">
                    <div>
                      {" "}
                      <h5 className="team_box_title">Michele Bevilacqua </h5>
                      <h6 className="co">Co-Founder</h6>
                    </div>

                    <div className="team_img">
                      {" "}
                      <Image src={avatar} alt="" width={60} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="team_box_things">
                  <div className="team_box_description">
                    <p>
                      The list below gives you the 1000 most frequently used
                      English es you the 1000 most frequently usedThe list below
                      gives you the 1000 most frequently used English es you the
                      1000 most frequently used
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-4">
                    <div>
                      {" "}
                      <h5 className="team_box_title">Michele Bevilacqua </h5>
                      <h6 className="co">Co-Founder</h6>
                    </div>

                    <div className="team_img">
                      {" "}
                      <Image src={avatar} alt="" width={60} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="team_box_things">
                  <div className="team_box_description">
                    <p>
                      The list below gives you the 1000 most frequently used
                      English es you the 1000 most frequently usedThe list below
                      gives you the 1000 most frequently used English es you the
                      1000 most frequently used
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-4">
                    <div>
                      {" "}
                      <h5 className="team_box_title">Michele Bevilacqua </h5>
                      <h6 className="co">Co-Founder</h6>
                    </div>

                    <div className="team_img">
                      {" "}
                      <Image src={avatar} alt="" width={60} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="team_box_things">
                  <div className="team_box_description">
                    <p>
                      The list below gives you the 1000 most frequently used
                      English es you the 1000 most frequently usedThe list below
                      gives you the 1000 most frequently used English es you the
                      1000 most frequently used
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-4">
                    <div>
                      {" "}
                      <h5 className="team_box_title">Michele Bevilacqua </h5>
                      <h6 className="co">Co-Founder</h6>
                    </div>

                    <div className="team_img">
                      {" "}
                      <Image src={avatar} alt="" width={60} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="positioned_team row">
            <div className="team_middle col-12">
              <div className="team_middle2">
                <h1 className="team_middle_title"> Our Partners</h1>
              </div>
              <div className="rating">
                <Image src={logo} width={150} alt="" />
              </div>
              <div className="rating hidden">
                <Image src={logo} width={150} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Team;
