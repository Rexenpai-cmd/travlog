import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import CircularButton from "./CircularButton";
import prevArrow from "../assets/svg/arrow-left-black.svg";
import nextArrow from "../assets/svg/arrow-right-black.svg";
import { destination } from "../constants";
import orangeStar from "../assets/svg/star.svg";
import MotionWrapper from "./MotionWrapper";

const Destination = () => {
    return (
        <Section>
            <div className="flex w-full flex-col items-center justify-center">
                <div className="relative flex w-full items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <div className="flex flex-col items-center gap-2.5 mb-12.5 lg:mb-10 lg:items-start justify-center">
                        <MotionWrapper>
                            <Heading>Top destination</Heading>
                        </MotionWrapper>
                        <MotionWrapper>
                            <SubHeading className="text-center">
                                Explore top destination
                            </SubHeading>
                        </MotionWrapper>
                    </div>
                </div>
                <div className="flex items-center w-full justify-evenly flex-col md:flex-row gap-8 md:gap-8">
                    {destination.map((dest) => (
                        <MotionWrapper>
                            <div className="flex justify-center">
                                <div className="flex items-start flex-col min-h-143.75 max-w-93.75 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] rounded-3xl">
                                    <img
                                        src={dest.url}
                                        alt={dest.title}
                                        className="w-full"
                                    />
                                    <div className="flex items-start w-full px-5 py-7.5 h-full justify-between flex-col">
                                        <div className="flex items-start justify-between w-full mb-2.5">
                                            <h1 className="text-[23px] font-semibold text-text-black">
                                                {dest.title}
                                            </h1>
                                            <h1 className="text-[23px] font-semibold text-secondary">
                                                {dest.price}
                                            </h1>
                                        </div>
                                        <h6 className="text-[18px] text-medium text-text-black/75 text-start text-base mb-7.5">
                                            {dest.location}
                                        </h6>
                                        <div className="flex items-center justify-start w-full">
                                            <h1 className="text-[26px] font-semibold text-orange">
                                                {dest.price}
                                            </h1>
                                            <img src={orangeStar} alt="Star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Destination;
