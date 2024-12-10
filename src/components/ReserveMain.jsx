import React from 'react';
import { useNavigate,Link } from 'react-router-dom';  // useNavigate 훅 추가
import '../css/ReserveMain.css';

function ReserveMain() {
  // useNavigate 훅을 사용하여 네비게이션 함수 생성
  const navigate = useNavigate();

  // 예약 버튼 클릭 시 호출되는 함수
  const handleReservationClick = () => {
    navigate('/reserve');  // '/reserve' 경로로 이동
  };

  return (
    <div className="main">
      <div className="restaurant-page">
        {/* 상단: 식당 이름, 설명, 별점 */}
        <header className="restaurant-header">
          {/* 배경 이미지 등 */}
        </header>

        {/* 중간: 매장 소개, 주소, 영업시간, 메뉴 */}
        <section className="restaurant-info">
          <h1 className="restaurant-title">레슐렝 코리아</h1>
          <p className="restaurant-description">한줄평[레스토랑 정보 페이지에서 받아와서 동적으로 처리]</p>
          <div className="rating">
            <span>★★★★☆</span> {/* 별점 표시 */}
          </div>

          {/* 주소와 영업시간, 지도 배치 */}
          <div className="info-container">
            <div className="left-info">
              <h2>매장소개</h2>
              <p>[레스토랑 정보 페이지에서 받아와서 동적으로 처리]</p>

              <div className="address">
                <h3>주소</h3>
                <p>[레스토랑 데이터 서버에서 받아와서 처리]</p>
              </div>

              <div className="business-hours">
                <h3>영업시간</h3>
                <p>[레스토랑 정보 페이지에서 받아와서 동적으로 처리]</p>
                <p>[레스토랑 정보 페이지에서 받아와서 동적으로 처리]</p>
              </div>

              <div className="menu">
                <h3>메뉴</h3>
                <ul>
                  <li>[레스토랑 데이터 서버에서 받아와서 처리]</li>
                  <li>[레스토랑 데이터 서버에서 받아와서 처리]</li>
                  <li>[레스토랑 데이터 서버에서 받아와서 처리]</li>
                </ul>
              </div>
            </div>

            {/* 오른쪽에 지도 */}
            <div className="google-map">
              <h3>지도</h3>
              <div className="map-placeholder">
                {/* 임시로 구글 맵 영역을 대체하는 박스 */}
                <p>.</p>
                <div style={{ width: '100%', height: '400px', backgroundColor: '#e0e0e0', textAlign: 'center', lineHeight: '400px' }}>
                  <span>추후 지도 API로 구현.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 하단: 리뷰 구역 */}
        <section className="reviews">
          <h2>Reviews</h2>
          <Link to="/review/shopreview"><span>전체보기</span></Link>
          <div className="review">
            <p>리뷰 페이지에서 받아온 리뷰 클릭시 리뷰 페이지로</p>
            <span>- 작성자</span>
          </div>
        </section>

        {/* 예약 날짜 선택 */}
        <section className="reservation">
          <h2>Make a Reservation</h2>

          {/* 예약 버튼 클릭 시 handleReservationClick 함수 호출 */}
          <button className="reserve-btn" onClick={handleReservationClick}>
            예약하기
          </button>
        </section>
      </div>
    </div>
  );
}

export default ReserveMain;
