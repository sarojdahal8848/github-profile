import Image from "next/image";
import styles from "./ProfileCard.module.css";
import { IUserData } from "../../pages";
import CustomButton from "../CustomButton/CustomButton";
import { useRouter } from "next/router";

export interface IProfileCardProps {
  value: IUserData;
}

const ProfileCard = ({ value }: IProfileCardProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${value.login}`);
  };
  return (
    <div key={value.login} className={styles.card}>
      <Image
        src={value.avatar_url}
        alt="user-profile"
        width={100}
        height={100}
        className={styles.profile_image}
      />
      <h3>{value.login}</h3>
      <CustomButton title="View" onClick={handleClick} />
    </div>
  );
};

export default ProfileCard;
