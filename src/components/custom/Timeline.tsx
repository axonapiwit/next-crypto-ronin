import React from "react";

export default function Timeline() {
  return (
    <div className="space-y-14">
      <div>
        <h1 className="text-white text-2xl font-semibold text-center">
          Timeline
        </h1>
      </div>
      <ul className="timeline timeline-vertical">
        <li>
          <div className="timeline-start timeline-box">
            <h1 className="font-bold">Token</h1>
            <div className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur odio ex ratione.
            </div>
          </div>
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
          <div className="timeline-end timeline-box">
            <h1 className="font-bold">Mint NFT</h1>
            <div className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur odio ex ratione, at doloribus aliquam omnis magnam,
              molestiae voluptatum deleniti provident saepe.
            </div>
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-start timeline-box">
            <h1 className="font-bold">Staking</h1>
            <div className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laborum fugit, accusantium dolore neque ut odit explicabo
              consequatur suscipit fugiat at officia.
            </div>
          </div>
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
          <div className="timeline-end timeline-box">
            <h1 className="font-bold">Mystery Box - Q3 2024</h1>
            <div className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              fuga nam quam!
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">
            <h1 className="font-bold">NFT Marketplace - Q4 2024</h1>
            <div className="text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              rem sunt!
            </div>
          </div>
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
    </div>
  );
}
