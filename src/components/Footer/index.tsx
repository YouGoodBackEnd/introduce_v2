import styled from "styled-components";
import github from "../../assets/svgs/github.svg";
import CC from "../../assets/svgs/CC.svg";
import Logo from "../../assets/svgs/Logo";

const Footer = () => {
  return (
    <_Wrapper>
      <_LogoSection>
        <Logo size="30" />
        <p>당신도 유능한 백엔드</p>
      </_LogoSection>
      <_InformationSection>
        <h1>@2022</h1>
        <p>
          팀 당신도 유능한 백엔드 | 리더 이용진 | 이메일
          Yongjinlee0222@gmail.com
        </p>
        <span>주소 : 대전 유성구 가정북로 76</span>
      </_InformationSection>
      <_LinkSection>
        <button>
          <img src={github} />
        </button>
        <button>
          <img src={CC} />
        </button>
      </_LinkSection>
    </_Wrapper>
  );
};

const _Wrapper = styled.footer`
  max-width: 100vw;
  height: 280px;
  padding: 50px 15vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: #f5f5f5;
`;

const _LogoSection = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-weight: 700;
    font-size: 25px;
    color: #242424;
  }
`;

const _InformationSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  h1 {
    font-weight: 600;
    font-size: 23px;
    color: #636363;
    margin-bottom: 10px;
  }

  p {
    font-weight: 500;
    font-size: 22px;
    color: #242424;
  }
  span {
    font-weight: 400;
    font-size: 20px;
    color: #636363;
  }
`;

const _LinkSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    transition: all 0.3s;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #242424;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    border: none;

    &:hover {
      background-color: #3c3c3c;
    }
  }
`;

export default Footer;
