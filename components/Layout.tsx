import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>{title} | InitZero</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Welcome to Init Zero, your number one source for business solutions. We're dedicated to providing you the best of technology driven business solution, with a focus on dependability. "
      />
      <meta property="og:title" content={`${title} | InitZero`} />
      <meta
        property="og:description"
        content="Welcome to Init Zero, your number one source for business solutions. We're dedicated to providing you the best of technology driven business solution, with a focus on dependability. "
      />
      <meta property="og:url" content="https://izero.dev" />
      <meta property="og:type" content="Welcome to Init Zero, your number one source for business solutions. We're dedicated to providing you the best of technology driven business solution, with a focus on dependability. " />
      <link rel="icon" href="/images/fav.png" />
    </Head>
    {children}
  </div>
);

export default Layout;
