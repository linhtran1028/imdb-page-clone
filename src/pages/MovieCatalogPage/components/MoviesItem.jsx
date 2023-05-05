import React from "react";
import { Genre, MoviesItemCont, MoviesItemTitle } from "../styles/MoviesListStyles";
import { useNavigate } from "react-router-dom";

const MoviesItem = (props) => {
  const { item } = props;
  const { image, fullTitle, id } = item;
  const navigate = useNavigate();

  return (
    <MoviesItemCont onClick={() => {
        navigate(`/${id}`);
    }}>
      <img src={image} width={250} alt="" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
      <MoviesItemTitle>{fullTitle}</MoviesItemTitle>
      <Genre>Action Movie</Genre>
    </MoviesItemCont>
  );
};

export default MoviesItem;
