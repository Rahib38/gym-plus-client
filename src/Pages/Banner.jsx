import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-[650px]"
      >
        <SwiperSlide>
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://media.istockphoto.com/id/1384524371/photo/gym-time.jpg?s=612x612&w=0&k=20&c=FIttp8vOyaKEUFaVzfnV80A2DqcYo1dktadONWAzjPE=)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Overcome your insecurities
                </h1>
                <p className="mb-5">
                  We help females overcome their negative body image perceptions
                  by offering tailored fitness and nutrition plans. You can
                  achieve the body of your dreams, whatever this may be -
                  supported alongside the Body by Megan programme.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Become the best version of yourself
                </h1>
                <p className="mb-5">
                  you can receive a training plan designed for your fitness
                  goals. We will work together to tailor this plan based on your
                  current fitness levels and what you are hoping to achieve
                  short-term.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/868704/pexels-photo-868704.jpeg?auto=compress&cs=tinysrgb&w=600)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Your New Coach</h1>
                <p className="mb-5">
                  Your new Coach Megan is passionate about helping as many
                  females as possible fall in love with their bodies. Having
                  struggled with her own body issues, she has overcome these
                  challenges and now wants to help you too!
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/866019/pexels-photo-866019.jpeg?auto=compress&cs=tinysrgb&w=600)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">James Whipp Fitness</h1>
                <p className="mb-5">
                  With years of experience, and hundreds of success stories
                  worldwide, I specialise in Muscle Gain and Fat Loss with both
                  Males and Females. Are you ready to write your success story?
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1153367/pexels-photo-1153367.jpeg?auto=compress&cs=tinysrgb&w=600)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">About James Whipp.</h1>
                <p className="mb-5">
                  James is a Level 3 Personal Trainer with years of experience
                  in guiding people to achieve their health & fitness goals,
                  both in-person and online.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};
export default Banner;
