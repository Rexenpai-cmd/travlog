import { useRef } from "react";
import Section from "./Section";
import bagSvg from "../assets/svg/bag.svg";
import Button from "./Button";
import playSvg from "../assets/svg/play.svg";
import planes from "../assets/hero/planes.png";
import map from "../assets/hero/map.png";
import heroImage2 from "../assets/hero/hero-image1.png";
import heroImage1 from "../assets/hero/hero-image3.png";
import heroImage3 from "../assets/hero/hero-image2.png";
import sendSvg from "../assets/svg/send.svg";
import locationSvg from "../assets/svg/location-yellow.svg";
import { ScrollParallax } from "react-just-parallax";
import addSvg from "../assets/svg/user-add.svg";
import arrowGrid from "../assets/svg/arrow-grid.svg";
import { companies } from "../constants";

const Hero = () => {
    const parallaxRef = useRef(null);

    return (
        <Section>
            <div className="flex flex-col w-screen min-h-screen" id="home">
                <div className="flex items-center pt-37.5 lg:justify-evenly flex-col-reverse lg:flex-row">
                    <div className="flex mt-12.5 lg:mt-0 items-center lg:items-start justify-center flex-col">
                        <Button className="bg-white mb-7.5 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                            <h1 className="text-base font-semibold text-[14px] text-secondary">
                                Explore the World!
                            </h1>
                            <img src={bagSvg} alt="Bag Svg" />
                        </Button>
                        <h1 className="text-[30px] leading-tight text-center text-base font-bold md:text-[55px] lg:text-[60px] mb-7.5 lg:text-left">
                            Travel{" "}
                            <span className="text-secondary">
                                Top
                                <br />
                                Destination{" "}
                            </span>
                            <br />
                            of the World!{" "}
                        </h1>
                        <p className="text-[16px] md:text-[18px] text-text-black/50 mb-7.5">
                            We always make our customer happy by
                            <br />
                            providing as many choices as possible{" "}
                        </p>
                        <div className="flex w-full flex-col justify-center items-stretch gap-5 md:flex-row md:items-center lg:justify-start">
                            <Button className="bg-primart hover:bg-hover-color cursor-pointer">
                                <h6 className="text-text-light text-[14px] text-base font-semibold">
                                    Get Started
                                </h6>
                            </Button>
                            <Button className="bg-white border border-text-light cursor-pointer">
                                <img src={playSvg} alt="Play Svg" />
                                <h6 className="text-text-black text-[14px] text-base font-semibold">
                                    Watch Demo
                                </h6>
                            </Button>
                        </div>
                    </div>
                    <div className="relative flex justify-center w-95 md:w-162.5">
                        <div className="relative flex items-center gap-5 pt-15">
                            <div className="flex flex-col gap-5 shrink-0">
                                <img
                                    src={heroImage1}
                                    alt="Hero Image 1"
                                    className="w-34.75 md:w-57.5"
                                />
                                <img
                                    src={heroImage2}
                                    alt="Hero Image 1"
                                    className="w-34.75 md:w-57.5"
                                />
                            </div>
                            <img
                                src={heroImage3}
                                alt="Hero Image 1"
                                className="w-34.75 md:w-57.5"
                            />
                        </div>
                        <img
                            src={planes}
                            alt="Plane Image"
                            className="absolute top-0 w-90 md:w-162.5"
                        />
                        <img
                            src={map}
                            alt="Map Image"
                            className="absolute top-5 w-90 md:w-137.5"
                        />
                        <ScrollParallax isAbsolutelyPositioned>
                            <div className="absolute top-50 left-8 md:top-70 md:left-15 flex items-center justify-center h-8 w-8 md:h-12.5 md:w-12.5 bg-secondary rounded-full">
                                <img
                                    src={sendSvg}
                                    alt="Send Svg"
                                    className="h-4 w-4 md:h-6.25 md:w-6.25"
                                />
                            </div>
                        </ScrollParallax>

                        <ScrollParallax isAbsolutelyPositioned>
                            <div className="absolute flex items-center px-4 md:px-8 md:py-3.5 justify-center gap-1.25 py-2 rounded-full top-60 md:top-100 right-0 lg:-right-10 bg-white pointer-events-none">
                                <img
                                    src={locationSvg}
                                    alt=""
                                    className="h-4 w-4 md:h-6.25 md:w-6.25"
                                />
                                <h6 className="text-base text-text-black font-semibold text-[8px] md:text-[14px]">
                                    Top Places
                                </h6>
                            </div>
                        </ScrollParallax>

                        <div className="absolute top-90 right-25 md:top-135 md:right-45 flex items-center justify-center h-8 w-8 md:h-12.5 md:w-12.5 bg-orange rounded-full">
                            <img
                                src={addSvg}
                                alt="Add User Svg"
                                className="h-4 w-4 md:h-6.25 md:w-6.25"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-10 w-full lg:justify-between mt-20 md:mt-30">
                    {companies.map((companies) => (
                        <img src={companies.url} alt={companies.title} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Hero;
