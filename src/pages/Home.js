import React from 'react';
// css-in-js
import styled from 'styled-components';
import PageImage from '../assets/img1.jpg';
import Button from 'react-bootstrap/Button';

const Home = () => {

    return(
    <Wrapper> 

      <Header>캔따개 테스트</Header>

      <Contents>
      <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img src={PageImage} width={350} height={350} className="rounded-circle"></img>
        </LogoImage>
        <Desc>캔따개의 MBTI를 기반으로 잘맞는 주인님찾기</Desc>
        <Button>START</Button>
      </Contents>

    </Wrapper>
    );
}

export default Home;

const Wrapper = styled.div `
  height: 100vh;
  width: 100%;
`
const Header = styled.div `
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Contents = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.div `
  font-size: 30px;
  margin-top: 40px;
`
const LogoImage = styled.div `
  margin-top: 20px;
`
const Desc = styled.div `
  font-soze: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`