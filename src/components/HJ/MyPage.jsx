import {Link} from "react-router-dom";
import '../../css/main.css';
import '../../css/MyPage.css';
import '../../css/Header.css';
import { useAuthStore } from '../../store/authStore';
import { Container, Form } from 'react-bootstrap';
import { useState, useEffect } from "react";

function MyPage() {

  const name = useAuthStore((state) => state.name);
  const userRole = useAuthStore((state) => state.userRole);
  const { token, userId } = useAuthStore();
  const [recentReservations, setRecentReservations] = useState([]);
  const [myRestaurants, setMyRestaurants] = useState([]);

  // OWNER 레스토랑 목록 가져오기
  useEffect(() => {
    const fetchMyRestaurants = async () => {
      if (userRole && userRole.includes("OWNER")) {
        try {
          const response = await fetch(`http://localhost:8080/api/restaurants/my`, {
            method: "GET",
            header: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            }
          });

          if (!response.ok) {
            throw new Error(
              `레스토랑 데이터를 가져오는 중 오류 발생: ${response.statusText}`
            );
          }

          const data = await response.json();
          setMyRestaurants(data.list);
        } catch (error) {
          console.error("레스토랑 데이터를 가져오는 중 오류 발생:", error);
        }
      }
    }
  });

  // 예약 현황 가져오기
  useEffect(() => {
    const fetchRecentReservations = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/reservations?userId=${userId}&page=1&size=5`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `예약 데이터를 가져오는 중 오류 발생: ${response.statusText}`
          );
        }

        const data = await response.json();

        // 예약 시간을 기준으로 정렬 (최신 예약이 위로)
        const sortedReservations = data.list
          .sort((a, b) => {
            const reservationTimeA = new Date(a.reservationTime);
            const reservationTimeB = new Date(b.reservationTime);
            return reservationTimeB - reservationTimeA;
          })
          .slice(0, 5); // 최신 5개만 추출

        setRecentReservations(sortedReservations);
      } catch (error) {
        console.error("예약 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchRecentReservations();
  }, [token, userId]);

  return (
    <Container className="mt-4">
      <Form className="HjMyPageForm">
        <div className="HjMyPageContent">
          <h1 className='HjMypageTitle'>마이 페이지</h1>

          {/* 유저 프로필 : 사진, 이름, 프로필 수정 버튼 */}
          <div className='HjUserProfile'>
            <img src='/icon-user.png'></img>
            <h2 className='HjUserName'>{name}</h2>
            <Link className="HjEditUserProfile" to="/editUserProfile">프로필 수정</Link>
          </div>

          {/* 내 레스토랑: OWNER랑 ADMIN만 보임 */}
          {userRole && userRole.split(',').includes('OWNER') && (
            <div className="HjMyPageSection">
              <div className="HjMyPageSectionHeader">
                <p className="HjMyPageSectionTitle">내 레스토랑</p>
              </div>
              <ul className="HjMyRestaurantList">
                {myRestaurants.map((restaurant) => (
                  <li key={restaurant.id} className="HjMyRestaurantList-detail">
                    <img
                      src={restaurant.imageUrl}
                      alt={restaurant.name}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "5px",
                        marginRight: "20px",
                      }}
                    />
                    <p>{restaurant.name}</p>
                    <p>{restaurant.address}</p>
                    {/* 레스토랑 관리 페이지 링크 추가 */}
                    <Link to={`/restaurant/manage/${restaurant.id}`}>
                      관리
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 예약 현황 : 예약된 레스토랑, 예약 이력 */}
          <div className="HjMyPageSection">
            <div className="HjMyPageSectionHeader">
              <p className="HjMyPageSectionTitle">예약 현황</p>
              <Link className="HjMyPageSectionLink" to="/ReservationStatus">예약 이력{'>'}</Link>
            </div>
            <ul className="HjReservationList">
              {recentReservations.map((reservation) => (
                <li
                  key={reservation.reservationId}
                  className="HjReservationList-detail"
                >
                  <img
                    src={reservation.restaurantImage}
                    alt={reservation.restaurantName}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "5px",
                      marginRight: "20px",
                    }}
                  />
                  <p>{reservation.restaurantName}</p>
                  <p>
                    {reservation.reservationTime.split("T")[0]}{" "}
                    {reservation.reservationTime.split("T")[1].substring(0, 5)}{" "}
                    {reservation.numberOfPeople}명
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* 내 리뷰 : 내 리뷰 리스트, 내 리뷰 전체 보기 */}
          <div className="HjMyPageSection">
            <div className="HjMyPageSectionHeader">
              <p className="HjMyPageSectionTitle">내 리뷰</p>
              <Link className="HjMyPageSectionLink" to="/review/myreview">전체보기{'>'}</Link>
            </div>
            <ul className='HjMyReviewList-list'>
              <li className='HjMyReviewList-detail'>
              </li>
            </ul>
          </div>

          {/* 즐겨찾기 : 즐겨찾기 리스트, 즐겨찾기 전체보기 */}
          <div className="HjMyPageSection">
            <div className="HjMyPageSectionHeader">
              <p className="HjMyPageSectionTitle">즐겨찾기</p>
              <Link className="HjMyPageSectionLink" to="/favoritesAll">전체보기{'>'}</Link>
            </div>
            <ul className="HjFavoritesList">
              <li className="HjFavoritesList-detail"></li>
            </ul>
          </div>
        </div>
      </Form>
    </Container>
  );
}

export default MyPage;