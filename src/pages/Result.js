import React from 'react';
// css-in-js
import styled from 'styled-components';
// import PageImage from '../assets/img1.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';

const Result = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');
    //최종적으로 도출한 결과 객체
    const [resultData, setResultData] = React.useState({});

    React.useEffect(() => {
        const result = ResultData.find((s) => s.best === mbti);
        setResultData(result);
    },[mbti])

    console.log(resultData);

    return(
        <Wrapper> 
    
          <Header>캔따개 테스트 결과화면</Header>
    
          <Contents>
          <Title>결과 보기</Title>
            <LogoImage>
              <img alt='cat_img_result' src={resultData.image} width={350} height={350} className="rounded-circle" />
            </LogoImage>
            <Desc>캔따개의 주인님은 바로..!{resultData.name} 입니다!</Desc>
            <ButtonGroup>
              <Button onClick={() => navigate('/')}>REPLAY</Button>
              <Button style={{marginLeft:'20px'}}>카카오톡 공유하기</Button>
            </ButtonGroup>
          </Contents>
    
        </Wrapper>
        );
}

export default Result;

const Wrapper = styled.div `
  height: 100vh;
  width: 100%;
  font-family: "EF_Diary";
`
const Header = styled.div `
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "EF_Diary";
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
const ButtonGroup = styled.div `
  display: flex;
  flex-direction: row;
`