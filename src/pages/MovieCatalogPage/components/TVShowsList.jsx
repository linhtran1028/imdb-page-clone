import React, { useEffect, useState } from "react";
import { Loading, Movies, MoviesListCont, Title } from "../styles/MoviesListStyles";
import InfiniteScroll from "react-infinite-scroll-component";
import MoviesItem from "./MoviesItem";
import axios from "axios";

const TVShowsList = () => {
  const [TVs, setTVs] = useState([]);
  const [offset, setOffset] = useState(0);

  const LIMIT_ITEM = 28;

  const fetchTVsData = async () => {
			const { data } = await axios.get(
				`https://qjth0hsvqa.execute-api.ap-southeast-1.amazonaws.com/staging/tv_shows?offset=${offset}&limit=${LIMIT_ITEM}`
			);
      setTVs(oldData => [...oldData, ...data.movies]);
	}

  useEffect(() => {
    fetchTVsData();
  }, [])
  

  const fetchMoreData = () => {
    fetchTVsData();
    setOffset(offset);
  };

  return (
    <div>
      <Title>Latest TV Shows</Title>
          <InfiniteScroll
            dataLength={TVs.length}
            next={() => fetchMoreData(offset)}
            hasMore={TVs.length < 250}
            loader={<Loading>Loading...</Loading>}
          >
            <Movies>
              {TVs.map((item, index) => (
                <MoviesItem item={item} key={index} />
              ))}
            </Movies>
          </InfiniteScroll>          
    </div>
  );
};

export default TVShowsList;
