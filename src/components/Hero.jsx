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
            <div className="flex flex-col w-screen">
                <div className="flex items-center pt-[150px] lg:justify-evenly flex-col-reverse lg:flex-row">
                    <div className="flex mt-[50px] lg:mt-0 items-center lg:items-start justify-center flex-col">
                        <Button className="bg-white mb-7.5 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                            <h1 className="text-base font-semibold text-[14px] text-secondary">
                                Explore the World!
                            </h1>
                            <img src={bagSvg} alt="Bag Svg" />
                        </Button>
                        <h1 className="text-[30px] text-center text-base font-bold md:text-[55px] lg:text-[60px] mb-7.5 lg:text-left">
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
                            <Button className="bg-primart">
                                <h6 className="text-text-light text-[14px] text-base font-semibold">
                                    Get Started
                                </h6>
                            </Button>
                            <Button className="bg-white border border-text-light">
                                <img src={playSvg} alt="Play Svg" />
                                <h6 className="text-text-black text-[14px] text-base font-semibold">
                                    Watch Demo
                                </h6>
                            </Button>
                        </div>
                    </div>
                    <div className="relative flex justify-center w-[380px] md:w-[650px]">
                        <div className="relative flex items-center gap-[20px] pt-[60px]">
                            <div className="flex flex-col gap-[20px] shrink-0">
                                <img
                                    src={heroImage1}
                                    alt="Hero Image 1"
                                    className="w-[139px] md:w-[230px]"
                                />
                                <img
                                    src={heroImage2}
                                    alt="Hero Image 1"
                                    className="w-[139px] md:w-[230px]"
                                />
                            </div>
                            <img
                                src={heroImage3}
                                alt="Hero Image 1"
                                className="w-[139px] md:w-[230px]"
                            />
                        </div>
                        <img
                            src={planes}
                            alt="Plane Image"
                            className="absolute top-0 w-[360px] md:w-[650px]"
                        />
                        <img
                            src={map}
                            alt="Map Image"
                            className="absolute top-5 w-[360px] md:w-[550px]"
                        />
                        <ScrollParallax isAbsolutelyPositioned>
                            <div className="absolute top-50 left-8 md:top-70 md:left-15 flex items-center justify-center h-[32px] w-[32px] md:h-[50px] md:w-[50px] bg-secondary rounded-full">
                                <img
                                    src={sendSvg}
                                    alt="Send Svg"
                                    className="h-[16px] w-[16px] md:h-[25px] md:w-[25px]"
                                />
                            </div>
                        </ScrollParallax>

                        <ScrollParallax isAbsolutelyPositioned>
                            <div className="absolute flex items-center px-[16px] py-[8px] md:px-[32px] md:py-[14px] justify-center gap-[5px] px-[16px] py-[8px] rounded-full top-60 md:top-100 -right-0 lg:-right-10 bg-white pointer-events-none">
                                <img
                                    src={locationSvg}
                                    alt=""
                                    className="h-[16px] w-[16px] md:h-[25px] md:w-[25px]"
                                />
                                <h6 className="text-base text-text-black font-semibold text-[8px] md:text-[14px]">
                                    Top Places
                                </h6>
                            </div>
                        </ScrollParallax>

                        <div className="absolute top-90 right-25 md:top-135 md:right-45 flex items-center justify-center h-[32px] w-[32px] md:h-[50px] md:w-[50px] bg-secondary rounded-full">
                            <img
                                src={addSvg}
                                alt="Add User Svg"
                                className="h-[16px] w-[16px] md:h-[25px] md:w-[25px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
