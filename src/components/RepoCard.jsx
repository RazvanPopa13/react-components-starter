const repositories = [
  {
    id: 1,
    title: "facebook/react",
    description: "placeholder description",
    stars: 500,
    forks: 100,
  },
  {
    title: "vuejs/vue",
    description: "placeholder description",
    stars: 500,
    forks: 100,
  },
  {
    title: "sveltejs/svelte",
    description: "placeholder description",
    stars: 500,
    forks: 100,
  },
];
const RepoCard = ({ title, description, stars, forks }) => {
  return (
    <li className="repo-card">
      <span className="title">{title}</span>
      <span className="description">{description}</span>
      <section className="footer">
        <div>stars {stars}</div>
        <div>forks {forks}</div>
      </section>
    </li>
  );
};
export default RepoCard;
