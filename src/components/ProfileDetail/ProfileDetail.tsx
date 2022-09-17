import styles from "./ProfileDetail.module.css";
import { IUserProfileData } from "../../pages/[username]";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";

export interface IProfileDetailProps {
  userProfileData: IUserProfileData;
}

const ProfileDetail = ({ userProfileData }: IProfileDetailProps) => {
  const date = new Date(userProfileData.created_at);
  return (
    <div className={styles.profileContainer}>
      <div className={styles.image}>
        <Image
          src={userProfileData.avatar_url}
          alt="avatar-image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <h1>{userProfileData.name}</h1>
        <p className={styles.userDetail}>
          <span>Login Name: </span>
          {userProfileData.login}
        </p>
        <p className={styles.userDetail}>
          <span>Followers: </span>
          {userProfileData.followers}
        </p>
        <p className={styles.userDetail}>
          <span>Following: </span>
          {userProfileData.following}
        </p>
        <p className={styles.userDetail}>
          <span>Public Repository: </span>
          {userProfileData.public_repos}
        </p>
        <p className={styles.userDetail}>
          <span>Join: </span>
          {date.toLocaleDateString()}
        </p>
        <a
          href={userProfileData.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomButton title="Visit" />
        </a>
      </div>
    </div>
  );
};

export default ProfileDetail;
