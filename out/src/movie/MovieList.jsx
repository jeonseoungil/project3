import React from "react";
import MovieItem from "./MovieItem";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

const MovieList = ({ data, onOpen }) => {

  return (
    <Ul>
      {data.map((item) => (
        <MovieItem key={item.rnum} item={item} onOpen={onOpen} />
      ))}
    </Ul>
  );
};

export default MovieList;
