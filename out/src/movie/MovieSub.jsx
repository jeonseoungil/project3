import React from "react";
import styled from "styled-components";
import { BsXLg } from "react-icons/Bs";

const Bbg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ddiv = styled.div`
  width: 700px;
  height: 440px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  z-index: 100;
  display: flex;
`;
const IImg = styled.img`
  width: 300px;
  height: 440px;
  margin-right: 20px;
`;
const DDiv = styled.div`
  color: #dcdcdc;
  overflow: scroll;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Hh2 = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 80px 0 10px 0;
`;
const Sstrong = styled.strong`
  font-size: 18px;
  font-weight: 700;
  display: block;
  margin-bottom: 20px;
`;
const Aspan = styled.span`
  line-height: 2;
  font-size: 15px;
  font-weight: 700;
`;
const PP = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  font-size: 30px;
`;
const MovieSub = ({ movie, onClose }) => {
  const { imgurl, movieNm, reservation, openDt, text } = movie;

  const stop = (e) => {
    e.stopPropagation();
  };
  return (
    <Bbg className="bg" onClick={onClose}>
      <Ddiv className="popup" onClick={stop}>
        <IImg src={imgurl} alt={movieNm} />
        <DDiv>
          <Hh2>{movieNm}</Hh2>
          <Sstrong>
            개봉일 : {openDt} 예매율 : {reservation}
          </Sstrong>
          <Aspan>{text}</Aspan>
          <PP>
            <i onClick={onClose}>
              <BsXLg />
            </i>
          </PP>
        </DDiv>
      </Ddiv>
    </Bbg>
  );
};

export default MovieSub;
