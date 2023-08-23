import { useState } from "react";
import Axios from "axios";

import styles from "./App.module.css";

import SearchBar from "../SearchBar/SearchBar";
import SongList from "../SongList/SongList";

const axios = Axios.create({ baseURL: "http://localhost:3000" });

function App() {
  const [songs, setSongs] = useState([]);

  const handleSearch = (q, field) => {
    axios
      .get("/songs", {
        params: {
          q: q,
          field: field,
        },
      })
      .then((res) => {
        setSongs(res.data.results);
      });
  };

  return (
    <div className={styles.App}>
      <SearchBar onSearch={handleSearch} />
      <SongList songs={songs} />
    </div>
  );
}

export default App;
