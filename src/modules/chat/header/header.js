import React from "react";
import styles from "./header.module.css";
import Avatar from "../../../components/avatar/avatar";

const Header = ({ person }) => {
  return (
    <div className={styles.headerContainer}>
      <Avatar src={person.icon} />
      <span>{person.name}</span>
    </div>
  );
};

export default Header;
