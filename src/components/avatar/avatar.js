import React from "react";
import styles from "./avatar.module.css";

const Avatar = ({ src }) => {
  return <img src={src} alt="avatar" className={styles.avatar} />;
};

export default Avatar;
