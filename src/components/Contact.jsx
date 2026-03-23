import React from "react";
import Section from "./Section";
import logo from "../assets/travlog.png";
import { contacts, socials } from "../constants";
import waveSvg from "../assets/svg/wave-objects.svg";

const Contact = () => {
    return (
        <Section>
            <div
                className="flex relative items-center justify-center w-full flex-col gap-16"
                id="contact"
            >
                <div className="flex items-start justify-center flex-col gap-8">
                    <img src={logo} alt="Travlog" className="w-35.5" />
                    <p className="text-text-black/50 text-base text-[16px] md:text-[23px]">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC.
                    </p>
                    <div className="flex items-center justify-start gap-8">
                        {socials.map((socials) => (
                            <button
                                className={`flex items-center cursor-pointer justify-center ${socials.noBg ? "h-8 w-8 bg-primart rounded-full hover:bg-hover-color " : ""}`}
                            >
                                <a href="" className="cursor-pointer">
                                    <img
                                        src={socials.url}
                                        alt={socials.title}
                                    />
                                </a>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex items-start justify-between w-full flex-col md:flex-row">
                    {contacts.map((section, index) => (
                        <div
                            key={index}
                            className="flex items-start justify-start flex-col"
                        >
                            <h3 className="text-text-black font-semibold text-base text-[23px] mt-10 md:mt-0">
                                {section.title}
                            </h3>
                            <ul>
                                {section.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="text-text-black/75 text-base text-[18px] mb-5 mt-5 md:mb-8 md:mt-8"
                                    >
                                        <a
                                            href=""
                                            className="hover:text-primart cursor-pointer"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <img
                    src={waveSvg}
                    alt="Wave Line"
                    className="hidden md:flex absolute -top-35 md:-right-85 lg:-right-75"
                />
            </div>
        </Section>
    );
};

export default Contact;
