// 컴포넌트를 렌더링한다는 것 = 실질적으로 함수를 불러오는 것
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return <div>
    <img src={coverImg}></img>
    <h3>
      <Link to={`/movie/${id}`}>Title: {title}</Link>
    </h3>
    <p>{summary}</p>
    <ul>
      {genres.map((genre =>
        <li key={genre}>{genre}</li>))}
    </ul>
    <hr />
  </div>
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genre: propTypes.arrayOf(propTypes.string),
}

export default Movie;