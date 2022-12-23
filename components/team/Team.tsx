import React from "react";
import logo from "../../assests/trew_white.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container } from "react-bootstrap";
import Image from "next/image";
const Team = () => {
  return (
    <>
    <Container>
    <div className="whole_team">
        <div className="team">
          <div className="team_center">
            <div className="team_head">
              Team
              <div className="line_team"></div>
            </div>
          </div>
          <div className="team_heading">
            <div>
              <div className="team_title"> Trust over competition</div>
            </div>
          </div>
          <div className="team_description">
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
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className="team_box_things">
              <div className="team_box_description">
                <p>
                  The list below gives you the 1000 most frequently used English
                  es you the 1000 most frequently usedThe list below gives you
                  the 1000 most frequently used English es you the 1000 most
                  frequently used
                </p>
              </div>
              <div>
                <div className="team_box_title">
                  Michele Bevilacqua
                  <div className="co">Co-Founder</div>
                </div>
                <div className="team_img">{/* <img src={bug} />  */}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="team_box_things">
              <div className="team_box_description">
                <p>
                  The list below gives you the 1000 most frequently used English
                  es you the 1000 most frequently usedThe list below gives you
                  the 1000 most frequently used English es you the 1000 most
                  frequently used
                </p>
              </div>
              <div>
                <div className="team_box_title">
                  Alessandro Chiarelli
                  <div className="co">Co-Founder</div>
                </div>
                <div className="team_img">{/* <img src={bug} />  */}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="team_box_things">
              <div className="team_box_description">
                <p>
                  The list below gives you the 1000 most frequently used English
                  es you the 1000 most frequently usedThe list below gives you
                  the 1000 most frequently used English es you the 1000 most
                  frequently used
                </p>
              </div>
              <div>
                <div className="team_box_title">
                  Alessandro Chiarelli
                  <div className="co">Co-Founder</div>
                </div>
                <div className="team_img">{/* <img src={bug} />  */}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="team_box_things">
              <div className="team_box_description">
                <p>
                  The list below gives you the 1000 most frequently used English
                  es you the 1000 most frequently usedThe list below gives you
                  the 1000 most frequently used English es you the 1000 most
                  frequently used
                </p>
              </div>
              <div>
                <div className="team_box_title">
                  Alessandro Chiarelli
                  <div className="co">Co-Founder</div>
                </div>
                <div className="team_img">{/* <img src={bug} />  */}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="team_box_things">
              <div className="team_box_description">
                <p>
                  The list below gives you the 1000 most frequently used English
                  es you the 1000 most frequently usedThe list below gives you
                  the 1000 most frequently used English es you the 1000 most
                  frequently used
                </p>
              </div>
              <div>
                <div className="team_box_title">
                  Alessandro Chiarelli
                  <div className="co">Co-Founder</div>
                </div>
                <div className="team_img">{/* <img src={bug} />  */}</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
        <div className="positioned_team row">
          <div className="team_middle col-12">
            <div className="team_middle2">
              <div className="team_middle_title"> Our Partners</div>
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
