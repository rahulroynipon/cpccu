import { useState } from "react";
import heroImg from "/src/assets/img/hero.png";

export default function Hero() {
  const [allText, setText] = useState(true);
  return (
    <main className=" px-5 my-5 md:px-2 mt-14">
      <h1 className="py-4 text-center text-2xl md:text-3xl font-bold text-black/80">
        <marquee className="animated-text">
          Competitive Programming Camp City University
        </marquee>
      </h1>

      {/* <section className="grid grid-cols-4 grid-rows-2 justify-center items-center gap-x-4 gap-y-2 md:gap-y-7 md:gap-x-12 md:mt-10">
        <div className="order-2 col-span-2 row-span-1 md:order-1 md:col-span-2 md:row-span-1">
          <h2 className="text-2xl md:text-4xl font-bold text-black/80">
            Join The Journey Of <br />
            <span className="text-primary"> Programming</span>
            <br />
            Learn & Grow with us!
          </h2>
        </div>
        <div className="order-1 col-span-2 row-span-1 md:order-2 md:col-span-2 md:row-span-2 flex lg:justify-end">
          <div className="relative">
            <div className=" absolute inset-0 bg-black/30 rounded-xl"></div>
            <img
              className="lg:max-h-[500px] md:h-full h-[200px]"
              src={heroImg}
              alt="city university"
            />
          </div>
        </div>

        <div className="order-3 col-span-4 md:order-3 md:col-span-2 md:row-span-1 self-start flex flex-col items-start gap-5 md:gap-7">
          <p className="text-justify text-sm">
            Join the journey of programming at City University! Our Competitive
            Programming Club is dedicated to helping you learn, grow, and excel
            in the world of programming. Whether you're a beginner or an
            experienced coder, our club offers a supportive community where you
            can sharpen your skills, tackle coding challenges, and participate
            in competitions. Don't miss out on the opportunity to be part of
            this exciting adventure. Learn and grow with us!
          </p>

          <button className="btn font-bold text-white">Sign Up</button>
        </div>
      </section> */}
      <section className="flex flex-col-reverse md:flex-row  items-center justify-center my-3 gap-8 md:my-10 md:gap-12">
        <div className="w-full flex  flex-col md:items-start gap-4 md:gap-7">
          <h2 className="text-2xl md:text-4xl font-bold text-black/80 text-center md:text-left">
            Join The Journey Of <br />
            <span className="text-primary"> Programming</span>
            <br />
            Learn & Grow with us!
          </h2>
          <p
            onClick={() => {
              setText((prev) => !prev);
            }}
            className={`text-justify text-sm ${
              allText ? "line-clamp-4" : "line-clamp-none"
            } md:line-clamp-none transition-all duration-300`}
          >
            Join the journey of programming at City University! Our Competitive
            Programming Club is dedicated to helping you learn, grow, and excel
            in the world of programming. Whether you're a beginner or an
            experienced coder, our club offers a supportive community where you
            can sharpen your skills, tackle coding challenges, and participate
            in competitions. Don't miss out on the opportunity to be part of
            this exciting adventure. Learn and grow with us!
          </p>

          <button className="btn mt-2 md:mt-0 font-bold text-white">
            Sign Up
          </button>
        </div>
        <div className="w-full flex md:justify-end">
          <div className="relative">
            <img
              className="lg:max-h-[450px] md:h-full h-[200px] w-screen object-cover rounded-xl"
              src={heroImg}
              alt="city university"
            />
            <div className=" absolute inset-0 bg-black/30 rounded-xl"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
