import Head from "next/head";
import styles from "../../styles/Search.module.css";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import SearchForm from "../components/SearchForm/SearchForm";
import { useRouter } from "next/router";
import { IUserData } from "./";
import { GetServerSideProps } from "next";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../components/Layout/Layout";

export interface ISearchProps {
  data: IUserData;
}

const Search = ({ data }: ISearchProps) => {
  return (
    <div>
      <Layout title={data.login}>
        <main className={styles.main}>
          <SearchForm />
          <div className={styles.container}>
            {data.message ? (
              <h3>Profile Not Found</h3>
            ) : (
              <ProfileCard value={data} key={data.login} />
            )}
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { userName } = query;
  const res = await fetch(`https://api.github.com/users/${userName}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
