import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import SearchForm from "../components/SearchForm/SearchForm";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../components/Layout/Layout";

export interface IUserData {
  avatar_url: string;
  login: string;
  message?: string;
}

export interface IHomeProps {
  data: IUserData[];
}

const Home: NextPage<IHomeProps> = ({ data }) => {
  return (
    <div>
      <Layout title="Github">
        <main className={styles.main}>
          <SearchForm />
          <div className={styles.container}>
            {data.map((val) => {
              return <ProfileCard value={val} key={val.login} />;
            })}
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch("https://api.github.com/users");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
