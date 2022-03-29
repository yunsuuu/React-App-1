import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await ( await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json());
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
            <Movie 
            key={movie.id} // map()을 사용하면 고유한 key값을 넣어줘야함
            id={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres} 
            />
          )};
        </div>
      }
    </div>
  );
}

export default Home;