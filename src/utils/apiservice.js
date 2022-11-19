const githubToken = "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";
const datafetching = async () => {
  const url = "https://api.github.com/search/repositories?q=stars:>10000";
  return await fetch(url, {
    headers: {
      Authorization: `Bearer ${githubToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => data);
};
export default datafetching;
