import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { registerRestaurant } from './api';  // 새로운 레스토랑을 추가하는 API 함수
import AddrInput from '../../components/restaurants/AddrInput';

const AddRestaurant = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const [restaurant, setRestaurant] = useState({
    name: '',
    description: '',
    postalCode: '',
    roadAddr: '',
    jibunAddr: '',
    detailAddr: '',
    city: '',
    district: '',
    neighborhood: '',
    phone: '',
    foodType: '',
    totalSeats: '',
    parkingAvailable: false,
  });
  const [phoneError, setPhoneError] = useState(null); // 전화번호 형식 오류 상태


  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

   // 전화번호 형식 확인
  const handlePhoneChange = (e) => {
    const { value } = e.target;
    setRestaurant((prevState) => ({
      ...prevState,
      phone: value,
    }));

    // 전화번호 형식 검증 (예: 010-1234-5678)
    const phoneRegex = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;
    if (value && !phoneRegex.test(value)) {
      setPhoneError('전화번호 형식이 올바르지 않습니다. (예: 010-1234-5678)');
    } else {
      setPhoneError('');  // 올바른 형식일 경우 오류 메시지 제거
    }
  };

  const setAddressData = (addressData) => {
    setRestaurant((prevState) => ({
      ...prevState,
      ...addressData, // 주소 데이터 업데이트
    }));
    // console.log('Updated Restaurant Data:', addressData);  // 주소가 제대로 업데이트 되는지 확인

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      // 전화번호 오류가 있으면 팝업 띄우고 종료
      if (phoneError) {
        alert('전화번호를 확인해주세요.');
        return;  // 폼 제출을 중지
      }

    const isConfirmed = window.confirm('새로운 레스토랑을 추가하시겠습니까?');
    if (!isConfirmed) {
      return; // 사용자가 "아니오"를 선택하면 추가하지 않음
    }

    setLoading(true);
    setError(null);

    try {
      await registerRestaurant(restaurant); // 외부 API 함수 사용하여 레스토랑 추가
      alert('새로운 레스토랑이 추가되었습니다.');
      navigate('/admin/restaurant'); // 추가 후 마이페이지로 이동
    } catch (err) {
      setError('레스토랑 추가에 실패했습니다.');
      console.error('레스토랑 추가 실패:', err);
    } finally {
      setLoading(false); // 로딩 종료
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
      <h2>새로운 레스토랑 추가</h2>
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
         
        </Row>

        <Row className="my-3">
          <Col md={6}>
            <Form.Group controlId="phone">
              <Form.Label>전화번호</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={restaurant.phone || ''}
                onChange={handlePhoneChange} // 포맷팅된 전화번호로 처리
                required
                placeholder="예: 010-2345-1234"
              />
              {phoneError && <div className="text-danger">{phoneError}</div>} {/* 오류 메시지 표시 */}
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
                checked={restaurant.parkingAvailable}
                onChange={(e) =>
                  handleChange({
                    target: { name: 'parkingAvailable', value: e.target.checked },
                  })
                }
              />
            </Form.Group>
          </Col>
        </Row>
        <Col md={6}>
            <Form.Group controlId="address">
                <AddrInput setAddressData={setAddressData}/>
            </Form.Group>
          </Col>
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
            추가
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddRestaurant;
