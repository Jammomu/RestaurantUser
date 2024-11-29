import React, { useState } from 'react';
import { Button, Container, Row, Col, Form, Card } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import 'css/KDH/Reserve.css';
import * as PortOne from '@portone/browser-sdk/v2';

const Reserve = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);
  const [totalPrice, setTotalPrice] = useState(10000); // 초기 금액은 10,000원 (1명 기준)
  const [request, setRequest] = useState('');

  const reviews = [
    { id: 1, username: '엄준식', comment: '맛있었어요! 다시 방문하고 싶습니다.', rating: 5 },
    { id: 2, username: '아무무', comment: '서비스가 좋았어요.', rating: 4 },
    { id: 3, username: '니나브', comment: '위치는 조금 불편했지만 음식은 훌륭했습니다.', rating: 3 },
  ];

  const TIME_OPTIONS = [
    { value: '', label: '[서버에서 받아오기]' },
    { value: '12:00', label: '12:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '18:00', label: '6:00 PM' },
    { value: '20:00', label: '8:00 PM' },
  ];

  const handleDateChange = (newDate) => setDate(newDate);

  const tileClassName = ({ date, view }) => (view === 'month' && date.getDay() === 6 ? 'saturday' : null);

  const handlePeopleChange = (e) => {
    const numberOfPeople = parseInt(e.target.value, 10);
    setPeople(numberOfPeople);
    setTotalPrice(numberOfPeople * 10000); // 인원 수가 변경될 때마다 금액 갱신
  };

  const handleInputChange = (setter) => (event) => setter(event.target.value);

  const handleReserve = async () => {
    const restaurantName = "나중에 zustand로받아오기"
    const storeId = "store-69e65e79-61d9-4e6c-a0da-a06c6e32e37b";  // 상점 ID
    const channelKey = "channel-key-5e0eb0b0-5c03-4514-85a3-38dbc688666c";  // 채널 키
    const paymentId = `payment-${crypto.randomUUID()}`;  // 고유한 결제 ID
    const orderName = `${restaurantName}예약`;  // 주문명
    const totalAmount = totalPrice;  // 결제 금액
    const currency = "CURRENCY_KRW";  // 결제 통화 (원화)
    const payMethod = "EASY_PAY";  // 결제 수단 (카드)
  
    try {
      // 결제 요청
      const response = await PortOne.requestPayment({
        storeId,
        channelKey,
        paymentId,
        orderName,
        totalAmount,
        currency,
        payMethod,  // 결제 수단을 EASY_PAY로 변경
      });
  
      // 결제 응답 확인
      if (response.code !== undefined) {
        // 오류 발생 시, 오류 메시지를 알림으로 출력
        return alert(response.message);
      }
  
      // 결제가 성공적으로 완료되면, 결제 완료 정보를 서버에 전달
      const notified = await fetch(`http://localhost:8080/payment/complete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentId,
          orderName,
          totalAmount, // 결제 금액
          // 추가적인 주문 정보나 결제 관련 데이터를 전달할 수 있습니다
        }),
      });
  
      if (!notified.ok) {
        throw new Error('결제 완료 알림 전송에 실패했습니다.');
      }
  
      // 결제 완료 후 예약 정보 처리
      const userId = 1; // 임시 하드코딩된 사용자 ID
      const restaurantId = 123; // 임시 하드코딩된 레스토랑 ID
  
      const reservationData = {
        userId,
        restaurantId,
        reservationTime: `${date.toISOString().split('T')[0]}T${time}`,
        request,
        numberOfPeople: people,
      };
  
      // 예약 API 호출
      const reservationResponse = await fetch('http://localhost:8080/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });
  
      if (!reservationResponse.ok) {
        throw new Error(`예약 요청 중 오류가 발생했습니다: ${reservationResponse.status}`);
      }
  
      alert('예약이 완료되었습니다!');
      navigate('/ReservationStatus');
    } catch (error) {
      alert(`예약 요청 중 오류가 발생했습니다: ${error.message}`);
    }
  };
  
  

  const renderReviews = () =>
    reviews.map((review) => (
      <Card key={review.id} className="review-card">
        <Card.Body>
          <Card.Title>{review.username}</Card.Title>
          <Card.Text>{review.comment}</Card.Text>
          <Card.Text>평점: {review.rating} / 5</Card.Text>
        </Card.Body>
      </Card>
    ));

  return (
    <Container className="reserve-container">
      <Row className="restaurant-info">
        <Col>
          <div className="restaurant-details">
            <h4>[레스토랑 이름 서버에서 받아오기]</h4>
            <p><strong>레스토랑 이름:</strong> 레스토랑</p>
            <p><strong>위치:</strong> 서울시 강남구 123-45</p>
            <p><strong>전화번호:</strong> 02-1234-5678</p>
            <p><strong>영업시간:</strong> 10:00 AM - 10:00 PM</p>
          </div>
        </Col>
      </Row>

      <Row className="main-content">
        <Col md={6} className="calendar-section">
          <Calendar onChange={handleDateChange} value={date} tileClassName={tileClassName} prevLabel="<" nextLabel=">" />
        </Col>
        <Col md={6} className="reservation-details">
          <h3>예약 상세 정보</h3>
          <Form>
            <Form.Group controlId="formTime">
              <Form.Label>시간 선택</Form.Label>
              <Form.Control as="select" value={time} onChange={handleInputChange(setTime)}>
                {TIME_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formPeople">
              <Form.Label>인원 수</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={people}
                onChange={handlePeopleChange} // 인원 수가 변경될 때마다 handlePeopleChange 호출
              />
            </Form.Group>

            <Form.Group controlId="formRequest">
              <Form.Label>요청 사항</Form.Label>
              <Form.Control as="textarea" rows={3} value={request} onChange={handleInputChange(setRequest)} />
            </Form.Group>

            <div className="reservation-summary">
              <strong>총 금액: {totalPrice} 원</strong>
              <Button variant="primary" onClick={handleReserve}>
                예약하기
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

      <Row className="reviews">
        <Col className="reviews-section">
          <h3>고객 리뷰</h3>
          {renderReviews()}
        </Col>
      </Row>
    </Container>
  );
};

export default Reserve;

