import React from "react";
import '../css/main.css';
import '../css/signup.css';
import { useState } from "react";
import axios from "axios";

function Signup() {

  // 모든 체크박스 상태를 관리
  const [checkboxState, setCheckboxState] = useState({
    HjSignupCheckAll: false,
    HjSignupCheckAgeOlder: false,
    HjSignupCheckTermsOfService: false,
    HjSignupCheckPersonalInformation: false,
    HjSignupCheckPersonalInformationSelect: false,
    HjSignupCheckNotificationAgreed: false,
  });

  // 전체 체크박스 상태 변경
  const handleCheckAll = (e) => {
    const isChecked = e.target.checked;
    setCheckboxState({
      HjSignupCheckAll: isChecked,
      HjSignupCheckAgeOlder: isChecked,
      HjSignupCheckTermsOfService: isChecked,
      HjSignupCheckPersonalInformation: isChecked,
      HjSignupCheckPersonalInformationSelect: isChecked,
      HjSignupCheckNotificationAgreed: isChecked,
    });
  };

  // 개별 체크박스 상태 변경
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;

    const updatedState = {
      ...checkboxState,
      [id]: checked, // 변경된 체크박스의 상태만 업데이트
    };

    // 모든 체크박스가 체크되었는지 확인 (전체 동의 체크박스 상태 변경)
    const allChecked = Object.keys(updatedState)
      .filter((key) => key !== "HjSignupCheckAll") // HjSignupCheckAll 제외
      .every((key) => updatedState[key]); // 나머지 체크박스들이 모두 체크되었는지 확인

    updatedState.HjSignupCheckAll = allChecked; // 모든 체크박스가 체크되면 전체 동의 체크박스도 체크

    setCheckboxState(updatedState);
  };

  // 입력 값 상태
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    name: "",
    email: "",
    authNum: "",
    phone: "",
  });

  // 입력 값 변경 핸들러
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // 회원가입 요청
  const handleSignup = async (e) => {
    e.preventDefault();

    // 필수 체크박스 검증
    if (!checkboxState.HjSignupCheckAgeOlder || !checkboxState.HjSignupCheckTermsOfService || !checkboxState.HjSignupCheckPersonalInformation) {
      alert("필수 약관에 동의해주세요.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", {
        userName: formData.userName,
        password: formData.password,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
        window.location.href = "/login"; // 로그인 페이지로 이동
      } else {
        alert(response.data.message || "회원가입에 실패했습니다.");
      }
    } catch (error) {
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  // 인증번호 전송
  const handleSendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/auth/verify-email", {
        email: formData.email,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 && typeof response.data === "number") {
        alert("인증번호가 전송되었습니다.");
      } else {
        alert("인증번호 전송 실패");
      }
    } catch (error) {
      alert(error.response?.data?.message || "인증번호 전송 중 오류가 발생했습니다.");
    }
  };

  // 인증번호 확인
  const [authNum, setAuthNum] = useState("");

  const handleEmailCheck = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/auth/verify-emailCheck", {
        email: formData.email,
        authNum: authNum
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("인증 성공");
      } else {
        alert("인증 실패");
      }
    } catch (error) {
      alert(error.response?.data?.message || "인증 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="HjSignup">
      <div className="HjSignupContent">
        <form className="HjSignupForm" onSubmit={handleSignup}>
          <h2>회원가입</h2>
          <br />
          <div className="HjSignupLabelContainer">

            <label htmlFor="HjSignupInputId" className="HjSignupLabel">아이디:</label>
            <input
              type="text"
              id="userName"
              placeholder="아이디를 입력하세요"
              value={formData.userName}
              onChange={handleInputChange}
            />
            <br />

            <label htmlFor="HjSignupInputPassword" className="HjSignupLabel">비밀번호:</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              value={formData.password}
              onChange={handleInputChange}
            />
            <br />

            <label htmlFor="HjSignupInputName" className="HjSignupLabel">이름:</label>
            <input
              type="text"
              id="name"
              placeholder="이름을 입력하세요"
              value={formData.name}
              onChange={handleInputChange}
            />
            <br />

            <label htmlFor="HjSignupInputEmail" className="HjSignupLabel">이메일:</label>
            <input
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              value={formData.email}
              onChange={handleInputChange}
            />
            <button type="button" className="HjEmailSendBtn" onClick={handleSendEmail}>인증번호 받기</button>

            <input 
              type="text" 
              name="emailCheckNum" 
              id="HjSignupInputEmailCheckNum" 
              placeholder="인증 번호를 입력하세요" 
              value={authNum}
              onChange={(e) => setAuthNum(e.target.value)}
            />
            <button type="button" className="HjEmailCheckBtn" onClick={handleEmailCheck}>인증번호 확인</button>
            <br />

            <label htmlFor="HjSignupInputPhone" className="HjSignupLabel">휴대폰 번호:</label>
            <input
              type="text"
              id="phone"
              placeholder="예: 010-1234-5678"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <br />

            {/* 체크박스 */}
            <div className="HjSignupCheckBoxContainer">
              <div>
                <input type="checkbox" name="checkAll" id="HjSignupCheckAll" 
                checked={checkboxState.HjSignupCheckAll} 
                onChange={handleCheckAll} 
                />
                <label htmlFor="HjSignupCheckAll" className="HjSignupLabelCheckbox">전체 동의</label>
              </div>

              <div>
                <input type="checkbox" name="notificationAgreed" id="HjSignupCheckAgeOlder" 
                checked={checkboxState.HjSignupCheckAgeOlder} 
                onChange={handleCheckboxChange} 
                />
                <label htmlFor="HjSignupCheckAgeOlder" className="HjSignupLabelCheckbox">만 14세 이상입니다.</label>
              </div>
           
              <div>
                <input type="checkbox" name="notificationAgreed" id="HjSignupCheckTermsOfService" 
                checked={checkboxState.HjSignupCheckTermsOfService} 
                onChange={handleCheckboxChange} 
                />
                <label htmlFor="HjSignupCheckTermsOfService" className="HjSignupLabelCheckbox">[필수] 서비스 이용약관에 동의</label>
              </div>
            
              <div>
                <input type="checkbox" name="notificationAgreed" id="HjSignupCheckPersonalInformation" 
                checked={checkboxState.HjSignupCheckPersonalInformation} 
                onChange={handleCheckboxChange} 
                />
                <label htmlFor="HjSignupCheckPersonalInformation" className="HjSignupLabelCheckbox">[필수] 개인정보 수집 및 이용 동의</label>
              </div>
           
              <div>
                <input type="checkbox" name="notificationAgreed" id="HjSignupCheckPersonalInformationSelect" 
                checked={checkboxState.HjSignupCheckPersonalInformationSelect} 
                onChange={handleCheckboxChange} 
                />
                <label htmlFor="HjSignupCheckPersonalInformationSelect" className="HjSignupLabelCheckbox">[선택] 개인정보 수집 및 이용 동의</label>
              </div>
           
              <div>
                <input type="checkbox" name="notificationAgreed" id="HjSignupCheckNotificationAgreed" 
                checked={checkboxState.HjSignupCheckNotificationAgreed} 
                onChange={handleCheckboxChange} 
                />
                <label htmlFor="HjSignupCheckNotificationAgreed" className="HjSignupLabelCheckbox">[선택] 마케팅 정보 수신 동의</label>
              </div>
            </div>
          </div>
          <button type="submit" className="HjSignupBtn">가입하기</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;