import React from "react";
import { IpfsImage } from "react-ipfs-image";

export default function CardCollection({
  title,
  ipfs,
}: Readonly<{
  title?: string;
  ipfs: string;
}>) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <IpfsImage hash={ipfs} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, non.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
