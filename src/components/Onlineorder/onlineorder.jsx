import React from "react";
import Orderitem from "./orderitem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import salad from "./../../assets/Online_order img/salad.png";
import soups from "./../../assets/Online_order img/soups.png";
import pizza from "./../../assets/Online_order img/pizza.png";
import deserts from "./../../assets/Online_order img/deserts.png";
import Sliderbuttons from "../Sliderbuttons/sliderbuttons";
import Container from "../../Utils/Container/Container";
const Onlineorder = () => {
  return (
    <>
      <div>
        <Container>
          <div className="text-center 2xl:w-[20%] md:w-[260px] pt-12 mx-auto">
            <div className="border-b-4 pb-3  text-[#D99904] 2xl:text-lg lg:text-base md:text-base">
              <h1 className="font-italic">---From 11:00am to 10:00pm---</h1>
            </div>
            <h4 className="border-b-4 lg:pt-7 lg:pb-7 md:pb-4 md:pt-4 font-inter font-normal md:text-lg 2xl:text-4xl">
              ORDER ONLINE
            </h4>
          </div>

          <Swiper spaceBetween={50} slidesPerView={4}>
            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>
            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>
            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <div>
              <SwiperSlide>
                <Orderitem src={salad} ordertitle="SALADS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={soups} ordertitle="SOUPS" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={pizza} ordertitle="PIZZA" />
              </SwiperSlide>
              <SwiperSlide>
                <Orderitem src={deserts} ordertitle="DESERTS" />
              </SwiperSlide>
            </div>

            <SwiperSlide>
              <Orderitem src={salad} ordertitle="SALADS" />
            </SwiperSlide>
            <SwiperSlide>
              <Orderitem src={soups} ordertitle="SOUPS" />
            </SwiperSlide>
            <SwiperSlide>
              <Orderitem src={pizza} ordertitle="PIZZA" />
            </SwiperSlide>
            <SwiperSlide>
              <Orderitem src={deserts} ordertitle="DESERTS" />
            </SwiperSlide>

            <div className=" text-center pt-5 pb-10 ">
              <Sliderbuttons />
            </div>
          </Swiper>
        </Container>
      </div>
    </>
  );
};

export default Onlineorder;
