📖 대학생들을 위한 방 대방

<썸네일>

<br>

## 프로젝트 소개

-   대학 근처 자취방 매물 소개

<br>

## 팀원 구성

<div align="center">

|                                                               **조승연**                                                                |                                                                **채문성**                                                                 |                                                                 **정동구**                                                                  |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars.githubusercontent.com/u/111514472?v=4" height=150 width=150> <br/> @layout-SY](https://github.com/layout-SY) | [<img src="https://avatars.githubusercontent.com/u/152577867?v=4" height=150 width=150> <br/> @chaesunbak](https://github.com/chaesunbak) | [<img src="https://avatars.githubusercontent.com/u/133619736?v=4" height=150 width=150> <br/> @dongguJeong](https://github.com/dongguJeong) |

</div>

<br>

## 1. 개발 환경

-   Front : HTML, React, styled-components, Redux
-   버전 및 이슈관리 : Github, Github Issues
-   협업 툴 : Notion, Slack
    <br>
<<<<<<< HEAD
    <br>
=======
<br>
>>>>>>> 7c26676e12437d1b11ba162553cb00acaaab7644

## 2. 역할 분담

### 🍊조승연

-   **UI**
    -   동 필터링
-   **기능**
    -   데이터 패칭 로직
    -   시세 비교 컴포넌트
    -   표 형식
    -   시세 데이터 리스트 컴포넌트 - 동 필터링 - 동별 평균 시세 - 전/월세 필터
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

<br>

### 작업 관리

-   GitHub Pull Request와 Issues를 사용하여 진행 상황을 공유했습니다.
-   스프린트 단위 회의와 중간 점검 회의로 진행했습니다.

<br>

## 4. 페이지별 기능

### [초기화면]

-   서비스 접속 초기화면으로 지도와 사이드바가 나옵니다.
-   지도는 서비스를 사용 중인 사용자의 현재 위치 좌표를 기반으로 렌더링 됩니다.
-   사이드바는 원/투룸 카테고리가 열려 있는 상태로 렌더링 됩니다.

| 초기화면                 |
| ------------------------ |
| ![splash](메인화면 사진) |

<br>

### [사이드바]

-   사이드바는 각각 원/투룸, 오피스텔, 북마크, 시세비교 카테고리로 나누어져 있습니다.
    -   시세 비교를 제외한 각 카테고리는 이름에 맞는 매물 리스트를 보여줍니다.
    -   시세비교 카테고리는 사용자가 지정한 매물의 상세 내역을 비교할 수 있습니다.

| 사이드바             |
| -------------------- |
| ![SideBar](사이드바) |

<br>

### [검색바]

-   사용자가 원하는 지하철역 혹은 대학교를 이름을 통해 검색할 수 있습니다.
-   검색된 지하철역 혹은 대학교의 위치(해당 좌표위치)로 지도가 이동합니다.

| 검색바               |
| -------------------- |
| ![SearchBar](검색바) |

<br>

### [원/투룸, 오피스텔 매물 리스트]

-   사용자는 해당 지역의 매물 정보를 리스트를 통해 확인할 수 있습니다.
-   초기엔 현재 지도 위치의 법정구 매물 데이터를 나열하며,
    "동" 필터링을 통해 원하는 "동"의 매물을 필터링할 수 있습니다.
-   해당 동의 평균 보증금/월세 시세 정보를 확인할 수 있습니다.

| 원/투룸, 오피스텔 매물 리스트              |
| ------------------------------------------ |
| ![SiseList](원/투룸, 오피스텔 매물 리스트) |

<br>

### [디테일 상단]

-   "하트" 아이콘을 통해 해당 매물을 북마크할 수 있습니다.
-   "지도" 아이콘을 통해 해당 매물의 지도 상 좌표 위치를 지도 이동을 통해 확인할 수 있습니다.

| 디테일 상단                 |
| --------------------------- |
| ![디테일 상단](디테일 상단) |

<br>

### [디테일 리스트]

-   해당 매물의 로드뷰를 통해 위치를 명확히 알 수 있습니다.
-   해당 매물의 상세 정보를 통해 면적, 층수 등을 상세하게 알 수 있습니다.
-   해당 매물의 주변 시설을 테마 별로 미니맵에서 확인할 수 있습니다.

| 디테일 리스트                   |
| ------------------------------- |
| ![디테일 리스트](디테일 리스트) |

<br>

### [북마크]

-   사용자가 디테일 페이지에서 "하트"를 누른 매물의 리스트를 보여줍니다.
-   해당 데이터는 local Storage에서 가져옵니다.

| 북마크            |
| ----------------- |
| ![북마크](북마크) |

<br>

### [시세비교]

-   사용자가 원하는 매물을 원/투룸, 오피스텔 매물 리스트에서 가져옵니다.
-   가져온 데이터의 상세 정보를 표 형태로 정리하여 보여줍니다.

| 시세비교              |
| --------------------- |
| ![시세비교](시세비교) |

<br>

### [지도 상단 필터링]

-   전/월세 필터
    -   전/월세 필터를 통해 지도 및 매물 리스트의 데이터를 전/월세 단위로 필터링 할 수 있습니다.
-   매물 날짜 필터링
    -   원하는 날짜 단위(월) 매물 데이터를 필터링 하여 확인할 수 있습니다.

| 지도 상단 필터링                      |
| ------------------------------------- |
| ![지도 상단 필터링](지도 상단 필터링) |

<br>

### [지도 하단 배너]

-   지도 하단의 정보로 현재 지도의 위치를 "동" 단위로 확인할 수 있습니다.

| 지도 하단 배너                    |
| --------------------------------- |
| ![지도 하단 배너](지도 하단 배너) |

<br>

### [지도]

-   매물 리스트에 있는 매물의 위치에 따른 좌표를 통해 지도 컴포넌트에 렌더링 됩니다.
-   렌더링된 데이터는 개벌젹으로 존재하는 것이 아닌 클러스터링을 통해 묶여 존재합니다.
-   원하는 매물에 호버 시 간략한 매물의 상세 정보가 표시됩니다.
-   원하는 매물 클릭 시 해당 매물의 상세 정보 테마가 열립니다.

| 지도          |
| ------------- |
| ![지도](지도) |

<br>

## 9. 개선 목표

-   코드 리팩토링 : 로직 효율성과 모듈화 등 일부 코드 리팩토링이 필요합니다.
-   시세 비교 : 시세 비교 카테고리의 내용이 초기 모델에 비해 상당히 미흡하여 보강 해야 합니다.
-   매물 데이터 : 초기에 계획된 내용인 몇년치 간의 데이터를 토대로한 표와 그래프 구현을 데이터 및 패칭
    효율 문제로 제외 했습니다. 관련하여 더 고민하여 업그레이드 할 방안을 모색할 것입니다.

<br>

## 4. 프로젝트 후기

### 🍊 조승연

<br>

### 👻 채문성

<br>

### 😎 정동구
