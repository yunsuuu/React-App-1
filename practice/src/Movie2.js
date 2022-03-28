import Movie2 from "./Movie2";

function Movie2() {
  return <div>
    <img src={medium_cover_image}></img>
    <h3>Title: {title}</h3>
    <p>{summary}</p>
    <ul>
      {genres.map((genre => <li key={genre}>{genre}</li>))}
    </ul>
    <hr />
  </div>;
}

export default Movie2;