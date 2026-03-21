import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { categories } from "../constants";
import yellowBlur from "../assets/yellow-blur.png";

const Discover = () => {
    return (
        <Section>
            <div className="relative flex w-full items-center flex-col lg:flex-row">
                <div className="flex flex-col items-center gap-2.5 mb-12.5 lg:mb-0 lg:items-start lg:mr-15 justify-center">
                    <Heading>Services</Heading>
                    <SubHeading>Our top value categories for you</SubHeading>
                </div>
                <div className="flex items-center z-10 justify-evenly md:gap-3.75 gap-5 flex-col md:flex-row">
                    {categories.map((c) => (
                        <div
                            className={`flex items-center bg-white w-full flex-1 shrink-0 justify-center gap-10 flex-col rounded-4xl px-10 py-10 md:px-12.5 md:py-12.5 md:pb-25  ${c.withShadow ? "shadow-[0_20px_80px_rgba(0,0,0,0.10)]" : "border border-text-black/10"}`}
                        >
                            <img
                                src={c.img}
                                alt={c.label}
                                className="lg:h-15 lg:w-15"
                            />
                            <h1 className="text-text-black font-semibold text-[22px] text-center">
                                {c.label}
                            </h1>
                            <p className="text-text-black/50 text-[18px] text-center">
                                {c.text}
                            </p>
                        </div>
                    ))}
                </div>
                <img
                    src={yellowBlur}
                    alt="Yellow Blur"
                    className="absolute  -right-212.5 -top-175"
                />
            </div>
        </Section>
    );
};

export default Discover;
