import React from 'react';
import CurriculumPresenter from './CurriculumPresenter';

const CurriculumContainer = () => {
  const coursesDetailUX = [
    {
      Title: '1주차 :: 오리엔테이션, 학습 환경, 과제 제공',
      Descriptions: [
        '[필수] 스큐어모피즘과 플랫디자인',
        '[필수] ADS, 페르소나, 멘탈모델',
        '[선택] 내 앱은 왜 리젝될까?',
        '[선택] 앱이 빨라지는 마술',
        '[선택] 앱스토어 사례',
        'iOS HIG 수업 1회차 :: iOS란?',
        '[필수] 1. 오리엔테이션',
        '[필수] 2. iOS 디자인 테마',
        '[선택] 3. Mac Catalyst 시작하기',
        '[선택] 4. Mac Catalyst - Enhancement',
        '[선택] 5. Mac Catalyst - Structure',
        '[선택] 6. Mac Catalyst - Menu',
        '[필수] 7. Interface Essentials'
      ]
    },
    {
      Title: '2주차 :: 목업 스케치 안내',
      Descriptions: [
        '프로토타입 1',
        '프로토타입 2',
        'Multitasking',
        'Sandbox',
        'iOS HIG 수업 2회차 :: App Architecture',
        '[필수]01 Launching',
        '[필수]02 Launching',
        '[필수]03 Onboarding',
        '[필수]04 Loading',
        '[필수]05 Modality',
        '[필수]06 Modality',
        '[필수]07 Navigation',
        '[선택]08 RequestingPermission',
        '[선택]09 Settings1'
      ]
    },
    {
      Title: '3주차 :: 프로토타입 제작 및 안내',
      Descriptions: [
        'iOS HIG 수업 3회차 :: User Interface',
        '[선택]01 3D Touch',
        '[선택]02 ApplePencil',
        '[선택]03 ApplePencil - Keynote를 참고하라',
        '[선택]04 ApplePencil - PencilKit',
        '[필수]05 Audio',
        '[필수]06 Audio - Designing Greate Audio Experience',
        '[필수]07 Authentication - Sign in with Apple',
        '[필수]08 Authentication FaceID TouchID',
        'iOS HIG 수업 4회차 :: User Interaction',
        '[필수]01 DataEntry 1 피커 뷰와 테이블 뷰 사이에서 고민할 때',
        '[필수]02 DataEntry 2 폼에 데이터 입력하는 앱 만들때 신경써야 할 부분.',
        '[선택]03 아이패드 드래그 앤 드랍을 보여줌',
        '[선택]04 드래그 앤 드랍 기능을 하기 위한 준비',
        '[선택]05 드래그 를 준비하기',
        '[선택]06 드랍을 받는 부분',
        '[필수]07 Feedback 사용자의 액션에 피드백을 주는 우아한 방법',
        '[필수]08 FileHandling iOS가 파일을 다루는 방식'
      ]
    },
    {
      Title: '4주차 :: 발표 및 피드백',
      Descriptions: [
        'iOS HIG 수업 5회차 :: User Interface - 3',
        'iOS HIG 수업 6회차 :: System Capabilities'
      ]
    }
  ];

  const coursesDetailAPP = [
    {
      Title: '1주차 :: 프로토타입 발표 및 팀 빌딩 (1)',
      Descriptions: [
        'Intro App Dev',
        '001 Playground Basics 10:39',
        '002 Naming and Identifiers 15:58',
        '003 Strings 12:05',
        '004 Hello, world! 14:14',
        '005 First App 12:06',
        '006 Functions 07:45',
        '007 BoogieBot 08:24',
        '008 Constants and Variables 11:00',
        '009 Types 12:25',
        '010 Parameters and Results 12:24',
        '011 Making Decisions 10:48',
        '개발길 008 왜 스위프트인가? 43:51',
        '1. https://youtu.be/sBrjSwiUrPA',
        '2. https://youtu.be/Dlpx1G-VILc',
        '3. https://youtu.be/DXGeNEItpiY',
        '4. https://youtu.be/DpD-j243rM0',
        '5. https://youtu.be/KQSqc91tfc4',
        '6. https://youtu.be/m_7XZ5otc2E'
      ]
    },
    {
      Title: '2주차 :: 프로토타입 발표 및 팀 빌딩 (2)',
      Descriptions: [
        'Intro App Dev',
        '012 Instances, Methods, and Properties 15:35',
        '013 QuestionBot 14:50',
        '014 Arrays and Loops 15:03',
        '015 Defining Structures 16:39',
        '016 QuestionBot 2 17:01',
        '017 Actions and Outlets 29:47',
        '018 Adaptive User Interfaces 30:06',
        '019 Enumerations and Switch 16:20',
        '020 Final Project 21:21 ',
        '021 App Design 19:27'
      ]
    },
    {
      Title: '3주차 :: 테이블뷰 완전 정복',
      Descriptions: [
        'Getting Started with App Development',
        '1.1 Introduction to Swift and Playgrounds',
        '1.2 Constants, Variables, and Data Types',
        '1.3 Operators',
        '1.4 Control Flow',
        '1.5 Xcode',
        '1.6 Building, Running, and Debugging an...',
        '1.7 Documentation',
        '1.8 Interface Builder Basics',
        'Guided Project - Light',
        'Summary',
        '',
        'Introduction to UIKit',
        '2.1 Strings',
        '2.2 Functions',
        '2.3 Structures',
        '2.4 Classes, Inheritance',
        '2.5 Collections',
        '2.6 Loops',
        '2.7 Introduction to UIKit',
        '2.8 Displaying Data',
        '2.9 Controls in Action',
        '2.10 Auto Layout and Stack Views',
        'Guided Project: Apple Pie',
        'Summary'
      ]
    },
    {
      Title: '4주차 :: 프로토타입 발표 및 팀 빌딩 (1)',
      Descriptions: [
        'Getting Started with App Development',
        '1.1 Introduction to Swift and Playgrounds',
        '1.2 Constants, Variables, and Data Types',
        '1.3 Operators',
        '1.4 Control Flow',
        '1.5 Xcode',
        '1.6 Building, Running, and Debugging an...',
        '1.7 Documentation',
        '1.8 Interface Builder Basics',
        'Guided Project - Light',
        'Summary',
        'Introduction to UIKit',
        '2.1 Strings',
        '2.2 Functions',
        '2.3 Structures',
        '2.4 Classes, Inheritance',
        '2.5 Collections',
        '2.6 Loops',
        '2.7 Introduction to UIKit',
        '2.8 Displaying Data',
        '2.9 Controls in Action',
        '2.10 Auto Layout and Stack Views',
        'Guided Project: Apple Pie',
        'Summary'
      ]
    },
    {
      Title: '',
      Descriptions: ['ComingSoon']
    },
    {
      Title: '',
      Descriptions: ['ComingSoon']
    },
    {
      Title: '',
      Descriptions: ['ComingSoon']
    },
    {
      Title: '',
      Descriptions: ['ComingSoon']
    }
  ];
  return (
    <CurriculumPresenter
      coursesDetailUX={coursesDetailUX}
      coursesDetailAPP={coursesDetailAPP}
    />
  );
};

export default CurriculumContainer;
