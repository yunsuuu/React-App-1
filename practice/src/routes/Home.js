import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
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
            <Movie key={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />)};
        </div>
      }
    </div>
  );
}

export default Home;