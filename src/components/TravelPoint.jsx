import React from "react";
import Section from "./Section";
import personImg from "../assets/travel/person.png";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { count } from "../constants";
import MotionWrapper from "./MotionWrapper";

const TravelPoint = () => {
    return (
        <Section>
            <div className="flex items-center w-screen flex-col lg:flex-row lg:-ml-50">
                <MotionWrapper>
                    <img
                        src={personImg}
                        alt="Person"
                        className="self-center mb-15 lg:mb-0"
                    />
                </MotionWrapper>

                <div className="flex items-center gap-10 justify-center w-full flex-col">
                    <div className="flex flex-col items-center gap-2.5 lg:mb-0 lg:items-start lg:mr-15 justify-center">
                        <MotionWrapper>
                            <Heading>Travel point</Heading>
                        </MotionWrapper>
                        <MotionWrapper>
                            <SubHeading>
                                We help you find your dream location
                            </SubHeading>
                        </MotionWrapper>
                    </div>
                    <MotionWrapper>
                        <p className="text-text-black/50 text-[18px] text-center lg:text-start">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC.
                        </p>
                    </MotionWrapper>

                    <div className="grid grid-cols-1 w-full md:mt-5 gap-5 md:grid-cols-2">
                        {count.map((c) => (
                            <MotionWrapper>
                                <div className="border border-text-black/10 py-8 px-8 gap-4 rounded-4xl flex items-center justify-center flex-col">
                                    <h1 className="text-[35px] font-semibold text-orange text-base">
                                        {c.count}
                                    </h1>
                                    <h6 className="text-base text-text-black text-[18px] text-center">
                                        {c.label}
                                    </h6>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default TravelPoint;
