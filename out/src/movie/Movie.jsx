import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import Movieli from "./Movieli";
import MovieSub from "./MovieSub";

const Container = styled.div`
  width: 1700px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Movie = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const [filtering, setFiltering] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState([]);
  const [chk, setChk] = useState(false);

  //정보 받아오기 영역
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/jeonseoungil/626237fa439bc344a62abc2662bf3fc5/raw/8b95924062795988c71a8a54374bdda55214e1ac/movie.json"
      )
      .then((res) => {
        setData(res.data.boxOfficeResult.dailyBoxOfficeList);
        setFiltering(res.data.boxOfficeResult.dailyBoxOfficeList);
      })
      .catch((res) => {
        setData([]);
        setError("주소를 잘못 입력했습니다. 다시 입력해주세요");
      });
  }, []);
  // 입력값과 해당 요소들과 비교
  const onSubmit = (e) => {
    e.preventDefault();
    const filter = filtering.filter((item) => {
      return item.movieNm.includes(text);
    });
    setData(filter);
    setText("");
  };
  const toggle = () => {
    setChk(!chk);
    if (chk) {
      totalall();
    } else {
      totalin();
    }
  };

  const totalall = () => {
    setData(filtering);
    setChk(false);
  };
  const totalin = () => {
    const filter2 = filtering.filter((item) => {
      return item.screening === "2023";
    });
    setData(filter2);
    setChk(true);
  };
  const totaldel = () => {
    const filter3 = filtering.filter((item) => {
      return item.screening !== "2023";
    });
    setData(filter3);
    setChk(false);
  };

  const onOpen = (rnum) => {
    setMovie(data.find((item) => item.rnum === rnum));
    setIsOpen(true);
  };
  //텍스트 영역
  const changeInput = (e) => {
    const value = e.target.value;
    setText(value);
    totalall();
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <MovieForm text={text} changeInput={changeInput} onSubmit={onSubmit} />
      <Movieli
        totalall={totalall}
        totalin={totalin}
        totaldel={totaldel}
        data={data}
        toggle={toggle}
        chk={chk}
      />

      <MovieList data={data} onOpen={onOpen} />
      {isOpen === true ? <MovieSub movie={movie} onClose={onClose} /> : ""}
    </Container>
  );
};

export default Movie;
