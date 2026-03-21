import Section from "./Section";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { features } from "../constants";
import bg from "../assets/features/BACKGROUND.png";

const Features = () => {
    return (
        <Section>
            <div className="flex items-center justify-between w-full flex-col-reverse lg:flex-row">
                <div className="flex items-center justify-center w-full flex-col">
                    <div className="flex flex-col w-full mb-10 items-center gap-2.5 lg:mb-12.5 lg:items-start justify-center">
                        <Heading>Key features</Heading>
                        <SubHeading>We offer best services</SubHeading>
                        <p className="text-text-black/50 text-base mt-7.5 text-[18px]">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC.
                        </p>
                    </div>

                    <div className="w-full flex flex-col items-start justify-center">
                        {features.map((feat) => (
                            <div
                                className={`flex  items-start justify-center gap-7 md:justify-start w-full md:items-center flex-col px-8 py-8 md:flex-row ${feat.withBorder ? "border border-text-black/10 rounded-4xl" : ""}`}
                            >
                                <div
                                    className={`h-20 w-20 flex items-center  justify-center rounded-3xl ${feat.bg}`}
                                >
                                    <img
                                        src={feat.svg}
                                        alt={feat.title}
                                        className="h-8.5"
                                    />
                                </div>
                                <div className="flex items-start justify-center gap-2 flex-col">
                                    <h1 className="text-[23px] font-semibold text-text-black text-base">
                                        {feat.title}
                                    </h1>
                                    <p className="text-[18px] text-text-black/50 text-base">
                                        {feat.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex shrink-0 items-center w-full lg:w-auto mb-10 lg:mb-0 lg:ml-25 justify-center">
                    <img
                        src={bg}
                        alt="background"
                        className="w-87.5 md:w-125"
                    />
                </div>
            </div>
        </Section>
    );
};

export default Features;
