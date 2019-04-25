import { useState, useEffect } from "react";
const API_KEY = "6a630147b3904915a3146c7c2cd1a47d";
export function useNewsArticles(search) {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getHeadlines(search)
      .then(headlines => {
        setHeadlines(headlines);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [search]);

  return {
    loading,
    headlines,
    error
  };
}
function getHeadlines(search) {
  const url = `https://newsapi.org/v2/top-headlines?country=au&apiKey=${API_KEY}&q=${search}`;

  return fetch(url)
    .then(res => res.json())
    .then(res => res.articles)
    .then(articles =>
      articles.map(article => ({ title: article.title, url: article.url }))
    );
}
