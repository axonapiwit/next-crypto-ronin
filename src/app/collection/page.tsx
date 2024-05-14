"use client";

import React, { Fragment, useEffect } from "react";
import { useQuery } from "react-query";
import { getCollections } from "@/api";
import CardCollection from "@/components/custom/CardCollection";
import SkeletonCollection from "@/components/custom/SkeletonCollection";

export default function Collection() {
  const { data, isLoading } = useQuery("collections", getCollections, {
    staleTime: 3000,
  });

  const renderSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i < 8; i++) {
      skeletons.push(<SkeletonCollection key={i} />);
    }
    return skeletons;
  };

  return (
    <main className="bg-primary-content">
      <div className="grid grid-cols-fluid gap-6 p-24 place-items-center">
        {!data || isLoading ? (
          <div className="grid grid-cols-4 gap-10 place-items-center">
            {renderSkeletons()}
          </div>
        ) : (
          data?.result.map((items: any) => (
            <CardCollection
              key={items.token_id}
              title={JSON.parse(items?.metadata).name}
              ipfs={JSON.parse(items?.metadata).image}
            />
          ))
        )}
      </div>
    </main>
  );
}

// console.log(data?.result.map((items: any) => JSON.parse(items.metadata)));
{
  /* <h1>{items.token_id}</h1> */
}
{
  /* <pre>{JSON.stringify(JSON.parse(items?.metadata), null, 2)}</pre> */
}
