import React from 'react';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {
  const blocks = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
  ];
  const cardNews = [
    {
      newsImage: require('../../Assets/Block_Images/cardNews/news1.jpg'),
      intervieweeInfo: '현)한양대학교 재학생',
      students: '전하영, 정상운, 최준호',
      url: '"https://www.facebook.com/codershighteam/posts/1228818117320856"',
    },
    {
      newsImage: require('../../Assets/Block_Images/cardNews/news2.jpg'),
      intervieweeInfo: '현)중앙대학교 재학생',
      students: '안웅기, 서보민, 이지우',
      newsAddress:
        'https://www.facebook.com/codershighteam/posts/1237510246451643',
    },
    {
      newsImage: require('../../Assets/Block_Images/cardNews/news3.jpg'),
      intervieweeInfo: '현)삼성전자 앱 개발부',
      students: '염혜리',
      newsAddress:
        'https://www.facebook.com/codershighteam/posts/1249197898616211',
    },
  ];

  // const Tutors = [
  //   {
  //     name: '윤성관',
  //     imgUrl: '',
  //     appleQulifications: ['ade', 'apls'],
  //     careers: [
  //       '(주)코더스하이 대표',
  //       '한양대학교 SW학부 겸임교수',
  //       '(전) 라인+',
  //     ],
  //   },
  //   {
  //     name: '이재훈',
  //     imgUrl: '',
  //     appleQulifications: ['apls'],
  //     careers: ['T아카데미 iOS 강사', 'VanillaStep 대표'],
  //   },
  //   {
  //     name: '김태선',
  //     imgUrl: '',
  //     appleQulifications: ['apls'],
  //     careers: ['(전)NHN Connect'],
  //   },
  //   {
  //     name: '박종영',
  //     imgUrl: '',
  //     appleQulifications: ['apls'],
  //     careers: ['(전)NHN Connect'],
  //   },
  //   {
  //     name: '남장혁',
  //     imgUrl: '',
  //     appleQulifications: ['apls'],
  //     careers: ['(전)NHN Connect'],
  //   },
  //   {
  //     name: '고준일',
  //     imgUrl: '',
  //     appleQulifications: ['apls'],
  //     careers: ['모카포트 대표', '(전) 호서대 겸임교수'],
  //   },
  //   {
  //     name: '강희종',
  //     imgUrl: '',
  //     appleQulifications: [],
  //     careers: ['(주)카루랩 CTO'],
  //   },
  // ];

  const universities = [
    '고려대',
    '광운대',
    '동국대',
    '서강대',
    '서울대',
    '서울여대',
    '숙명여대',
    '연세대',
    '중앙대',
    '한양대',
  ];

  return (
    <HomePresenter
      blocks={blocks}
      cardNews={cardNews}
      universities={universities}
    />
  );
};

export default HomeContainer;
