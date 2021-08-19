import { Layout, Nav, Results } from "../components";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <Layout title="Bulu">
      <Nav />
      <Results results={results} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((response) => response.json());

  return {
    props: {
      results: request.results,
    },
  };
}
