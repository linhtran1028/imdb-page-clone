import React, { useEffect, useState } from "react";
import { Loading, Movies, MoviesListCont, Title } from "../styles/MoviesListStyles";
import InfiniteScroll from "react-infinite-scroll-component";
import MoviesItem from "./MoviesItem";
import axios from "axios";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [offset, setOffset] = useState(0);
  const LIMIT_ITEM = 28;

  const fetchMoviesData = async () => {
			const { data } = await axios.get(
				`https://qjth0hsvqa.execute-api.ap-southeast-1.amazonaws.com/staging/movies?offset=${offset}&limit=${LIMIT_ITEM}`
			);
			setMovies(oldData => [...oldData, ...data.movies]);
	}

  useEffect(() => {
    fetchMoviesData();
  }, [])
  

  const fetchMoreData = () => {
    fetchMoviesData();
    setOffset(offset);
  };

  return (
    <div>
      <Title>Latest Movies</Title>
          <InfiniteScroll
            dataLength={movies.length}
            next={() => fetchMoreData(offset)}
            hasMore={movies.length < 250}
            loader={<Loading>Loading...</Loading>}
          >
            <Movies>
              {movies.length !== 0 && movies.map((item, index) => (
                <MoviesItem item={item} key={index} />
              ))}
            </Movies>
          </InfiniteScroll>          
    </div>
  );
};

export default MoviesList;
