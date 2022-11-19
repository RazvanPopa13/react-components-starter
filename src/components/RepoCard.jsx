const RepoCard = () => {
  return (
    <ul className="repo-cards">
      <li className="repo-card">
        <span className="title">facebook/react</span>
        <span className="description">placeholder description</span>
        <section className="footer">
          <div>Stars: 500</div>
          <div>Forks: 100</div>
        </section>
      </li>

      <li className="repo-card">
        <span className="title">vuejs/vue</span>
        <span className="description">placeholder description</span>
        <section className="footer">
          <div>Stars: 500</div>
          <div>Forks: 100</div>
        </section>
      </li>

      <li className="repo-card">
        <span className="title">sveltejs/svelte</span>
        <span className="description">placeholder description</span>
        <section className="footer">
          <div>Stars: 500</div>
          <div>Forks: 100</div>
        </section>
      </li>
    </ul>
  );
};
export default RepoCard