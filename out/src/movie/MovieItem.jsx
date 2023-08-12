import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Li = styled.li`
  width: 310px;
  margin: 50px;
  text-align: left;
`;
const Img = styled.img`
  width: 100%;
  height: 444px;
  display: block;
  margin: auto;
`;
const Strong = styled.strong`
  display: block;
  font-weight: 700;
  font-size: 20px;
  width: 280px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const P = styled.p`
  position: relative;
  margin-bottom: 10px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 42%;
    width: 1px;
    height: 10px;
    transform: translatey(70%);
    background-color: #000;
  }
`;

const LiP = styled.p`
  display: block;
  border: 1px solid lightgray;
  width: 93px;
  height: 30px;
  color: lightgray;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const Ii = styled.i`
  color: red;
  vertical-align: middle;
  vertical-align: middle;
`;
const Biv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Civ = styled.div`
  display: block;
  border: 1px solid darkmagenta;
  width: 93px;
  height: 30px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  background-color: darkmagenta;
`;
const MovieItem = ({ item, onOpen }) => {
  const { movieNm, rank, imgurl, openDt, reservation, like, rnum } = item;
  const [isplay, setIsplay] = useState(false);
  const likely = (like) => {
    if (like >= 1000) {
      const formattedNumber = (like / 1000).toFixed(1);
      return formattedNumber + "k";
    } else {
      return like;
    }
  };
  const Ttoggle = () => {
    setIsplay(!isplay);
  };
  const likeNumber = likely(like);
  return (
    <Li>
      <Img src={imgurl} alt={movieNm} onClick={() => onOpen(rnum)} />
      <Strong>{movieNm}</Strong>
      <P>
        개봉일 : {openDt} 예매율 : {reservation}{" "}
      </P>
      <Biv>
        {!isplay ? (
          <LiP onClick={Ttoggle}>
            <Ii>
              <AiOutlineHeart style={{ color: "lightgray" }} />
            </Ii>
            {likeNumber}
          </LiP>
        ) : (
          <LiP onClick={Ttoggle} style={{ color: "red", fontWeight: 700 }}>
            <Ii>
              <AiFillHeart />
            </Ii>
            {likeNumber}
          </LiP>
        )}
        <Civ>
          <p>예매하기</p>
        </Civ>
      </Biv>
    </Li>
  );
};

export default MovieItem;
