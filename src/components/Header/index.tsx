import styled from "styled-components";
import { navList } from "./constant";
import logo from "../../assets/svgs/logo.svg";

const Header = () => {
  return (
    <_Wrapper>
      <_LogoSection>
        <img src={logo} />
        <p>Dang-You-Back</p>
      </_LogoSection>
      <nav>
        <_MenuList>
          {navList.map((item, index) => {
            return <_Menu key={index}>{item}</_Menu>;
          })}
        </_MenuList>
      </nav>
    </_Wrapper>
  );
};

const _Wrapper = styled.header`
  max-width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 100px;
  border-bottom: 1px solid #e7e7e7;
`;

const _LogoSection = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-weight: 300;
    font-size: 22px;
    color: #141414;
  }
`;

const _MenuList = styled.ul`
  gap: 50px;
  display: flex;
  align-items: center;
  list-style: none;
`;

const _Menu = styled.li`
  transition: all 0.3s;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  color: #303030;
  text-decoration: none;

  &:hover {
    color: #626262;
  }
`;

export default Header;
