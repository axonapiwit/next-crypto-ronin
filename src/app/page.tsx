"use client";

import Image from "next/image";
import { useQuery } from "react-query";
import { CheckCircle, Leaf, Package } from "lucide-react";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import ScrollToTop from "react-scroll-to-top";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import DonutChart from "@/components/custom/DonutChart";
import Countdown from "@/components/custom/Countdown";
import Svg from "@/components/custom/Svg";
import Timeline from "@/components/custom/Timeline";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { getUsers } from "./api";
import { Fragment } from "react";


export default function Home() {
  // const { data: users, isLoading } = useQuery("initial-users", getUsers, {
  //   staleTime: 3000,
  // });

  const features = [
    {
      name: "Safe & Secure",
      Icon: Package,
      description:
        "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
    },
    {
      name: "Universal Access",
      Icon: Leaf,
      description:
        "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
    },
    {
      name: "Early Bonus",
      Icon: Leaf,
      description:
        "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
    },
    {
      name: "Secure Storage",
      Icon: CheckCircle,
      description:
        "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
    },
    {
      name: "Low Cost",
      Icon: Leaf,
      description:
        "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
    },
    {
      name: "Several Profit",
      Icon: CheckCircle,
      description:
        "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .",
    },
  ];

  const svgName = [268, 280, 282, 284, 291];

  return (
    <main className="flex min-h-screen space-y-8 flex-col items-center p-14 lg:p-24 sm:p-10 bg-blue-950">
      <ScrollToTop smooth color="#6f00ff" style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }} />
      <section
        className="min-h-screen w-full bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url(/images/world-map-white.svg)",
        }}
      >
        <div className="max-w-lg text-center w-full mx-auto mt-32">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello world</h1>
          <h2 className="mb-5 text-xl text-muted">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi.
          </h2>
          <div className="w-full justify-center gap-5 hidden md:flex">
            {features.map((feature) => (
              <div key={feature.name} className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-primary">
                {<feature.Icon className="w-1/3 h-1/3" />}
              </div>
            ))}
          </div>
          <Button className="mt-4 rounded-full">Get Started</Button>
        </div>
      </section>
      <section className="text-center py-20 border-secondary/30 border-y-[1px] w-full">
        <h1 className="text-white text-2xl font-semibold">
          Join the 20,000+ companies using the our platform
        </h1>
        <div className="grid grid-cols-1 justify-center items-center gap-8 mt-12 sm:grid-cols-5">
          {svgName.map((item, index) => (
            <Svg key={index} name={`logoipsum-${item}` ?? ''} />
          ))}
        </div>
      </section>
      <section>
        <MaxWidthWrapper className="py-4 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-white text-2xl font-semibold">
              CRYPTO FEATURES
            </h1>
            <h3 className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              congue arcu, In et dignissim quam condimentum vel.
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-1 sm:gap-6 lg:grid-cols-3 lg:gap-10">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-primary">
                    {<feature.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-white dark:text-foreground">
                    {feature.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      <section
        className="min-h-screen w-full bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url(/images/stock-chart.svg)",
        }}
      >
        <Card className="bg-blue-900/95 max-w-lg max-sm:max-w-sm">
          <CardHeader>
            <CardTitle className="text-white text-4xl font-extrabold">
              Token Sale
            </CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, consectetur libero porro hic consequatur.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DonutChart />
          </CardContent>
          <CardFooter>
            <ul className="text-muted my-6 ml-6 list-disc [&>li]:mt-2">
              <li>73% Financial Overhead</li>
              <li>55% Bonus & found</li>
              <li>38% it infastrueture</li>
              <li>20.93% Gift Code Inventory</li>
            </ul>
          </CardFooter>
        </Card>
        <div className="text-right space-y-4">
          <h1 className="text-lg font-bold text-white">
            Token Sale will start in:
          </h1>
          <Countdown />
        </div>
      </section>
      <section
        className="space-y-10"
        style={{
          backgroundImage: "url(/images/animated-shape.svg)",
        }}
      >
        <Timeline />
      </section>
      <section className="text-center space-y-10">
        <h1 className="text-white text-2xl font-semibold">OUR TEAM</h1>
        <Card className="max-w-xs">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Loading...</AvatarFallback>
          </Avatar>
          <CardTitle className="p-4">Aont</CardTitle>
          <CardContent>Developer</CardContent>
        </Card>
      </section>
      <section className="w-full space-y-2">
        <h1 className="text-white text-2xl font-semibold text-center">FAQ</h1>
        <Accordion type="single" collapsible className="w-full space-y-5">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
