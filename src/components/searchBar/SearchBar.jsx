import { AiOutlineSearch } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      notify();
    } else {
      onSubmit(query);
      setQuery("");
    }
  };

  const notify = () =>
    toast("Sorry, the search bar is empty. Please try again!", {
      duration: 4000,
      style: {
        margin: "60px",
        background: "#2d3487",
        color: "#ffffff",
      },
    });

  return (
    <header className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="inputValue"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">
          <AiOutlineSearch size={30} />
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
