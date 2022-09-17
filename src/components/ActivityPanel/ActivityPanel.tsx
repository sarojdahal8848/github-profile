import Image from "next/image";
import React from "react";
import { IActivityData } from "../../pages/[username]";
import styles from "./ActivityPanel.module.css";

export interface IActivityPanelProps {
  data: IActivityData;
}

const ActivityPanel = ({ data }: IActivityPanelProps) => {
  const date = new Date(data.created_at);
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={data.actor.avatar_url}
        height={70}
        width={70}
        alt="image"
      />
      <div className={styles.right}>
        <p>{data.actor.login}</p>
        <p>{data.type}</p>
        <p>{data.repo.name}</p>
        <p>{date.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ActivityPanel;
