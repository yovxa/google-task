import { useLocation } from "react-router-dom";
import style from "./ResultPage.module.css";
import MockData from "./MockData";

function ResultPage() {
  const location = useLocation();
  const search = location.state?.search;

  return (
    <>
      <nav className={style.RPage}>
        <ul>
          <li>
            <a href="./HomePage.js">
              <img src="google-logo.png" className={style.logo} alt="logo" />
            </a>
          </li>
          <li>
            <input
              type="text"
              className={style.Search}
              placeholder="Search Google or type a URL"
              defaultValue={search}
            />
          </li>
        </ul>
      </nav>
      <nav className={style.Nav2}>
        <ul>
          <li>
            <a href="./ResultPage.js">All</a>
          </li>
          <li>
            <a href="./ResultPage.js">Images</a>
          </li>
          <li>
            <a href="./ResultPage.js">News</a>
          </li>
          <li>
            <a href="./ResultPage.js">Shopping</a>
          </li>
          <li>
            <a href="./ResultPage.js">Videos</a>
          </li>
          <li>
            <a href="./ResultPage.js">Maps</a>
          </li>
          <li>
            <a href="./ResultPage.js">Books</a>
          </li>
        </ul>
      </nav>
      <div className={style.searchResults}>
        <div className={style.resultItem}>
          <ul className={style.data}>
            {MockData.map((data) => (
              <li key={data.id}>
                <a href={data.url} className={style.link}>{data.url}</a>
                <br />
                {data.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ResultPage;
