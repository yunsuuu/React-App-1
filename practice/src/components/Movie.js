import propTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
  return <div>
    <img src={coverImg}></img>
    <h3>Title: {title}</h3>
    <p>{summary}</p>
    <ul>
      {genres.map((genre =>
        <li key={genre}>{genre}</li>))}
    </ul>
    <hr />
  </div>
}

Movie.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genre: propTypes.arrayOf(propTypes.string),
}

export default Movie;