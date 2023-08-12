import React from "react";
import styled from "styled-components";
import "./boot.scss";

const UL = styled.ul`
  display: flex;
  justify-content: left;
  width: 90%;
  margin-top: 40px;
`;
const LI = styled.li`
  font-size: 25px;
  border: 1px solid lightgray;
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    border: 1px solid red;
    color: red;
  }
`;

const DDDiv = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: 700;
  justify-content: left;
  width: 90%;
  margin: 30px 0 30px 70px;
`;

const Movieli = ({ totalall, totalin, totaldel, data, toggle, chk }) => {
  return (
    <>
      <UL>
        <LI onClick={totalall}>전체</LI>
        <LI onClick={totalin}>상영중</LI>
        <LI onClick={totaldel}>상영 종료</LI>
      </UL>
      <DDDiv>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            checked={chk}
            onChange={toggle}
          />
          <label className="form-check-label">개봉작만보기</label>
        </div>
        <div>
          <p>{data.length}개의 영화가 검색되었습니다.</p>
        </div>
      </DDDiv>
    </>
  );
};

export default Movieli;
