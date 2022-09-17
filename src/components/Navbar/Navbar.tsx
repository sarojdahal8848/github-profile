import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <h1 style={{ cursor: "pointer" }}>Github Profile App</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
