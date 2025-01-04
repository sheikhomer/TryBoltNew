"use client";
import { PageBlocksHero } from "../../tina/__generated__/types";
import { Template } from "tinacms";
import Image from "next/image";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import React, { useEffect } from "react";
import { Button } from "../ui/button";

export const Hero = ({ data }: { data?: PageBlocksHero }) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [isPaused, setIsPaused] = React.useState(false);
    const SLIDE_INTERVAL = 15000; // Adjust this value to change slide duration (in milliseconds)

    useEffect(() => {
        if (!api || isPaused) {
            return;
        }

        // Start autoplay
        const interval = setInterval(() => {
            api.scrollNext();
        }, SLIDE_INTERVAL); // Using the constant instead of hardcoded value

        // Cleanup on unmount
        return () => clearInterval(interval);
        }, [api, isPaused]);

    const handleInteraction = () => {
        setIsPaused(true);
    };
    
    const handleArrowClick = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            api?.scrollPrev();
        } else {
            api?.scrollNext();
        }
        setIsPaused(false);
    };
    return (
        <section className="pt-32 pb-16 px-4">
            <div className="container mx-auto">
                <Carousel
                    setApi={setApi}
                    opts={{ loop: true }}
                    className="cursor-pointer"
                    onMouseEnter={handleInteraction}
                    onTouchStart={handleInteraction}
                >
                    <CarouselContent>
                        {/* First Slide */}
                        <CarouselItem>
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                <div className="w-full md:w-1/2 order-1 md:order-1">
                                    <Image
                                        src="/assets/hero-marketing.svg"
                                        alt="Digital Growth Illustration"
                                        width={600}
                                        height={600}
                                        priority
                                        className="w-full h-auto md:h-full"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 order-2 md:order-2">
                                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                                        {data?.headline1 ??
                                            "Adaptimize: Transforming Marketing Strategies with AI-Powered Precision"}
                                    </h1>
                                    <p className="text-xl text-muted-foreground mb-8">
                                        {data?.subheading1 ??
                                            "Adaptimize is a results-driven digital agency that harnesses the power of AI and advanced data science to revolutionize the marketing strategy."}
                                    </p>
                                    <Button size="lg">{data?.buttonText1 ?? "Book a Free Strategy Session"}</Button>
                                </div>
                            </div>
                        </CarouselItem>

                        {/* Second Slide */}
                        <CarouselItem>
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                <div className="w-full md:w-1/2 order-1 md:order-1">
                                    <Image
                                        src="/assets/hero-tech.svg"
                                        alt="Technology Illustration"
                                        width={600}
                                        height={600}
                                        priority
                                        className="w-full h-auto md:h-full"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 order-2 md:order-2">
                                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                                        {data?.headline2 ??
                                            "Comprehensive Technology Solutions for Businesses"}
                                    </h1>
                                    <p className="text-xl text-muted-foreground mb-8">
                                        {data?.subheading2 ??
                                            "Adaptimize delivers cutting-edge AI, web development, CRM, and IT outsourcing solutions to drive business growth."}
                                    </p>
                                    <Button size="lg">{data?.buttonText2 ?? "Book a Free Consultation"}</Button>
                                </div>
                            </div>
                        </CarouselItem>

                        {/* Third Slide */}
                        <CarouselItem>
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                <div className="w-full md:w-1/2 order-1 md:order-1">
                                    <Image
                                        src="/assets/hero-biz.svg"
                                        alt="Results Illustration"
                                        width={600}
                                        height={600}
                                        priority
                                        className="w-full h-auto md:h-full"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 order-2 md:order-2">
                                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                                        {data?.headline3 ??
                                            "Small Business Specialist: Your One-stop Partner for Marketing and Tech"}
                                    </h1>
                                    <p className="text-xl text-muted-foreground mb-8">
                                        {data?.subheading3 ??
                                            "Adaptimize specializes in affordable, tailored IT and marketing solutions to fuel small business growth."}
                                    </p>
                                    <Button size="lg">{data?.buttonText3 ?? "Book a Free Strategy Session"}</Button>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious onClick={() => handleArrowClick('prev')} />
                    <CarouselNext onClick={() => handleArrowClick('next')} />
                </Carousel>
            </div>
        </section>
    );
};


export const heroBlockSchema: Template = {
    name: "hero",
    label: "Hero",
    ui: {
        defaultItem: {
            headline1: "Adaptimize: Transforming Marketing Strategies with AI-Powered Precision",
            headline2: "Comprehensive Technology Solutions for Businesses",
            headline3: "Small Business Specialist: Your One-stop Partner for Marketing and Tech",
            subheading1: "Adaptimize is a results-driven digital agency that harnesses the power of AI and advanced data science to revolutionize the marketing strategy.",
            subheading2: "Adaptimize delivers cutting-edge AI, web development, CRM, and IT outsourcing solutions to drive business growth.",
            subheading3: "Adaptimize specializes in affordable, tailored IT and marketing solutions to fuel small business growth.",
            buttonText1: "Book a Free Strategy Session",
            buttonText2: "Book a Free Consultation",
            buttonText3: "Book a Free Strategy Session",
        },
    },
    fields: [
        {
            type: "string",
            label: "Headline-1",
            name: "headline1",
        },
        {
            type: "string",
            label: "Headline-2",
            name: "headline2",
        },
        {
            type: "string",
            label: "Headline-3",
            name: "headline3",
        },
        {
            type: "string",
            label: "Sub-heading-1",
            name: "subheading1",
        },
        {
            type: "string",
            label: "Sub-heading-2",
            name: "subheading2",
        },
        {
            type: "string",
            label: "Sub-heading-3",
            name: "subheading3",
        },
        {
            type: "string",
            label: "Button-Text-1",
            name: "buttonText1",
        },
        {
            type: "string",
            label: "Button-Text-2",
            name: "buttonText2",
        },
        {
            type: "string",
            label: "Button-Text-3",
            name: "buttonText3",
        }
        
    ],
};