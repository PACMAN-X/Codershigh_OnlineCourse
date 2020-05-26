import React from 'react';
import CurriculumPresenter from './CurriculumPresenter';

const CurriculumContainer = () => {
  const coursesDetailUX = [
    {
      Title: '오리엔테이션, 학습 환경, 과제 제공',
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
      ],
      URLs: {
        '[필수] 스큐어모피즘과 플랫디자인': 'https://youtu.be/OmWp4dgJ6_Y',
        '[필수] ADS, 페르소나, 멘탈모델': 'https://youtu.be/HTwMDRb-p8s',
        '[선택] 내 앱은 왜 리젝될까?': 'https://youtu.be/vH-W6dN1ZOs',
        '[선택] 앱이 빨라지는 마술': 'https://youtu.be/QEX4DNVT2SQ',
        '[선택] 앱스토어 사례': 'https://youtu.be/V60KmDRAt_U',
        'iOS HIG 수업 1회차 :: iOS란?': '',
        '[필수] 1. 오리엔테이션': 'https://youtu.be/A79TQAlYxEw',
        '[필수] 2. iOS 디자인 테마': 'https://youtu.be/A79TQAlYxEw',
        '[선택] 3. Mac Catalyst 시작하기': 'https://youtu.be/MdmSdJCIm60',
        '[선택] 4. Mac Catalyst - Enhancement': 'https://youtu.be/7jfB4nPrOOA',
        '[선택] 5. Mac Catalyst - Structure': 'https://youtu.be/ASpv8HI41Uo',
        '[선택] 6. Mac Catalyst - Menu': 'https://youtu.be/My1r298RvT4',
        '[필수] 7. Interface Essentials': 'https://youtu.be/_a7ZuveIX8k'
      },
      Assignments: ['과제1', '과제2', '과제3', '과제4', '과제5']
    },
    {
      Title: '목업 스케치 안내',
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
      ],
      URLs: {
        '프로토타입 1': 'https://youtu.be/d-gWLNDMhr8',
        '프로토타입 2': 'https://youtu.be/gLSZBBgxFqc',
        Multitasking: 'https://programmers.co.kr/learn/courses/4/lessons/213',
        Sandbox: 'https://programmers.co.kr/learn/courses/4/lessons/214',
        'iOS HIG 수업 2회차 :: App Architecture': '',
        '[필수]01 Launching': 'https://youtu.be/UV9uKwX8tII',
        '[필수]02 Launching': 'https://youtu.be/VXRhV8va4no',
        '[필수]03 Onboarding': 'https://youtu.be/S3NVIOoTt6I',
        '[필수]04 Loading': 'https://youtu.be/AZUku4wfp-Q',
        '[필수]05 Modality': 'https://youtu.be/ta9N8zNCPis',
        '[필수]06 Modality': 'https://youtu.be/u9crMn9CZoQ',
        '[필수]07 Navigation': 'https://youtu.be/Z4rEetCjjgs',
        '[선택]08 RequestingPermission': 'https://youtu.be/Deelp-vDhSM',
        '[선택]09 Settings1': 'https://youtu.be/7ds-YVCGJxU'
      },
      Assignments: ['과제1', '과제2', '과제3', '과제4', '과제5']
    },
    {
      Title: '프로토타입 제작 및 안내',
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
      ],
      URLs: {
        'iOS HIG 수업 3회차 :: User Interface': '',
        '[선택]01 3D Touch': 'https://youtu.be/vpP4hSjHkfY',
        '[선택]02 ApplePencil': 'https://youtu.be/Exq519sYs_c',
        '[선택]03 ApplePencil - Keynote를 참고하라':
          'https://youtu.be/d12TMtAdTNs',
        '[선택]04 ApplePencil - PencilKit': 'https://youtu.be/x9urRlfkpnQ',
        '[필수]05 Audio': 'https://youtu.be/O9GKM8NKGM8',
        '[필수]06 Audio - Designing Greate Audio Experience':
          'https://youtu.be/Qh5bxTkiyeY',
        '[필수]07 Authentication - Sign in with Apple':
          'https://youtu.be/TIQxvc-YbE8',
        '[필수]08 Authentication FaceID TouchID':
          'https://youtu.be/24cZntCvP7w',
        'iOS HIG 수업 4회차 :: User Interaction': '',
        '[필수]01 DataEntry 1 피커 뷰와 테이블 뷰 사이에서 고민할 때':
          'https://youtu.be/rVMz4PdUXb8',
        '[필수]02 DataEntry 2 폼에 데이터 입력하는 앱 만들때 신경써야 할 부분.':
          'https://youtu.be/RKQXEoi-Poc',
        '[선택]03 아이패드 드래그 앤 드랍을 보여줌':
          'https://youtu.be/NFrPq89adIU',
        '[선택]04 드래그 앤 드랍 기능을 하기 위한 준비':
          'https://youtu.be/sC4rKm9h-wo',
        '[선택]05 드래그 를 준비하기': 'https://youtu.be/Z_jSgqo59hM',
        '[선택]06 드랍을 받는 부분': 'https://youtu.be/0x1EJlOVsN4',
        '[필수]07 Feedback 사용자의 액션에 피드백을 주는 우아한 방법':
          'https://youtu.be/H-p_vfQaZ6s',
        '[필수]08 FileHandling iOS가 파일을 다루는 방식':
          'https://youtu.be/w2KJ_kwniUI'
      }
    },
    {
      Title: '발표 및 피드백',
      Descriptions: [
        'iOS HIG 수업 5회차 :: User Interface - 3',
        '01 Gestures 아이폰 아이패드의 제스처 총 정리. 텍스트 위에서 세 손가락을 모으면? 세 손가락을 펼치면?!',
        '02 Haptics 햅틱 피드백. 아이폰에는 있고 아이패드에는 없는 것.',
        '03 Haptics. 햅틱 피드백을 직접 만들 수 있다고?',
        '04 NFC , 우리나라에선 아직 부족한 근거리통신.',
        '05 Pointers . 아이패드에서 마우스를 사용하는 앱',
        '06 Pointer Effects. 아이패드에서 포인터는 어떤 모양일까요? 동그랗다구요? 정말? 확실해요?',
        '07 Pointer Magnetism. 아이패드 마우스 포인터에는 자석이 붙어있다구요? 아, 누군가는 쫀쫀이라고 하더군요.',
        '08 UndoRedo 아이폰의 마지막 작업 되돌리기',
        'iOS HIG 수업 6회차 :: System Capabilities',
        '01 AR Intro - AR 과 VR은 어떻게 다른가, 애플의 주력기술 증강현실, ARKit',
        '02 AR 스크린 스페이스와 가상 공간의 구분과 용도',
        '03 AR Coaching View - 증강현실 경험을 시작하는 도입 뷰인 코칭 뷰의 구현방법',
        '04 AR Object - AR 오브젝트를 가상 공간에 올릴 때 알아야 하는 내용과 주의할 점',
        '05 AR Multi User - AR 가상공간을 여러 사람과 공유하기',
        '06 AR Reacting - AR 가상공간은 사용자의 이벤트에 어떻게 반응해야 하는가',
        '07 AR 문제 해결하기',
        '08 AR Glyph - ARKit 을 위한 증강현실 심볼로고와 배지 사용법을 알아봅시다'
      ],
      URLs: {
        'iOS HIG 수업 5회차 :: User Interface - 3': '',
        '01 Gestures 아이폰 아이패드의 제스처 총 정리. 텍스트 위에서 세 손가락을 모으면? 세 손가락을 펼치면?!':
          'https://youtu.be/CGhrkMDfOdc',
        '02 Haptics 햅틱 피드백. 아이폰에는 있고 아이패드에는 없는 것.':
          'https://youtu.be/x9gic1Q6kCA',
        '03 Haptics. 햅틱 피드백을 직접 만들 수 있다고?':
          'https://youtu.be/lLVmzbYfVU8',
        '04 NFC , 우리나라에선 아직 부족한 근거리통신.':
          'https://youtu.be/W9yKsJjrUho',
        '05 Pointers . 아이패드에서 마우스를 사용하는 앱':
          'https://youtu.be/2V9Aa03Ukc8',
        '06 Pointer Effects. 아이패드에서 포인터는 어떤 모양일까요? 동그랗다구요? 정말? 확실해요?':
          'https://youtu.be/uN3ievEC84g',
        '07 Pointer Magnetism. 아이패드 마우스 포인터에는 자석이 붙어있다구요? 아, 누군가는 쫀쫀이라고 하더군요.':
          'https://youtu.be/Jbg-iUeOXgw',
        '08 UndoRedo 아이폰의 마지막 작업 되돌리기':
          'https://youtu.be/7OUg6JTW5RY',
        'iOS HIG 수업 6회차 :: System Capabilities': '',
        '01 AR Intro - AR 과 VR은 어떻게 다른가, 애플의 주력기술 증강현실, ARKit':
          'https://youtu.be/F-YIJ3q9REE',
        '02 AR 스크린 스페이스와 가상 공간의 구분과 용도':
          'https://youtu.be/x7YK8MyI6wA',
        '03 AR Coaching View - 증강현실 경험을 시작하는 도입 뷰인 코칭 뷰의 구현방법':
          'https://youtu.be/YCy9IRmI0XA',
        '04 AR Object - AR 오브젝트를 가상 공간에 올릴 때 알아야 하는 내용과 주의할 점':
          'https://youtu.be/mSYfgYa7Urw',
        '05 AR Multi User - AR 가상공간을 여러 사람과 공유하기':
          'https://youtu.be/ksXqY4FK2D4',
        '06 AR Reacting - AR 가상공간은 사용자의 이벤트에 어떻게 반응해야 하는가':
          'https://youtu.be/qJgboObntkQ',
        '07 AR 문제 해결하기': 'https://youtu.be/g81R4D2k3l8',
        '08 AR Glyph - ARKit 을 위한 증강현실 심볼로고와 배지 사용법을 알아봅시다':
          'https://youtu.be/kfThAxLfdfg'
      }
    }
  ];

  const coursesDetailAPP = [
    {
      Title: '프로토타입 발표 및 팀 빌딩 (1)',
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
      ],
      URLs: {}
    },
    {
      Title: '프로토타입 발표 및 팀 빌딩 (2)',
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
      ],
      URLs: {}
    },
    {
      Title: '테이블뷰 완전 정복',
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
      ],
      URLs: {
        'Getting Started with App Development':
          'https://www.inflearn.com/course/temp_324841',
        '1.1 Introduction to Swift and Playgrounds':
          'https://www.inflearn.com/course/temp_324841/lecture/35332'
      }
    },
    {
      Title: '프로토타입 발표 및 팀 빌딩 (1)',
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
      ],
      URLs: {
        'Getting Started with App Development':
          'https://www.inflearn.com/course/temp_324841'
      }
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
