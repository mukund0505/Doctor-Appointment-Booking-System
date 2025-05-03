import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Prescripto is a smart, user-friendly doctor appointment booking
            platform designed to make healthcare more accessible, efficient, and
            patient-centric. We connect patients with certified medical
            professionals across various specialties — enabling fast, reliable,
            and hassle-free appointment scheduling from the comfort of your
            home.
          </p>
          <p>
            Whether you're looking for a general physician, a specialist, or a
            follow-up consultation, Prescripto streamlines the process with
            real-time doctor availability, instant bookings, and digital
            reminders — all in one secure platform.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            To be the most trusted digital health platform, bridging the gap
            between doctors and patients through innovation and simplicity.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>
            Instantly connect patients with the right doctors to save time and
            streamline care.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE</b>
          <p>
            Book, manage, and track appointments anytime, anywhere — all from
            one platform.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION</b>
          <p>
            Get tailored doctor recommendations and reminders based on your
            health needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
