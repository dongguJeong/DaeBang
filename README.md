# 📖 대학생들을 위한 방 대방

![IMG_1463](https://github.com/user-attachments/assets/84903158-e9e6-4c68-bee2-311d697acb93)

<br>

## 프로젝트 소개

-   대학 근처 자취방 매물 소개
-   공공데이터 포털의 Open API와 Kakao 지도 API를 활용하여 전월세 실거래가를 직관적으로 확인하고 비교할 수 있는 싱글페이지앱.

<br>

## 팀원 구성

<div align="center">

|                                                               **조승연**                                                                |                                                                **채문성**                                                                 |                                                                 **정동구**                                                                  |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars.githubusercontent.com/u/111514472?v=4" height=150 width=150> <br/> @layout-SY](https://github.com/layout-SY) | [<img src="https://avatars.githubusercontent.com/u/152577867?v=4" height=150 width=150> <br/> @chaesunbak](https://github.com/chaesunbak) | [<img src="https://avatars.githubusercontent.com/u/133619736?v=4" height=150 width=150> <br/> @dongguJeong](https://github.com/dongguJeong) |

</div>

<br>

## 1. 개발 환경

-   Front : Typescript, React, styled-component, Redux ,React-Query
-   버전 및 이슈관리 : Github
-   협업 툴 : [Notion](https://www.notion.so/Ryn-2cc1e4c1836840a1b59fe919afc70076?p=1c0856ba96be4c4daf6468494933c94b&pm=s), Slack, [Figma](<https://www.figma.com/design/ScwvQGzy7682Fv0BYCkI5v/Bootstrap-5-UI-Kit-(Community)?node-id=5491-5567&node-type=canvas&t=sdlcBOtwE4lfmZhg->)

    <br>

## 2. 역할 분담

### 🍊조승연

-   **UI**
    -   동 필터링
-   **기능**
    -   데이터 패칭 로직
    -   시세 비교 컴포넌트
    -   표 형식
    -   시세 데이터 리스트 컴포넌트
        -   동 필터링
        -   동별 평균 시세
        -   전/월세 필터
            <br>

### 👻채문성

-   **UI**
    -   전반적인 스타일링
-   **기능**
    -   월 필터링
    -   react-query 적용
    -   지도 컴포넌트
        -   데이터 좌표 추가
        -   검색 컴포넌트
        -   마커 생성 및 클러스터링
        -   현재 위치를 첫 위치로 설정
    -   사이드바 컴포넌트

<br>

### 😎정동구

-   **UI**
    -   디테일 페이지 스타일링
-   **기능**
    -   리덕스 설정
    -   아이템 디테일 컴포넌트
        -   주변 정보
        -   아이템 기본정보
    -   북마크 컴포넌트


<br>

## 3. 개발 기간 및 작업 관리

### 개발 기간

-   전체 개발 기간 : 2024-11-18 ~ 2022-11-29

    -   자료 조사 : 2024-11-15 ~ 2022-11-17
    -   스프린트 1 : 2024-11-18 ~ 2022-11-23
    -   스프린트 2 : 2024-11-24 ~ 2022-11-28

-   개발 진행 자세히 보기
    | 과제 | 구분 | 기간 | 담당자 |
    | ----------------- | -------------- | ------------------------ | ---------------- |
    | 기능 기획 | 자료조사 | 11월 15일(금) ~ 11월 17일(일) | 모두 |
    | 길찾기 API 자료조사 | 자료조사 | 11월 15일(금) ~ 11월 17일(일) | 동구 정 |
    | 공공데이터 API 조사 | 자료조사 | 11월 15일(금) ~ 11월 17일(일) | 승연 조 |
    | 지도 API 조사 | 자료조사 | 11월 15일(금) ~ 11월 17일(일) | 문성 채 |
    | 기본 데이터 패칭 | 스플린트 1 | 11월 18일(월) ~ 11월 23일(토) | 승연 조 |
    | 레이아웃 | 스플린트 1 | 11월 18일(월) ~ 11월 23일(토) | 문성 채 |
    | 개별 보기 컴포넌트 | 스플린트 1 | 11월 18일(월) ~ 11월 23일(토) | 동구 정 |
    | 시세리스트 | 스플린트 1 & 2 | 11월 18일(월) ~ 11월 29일(토) | 승연 조 & 문성 채 |
    | React-Query 도입 | 스플린트 2 | 11월 24일(일) ~ 11월 28일(목) | 문성 채 |
    | 검색 컴포넌트 | 스플린트 2 | 11월 24일(일) ~ 11월 28일(목) | 문성 채 |
    | Redux 도입 | 스플린트 2 | 11월 24일(일) ~ 11월 28일(목) | 동구 정 |
    | 시세 리스트 레이지 로딩 | 스플린트 2 | 11월 24일(일) ~ 11월 28일(목) | 승연 조 |
    | 전월세 필터 | 스플린트 2 | 11월 24일(일) ~ 11월 28일(목) | 승연 조 |
    | 북마크 컴포넌트 | 스플린트 2 | 11월 24일(일) ~ 11월 28일(목) | 동구 정 |
    | 기간 필터 | 스플린트 2 | 11월 24일(일) ~ 11월 28일(목) | 문성 채 |
    | 시세 비교 컴포넌트 | 스플린트 2 | 11월 24일(일) ~ 11월 28일(목) | 승연 조 & 문성 채 |
    | 배포 | 스플린트 2 | 11월 24일(일) ~ 11월 28일(목) | 동구 정 |

<br>

## 4. 돌파구

-   이전 쿼리 취소로 쿼리 성능 개선하기(채문성)
    -   DB 없이 외부 API에 의존하여 구현한 시스템에서 데이터 패칭 시간이 길어지는 문제가 발생했습니다. 공공 API 시세 정보는 구 단위로만 제공되어 동 단위의 세분화된 데이터를 얻을 수 없었고, 좌표 정보 또한 포함되지 않아 추가적인 API 요청을 통해 좌표 정보를 받아와야 했습니다. 이로 인해 데이터 패칭 속도가 약 2~3초 정도 소요되었으며, 사용자가 데이터 패칭 완료 전에 연속적으로 데이터 패칭을 요구할 경우 요청이 쌓이고 지연되는 부정적인 사용자 경험으로 이어졌습니다. 이를 해결하기 위해 요청이 새 쿼리 요청 이전에 이전 쿼리를 취소하는 기능을 도입하여 성능을 개선했고, 캐싱 도입 또한 성능 개선에 큰 도움을 주었습니다.

## 5. 페이지별 기능

### [초기화면]

-   서비스 접속 초기화면으로 지도와 사이드바가 나옵니다.
-   지도는 서비스를 사용 중인 사용자의 현재 위치 좌표를 기반으로 렌더링 됩니다.
-   사이드바는 원/투룸 카테고리가 열려 있는 상태로 렌더링 됩니다.

| 초기화면                                                                                  |
| ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/16162300-7cdf-4fb7-8cf4-e68dac3ac0f3) |

<br>

### [사이드바]

-   사이드바는 각각 원/투룸, 오피스텔, 북마크, 시세비교 카테고리로 나누어져 있습니다.
    -   시세 비교를 제외한 각 카테고리는 이름에 맞는 매물 리스트를 보여줍니다.
    -   시세비교 카테고리는 사용자가 지정한 매물의 상세 내역을 비교할 수 있습니다.

| 사이드바                                                                                  |
| ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/4e161f80-3784-4a98-a252-9747c4f93e5d) |

<br>

### [검색바]

-   사용자가 원하는 지하철역 혹은 대학교를 이름을 통해 검색할 수 있습니다.
-   검색된 지하철역 혹은 대학교의 위치(해당 좌표위치)로 지도가 이동합니다.

| 검색바                                                                                    |
| ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/7715f005-b428-4910-b495-39754a410326) |

<br>

### [원/투룸, 오피스텔 매물 리스트]

-   사용자는 해당 지역의 매물 정보를 리스트를 통해 확인할 수 있습니다.
-   초기엔 현재 지도 위치의 법정구 매물 데이터를 나열하며,
    "동" 필터링을 통해 원하는 "동"의 매물을 필터링할 수 있습니다.
-   해당 동의 평균 보증금/월세 시세 정보를 확인할 수 있습니다.

| 원/투룸, 오피스텔 매물 리스트                                                             |
| ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/456a5f61-c754-4bb0-98e9-10f168e06002) |

<br>

### [디테일 상단]

-   "하트" 아이콘을 통해 해당 매물을 북마크할 수 있습니다.
-   "지도" 아이콘을 통해 해당 매물의 지도 상 좌표 위치를 지도 이동을 통해 확인할 수 있습니다.

| 디테일 상단                                                                               |
| ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/fdcf9047-9539-4e9b-b0a3-cdf1d8e332dc) |

<br>

### [디테일 리스트]

-   해당 매물의 로드뷰를 통해 위치를 명확히 알 수 있습니다.
-   해당 매물의 상세 정보를 통해 면적, 층수 등을 상세하게 알 수 있습니다.
-   해당 매물의 주변 시설을 테마 별로 미니맵에서 확인할 수 있습니다.

|  로드뷰                                                                          |
| ----------------------------------------------------------------------------------------- |
| !<img width="337" alt="스크린샷 2025-01-31 오전 9 02 46" src="https://github.com/user-attachments/assets/190075d1-3e29-4e62-ae99-54abb4a0fc16" />|


| 주변 시설                                                                         |
| ----------------------------------------------------------------------------------------- |
| !<img width="346" alt="스크린샷 2025-01-31 오전 8 54 27" src="https://github.com/user-attachments/assets/8df510ec-0ee1-41ae-ac61-3ff8dfb20d59" />|

| 필요한 아이콘 이미지 제작|
| ----------------------------------------------------------------------------------------- |
|<img width="35" alt="스크린샷 2025-01-31 오전 9 01 38" src="https://github.com/user-attachments/assets/dab39e36-d64d-473d-9599-c7bd989532c0" />|

<br>

### [북마크]

-   사용자가 디테일 페이지에서 "하트"를 누른 매물의 리스트를 보여줍니다.
-   해당 데이터는 local Storage에서 가져옵니다.

| 북마크                                                                                    |
| ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/8e0ae894-3960-4312-9e2e-823fa8a93ee4) |

<br>

### [시세비교]

-   사용자가 원하는 매물을 원/투룸, 오피스텔 매물 리스트에서 가져옵니다.
-   가져온 데이터의 상세 정보를 표 형태로 정리하여 보여줍니다.

| 시세비교                                                                                  |
| ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/91225de6-4097-4345-9493-19390b40ebe8) |

<br>

### [지도 상단 필터링]

-   전/월세 필터
    -   전/월세 필터를 통해 지도 및 매물 리스트의 데이터를 전/월세 단위로 필터링 할 수 있습니다.
-   매물 날짜 필터링
    -   원하는 날짜 단위(월) 매물 데이터를 필터링 하여 확인할 수 있습니다.

| 지도 상단 필터링                                                                          |
| ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/126e0723-264b-4244-baab-b90f4d4c7673) |

<br>

### [지도 하단 배너]

-   지도 하단의 정보로 현재 지도의 위치를 "동" 단위로 확인할 수 있습니다.

| 지도 하단 배너                                                                            |
| ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/5bdab37f-76ba-4333-93b9-9d24dfdeb95b) |

<br>

### [지도]

-   매물 리스트에 있는 매물의 위치에 따른 좌표를 통해 지도 컴포넌트에 렌더링 됩니다.
-   렌더링된 데이터는 개벌젹으로 존재하는 것이 아닌 클러스터링을 통해 묶여 존재합니다.
-   원하는 매물에 호버 시 간략한 매물의 상세 정보가 표시됩니다.
-   원하는 매물 클릭 시 해당 매물의 상세 정보 테마가 열립니다.

| 지도                                                                                      |
| ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/759646e1-eca8-4e13-ad8b-7a1852909e02) |

<br>

## 9. 개선 목표

-   코드 리팩토링 : 로직 효율성과 모듈화 등 일부 코드 리팩토링이 필요합니다.
-   시세 비교 : 시세 비교 카테고리의 내용이 초기 모델에 비해 상당히 미흡하여 보강 해야 합니다.
-   매물 데이터 : 초기에 계획된 내용인 몇년치 간의 데이터를 토대로한 표와 그래프 구현을 데이터 및 패칭
    효율 문제로 제외 했습니다. 관련하여 더 고민하여 업그레이드 할 방안을 모색할 것입니다.
-   반응형 디자인 : 레이아웃에서 절대단위에 px을 기준으로 구현된 것이 많아, 다양한 화면 크기에서 디자인을 반영하지 못함.

<br>

## 4. 프로젝트 후기

### 🍊 조승연

-   이번 프로젝트를 통해코드의 모듈화와 의존성의 중요도에 대해 생각해보게 되었습니다. 모듈화가 되어 있지 않은 코드는 재사용성을 떨어트리고 이는 비효율적인 작업으로 이어졌습니다. 또한, 특정 함수 혹은 컴포넌트의 의존성이 높아지면 유지보수 측면에서 불편해지고 까다로워지는 문제가 발생했습니다. 즉, 전체적인 팀 작업의 효율이 매우 떨어졌습니다. 따라서 하나의 컴포넌트에 하나의 역할만을 부여하고, 함수는 재사용 가능성이 낮더라도 모듈화 하여 사용하자는 목표를 가지게 되었습니다.

-   그리고 팀 회의가 크고 작은 문제에 대한 다양한 솔루션을 생산해주고, 프로젝트의 확장성에 큰 도움을 준단 것을 알게 되었습니다.
    따라서 그다지 중요하다고 생각되지 않는 부분이라도 의견을 내어 팀과 함께 해결책을 모색하며 성장해가는 경험을 지속하고 싶습니다.
    <br>

### 👻 채문성

-   처음에는 코드를 재사용하지 않을 수도 있는데 왜 미리 재사용성이 높은 컴포넌트를 만들어야 하는지, 모듈화하지 않고 필요한 부분만 복붙하면 되는 것 아니냐고 생각하곤 했지만, 이번 프로젝트를 통해 재사용성이 높고 내부 로직이 캡슐화된 컴포넌트가 다른 개발자들이 코드를 이해하는 데 드는 인지적 수고를 크게 줄여주며, 결과적으로 팀 전체의 생산성을 높인다는 점을 깨달았습니다. 이제는 코드를 작성할 때마다 "이 로직을 어떻게 재사용 가능하고 명확하게 만들 수 있을까?"라는 질문을 고민하며, 혼자라면 놓쳤을 문제들을 찾아내고 협업을 통해 혼자서는 해결하지 못했을 복잡한 문제들을 더 효과적으로 해결하고자 하는 목표를 가지게 되었습니다.

<br>

### 😎 정동구

-   프로젝트를 진행하면서 모듈화의 중요성과 타입스크립트의 가치를 깊이 깨닫게 되었습니다. 초기에는 모듈화를 구현하는 과정이 번거롭게 느껴졌지만, 이후 코드를 수정할 때 수정이 필요한 부분을 빠르게 파악할 수 있다는 점과 재사용성이 높아진다는 장점 덕분에 개발 속도가 크게 향상되는 것을 경험했습니다. 또한 팀원들이 api의 타입을 미리 작성해주어 컴포넌트 개발 시에 편하게 사용할 수 있고, 타입 오류도 미리 잡아주는 것에서 타입스크립트의 소중함을 다시금 느끼게 되었습니다. 이 경험을 바탕으로, 모듈화와 타입스크립트의 장점을 더욱 적극적으로 활용하며, 유지보수성과 생산성을 겸비한 코드를 작성하기 위해 노력하겠습니다
