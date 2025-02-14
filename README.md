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

### [프로필]

#### 1. 예약약
- 상단 프로필란에 프로필 수정과 상품 등록 버튼이 나타납니다.
- 판매중인 상품란에는 사용자가 판매하는 상품이 등록되며, 판매중인 상품이 없을 경우에는 영역 자체가 나타나지 않습니다.

| 예약 중 | 결제 중 |
|----------|----------|
|![reservation](https://github.com/Jammomu/RestaurantUser/blob/front/release/%EC%98%88%EC%95%BD%20%EC%A4%91.png)|![payment](https://github.com/Jammomu/RestaurantUser/blob/front/release/%EA%B2%B0%EC%A0%9C%EC%A4%91.png)|
|---------------------|
| 예약현황황 |
|![reservation2](https://github.com/Jammomu/RestaurantUser/blob/front/release/%EB%82%B4%20%EC%98%88%EC%95%BD%ED%98%84%ED%99%A9.png)|

<br>

#### 3. 프로필 수정
- 사용자 프로필 이미지, 이름, 아이디, 소개 중 한 가지를 수정하면 저장 버튼이 활성화됩니다.
- 계정 ID의 유효한 형식 및 중복 검사를 통과하지 못하면 하단에 경고 문구가 나타나며 저장 버튼이 비활성화됩니다.
- 사용자 이름과 소개는 공백으로 시작할 수 없습니다.
- 프로필 수정이 완료되면 내 프로필 페이지로 이동합니다.

| 초기화면 |
|----------|
|![editProfile](https://user-images.githubusercontent.com/112460466/210381212-d67fdf87-b90c-4501-a331-f2a384534941.gif)|

<br>

### [게시글]

#### 1. 게시글 작성
- 글이 입력되거나 사진이 첨부되면 업로드 버튼이 활성화됩니다.
- 최대 세 장까지 이미지 첨부가 가능하며 첨부한 파일을 취소할 수 있습니다.
- 게시글 하단에 업로드 날짜가 표시됩니다.

| 게시글 작성 |
|----------|
|![uploadPost](https://user-images.githubusercontent.com/112460466/210381758-1de5a889-f587-41d2-b200-22c20a970519.gif)|

<br>

#### 2. 게시글 수정 및 삭제
- 자신의 게시글일 경우 모달 버튼을 통해 수정, 삭제가 가능합니다.
- 게시글 삭제 버튼 클릭 시, 게시글을 삭제하고 페이지를 리렌더링하여 삭제된 내용을 페이지에 반영합니다.
- 타 유저의 게시글일 경우 모달 버튼을 통해 신고할 수 있습니다.

| 게시글 수정 & 삭제 |
|----------|
|![editDeletePost](https://user-images.githubusercontent.com/112460466/210382021-da057943-dc21-411e-a1f8-552be0e973bf.gif)|

<br>

#### 3. 좋아요와 댓글
- 좋아요와 댓글 수는 실시간으로 상세 페이지에 반영됩니다.
- 댓글이 몇 분 전에 작성되었는지 표시됩니다.
- 자신의 댓글일 경우 모달 버튼을 통해 삭제가 가능합니다.
- 타 유저의 댓글일 경우 모달 버튼을 통해 신고할 수 있습니다.

| 좋아요 & 댓글 |
|----------|
|![likeComment](https://user-images.githubusercontent.com/112460466/210382217-01d70181-91c3-43db-a1b8-409a612afb1c.gif)|

<br>

### [상품]

#### 1. 상품 등록
- 상품 이미지, 상품명, 가격, 판매 링크를 필수로 입력해야 저장 버튼이 활성화됩니다.
- 상품 가격은 숫자만 입력할 수 있으며, 숫자를 입력하면 자동으로 원 단위로 변환됩니다.
- 상품 가격이 0원일 경우 버튼이 비활성화되며 하단에 경고 문구가 나타납니다.
- 상품명과 판매 링크는 공백으로 시작할 수 없습니다.
- 상품 등록이 완료되면 내 프로필 페이지로 이동합니다.

| 상품 등록 |
|----------|
|![addProduct](https://user-images.githubusercontent.com/112460466/210386068-c6ff2e05-eb64-4abc-b6dc-93bf52b88d3f.gif)|

<br>

#### 2. 상품 수정 및 삭제
- 상품 이미지, 상품명, 가격, 판매 링크 중 한 가지를 수정하면 저장 버튼이 활성화됩니다.
- 상품 수정이 완료되면 내 프로필 페이지로 이동합니다.
- 상품 삭제 버튼 클릭 시, 상품을 삭제하고 페이지를 리렌더링하여 삭제된 내용을 페이지에 반영합니다.

| 상품 수정 & 삭제 |
|----------|
|![editDeleteProduct](https://user-images.githubusercontent.com/112460466/210386311-5fae87a7-745f-47c0-b8e3-fc41c65cb3cb.gif)|

<br>

### [채팅]
- 채팅 목록에서 아직 읽지 않은 채팅에는 좌측 상단의 파란색 알림을 띄워줍니다.
- 채팅방에서 메시지를 입력하거나 파일을 업로드하면 전송 버튼이 활성화됩니다.
- 채팅방에서 우측 상단의 채팅방 나가기 모달 버튼을 통해 채팅 목록 페이지로 이동할 수 있습니다.
- 채팅 메시지 전송 및 수신 기능은 개발 예정입니다.

| 채팅 |
|----------|
|![chat](https://user-images.githubusercontent.com/112460466/210386478-ea4877c5-1728-4872-ab50-a8408ddf6dcd.gif)|

<br>

## 8. 트러블 슈팅

- [탭메뉴 프로필 버튼 이슈](https://github.com/likelion-project-README/README/wiki/README-8.%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%ED%83%AD%EB%A9%94%EB%89%B4-%ED%94%84%EB%A1%9C%ED%95%84-%EB%B2%84%ED%8A%BC-%EC%9D%B4%EC%8A%88)

- [프로필 수정 이슈](https://github.com/likelion-project-README/README/wiki/README-8.%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%ED%94%84%EB%A1%9C%ED%95%84-%EC%88%98%EC%A0%95-%EC%9D%B4%EC%8A%88)

<br>

## 9. 개선 목표

- API 모듈화 : API를 불러오는 코드의 반복이 많아 모듈화할 예정
- lighthouse Performance 증진
    - 모든 페이지에서 특히 Best Practices & SEO 점수는 90~100으로 우수
    - Performance 점수가 대체적으로 미흡한 문제
    
    ![KakaoTalk_Photo_2023-01-04-16-55-30](https://user-images.githubusercontent.com/112460466/210591134-09bf8efd-3c34-4b99-a3d7-895ca99e1457.png)
    
- **23-01-17 성능 개선 내용**
    
    ![성능개선 후](https://user-images.githubusercontent.com/106502312/212872369-7ceeb2cf-d551-41d2-bfb0-01e35e9903fe.png)
    
    - 이미지 최적화
        - `<img>` 요소에 `width` , `height` 속성값을 명시해 불필요한 Reflow를 방지했습니다.
        - browser-image-compression 라이브러리를 사용해 유저가 업로드하는 이미지를 압축했습니다.
        - Intersection Observer API를 사용해 Lazy Loading 기법을 적용하여 홈 피드의 게시글 이미지가 viewport 내에 들어오는 순간 로딩되도록 변경했습니다.
    - 웹폰트 최적화
        - WOFF2 포맷을 추가하고 가장 우선적으로 적용되도록 선언했습니다.
        - 서브셋 폰트로 교체해 용량을 줄였습니다.
    
<br>

## 10. 프로젝트 후기

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