import React from 'react';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { QuestionData } from '../assets/data/questiondata';

const Question = () => {

  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id : "EI", score: 0 },
    { id : "SN", score: 0 },
    { id : "TF", score: 0 },
    { id : "JP", score: 0 },
  ]);

  const navigate = useNavigate();
  
  const handleClickBtn = (data, type) => {

    const newScore = totalScore.map((s) => 
      s.id === type ? { id:s.id, score:s.score+data } : s
    );

    setTotalScore(newScore);
    if(QuestionData.length !== questionNo + 1) {
      //다음문제로 문제수 증가
      setQuestionNo(questionNo+1);
    }else {
      //mbti도출!
      const mbti = newScore.reduce(
        (acc, current) => 
          acc + (current.score >= 2 ? current.id.substring(0,1) : current.id.substring(1,2)),
          ""
      ); 
      console.log('mbti: ', mbti);
      //결과페이지 이동
       //navigate('/result');
       navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti,
        })}`
       })
    }

    // if(type === "EI") {
    //   //기존 스코어에 더할 값 계산
    //   const addScore = totalScore[0].score + data;
    //   //새로운객체생성
    //   const newObject = { id : "EI", score : addScore };
    //   //splice사용 새로운객체를 해당객체 자리에 넣어줌
    //   totalScore.splice(0,1,newObject);
    // } else if (type === "SN") {
    //   const addScore = totalScore[1].score + data;
    //   const newObject = { id : "SN", score : addScore };
    //   totalScore.splice(1,1,newObject);
    // } else if (type === "TF") {
    //   const addScore = totalScore[2].score + data;
    //   const newObject = { id : "TF", score : addScore };
    //   totalScore.splice(2,1,newObject);
    // } else {
    //   const addScore = totalScore[3].score + data;
    //   const newObject = { id : "JP", score : addScore };
    //   totalScore.splice(3,1,newObject);
    // }

  }
  // const handleClickBtnB = (data, type) => {
  //   if(type === "EI") {
  //     //기존 스코어에 더할 값 계산
  //     const addScore = totalScore[0].score + data;
  //     //새로운객체생성
  //     const newObject = { id : "EI", score : addScore };
  //     //splice사용 새로운객체를 해당객체 자리에 넣어줌
  //     totalScore.splice(0,1,newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + data;
  //     const newObject = { id : "SN", score : addScore };
  //     totalScore.splice(1,1,newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + data;
  //     const newObject = { id : "TF", score : addScore };
  //     totalScore.splice(2,1,newObject);
  //   } else {
  //     const addScore = totalScore[3].score + data;
  //     const newObject = { id : "JP", score : addScore };
  //     totalScore.splice(3,1,newObject);
  //   }
  //   setQuestionNo(questionNo+1);
  // }

    return (
        <Wrapper>
            <Bar>
              <ProgressBar striped now={(questionNo/QuestionData.length)*100}/>
            </Bar>
            <QuestionNo> Question.{QuestionData[questionNo].id} </QuestionNo> 
            <Title>{QuestionData[questionNo].title}</Title>
						<ButtonGroup>
            	<Button onClick={()=>handleClickBtn(1, QuestionData[questionNo].type)} style={{width:"80%", minHeight: "20vh", fontSize:"15px", margin:"10px 10px 10px 10px"}}>{QuestionData[questionNo].answerA}</Button>
            	<Button onClick={()=>handleClickBtn(0, QuestionData[questionNo].type)} style={{width:"80%", minHeight: "20vh", fontSize:"15px", margin:"10px 10px 10px 10px"}}>{QuestionData[questionNo].answerB}</Button>
						</ButtonGroup>
        </Wrapper>
    );
}

export default Question;

const Wrapper = styled.div `
  height: 100vh;
  width: 100%;
  font-family: "EF_Diary";
  background: linear-gradient(to bottom, #9bc5f7 20%, #ddecff 80%);
  `
const Bar = styled.div `
  padding-top: 2rem;
`
const QuestionNo = styled.div `
  margin: 2rem 1rem 1rem 1rem;
	font-size: 20px;
	text-align: center;
  font-weight: 700;
`
const Title = styled.div `
  padding: 1rem 1rem 1rem 1rem;
	font-size: 20px;
	text-align: center;
`
const ButtonGroup = styled.div `
	display: flex;
	flex-direction : column;
	align-items: center;
	justify-content: center;
`