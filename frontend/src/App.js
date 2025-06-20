import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import { useState } from "react";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    setWord("");
  };

  console.log(UNSPLASH_KEY);

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
