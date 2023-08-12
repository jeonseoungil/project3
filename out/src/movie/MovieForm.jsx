import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  width: 550px;
  height: 56px;
  align-items: center;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 700;
  text-indent: 10px;
`;
const Button = styled.button`
  height: 62px;
  width: 60px;
  font-size: 20px;
  font-weight: 700;
  align-items: center;
  vertical-align: middle;
  border: none;
  cursor: pointer;
`;
const MovieForm = ({ changeInput, text, onSubmit }) => {
  return (
    <Div>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="영화명을 검색하세요"
          name="text"
          value={text}
          onChange={changeInput}
        />
        <Button type="submit">검색</Button>
      </form>
    </Div>
  );
};

export default MovieForm;
