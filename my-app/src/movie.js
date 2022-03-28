// async, await - 비동기 코드를 쓸 때 Promeise를 더 읽기 쉽도록
import { useEffect, useState } from "react";
import Movie from "./Movie";

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => { // then 대신 await로 작성
    // const res = await fetch(
    //   "https://yts.mx/api/v2/list_movies/json?minimum_rating=8.5$sort_by=year"
    // );
    // const json = await res.json();
    const json = await (await (await fetch("https://yts.mx/api/v2/list_movies/json?minimum_rating=9.5$sort_by=year")).json()); // const res, const json 위의 2줄 코드를 1줄로 줄여서 사용 가능(await를 감싸는 또 다른 await가 있음)
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => { // 앱 시작할 때 movie API를 딱 한번 불러오고 싶음 
    getMovies(); // useEffect를 통해 getMovies() 호출
  }, []);
  return (
    <div>
      <h2>Movie App</h2>
      {loading ?
        <h4>Loading...</h4> :
        <div>
          {movies.map((movie) =>
            <div key={movie.id}>
              <img src={movie.medium_cover_image}></img>
              <h3>Title: {movie.title}</h3>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((genre => <li key={genre}>{genre}</li>))}
              </ul>
              <hr />
            </div>
          )}
        </div>
      }
    </div>
  );
}

export default Movie;