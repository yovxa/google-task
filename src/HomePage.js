import style from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function HomePage() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      setError("Search field cannot be empty");
    } else {
      setError("");
      navigate("/ResultPage", { state: { search } });
    }
  };

  return (
    <>
     
      <main>
        <form onSubmit={handleSubmit}>
          <nav className={style.nav}>
            <ul>
              <li>
                <a href="./HomePage.js" className={style.A}>Gmail</a>
              </li>
              <li>
                <a href="./HomePage.js" className={style.A}>Images</a>
              </li>
              <li>
                <a href="./HomePage.js" className={style.A}>
                  <img
                    src="app-button.png"
                    className={style.appbutton}
                    alt="App Button"
                  />
                </a>
              </li>
            </ul>
          </nav>

          <div className={style.container}>
            <img src="google-logo.png" className={style.Logo} alt="Google Logo" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={style.Search}
              placeholder="Search Google or type a URL"
            />
            {error && <p className={style.error}>{error}</p>}
          </div>
          <div className={style.btns}>
            <button type="submit" className={style.searchbtn}>
              Google Search
            </button>
            <input
              type="button"
              value="I am Feeling Lucky"
              className={style.searchbtn}
              onClick={() => alert("Feeling Lucky!")}
            />
          </div>
        </form>
      </main>
    </>
  );
}

export default HomePage;
