# 레스토랑 예약 및 리뷰 웹사이트 Lechelin



- Admin URL :
- Server URL : 
- Test ID : 관리자  
- Test PW : 1234

<br>

## 프로젝트 소개

- Lechelin은 여러 가게를 한 곳에 모아 사용자가 편하게 예약 및 리뷰 할 수 있는 웹사이트입니다.
- 사용자는 위치와 카테고리별로 가게를 한 눈에 볼 수 있고 이용자들의 

리뷰를 보고 가게의 정보를 미리 얻을 수 있습니다.
- 가게 사장님은 가게의 정보 및 이용시간 예약 정보를 관리 추가 할 수 있습니다.
- 관리자는 관리자페이지를 통해 사이트에 필요한 관리를 한 곳에서 할 수 있습니다.
<br>

### 개발 기간 

- 전체 개발 기간 : 2024-11-1 ~ 2024-12-26

<br>

## 팀원 구성 및 역할 분담담

<div align="center">


| **팀원**   | **역할** |
|------------|----------|
| 김형준     | UI: 로그인, 회원가입, 마이페이지, 내 정보 수정 <br> 기능: 유저 아이디 유효성 및 중복 검사, 회원가입 시 이메일 인증 |
| 김주성     | UI: 메인페이지, 가게 리뷰, 내 리뷰 <br> 기능: 리뷰 등록&수정&삭제, 이미지 등록&수정&삭제, 도움 된 리뷰 좋아요, 불량 리뷰 신고하기, <br> 별점 처리 |
| 김동현     | UI: 가게 정보, 예약, 내 예약 관리, 가게 예약 관리 <br> 기능: 예약 관리, 가게 정보 페이지 지도 추가, 예약 시 카카오페이 연동 |
| 윤지현     | UI: 가게 리스트 <br> 기능: 가게 검색 기능, 검색 시 조건 기능, 가게 정보&메뉴 등록&수정&삭제, 이미지 등록&삭제 |
| 신향민     | 기능: 공지사항 |

</div>

<br>

## 1. 개발 환경

- Front : HTML, React, BootStrap
- Back-end : Java, Spring Boot
- DB : MySQL
- 버전 및 이슈관리 : Github
- 협업 툴 : Discord, Notion
- 서비스 배포 환경 : 

<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, BootStrap

- React
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
    - 상태 관리 라이브러리인 ZuStand를 사용하여 애플리케이션의 상태를 효율적으로 관리합니다.
    - React Router를 활용하여 페이지 간의 네비게이션을 원활하게 처리합니다.

- BootStrap
    - 반응형 디자인을 지원하여 다양한 화면 크기에서도 일관된 UI를 제공합니다.
    - 미리 정의된 스타일과 컴포넌트를 사용하여 빠른 프로토타입 제작이 가능합니다.
    
### Java, Spring Boot

- Java
    - 안정성과 성능을 고려하여 선택하였으며, 대규모 애플리케이션 개발에 적합합니다.
    - 객체 지향 프로그래밍(OOP) 패러다임을 통해 코드의 재사용성을 높입니다.

- Spring Boot
    - 빠른 개발을 위한 설정 최소화 및 기본 제공 기능을 활용하여 생산성을 극대화합니다.
    - RESTful API를 쉽게 구축할 수 있어 프론트엔드와의 연동이 용이합니다.
    - Spring Security를 통해 인증 및 권한 관리를 강화하여 보안을 강화합니다.

### MySQL

- **MySQL**
    - 관계형 데이터베이스 관리 시스템(RDBMS)으로 데이터 무결성과 안정성을 보장합니다.
    - SQL 쿼리를 통해 효율적인 데이터 검색 및 조작이 가능합니다.
    - 트랜잭션 처리 기능을 통해 데이터 일관성을 유지할 수 있습니다.

### 브랜치 전략

- Git-flow 전략을 기반으로 main, release 브랜치와 개인의 보조브랜치로 운용했습니다.
- main, release, 개인인 브랜치로 나누어 개발을 하였습니다.
    - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
    - **release** 브랜치는 개발 단계에서 배포 직전 각 기능들은 머지 시켜놓고 테스트 하는 브랜치입니다.
    - **개인브랜치** 인원 단위로 나누어 각자 개발 후 release 브랜치로 머지 하였습니다.

<br>

## 3. 프로젝트 구조

```
src
 ┣ components
 ┃ ┣ HJ
 ┃ ┃ ┣ EditUserProfile.jsx
 ┃ ┃ ┣ Login.jsx
 ┃ ┃ ┣ MyPage.jsx
 ┃ ┃ ┗ Signup.jsx
 ┃ ┣ Js
 ┃ ┃ ┣ header2.jsx
 ┃ ┃ ┣ MyReview.jsx
 ┃ ┃ ┣ NoticeBoard.jsx
 ┃ ┃ ┣ ReviewForm.jsx
 ┃ ┃ ┗ ShopReview.jsx
 ┃ ┣ KDH
 ┃ ┃ ┣ BulkScheduleModal.jsx
 ┃ ┃ ┣ ManagerReserve.jsx
 ┃ ┃ ┣ ManagerSchedule.jsx
 ┃ ┃ ┣ PaginationComponent.jsx
 ┃ ┃ ┣ ReservationStatus.jsx
 ┃ ┃ ┗ Reserve.jsx
 ┃ ┣ restaurants
 ┃ ┃ ┣ AddrInput.jsx
 ┃ ┃ ┣ MenuCard.js
 ┃ ┃ ┣ Pagination.jsx
 ┃ ┃ ┣ Restaurant.jsx
 ┃ ┃ ┣ RestaurantCard.jsx
 ┃ ┃ ┣ ReviewCard.js
 ┃ ┃ ┗ SearchBar.jsx
 ┃ ┣ AdminRestaurantTable.jsx
 ┃ ┣ ContactSection.jsx
 ┃ ┣ Footer.jsx
 ┃ ┣ Header.jsx
 ┃ ┣ Map.jsx
 ┃ ┣ ProtectedRoute.jsx
 ┃ ┗ RestaurantsInfo.jsx
 ┣ css
 ┃ ┣ KDH
 ┃ ┃ ┣ ManagerReserve.css
 ┃ ┃ ┗ Reserve.css
 ┃ ┣ restaurants
 ┃ ┃ ┣ MainPage.css
 ┃ ┃ ┣ MenuCard.css
 ┃ ┃ ┣ MenuPage.css
 ┃ ┃ ┣ pagination.css
 ┃ ┃ ┗ ReviewCard.css
 ┃ ┣ Footer.css
 ┃ ┣ Header.css
 ┃ ┣ inquiry.css
 ┃ ┣ login.css
 ┃ ┣ main.css
 ┃ ┣ Map.css
 ┃ ┣ MyPage.css
 ┃ ┣ myreview.css
 ┃ ┣ ReservationStatus.css
 ┃ ┣ Reserve.css
 ┃ ┣ ReserveMain.css
 ┃ ┣ ReviewForm.css
 ┃ ┣ shopReview.css
 ┃ ┗ signup.css
 ┣ img
 ┃ ┣ menubuger.png
 ┃ ┣ restaurant.jpg
 ┃ ┗ restaurant_icon.png
 ┣ pages
 ┃ ┗ restaurants
 ┃ ┃ ┣ Add.jsx
 ┃ ┃ ┣ api.js
 ┃ ┃ ┣ Main.jsx
 ┃ ┃ ┣ MenuPage.jsx
 ┃ ┃ ┗ Update.jsx
 ┣ Router
 ┃ ┣ AdminPage.jsx
 ┃ ┣ Contact.jsx
 ┃ ┣ EditUserProfile.jsx
 ┃ ┣ LoginRouter.jsx
 ┃ ┣ MainPage.jsx
 ┃ ┣ ManagerReservePage.jsx
 ┃ ┣ Mypage.jsx
 ┃ ┣ MyReview.jsx
 ┃ ┣ NoticeBoardPage.jsx
 ┃ ┣ ReservationStatusPage.jsx
 ┃ ┣ ReservePage.jsx
 ┃ ┣ Restaurant.jsx
 ┃ ┣ RestaurantInfo.jsx
 ┃ ┣ ReviewForm.jsx
 ┃ ┣ SchedulePage.jsx
 ┃ ┣ ShopReview.jsx
 ┃ ┗ SignupRouter.jsx
 ┣ store
 ┃ ┣ authStore.js
 ┃ ┣ baseUrlStore.js
 ┃ ┣ pagination.js
 ┃ ┗ restaurantStore.js
 ┣ App.jsx
 ┣ App.test.js
 ┣ index.js
 ┣ reportWebVitals.js
 ┗ setupTests.js
```

<br>

## 4. 신경 쓴 부분

- [접근제한 설정](https://github.com/likelion-project-README/README/wiki/README-6.%EC%8B%A0%EA%B2%BD-%EC%93%B4-%EB%B6%80%EB%B6%84_%EC%A0%91%EA%B7%BC%EC%A0%9C%ED%95%9C-%EC%84%A4%EC%A0%95)

- [Recoil을 통한 상태관리 및 유지](https://github.com/likelion-project-README/README/wiki/README-6.%EC%8B%A0%EA%B2%BD-%EC%93%B4-%EB%B6%80%EB%B6%84_Recoil%EC%9D%84-%ED%86%B5%ED%95%9C-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EB%B0%8F-%EC%9C%A0%EC%A7%80)

<br>

## 5. 페이지별 기능

### [메인화면]
- 서비스 접속 시 메인페이지가 처음 나타납니다.
    - 메인배너에는 추천 가게가 표시되며,
    - 레스토랑 리스트 노출
    - 이벤트 배너 표시 (현재는 레스토랑 등록으로 대체)
    - 최신 공지사항 표시

| 메인페이지 |
|----------|
|![splash](https://github.com/Jammomu/RestaurantUser/blob/front/release/%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80.png)|

<br>

### [회원가입]
- 이미 가입된 아이디가 있는지 중복 확인 합니다.
- 이메일을 입력 후 인증번호를 받으면 실제 메일로 인증번호가 발송됩니다.
- 인증번호를 입력 후 확인을 눌러 체크합니다.
- 가게를 소유 시 사업자입니다.를 체크하여 예비사업자 권한을 얻은 후 가게를 등록할 수 있습니다.

| 회원가입 |
|----------|
|![join](https://github.com/Jammomu/RestaurantUser/blob/front/release/%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85.png)|
|![signup](https://github.com/Jammomu/RestaurantUser/blob/front/release/%EC%9D%B8%EC%A6%9D%20%EB%A9%94%EC%9D%BC.png)|

<br>

### [로그인]
- 아이디와 비밀번호를 입력해 로그인합니다.
- 자동 로그인을 체크할 시 토큰을 세션에 저장하여 오래 유지합니다.

| 로그인 |
|----------|
|![login](https://github.com/Jammomu/RestaurantUser/blob/front/release/%EB%A1%9C%EA%B7%B8%EC%9D%B8.png)|

<br>

### [가게 목록]
- 가게명과 위치를 조건으로 검색할 수 있습니다.
- 예약여부와 주차여부를 체크하여 더욱 상세한 검색이 가능합니다.

| 검색 |
|----------|
|![search](https://github.com/Jammomu/RestaurantUser/blob/front/release/%EA%B0%80%EA%B2%8C%EB%AA%A9%EB%A1%9D.png)|

<br>

### [예약]

- 가게 예약하기를 누르면 캘린더에서 날짜와 시간, 인원과 요청사항을 입력 후 예약 진행 가능
- 예역현황에서 결제하기를 눌러 카카오페이로 연동


| 예약 중 |
|--------------------|
|![reservation](https://github.com/Jammomu/RestaurantUser/blob/front/release/%EC%98%88%EC%95%BD%20%EC%A4%91.png)|

| 예약현황 | 결제 중 |
|----------|----------|
|![reservation2](https://github.com/Jammomu/RestaurantUser/blob/front/release/%EB%82%B4%20%EC%98%88%EC%95%BD%ED%98%84%ED%99%A9.png)|![payment](https://github.com/Jammomu/RestaurantUser/blob/front/release/%EA%B2%B0%EC%A0%9C%EC%A4%91.png)|

<br>

### [리뷰]

- 가게의 별점을 1~5점 사이로 입력 할 수 있습니다.
- 리뷰 이미지를 업로드 할 수 있습니다.
- 실제 이용자가 리뷰를 작성할 수 있도록 예약시간 30분 후 부터 가능하도록 했습니다.

| 리뷰 작성 |
|----------|
|![reviewup](https://github.com/Jammomu/RestaurantUser/blob/front/release/%EB%A6%AC%EB%B7%B0%20%EC%9E%91%EC%84%B1.png)|

<br>

#### 2. 가게 리뷰
- 작성된 리뷰는 가게정보 리뷰탭탭에서 확인 가능합니다.
- 별점을 종합하여 별점 개수와 평균 점수를 나타냅니다.
- 이미지와 리뷰를 따로 볼 수 있습니다.

| 가게 리뷰 |
|----------|
|![shopreview](https://github.com/Jammomu/RestaurantUser/blob/front/release/%EA%B0%80%EA%B2%8C%20%EB%A6%AC%EB%B7%B0.png)|

<br>

#### 3. 좋아요와 신고
- 도움이 되는 리뷰를 좋아요 표시
    - 몇 명이 좋아요를 눌렀는지 확인 가능
- 불량한 리뷰는 신고 가능

| 좋아요 & 신고 |
|----------|
|![likeComment](https://github.com/Jammomu/RestaurantUser/blob/front/release/%EC%A2%8B%EC%95%84%EC%9A%94%20%EC%8B%A0%EA%B3%A0.png)|

<br>

<!-- ## 6. 트러블 슈팅

- 
- 

<br>

## 7. 개선 목표

- 
- 
    
- **개선 내용**

<br> -->

## 6. 프로젝트 후기

### 😎 김형준

ㅁㄴㅇㅇ

<br>

### 😎 김주성

ㅁㄴㅇㅇ

<br>

### 😎 김동현

ㅁㄴㅇㅇ

<br>

### 😎 윤지현

ㅁㄴㅇㅇ

<br>

### 😎 신향민

ㅁㄴㅇㅇ

<br>