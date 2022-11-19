import "./App.css";
import Header from "./components/Header";
import RepoCard from "./components/RepoCard";
import Search from "./components/Search";

const App = () => {
  const year = 2022;
  return (
    <>
      <Header year={year} />
      <main>
        <Search />
        <RepoCard />
      </main>
    </>
  );
};

export default App;
