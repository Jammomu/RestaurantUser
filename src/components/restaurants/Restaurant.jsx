import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchRestaurantDetail, updateRestaurant } from '../../pages/restaurants/api'; // api.js에서 import
import { Button, Form, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';

const Restaurant = () => {
  const { restaurantId } = useParams(); // URL에서 restaurantId 받기
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const [restaurant, setRestaurant] = useState(null); // 레스토랑 데이터 상태

  useEffect(() => {
    const getRestaurantDetail = async () => {
      setLoading(true); // 로딩 시작
      setError(null); // 에러 초기화

      try {
        console.log('Fetching data for restaurantId:', restaurantId); // 디버깅: restaurantId 확인
        const data = await fetchRestaurantDetail(restaurantId); // API 호출
        console.log('Fetched data:', data); // API 호출 결과 확인
        setRestaurant(data); // 레스토랑 정보 상태 업데이트
      } catch (err) {
        setError('레스토랑 정보를 가져오는 데 실패했습니다.');
        console.error('Error fetching restaurant data:', err); // 에러 로그
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    if (restaurantId) {
      getRestaurantDetail(); // restaurantId가 있을 때만 API 호출
    } else {
      setLoading(false); // restaurantId가 없으면 로딩 종료
      setError('잘못된 restaurantId입니다.'); // 에러 상태 설정
    }
  }, [restaurantId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isConfirmed = window.confirm('수정하시겠습니까?');
    if (!isConfirmed) {
      return; // 사용자가 "아니오"를 선택하면 수정하지 않음
    }

    try {
      const result = await updateRestaurant(restaurantId, restaurant); // 외부 API 함수 사용
      console.log(result.message); // 성공 메시지 출력
      alert('가게 정보가 수정되었습니다.');
      navigate('/my-page'); // 수정 후 마이페이지로 이동
    } catch (error) {
      console.error('레스토랑 수정 실패:', error.message);
      alert('수정 중 문제가 발생했습니다.');
    }
  };

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status" />
      </div>
    );

  if (error)
    return (
      <Alert variant="danger">
        <h4>Error</h4>
        <p>{error}</p>
      </Alert>
    );

  return (
    <Container className="my-5">
      <h2>가게 정보 수정</h2>
      {restaurant ? (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="name">
                <Form.Label>가게 이름</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={restaurant.name || ''}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="address">
                <Form.Label>주소</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={restaurant.address || ''}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="my-3">
            <Col md={6}>
              <Form.Group controlId="phone">
                <Form.Label>전화번호</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={restaurant.phone || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="foodType">
                <Form.Label>음식 종류</Form.Label>
                <Form.Control
                  as="select"
                  name="foodType"
                  value={restaurant.foodType || ''}
                  onChange={handleChange}
                  required
                >
                  <option value="">음식 종류를 선택하세요</option>
                  <option value="한식">한식</option>
                  <option value="일식">일식</option>
                  <option value="양식">양식</option>
                  <option value="중식">중식</option>
                  <option value="디저트">디저트</option>
                  <option value="고기">고기</option>
                  <option value="비건">비건</option>
                  <option value="해산물">해산물</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row className="my-3">
            <Col md={6}>
              <Form.Group controlId="totalSeats">
                <Form.Label>좌석 수</Form.Label>
                <Form.Control
                  type="number"
                  name="totalSeats"
                  value={restaurant.totalSeats || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="parkingAvailable">
                <Form.Check
                  type="checkbox"
                  name="parkingAvailable"
                  label="주차 가능"
                  checked={restaurant.parkingAvailable || false}
                  onChange={(e) =>
                    handleChange({
                      target: { name: 'parkingAvailable', value: e.target.checked },
                    })
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="my-3">
            <Col md={12}>
              <Form.Group controlId="description">
                <Form.Label>가게 설명</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={restaurant.description || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              저장
            </Button>
          </div>
        </Form>
      ) : (
        <p>레스토랑 정보를 불러오는 중입니다.</p>
      )}
    </Container>
  );
};

export default Restaurant;
