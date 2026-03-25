import React, { useEffect, useState } from "react";
import Button from "./Button";
import { clientReviews } from "../constants";
import Section from "./Section";
import CircularButton from "./CircularButton";
import prevArrow from "../assets/svg/arrow-left-black.svg";
import nextArrow from "../assets/svg/arrow-right-black.svg";
import wave from "../assets/svg/gradient-wave.svg";
import star from "../assets/svg/yellow-star.svg";
import MotionWrapper from "./MotionWrapper";

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastInteraction, setLastInteraction] = useState(Date.now());

    function goNext() {
        setCurrentIndex((prev) => Math.min(prev + 1, clientReviews.length - 1));
        setLastInteraction(Date.now());
    }

    function goPrev() {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
        setLastInteraction(Date.now());
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            if (now - lastInteraction > 5000) {
                setCurrentIndex((prev) =>
                    prev === clientReviews.length - 1 ? 0 : prev + 1,
                );
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [lastInteraction]);

    return (
        <Section className="relative">
            <div className="flex items-center z-10 w-full  justify-center gap-14 flex-col md:flex-row">
                <MotionWrapper>
                    <CircularButton
                        className="hidden md:flex border border-text-black/10 bg-white hover:bg-gray-100"
                        onClick={goPrev}
                        disabled={currentIndex === 0}
                    >
                        <img src={prevArrow} alt="Prev" />
                    </CircularButton>
                </MotionWrapper>

                <div className="flex items-center justify-center w-full flex-col ">
                    <div className="flex flex-col w-full items-center lg:mb-0 justify-center ">
                        <MotionWrapper>
                            <h6 className="uppercase text-base text-center font-semibold text-[16px] md:text-[21px] text-secondary tracking-widest">
                                Testimonials
                            </h6>
                        </MotionWrapper>
                        <MotionWrapper>
                            <h1 className=" text-text-black font-semibold text-center text-[32px] leading-tight md:text-[44px]">
                                Trust our clients
                            </h1>
                        </MotionWrapper>
                    </div>
                    <div className="flex items-center justify-center w-full mt-11.5 flex-col gap-10">
                        <MotionWrapper>
                            <img
                                src={clientReviews[currentIndex].img}
                                alt="Client Profile"
                                className="h-28 w-28 rounded-full"
                            />
                        </MotionWrapper>
                        <MotionWrapper>
                            <h1 className="text-base text-[18px] md:text-[23px] text-text-black font-semibold">
                                <span className="font-semibold text-orange text-[20px] md:text-[28px]">
                                    {clientReviews[currentIndex].name}
                                </span>{" "}
                                / {clientReviews[currentIndex].role}
                            </h1>
                        </MotionWrapper>
                        <MotionWrapper>
                            <div className="flex items-center justify-center gap-5">
                                {Array.from({
                                    length: clientReviews[currentIndex].ratings,
                                }).map((_, i) => (
                                    <img key={i} src={star} alt="Star" />
                                ))}
                            </div>
                        </MotionWrapper>
                        <MotionWrapper>
                            <p className="text-base text-[18px] md:text-[21px] text-text-black/75 text-center">
                                {clientReviews[currentIndex].text}
                            </p>
                        </MotionWrapper>
                        <MotionWrapper>
                            <div className="flex items-center justify-center gap-5">
                                {clientReviews.map((r, i) => (
                                    <div
                                        className={`h-4 w-4 rounded-full ${i === currentIndex ? "bg-secondary" : "bg-text-black/5"}`}
                                    ></div>
                                ))}
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
                <MotionWrapper>
                    <CircularButton
                        className="hidden md:flex bg-primart hover:bg-hover-color "
                        onClick={goNext}
                        disabled={currentIndex === clientReviews.length - 1}
                    >
                        <img src={nextArrow} alt="Next" />
                    </CircularButton>
                </MotionWrapper>

                <MotionWrapper className="flex md:hidden w-full -mt-15 md:mt-0">
                    <div className="flex md:hidden items-center justify-between w-full">
                        <CircularButton
                            className="flex md:hidden h-14 w-14 hover:bg-gray-100 border border-text-black/10 md:border-0 bg-white"
                            onClick={goPrev}
                            disabled={currentIndex === 0}
                        >
                            <img src={prevArrow} alt="Prev" />
                        </CircularButton>
                        <CircularButton
                            className="flex md:hidden bg-primart h-14 w-14 hover:bg-hover-color"
                            onClick={goNext}
                            disabled={currentIndex === clientReviews.length - 1}
                        >
                            <img src={nextArrow} alt="Next" />
                        </CircularButton>
                    </div>
                </MotionWrapper>
            </div>
            <img
                src={wave}
                alt="Wave Background"
                className="hidden md:flex absolute md:-left-33 -left-40 md:top-15 lg:-top-25 -right-60 opacity-20"
            />
        </Section>
    );
};

export default Reviews;
