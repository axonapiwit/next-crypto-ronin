import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function SkeletonCollection() {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <Skeleton  className="w-full h-96"/>
          <Skeleton className="w-1/2 h-6" />
          <Skeleton className="w-full h-4" />
        <div className="card-actions justify-end">
          <Skeleton className="w-20 h-12" />
        </div>
      </div>
    </div>
  );
}
