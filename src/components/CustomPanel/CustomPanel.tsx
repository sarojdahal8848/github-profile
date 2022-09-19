import React from "react";
import { IReposData } from "../../pages/[username]";
import styles from "./CustomPanel.module.css";

export interface ICustomPanelProps {
  val: IReposData;
}

const CustomPanel = ({ val }: ICustomPanelProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.repoLink}>
        <a href={val.html_url} target="_blank" rel="noopener noreferrer">
          {val.full_name}
        </a>
      </div>
      <div className={styles.stats}>
        <div className={styles.language}>
          <span></span>
          <h4>{val.language}</h4>
        </div>
        <p>Forks: {val.forks}</p>
        <p>Stars: {val.stargazers_count}</p>
      </div>
    </div>
  );
};

export default CustomPanel;
