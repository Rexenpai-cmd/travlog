import Section from "./Section";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import mail from "../assets/svg/mail.svg";
import dots from "../assets/svg/dots.svg";

const Newsletter = () => {
    return (
        <Section>
            <div className="flex items-center justify-between px-[32px] py-[64px] md:px-[64px] md:py-[128px] gap-[60px] flex-col rounded-3xl w-full relative bg-yellow/8">
                <div className="flex flex-col w-full items-center gap-5 lg:mb-0 justify-center">
                    <h6 className="uppercase text-base text-center font-semibold text-[16px] md:text-[23px] text-secondary tracking-widest">
                        subscribe to our newsletter
                    </h6>
                    <h1 className=" text-text-black font-semibold text-center text-[32px] leading-tight md:text-[44px]">
                        Prepare yourself & let's explore the
                        <br />
                        beauty of the world
                    </h1>
                </div>
                <div className="flex items-center gap-[40px] flex-col w-full md:flex-row">
                    <div className="relative w-full">
                        <img
                            src={mail}
                            alt="Mail Svg"
                            className="absolute top-[35%] md:top-[34%] left-[30px] md:left-[60px] h-[20px] md:h-[32px]"
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter your email"
                            className="flex flex-1 w-full items-center rounded-3xl gap-5 justify-start bg-white px-[70px] py-[24px] md:px-[120px]  md:py-[32px] text-[14px] md:text-[23px] text-text-black/75 font-medium  focus:outline-none focus:ring-2 focus:ring-primart focus:border-transparent"
                        />
                    </div>
                    <button className="bg-primart w-full md:w-auto flex items-center justify-center px-[64px] py-[24px] md:py-[32px] rounded-3xl cursor-pointer">
                        <h6 className="text-[16px] md:text-[18px] text-text-light font-medium text-base text-center">
                            Subscribe
                        </h6>
                    </button>
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
