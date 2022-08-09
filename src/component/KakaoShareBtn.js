import React from 'react';
const {Kakao} = window;

const KakaoShareBtn = () => {

	const url = "";
	const resultUrl = window.location.href;

	React.useEffect = (() => {
		Kakao.init("16a4fcd707b3c92fe86e9de778bf5301");
	}, []);

	Kakao.Share.sendDefault({
		objectType: 'feed',
		content: {
			title: '캔따개 테스트',
			description: '캔따개의 주인님 고르기',
			imageUrl:
				'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
			link: {
				mobileWebUrl: 'https://developers.kakao.com',
				androidExecutionParams: 'test',
			},
		},
		buttons: [
			{
				title: '나도 테스트 하러가기',
				link: {
					mobileWebUrl: url,
				},
			},
		]
	});

	return (
	<Button style={{marginLeft:'20px'}}>카카오톡 공유하기</Button>
	);
}

export default KakaoShareBtn;