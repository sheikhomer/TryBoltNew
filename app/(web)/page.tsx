"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect } from 'react';
import React from "react";
import { FbIcon } from "@/components/social-icon/fb-icon";
import { YoutubeIcon } from "@/components/social-icon/youtube-icon";
import { LinkedinIcon } from "@/components/social-icon/linkedin-icon";
import { TiktokIcon } from "@/components/social-icon/tiktok-icon";
import { GoogleIcon } from "@/components/social-icon/google-icon";
import { InstagramIcon } from "@/components/social-icon/instagram-icon";
import { Brain, Globe } from "lucide-react";

export default function Home() {
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
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
                      Adaptimize: Transforming Marketing Strategies with AI-Powered Precision
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                      Adaptimize is a results-driven digital agency that harnesses the power of AI and advanced data science to revolutionize the marketing strategy.
                    </p>
                    <Button size="lg">Book a Free Strategy Session</Button>
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
                      Comprehensive Technology Solutions for Businesses
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                      Adaptimize delivers cutting-edge AI, web development, CRM, and IT outsourcing solutions to drive business growth.
                    </p>
                    <Button size="lg">Book a Free Consultation</Button>
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
                      Small Business Specialist: Your One-stop Partner for Marketing and Tech
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                      Adaptimize specializes in affordable, tailored IT and marketing solutions to fuel small business growth.
                    </p>
                    <Button size="lg">Book a Free Strategy Session</Button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious onClick={() => handleArrowClick('prev')} />
            <CarouselNext onClick={() => handleArrowClick('next')} />
          </Carousel>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-2 px-4 pb-16">
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Marketing & Tech Solutions for SMBs</h2>
            <p className="text-xl pb-4" style={{ color: "#373643" }}>
              Combining data science with marketing to deliver exceptional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pb-8">
            <Card>
              <CardContent className="pt-6">
                <FbIcon />
                <h3 className="text-xl font-semibold mb-2">Facebook Ads</h3>
                <p className="text-muted-foreground">
                  Drive organic growth with data-driven SEO strategies tailored to your business.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <YoutubeIcon />
                <h3 className="text-xl font-semibold mb-2">Youtube Ads</h3>
                <p className="text-muted-foreground">
                  Maximize ROI with targeted paid search and social advertising campaigns.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <LinkedinIcon />
                <h3 className="text-xl font-semibold mb-2">LinkedIn Ads</h3>
                <p className="text-muted-foreground">
                  Turn data into actionable insights with advanced analytics and reporting.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-3 gap-8 pb-8">
            <Card>
              <CardContent className="pt-6">
                <GoogleIcon />
                <h3 className="text-xl font-semibold mb-2">Google Search Ads</h3>
                <p className="text-muted-foreground">
                  Drive organic growth with data-driven SEO strategies tailored to your business.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <TiktokIcon />
                <h3 className="text-xl font-semibold mb-2">TikTok Ads</h3>
                <p className="text-muted-foreground">
                  Maximize ROI with targeted paid search and social advertising campaigns.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <InstagramIcon />
                <h3 className="text-xl font-semibold mb-2">Instagram Ads</h3>
                <p className="text-muted-foreground">
                  Turn data into actionable insights with advanced analytics and reporting.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Image
                  src="/assets/tina-icon.svg"
                  alt="Web Development"
                  width={48}
                  height={48}
                  className="mb-4 h-14 w-14 rounded-full"
                />
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-muted-foreground">
                  Drive organic growth with data-driven SEO strategies tailored to your business.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Brain className="mb-4 h-14 w-14 rounded-full" style={{ color: "#18CB96" }} />
                <h3 className="text-xl font-semibold mb-2">AI Solutions for Business</h3>
                <p className="text-muted-foreground">
                  Maximize ROI with targeted paid search and social advertising campaigns.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Globe className="mb-4 h-14 w-14 rounded-full" style={{ color: "#373643" }} />
                <h3 className="text-xl font-semibold mb-2">IT Outsourcing</h3>
                <p className="text-muted-foreground">
                  Turn data into actionable insights with advanced analytics and reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Marketing Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          {/*Header */}
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-4">Streamlined Customer Onboarding Process</h2>
            <p className="text-xl pb-4" style={{ color: "#373643" }}>
              Effortless integration tailored to your goals, ensuring a smooth start toward success.
            </p>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:block w-screen relative left-1/2 right-1/2 -mx-[50vw]">
            <Image
              src="/assets/onboarding.svg"
              alt="Marketing Solutions"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Onboarding Section */}
          <div className="container mx-auto">
            <div className="max-w-full">
              <h3 className="text-xl font-semibold" style={{ color: "#18CB96" }}>STEP 1</h3>
              <h4 className="text-xl font-semibold pt-2">Free Consultation</h4>
              <p>
                Get a Free Consultation and take the first step toward achieving your goals, no matter how big or small.
                At Adaptimize, we are dedicated to understanding your unique vision and crafting tailored strategies to help
                you succeed. Your success starts with a clear plan, and we are here to guide you every step of the way.
                Whether you’re looking to optimize your current marketing efforts or explore new opportunities, we’ll show you how to elevate
                your results while staying within your budget. Let’s turn your ambitions into actionable outcomes — Get a Free Consultation with us today!
              </p>
            </div>
            <div className="max-w-full">
              <h3 className="text-xl font-semibold pt-6" style={{ color: "#18CB96" }}>STEP 2</h3>
              <h4 className="text-xl font-semibold pt-2">Free Audit</h4>
              <p>
                Get a Free Audit and uncover valuable, data-driven insights to take your marketing efforts to the next level. Our free, no-obligation audit dives deep into your current
                strategies to identify strengths, weaknesses, and opportunities for improvement. With clear, actionable recommendations, we’ll help you optimize your campaigns, maximize ROI,
                and uncover untapped potential for future growth. Whether you’re looking to refine your approach or explore new directions, our audit provides the clarity and direction you need
                to achieve your goals. Start your journey to smarter, more effective marketing today!
              </p>
            </div>
            <div className="max-w-full">
              <h3 className="text-xl font-semibold pt-6" style={{ color: "#18CB96" }}>STEP 3</h3>
              <h4 className="text-xl font-semibold pt-2">Onboarding & Implementation</h4>
              <p>
                Onboarding with Adaptimize is designed to be a seamless and hassle-free experience, ensuring your business transitions smoothly into a results-driven marketing strategy.
                Our team takes the time to understand your unique growth objectives and budget, crafting a tailored approach that aligns with your goals. From initial setup to strategy execution,
                we handle every detail with precision and efficiency, so you can focus on what matters most—growing your business. With Adaptimize as your partner,
                you’ll gain a marketing strategy that’s not only customized but also optimized to deliver measurable results. Let us simplify the process and set the stage for your success.
              </p>
            </div>
            <div className="max-w-full">
              <h3 className="text-xl font-semibold pt-6" style={{ color: "#18CB96" }}>STEP 4</h3>
              <h4 className="text-xl font-semibold pt-2">Adapt & Optimize</h4>
              <p>
                Adapt & Optimize with Adaptimize as your trusted partner, ensuring your marketing strategy evolves to meet changing demands and opportunities. We work closely with you
                to fine-tune your approach, aligning it with your growth objectives while staying within your budget. Our adaptive strategies are data-driven and focused on maximizing results,
                enabling your business to thrive in an ever-competitive landscape. Whether it’s refining existing campaigns or exploring new opportunities,
                we’re here to ensure your strategy delivers measurable success. Together, we’ll drive sustainable growth and keep your business ahead of the curve.
              </p>
            </div>
          </div>
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>


      {/* Famous Quotes */}
      <section className="py-24 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Let's partner up, adapt and optimize!</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4" style={{ color: "#18CB96" }}>"</div>
              <p className="text-lg italic mb-6">
              Never stop testing, and your advertising will never stop improving.
              </p>
              <p className="font-semibold">- David Mackenzie Ogilvy CBE</p>
              <p className="text-sm text-muted-foreground"> Founder of Ogilvy & Mather, known as the "Father of Advertising."</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4" style={{ color: "#18CB96" }}>"</div>
              <p className="text-lg italic mb-6">
              Content is fire. Social media is gasoline.
              </p>
              <p className="font-semibold">- Jay Baer</p>
              <p className="text-sm text-muted-foreground">7th generation entrepreneur. Founder of 5 multi-million dollar companies. Author of 7 business books. Hall of Fame keynote speaker. </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4" style={{ color: "#18CB96" }}>"</div>
              <p className="text-lg italic mb-6">
              People don't buy what you do; they buy why you do it.
              </p>
              <p className="font-semibold">- Simon Sinek</p>
              <p className="text-sm text-muted-foreground">Author of "Start with Why" and "The Infinite Game."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you achieve your business goals.
          </p>
          <Button size="lg" variant="secondary">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}