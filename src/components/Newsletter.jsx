import Section from "./Section";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import mail from "../assets/svg/mail.svg";
import dots from "../assets/svg/dots.svg";
import MotionWrapper from "./MotionWrapper";

const Newsletter = () => {
    return (
        <Section>
            <div className="flex items-center justify-between px-8 py-16 md:px-16 md:py-32 gap-15 flex-col rounded-3xl w-full relative bg-yellow/8">
                <div className="flex flex-col w-full items-center gap-5 lg:mb-0 justify-center">
                    <MotionWrapper>
                        <h6 className="uppercase text-base text-center font-semibold text-[16px] md:text-[23px] text-secondary tracking-widest">
                            subscribe to our newsletter
                        </h6>
                    </MotionWrapper>
                    <MotionWrapper>
                        <h1 className=" text-text-black font-semibold text-center text-[32px] leading-tight md:text-[44px]">
                            Prepare yourself & let's explore the
                            <br />
                            beauty of the world
                        </h1>
                    </MotionWrapper>
                </div>
                <div className="flex items-center gap-10 flex-col w-full md:flex-row">
                    <MotionWrapper className="w-full">
                        <div className="relative w-full">
                            <img
                                src={mail}
                                alt="Mail Svg"
                                className="absolute top-[35%] md:top-[34%] left-7.5 md:left-15 h-5 md:h-8"
                            />
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Enter your email"
                                className="flex flex-1 w-full items-center rounded-3xl gap-5 justify-start bg-white px-17.5 py-6 md:px-30  md:py-8 text-[14px] md:text-[23px] text-text-black/75 font-medium  focus:outline-none focus:ring-2 focus:ring-primart focus:border-transparent"
                            />
                        </div>
                    </MotionWrapper>

                    <MotionWrapper className="w-full md:w-auto">
                        <button className="bg-primart hover:bg-hover-color w-full md:w-auto flex items-center justify-center px-16 py-6 md:py-8 rounded-3xl cursor-pointer">
                            <h6 className="text-[16px] md:text-[18px] text-text-light font-medium text-base text-center">
                                Subscribe
                            </h6>
                        </button>
                    </MotionWrapper>
                </div>
                <img
                    src={dots}
                    alt="Dots"
                    className="absolute -left-10 -top-16 hidden md:flex"
                />
            </div>
        </Section>
    );
};

export default Newsletter;
