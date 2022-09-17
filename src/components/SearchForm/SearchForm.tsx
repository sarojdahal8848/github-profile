import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  const [searchData, setSearchData] = useState("");
  const router = useRouter();
  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchData.length < 1) {
      return alert("Please type something on search field");
    }
    router.push(`/search?userName=${searchData}`);
  };

  const handleChange = (e: any) => {
    setSearchData(e.target.value);
  };
  return (
    <form className={styles.form} onSubmit={handleSearch}>
      <input
        className={styles.search}
        type="text"
        placeholder="search profile"
        onChange={handleChange}
        value={searchData}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
