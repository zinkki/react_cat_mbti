import React from 'react';
// css-in-js
import styled from 'styled-components';
// import PageImage from '../assets/img1.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';
import KakaoShareBtn from '../component/KakaoShareBtn';

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
    
          <Header>캔따개 테스트</Header>
    
          <Contents>
          <Title>결과 보기</Title>
            <LogoImage>
              <img alt='cat_img_result' src={resultData.image} width={300} height={300} className="rounded-circle" />
            </LogoImage>
            <Desc>캔따개({resultData.best})와 맞는 주인님은 바로...!</Desc>
            <Desc_name>'{resultData.name}' 입니다!</Desc_name>
            <DescSub>{resultData.desc}</DescSub>
            <ButtonGroup>
              <Button style={{marginRight:'10px'}} onClick={() => navigate('/')}>REPLAY</Button>
              <KakaoShareBtn style={{marginLeft:'10px'}} data={resultData} />
            </ButtonGroup>
          </Contents>
    
        </Wrapper>
        );
}

export default Result;

const Wrapper = styled.div `
  height: 100%;
  width: 100%;
  font-family: "EF_Diary";
  background: linear-gradient(to bottom, #9bc5f7 20%, #ddecff 80%);
`
const Header = styled.div `
  padding-top: 2rem;
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "EF_Diary";
  font-weight: 900;
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
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
  white-space: pre-line;
`
const Desc_name = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`
const DescSub = styled.div`
  font-size: 15px;
  margin-bottom: 20px;
  padding-top: 5px;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 5px;
`
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`