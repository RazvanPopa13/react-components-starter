import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import RepoCard from "./components/RepoCard";
import Search from "./components/Search";
// import repositories from "./data/repository";
import dataFetching from "./utils/apiservice";

const App = () => {
  const [repositories, setRepositories] = useState([]);
  const [count, setCount] = useState([0]);
  const [searchTerm, setSearchTerm] = useState("Initial Search");
  const year = 2022;
  const getRepositories = async () => {
    const rep = await dataFetching();
    if (rep.items) {
      setRepositories(rep.items);
      setCount(rep.items.length);
    }
  };
  useEffect(() => {
    console.log("Intial load");
    getRepositories();
  }, []);

  console.log("search", searchTerm);
  return (
    <>
      <Header year={year} />
      <main>
        <Search handleSearchTerm={setSearchTerm} />
        <div>{count}</div>

        <ul className="repo-cards">
          {repositories.map(({ id, title, description, stars, forks }) => {
            //do something

            return (
              <RepoCard
                key={id}
                title={title}
                description={description}
                stars={stars}
                forks={forks}
              />
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default App;
