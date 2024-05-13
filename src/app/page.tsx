"use client"

import Image from "next/image";
import { getUsers } from "@/api";
import { useQuery } from "react-query";
import {
  CheckCircle,
  Leaf,
  Package,
} from 'lucide-react'
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {

  const { data: users, isLoading } = useQuery("initial-users", getUsers, {
    staleTime: 3000,
  });

  const perks = [
    {
      name: 'Safe & Secure',
      Icon: Package,
      description:
        'Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .',
    },
    {
      name: 'Universal Access',
      Icon: Leaf,
      description:
        'Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .',
    },
    {
      name: 'Early Bonus',
      Icon: Leaf,
      description:
        'Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .',
    },
    {
      name: 'Secure Storage',
      Icon: CheckCircle,
      description:
        'Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .',
    },
    {
      name: 'Low Cost',
      Icon: Leaf,
      description:
        'Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .',
    },
    {
      name: 'Several Profit',
      Icon: CheckCircle,
      description:
        'Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor .',
    },
  ]

  return (
    <main className="flex min-h-screen space-y-8 flex-col items-center justify-between p-24 bg-blue-950">
      <section className="text-center relative">
        <Image
          src={`/images/world-map-white.svg`}
          alt={'world-map'}
          width={1440}
          height={560}
        />
        <h1 className="text-white text-4xl font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Get started with Crypto
        </h1>
      </section>
      <section className="text-center py-20 border-secondary/30 border-y-[1px] w-full">
        <h1 className="text-white text-2xl font-semibold">Join the 20,000+ companies using the our platform</h1>
      </section>
      <section>
        <MaxWidthWrapper className='py-4 space-y-8'>
          <div className="text-center space-y-2">
            <h1 className="text-white font-semibold">CRYPTO FEATURES</h1>
            <h3 className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.</h3>
          </div>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-1 sm:gap-6 lg:grid-cols-3 lg:gap-10'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-primary'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>
                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-white dark:text-foreground'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <Card className="w-full bg-primary/15">
          <CardHeader>
            <CardTitle className="text-white text-4xl font-extrabold">Token Sale</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consectetur libero porro hic consequatur recusandae dolores, nulla, molestias aspernatur alias quaerat modi ratione cum a quas expedita nobis. Earum, sed.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-muted">
              <li>
                73% Financial Overhead
              </li>
              <li>
                55% Bonus & found
              </li>
              <li>
                38% it infastrueture
              </li>
              <li>
                20.93% Gift Code Inventory
              </li>
            </ul>
          </CardContent>
        </Card>
        <Image
          src={`/images/stock-chart.svg`}
          alt={'stock-chart'}
          width={1440}
          height={560}
        />
      </section>
      <section className="text-center">
        <Image
          src={`/images/animated-shape.svg`}
          alt={'animated-shape'}
          width={1440}
          height={560}
        />
      </section>
      <section>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10 bg-primary/15 p-10">
              
              <div className="text-lg font-black">First Macintosh computer</div>
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
              <div className="text-lg font-black">iMac</div>
              iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of {`Apple`} consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <div className="text-lg font-black">iPod</div>
              The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
              <div className="text-lg font-black">iPhone</div>
              iPhone is a line of smartphones produced by Apple Inc. that use {`Apple`} own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <div className="text-lg font-black">Apple Watch</div>
              The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services
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
