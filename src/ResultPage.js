import { useLocation, useNavigate } from "react-router-dom";
import style from "./ResultPage.module.css";
import { useEffect, useState } from "react";

const API_KEY = "AIzaSyBSaWfIvAukKpm7paxKejqZPKmQJUyY-80";
const CX = "c4bae9f794db842a5";
const API_ENDPOINT = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}`;

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialSearch = location.state?.search;

  const [search, setSearch] = useState(initialSearch);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}&q=${search}`);
        if (!response.ok) {
          throw new Error("No Result");
        }
        const data = await response.json();
        setResults(data.items || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchResults();
    }
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    navigate("/Result", { state: { search } });
  };

  return (
    <>
      <nav className={style.RPage}>
        <ul>
          <li>
            <a href="/">
              <img src="google-logo.png" className={style.logo} alt="logo" />
            </a>
          </li>
          <li>
            <form onSubmit={handleSearch} className={style.searchForm}>
              <input
                type="text"
                className={style.Search}
                placeholder="Search Google or type a URL"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className={style.searchButton}>
                <img src="search-icon.png" alt="Search" className={style.icon} />
              </button>
            </form>
          </li>
        </ul>
      </nav>
      <nav className={style.Nav2}>
        <ul>
          <li>
            <a href="/Result">All</a>
          </li>
          <li>
            <a href="/Result">Images</a>
          </li>
          <li>
            <a href="/Result">News</a>
          </li>
          <li>
            <a href="/Result">Shopping</a>
          </li>
          <li>
            <a href="/Result">Videos</a>
          </li>
          <li>
            <a href="/Result">Maps</a>
          </li>
          <li>
            <a href="/Result">Books</a>
          </li>
        </ul>
      </nav>
      <div className={style.searchResults}>
        {loading && <p className={style.text}>Loading...</p>}
        {error && <p className={style.text}>{error}</p>}
        {!loading && !error && (
          <div className={style.resultItem}>
            <ul className={style.data}>
              {results.map((data) => (
                <li key={data.cacheId}>
                  <a href={data.link} className={style.link}>{data.title}</a>
                  <br />
                  {data.snippet}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default ResultPage;
