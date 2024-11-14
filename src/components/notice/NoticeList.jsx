import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NoticeList = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    if (formData.name && formData.email && formData.phone && formData.message) {
      setSuccessMessage('Form submission successful!');
      setErrorMessage('');
    } else {
      setErrorMessage('Error sending message! Please fill out all fields.');
      setSuccessMessage('');
    }
  };

  return (
    <section className="bg-light">
      <div className="c_wrap">
      {/* <!-- Location --> */}
        <div className="location">
            <ul>
                <li>Home</li>
                <li>알림마당</li>
                <li>공지사항</li>
            </ul>
        </div>
        {/* <!--// Location --> */}

        <div className="layout">
            {/* <!-- Navigation --> */}
            {/* <!--// Navigation --> */}

            <div className="contents NOTICE_LIST" id="contents">
                {/* <!-- 본문 --> */}

                <div className="top_tit">
                    <h1 className="tit_1">알림마당</h1>
                </div>

                <h2 className="tit_2">공지사항</h2>

                {/* <!-- 검색조건 --> */}
                <div className="condition">
                    <ul>
                        <li className="third_1 L">
                            <label className="f_select" htmlFor="sel1">
                                <select id="sel1" title="조건" defaultValue="" >
                                    <option value="0">제목</option>
                                    <option value="1">내용</option>
                                    <option value="2">작성자</option>
                                </select>
                            </label>
                        </li>
                        <li className="third_2 R">
                            <span className="f_search w_500">
                                <input type="text" name="" defaultValue="" placeholder="검색어를 입력하세요" />
                                <button type="button">조회</button>
                            </span>
                        </li>
                        <li>
                          <a class="btn btn_blue_h46 pd35" href="/inform/notice/create">등록</a>
                        </li>
                    </ul>
                </div>
                {/* <!--// 검색조건 --> */}

                {/* <!-- 게시판목록 --> */}
                <div className="board_list BRD002">
                    <div className="head">
                        <span>번호</span>
                        <span>제목</span>
                        <span>작성자</span>
                        <span>작성일</span>
                        <span>조회수</span>
                    </div>
                    <div class="result">
                      <a class="list_item" href="/inform/notice/detail"><div>11</div><div class="al">홈페이지 샘플공지11</div><div>관리자</div><div>2024-11-11</div><div>4</div></a>
                      <a class="list_item" href="/inform/notice/detail"><div>10</div><div class="al">홈페이지 샘플공지10</div><div>관리자</div><div>2024-11-11</div><div>0</div></a>
                      <a class="list_item" href="/inform/notice/detail"><div>9</div><div class="al">홈페이지 샘플공지9</div><div>관리자</div><div>2024-11-11</div><div>0</div></a>
                      <a class="list_item" href="/inform/notice/detail"><div>8</div><div class="al">홈페이지 샘플공지8</div><div>관리자</div><div>2024-11-11</div><div>0</div></a>
                      <a class="list_item" href="/inform/notice/detail"><div>7</div><div class="al">홈페이지 샘플공지7</div><div>관리자</div><div>2024-11-11</div><div>0</div></a>
                      <a class="list_item" href="/inform/notice/detail"><div>6</div><div class="al">홈페이지 샘플공지6</div><div>관리자</div><div>2024-11-11</div><div>4</div></a>
                      <a class="list_item" href="/inform/notice/detail"><div>5</div><div class="al">홈페이지 샘플공지5</div><div>관리자</div><div>2024-11-11</div><div>0</div></a>
                      <a class="list_item" href="/inform/notice/detail"><div>4</div><div class="al">홈페이지 샘플공지4</div><div>관리자</div><div>2024-11-11</div><div>0</div></a>
                      <a class="list_item" href="/inform/notice/detail"><div>3</div><div class="al">홈페이지 샘플공지3</div><div>관리자</div><div>2024-11-11</div><div>0</div></a>
                      <a class="list_item" href="/inform/notice/detail"><div>2</div><div class="al">홈페이지 샘플공지2</div><div>관리자</div><div>2024-11-11</div><div>0</div></a>
                    </div>
                </div>
                {/* <!--// 게시판목록 --> */}

                <div className="board_bot">
                    {/* <!-- Paging --> */}
                    <div class="board_bot"><div class="paging">
                      <ul>
                        <li><button class="cur">1</button></li>
                        &nbsp;
                        <li><button class="">2</button></li>
                      </ul>
                      </div>
                    </div>
                    {/* <!--/ Paging --> */}
                </div>

                {/* <!--// 본문 --> */}
              </div>
          </div>
      </div>
    </section>
  );
};


export default NoticeList;
