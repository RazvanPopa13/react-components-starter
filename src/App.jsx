import "./App.css";
import Header from "./components/Header";
import RepoCard from "./components/RepoCard";
import Search from "./components/Search";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Search />
        <RepoCard />
      </main>
    </>
  );
};

export default App;
