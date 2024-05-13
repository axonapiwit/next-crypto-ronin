"use client";

import Image from "next/image";
import { getUsers } from "@/api";
import { useQuery } from "react-query";
import { CheckCircle, Leaf, Package } from "lucide-react";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
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

export default function Home() {
  const { data: users, isLoading } = useQuery("initial-users", getUsers, {
    staleTime: 3000,
  });

  const perks = [
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

  return (
    <main className="flex min-h-screen space-y-8 flex-col items-center justify-between p-24 bg-blue-950">
      <section
        className="hero min-h-screen w-full object-contain"
        style={{
          backgroundImage: "url(/images/world-map-white.svg)",
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Hello world</h1>
            <p className="mb-5 text-muted">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </section>
      <section className="text-center py-20 border-secondary/30 border-y-[1px] w-full">
        <h1 className="text-white text-2xl font-semibold">
          Join the 20,000+ companies using the our platform
        </h1>
      </section>
      <section>
        <MaxWidthWrapper className="py-4 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-white font-semibold">CRYPTO FEATURES</h1>
            <h3 className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              congue arcu, In et dignissim quam condimentum vel.
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-1 sm:gap-6 lg:grid-cols-3 lg:gap-10">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-primary">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-white dark:text-foreground">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      <section
        className="hero min-h-screen w-full flex justify-between"
        style={{
          backgroundImage: "url(/images/stock-chart.svg)",
        }}
      >
        <Card className="bg-blue-900/95 max-w-lg max-sm:w-0">
          <CardHeader>
            <CardTitle className="text-white text-4xl font-extrabold">
              Token Sale
            </CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, consectetur libero porro hic consequatur recusandae
              dolores, nulla, molestias aspernatur alias quaerat modi ratione
              cum a quas expedita nobis. Earum, sed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DonutChart />
          </CardContent>
          <CardFooter>
            <ul className="text-muted">
              <li>73% Financial Overhead</li>
              <li>55% Bonus & found</li>
              <li>38% it infastrueture</li>
              <li>20.93% Gift Code Inventory</li>
            </ul>
          </CardFooter>
        </Card>
        <div className="text-right space-y-4">
          <h1 className="text-lg font-bold text-white">Token Sale will start in:</h1>
          <Countdown />
        </div>
      </section>
      <section className="text-center">
        <Image
          src={`/images/animated-shape.svg`}
          alt={"animated-shape"}
          width={1440}
          height={560}
        />
      </section>
      <section className="space-y-10">
        <div>
          <h1 className="text-white text-center text-2xl">Timeline</h1>
        </div>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start timeline-box">Token</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">Mint NFT</div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-start timeline-box">Staking</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">Loot Box</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">NFT Marketplace</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        </ul>
      </section>

      {/* {users?.map((user) => (
        <div key={user.id} className="text-center p-6">
          <Image
            src={`https://robohash.org/${user.id}?set=set2&size=80x80` ?? ""}
            alt={user.name}
            width={80}
            height={80}
          />
          <h3>{user.name}</h3>
        </div>
      ))} */}
    </main>
  );
}
