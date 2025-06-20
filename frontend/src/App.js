import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    setWord("");
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
