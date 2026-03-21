import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import CircularButton from "./CircularButton";
import prevArrow from "../assets/svg/arrow-left-black.svg";
import nextArrow from "../assets/svg/arrow-right-black.svg";
import { destination } from "../constants";
import orangeStar from "../assets/svg/star.svg";

const Destination = () => {
    return (
        <Section>
            <div className="flex w-full flex-col items-center justify-center">
                <div className="relative flex w-full items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <div className="flex flex-col items-center gap-2.5 mb-12.5 lg:mb-0 lg:items-start justify-center">
                        <Heading>Top destination</Heading>
                        <SubHeading className="text-center">
                            Explore top destination
                        </SubHeading>
                    </div>
                    <div className="flex items-center justify-between w-full md:w-auto gap-10 lg:justify-center">
                        <CircularButton className="border border-text-black/10 bg-white">
                            <img src={prevArrow} alt="Prev" />
                        </CircularButton>
                        <CircularButton className="bg-primart">
                            <img src={nextArrow} alt="Next" />
                        </CircularButton>
                    </div>
                </div>
                <div className="flex items-center w-full justify-evenly">
                    {destination.map((dest) => (
                        <div></div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Destination;
