import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { ReactTyped } from "react-typed";
// import pic from "../../public/photo.avif";
import pic from "../../public/salmanLogo.jpeg";

const Home = () => {
    return (
        <>
            <div
                name="Home"
                className="max-w-screen-2xl container max-auto px-4 md:px-20 my-20"
            >
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                        <span className="text-xl">Welcome In My Feed</span>
                        <div className="flex space-x-1 text-2xl md:text-4xl">
                            <h1>Hello,I'm a </h1>
                            {/* <span className="text-red-700 font-bold ">
                Frontend Developer
              </span> */}
                            <ReactTyped
                                className="text-red-700 font-bold "
                                strings={["Frontend Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />

                        <p className="text-lg md:text-md  text-justify">
                            Hi there! I’m Salman Ansari, a passionate Front-End Developer with a focus on crafting
                            <br />
                            seamless and engaging web experiences. With a year of professional
                            experience, I specialize in
                            translating design concepts into responsive,user-friendly
                            interfaces using modern<br /> technologies.

                            I’m dedicated to improving website performance, reducing load
                            times, and enhancing overall user satisfaction.
                        </p>
                        <br />
                        {/* Social Media icons */}
                        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                            <div className="space-y-1">
                                <h1 className="font-bold ">Available</h1>
                                <ul className="flex space-x-5">
                                    <li>
                                        <a href="https://www.facebook.com/">
                                            <FaFacebookSquare className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/">
                                            <FaLinkedin className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/">
                                            <FaYoutube className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/">
                                            <FaGithub className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h1 className="font-bold">Currently Job Search</h1>
                                <div className="flex space-x-5">
                                    <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                                    <IoLogoJavascript />
                                    <FaPython />
                                    <TbBrandRedux />
                                </div>
                            </div>
                        </div>
                        {/* <div className="space-y-1">
              <h1 className="font-bold">Available</h1>
              <ul className="flex space-x-5">
                <li>
                  {""}
                  <FaFacebookSquare className="text-2xl cursor-pointer" />
                </li>
                <li>
                  {""}
                  <FaLinkedin className="text-2xl cursor-pointer" />
                </li>
                <li>
                  {""}
                  <FaYoutube className="text-2xl cursor-pointer" />
                </li>
                <li>
                  {""}
                  <FaGithub className="text-2xl cursor-pointer" />
                </li>
              </ul>
            </div>
            <div>
            <h1 className="font-bold">Currently Job Search</h1>
              <div className="flex space-x-5">
                <FaReact />
                <IoLogoJavascript />
                <FaPython />
                <TbBrandRedux />

              </div>
            </div> */}
                    </div>
                    <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
                        <img
                            src={pic}
                            className="rounded-full md:w-[450px] md:h-[450px]"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <hr />
        </>
    );
};

export default Home;
