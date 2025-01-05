"use client";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="fixed w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b">
            <nav className="container mx-auto px-4 h-24 flex items-center justify-between">
                <div className="flex items-center w-full md:w-auto justify-center md:justify-start">
                    <Logo />
                </div>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="border-none">Marketing Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-3 p-6 w-[400px]">
                                    <Link href="/services/facebook-ads" className="block p-3 hover:bg-muted rounded-lg">
                                        <h3 className="font-medium">Facebook Ads</h3>
                                        <p className="text-sm text-muted-foreground">Reach your target audience with Facebook Ads</p>
                                    </Link>
                                    <Link href="/services/youtube-ads" className="block p-3 hover:bg-muted rounded-lg">
                                        <h3 className="font-medium">YouTube Ads</h3>
                                        <p className="text-sm text-muted-foreground">Grow your brand with YouTube Ads</p>
                                    </Link>
                                    <Link href="/services/linkedin-ads" className="block p-3 hover:bg-muted rounded-lg">
                                        <h3 className="font-medium">LinkedIn Ads</h3>
                                        <p className="text-sm text-muted-foreground">Elevate B2B marketing with LinkedIn Ads</p>
                                    </Link>
                                    <Link href="/services/google-search-ads" className="block p-3 hover:bg-muted rounded-lg">
                                        <h3 className="font-medium">Google Search Ads</h3>
                                        <p className="text-sm text-muted-foreground">Reach the right audience with Google Search Ads</p>
                                    </Link>
                                    <Link href="/services/tiktok-ads" className="block p-3 hover:bg-muted rounded-lg">
                                        <h3 className="font-medium">TikTok Ads</h3>
                                        <p className="text-sm text-muted-foreground">Drive engagement with TikTok Ads</p>
                                    </Link>
                                    <Link href="/services/instagram-ads" className="block p-3 hover:bg-muted rounded-lg">
                                        <h3 className="font-medium">Instagram Ads</h3>
                                        <p className="text-sm text-muted-foreground">Tell your story with Instagram Ads</p>
                                    </Link>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>AI Solutions</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-3 p-6 w-[400px]">
                                    <Link href="/services/data-insights" className="block p-3 hover:bg-muted rounded-lg">
                                        <h3 className="font-medium">Data insights</h3>
                                        <p className="text-sm text-muted-foreground">AI-powered data insights and forecasting</p>
                                    </Link>
                                    <Link href="/services/ai-chatbot-integration" className="block p-3 hover:bg-muted rounded-lg">
                                        <h3 className="font-medium">AI Chatbot Integration</h3>
                                        <p className="text-sm text-muted-foreground">Integrate AI chatbots into your website</p>
                                    </Link>
                                    <Link href="/services/tailored-dynamic-content-model" className="block p-3 hover:bg-muted rounded-lg">
                                        <h3 className="font-medium">Tailored Dynamic Content Model</h3>
                                        <p className="text-sm text-muted-foreground">Leverage AI to generate dynamic content for your website and social media</p>
                                    </Link>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Tech Solutions</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-3 p-6 w-[400px]">
                                    <Link href="/services/saas-integration" className="block p-3 hover:bg-muted rounded-lg">
                                        <h3 className="font-medium">SaaS Integration</h3>
                                        <p className="text-sm text-muted-foreground">Integrate your website with SaaS platforms</p>
                                    </Link>
                                    <Link href="/services/content-management-system" className="block p-3 hover:bg-muted rounded-lg">
                                        <h3 className="font-medium">Content Management System</h3>
                                        <p className="text-sm text-muted-foreground">Customize your website with a CMS</p>
                                    </Link>

                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/services/free-audit" legacyBehavior passHref>
                                <NavigationMenuLink className="px-4 py-2">Free Audit</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="hidden md:flex">
                    <Button>Contact Us</Button>
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden fixed top-24 left-0 right-0 bg-white border-b h-screen">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col space-y-4">
                            <div className="space-y-4">
                                <div className="font-medium">Marketing Services</div>
                                <div className="pl-4 space-y-3">
                                    <Link href="/services/facebook-ads" className="block text-sm text-muted-foreground">Facebook Ads</Link>
                                    <Link href="/services/youtube-ads" className="block text-sm text-muted-foreground">YouTube Ads</Link>
                                    <Link href="/services/linkedin-ads" className="block text-sm text-muted-foreground">LinkedIn Ads</Link>
                                    <Link href="/services/google-search-ads" className="block text-sm text-muted-foreground">Google Search Ads</Link>
                                    <Link href="/services/tiktok-ads" className="block text-sm text-muted-foreground">TikTok Ads</Link>
                                    <Link href="/services/instagram-ads" className="block text-sm text-muted-foreground">Instagram Ads</Link>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="font-medium">AI Solutions</div>
                                <div className="pl-4 space-y-3">
                                    <Link href="/services/data-insights" className="block text-sm text-muted-foreground">Data Insights</Link>
                                    <Link href="/services/ai-chatbot-integration" className="block text-sm text-muted-foreground">AI Chatbot Integration</Link>
                                    <Link href="/services/tailored-dynamic-content-model" className="block text-sm text-muted-foreground">Tailored Dynamic Content Model</Link>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="font-medium">Tech Solutions</div>
                                <div className="pl-4 space-y-3">
                                    <Link href="/services/saas-integration" className="block text-sm text-muted-foreground">SaaS Integration</Link>
                                    <Link href="/services/content-management-system" className="block text-sm text-muted-foreground">Content Management System</Link>
                                </div>
                            </div>

                            <Link href="/services/free-audit" className="block font-medium">Free Audit</Link>
                            <Button className="w-full">Contact Us</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}