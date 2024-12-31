"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Search, Target } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect } from 'react';
import React from "react";

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [isPaused, setIsPaused] = React.useState(false);
  const SLIDE_INTERVAL = 5000; // Adjust this value to change slide duration (in milliseconds)

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
                      Accelerate Your Digital Growth
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                      Adaptimize is a results-driven digital agency that harnesses the power of AI and advanced data science to revolutionize the marketing strategy.
                    </p>
                    <Button size="lg">Get Started</Button>
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
                      Data-Driven Decisions
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                      Transform your marketing with advanced analytics and AI-powered insights for better ROI.
                    </p>
                    <Button size="lg">Learn More</Button>
                  </div>
                </div>
              </CarouselItem>

              {/* Third Slide */}
              <CarouselItem>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="w-full md:w-1/2 order-1 md:order-1">
                    <Image
                      src="/assets/hero-marketing.svg"
                      alt="Results Illustration"
                      width={600}
                      height={600}
                      priority
                      className="w-full h-auto md:h-full"
                    />
                  </div>
                  <div className="w-full md:w-1/2 order-2 md:order-2">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                      Proven Results
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                      Join hundreds of businesses achieving exceptional growth with our proven strategies.
                    </p>
                    <Button size="lg">View Case Studies</Button>
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
      <section className="py-2 px-4">
        <div className="container mx-auto">

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Search className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">SEO</h3>
                <p className="text-muted-foreground">
                  Drive organic growth with data-driven SEO strategies tailored to your business.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Target className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">PPC</h3>
                <p className="text-muted-foreground">
                  Maximize ROI with targeted paid search and social advertising campaigns.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <BarChart className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Analytics</h3>
                <p className="text-muted-foreground">
                  Turn data into actionable insights with advanced analytics and reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-0">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Case Study"
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">E-commerce Growth</h3>
                  <p className="text-muted-foreground">
                    How we helped an e-commerce client achieve 300% growth in revenue.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="Case Study"
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">B2B Lead Generation</h3>
                  <p className="text-muted-foreground">
                    Driving qualified leads for a B2B SaaS company.
                  </p>
                </div>
              </CardContent>
            </Card>
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