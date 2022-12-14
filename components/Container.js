import React from "react";
import Navigarion from "./Navigation";
import Head from "next/head";
export default function Container(props) {
  return (
    <div>
      <Head>
        <title>Nextjs-fazt</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"
        ></link>
      </Head>
      <Navigarion />
      <div className="container p-4">{props.children}</div>
    </div>
  );
}
