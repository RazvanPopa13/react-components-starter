const repositories = [
  {
    title: "facebook/react",
    description: "placeholder description",
    footer: "Stars 500, Forks 100",
  },
  {
    title: "vuejs/vue",
    description: "placeholder description",
    footer: "Stars 500, Forks 100",
  },
  {
    title: "sveltejs/svelte",
    description: "placeholder description",
    footer: "Stars 500, Forks 100",
  },
];
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
export default RepoCard;
