import { GetServerSideProps } from "next";
import { IUserData } from "./";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
import styles from "../../styles/UserProfile.module.css";
import CustomButton from "../components/CustomButton/CustomButton";
import { useRouter } from "next/router";
import ProfileDetail from "../components/ProfileDetail/ProfileDetail";
import { Tab } from "@headlessui/react";
import CustomPanel from "../components/CustomPanel/CustomPanel";
import ActivityPanel from "../components/ActivityPanel/ActivityPanel";
import ProfileCard from "../components/ProfileCard/ProfileCard";

export interface IUserProfileData extends IUserData {
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
  created_at: string;
}

export interface IFollowersData extends IUserData {}

export interface IActivityData {
  id: number;
  type: string;
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    name: string;
  };
  created_at: string;
}

export interface IReposData {
  full_name: string;
  html_url: string;
  stargazers_count: number;
  forks: number;
  language: string;
}

export interface ISearchProps {
  userProfileData: IUserProfileData;
  reposData: IReposData[];
  receivedEventsData: IActivityData[];
  followersData: IFollowersData[];
}

const UserProfile = ({
  userProfileData,
  reposData,
  receivedEventsData,
  followersData,
}: ISearchProps) => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  console.log(followersData);
  return (
    <Layout title="saroj">
      <main className={styles.container}>
        <CustomButton title="Back" onClick={handleBackClick} />
        <ProfileDetail userProfileData={userProfileData} />
        <div className={styles.tabContainer}>
          <Tab.Group>
            <Tab.List className={styles.tabList}>
              <Tab
                className={({ selected }) =>
                  selected
                    ? `${styles.tabItem} ${styles.selected}`
                    : styles.tabItem
                }
              >
                Repositories
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? `${styles.tabItem} ${styles.selected}`
                    : styles.tabItem
                }
              >
                Activity
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? `${styles.tabItem} ${styles.selected}`
                    : styles.tabItem
                }
              >
                Followers
              </Tab>
            </Tab.List>
            <hr />
            <Tab.Panels>
              <Tab.Panel className={styles.tabPanel}>
                {reposData.length ? (
                  <div className={styles.tabPanelRepo}>
                    {reposData.map((val) => {
                      return <CustomPanel key={val.html_url} val={val} />;
                    })}
                  </div>
                ) : (
                  <h3>No Repository Found</h3>
                )}
              </Tab.Panel>
              <Tab.Panel className={styles.tabPanel}>
                {receivedEventsData.length ? (
                  <div className={styles.tabPanelActivity}>
                    {receivedEventsData.map((val) => {
                      return <ActivityPanel key={val.id} data={val} />;
                    })}
                  </div>
                ) : (
                  <h3>No Activities Found</h3>
                )}
              </Tab.Panel>
              <Tab.Panel className={styles.tabPanel}>
                {followersData.length ? (
                  <div className={styles.tabPanelFollowers}>
                    {followersData.map((val) => {
                      return <ProfileCard value={val} key={val.login} />;
                    })}
                  </div>
                ) : (
                  <h3>No Followers Found</h3>
                )}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
    </Layout>
  );
};

export default UserProfile;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { username } = query;
  const profileRes = await fetch(`https://api.github.com/users/${username}`);
  const userProfileData = await profileRes.json();

  const reposRes = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const reposData = await reposRes.json();

  const receivedEventsRes = await fetch(
    `https://api.github.com/users/${username}/received_events`
  );
  const receivedEventsData = await receivedEventsRes.json();

  const followersRes = await fetch(
    `https://api.github.com/users/${username}/followers`
  );
  const followersData = await followersRes.json();

  return {
    props: {
      userProfileData,
      reposData,
      receivedEventsData,
      followersData,
    },
  };
};
