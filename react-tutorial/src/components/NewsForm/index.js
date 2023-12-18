import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import NewsList from "../NewsList";

function NewsForm() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [url, setUrl] = useState(`https://hn.algolia.com/api/v1/search?query=`);
  const [loading, setLoading] = useState(false);

  const fetchNews = () => {
    // set loading to true
    setLoading(true);

    fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
      .then((r) => r.json())
      .then((data) => (setNews(data.hits), setLoading(false)))
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };

  useEffect(() => {
    fetchNews();
  }, [url]);
  // the second argument of useEffect() determines on what changed
  // element the fetchNews() will run

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchQuery} onChange={handleChange} />
            <button>Search</button>
        </form>
        {
            loading ? <Loading /> : <NewsList news={news} />
        }
    </div>
  )
}

export default NewsForm;
