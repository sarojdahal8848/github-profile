import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

export interface ILayoutProp {
  title: string;
  children: ReactNode;
}

const Layout = ({ children, title = "Github" }: ILayoutProp) => {
  return (
    <>
      <Head>
        <title>{title}-Profile</title>
        <meta name="description" content="Github Profile" />
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
