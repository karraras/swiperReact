import { Swiper, SwiperSlide } from "swiper/react";
import Brand from "./Brand";
import "swiper/css";
import {
  faFacebook,
  faHtml5,
  faCss3,
  faAngular,
  faSass,
  faJs,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
function Slider() {
  return (
    <section className="h-screen flex items-center px-7 bg-black">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        className="h-[300px] w-full flex-end"
      >
        <SwiperSlide
          style={{ display: "flex" }}
          className=" mr-[50px] items-end"
        >
          <Brand icon={faFacebook} name="Facebook" color="blue" />
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex" }}
          className=" mr-[50px] items-end"
        >
          <Brand icon={faHtml5} name="Html" color="blue" />
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex" }}
          className=" mr-[50px] items-end"
        >
          <Brand icon={faCss3} name="Css" color="blue" />
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex" }}
          className=" mr-[50px] items-end"
        >
          <Brand icon={faAngular} name="Angular" color="orange" />
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex" }}
          className=" mr-[50px] items-end"
        >
          <Brand icon={faSass} name="Sass" color="blue" />
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex" }}
          className=" mr-[50px] items-end"
        >
          <Brand icon={faJs} name="JavaScript" color="blue" />
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex" }}
          className=" mr-[50px] items-end"
        >
          <Brand icon={faReact} name="React" color="blue" />
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex" }}
          className=" mr-[50px] items-end"
        >
          <Brand icon={faVuejs} name="Vuejs" color="green" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slider;
