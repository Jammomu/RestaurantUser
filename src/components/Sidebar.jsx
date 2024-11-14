import React from 'react';
import { Link } from 'react-router-dom'; // React Router를 사용하여 페이지 이동을 처리

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* 브랜드 링크 */}
      <a href="/" className="brand-link">
        <img
          src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
        />
        <span className="brand-text font-weight-light">AdminLTE</span>
      </a>

      <div className="sidebar">
        {/* 사용자 패널 */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User"
            />
          </div>
          <div className="info">
            <Link to="/" className="d-block">User Name</Link>
          </div>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* 회원 관리 */}
            <li className="nav-item">
              <Link to="/manage-users" className="nav-link">
                <i className="nav-icon fas fa-users" />
                <p>회원 관리</p>
              </Link>
            </li>
            {/* 레스토랑 관리 */}
            <li className="nav-item">
              <Link to="/manage-restaurants" className="nav-link">
                <i className="nav-icon fas fa-store" />
                <p>레스토랑 관리</p>
              </Link>
            </li>
            {/* 예약 관리 */}
            <li className="nav-item">
              <Link to="/manage-reservations" className="nav-link">
                <i className="nav-icon fas fa-calendar-check" />
                <p>예약 관리</p>
              </Link>
            </li>
            {/* 리뷰 관리 */}
            <li className="nav-item">
              <Link to="/manage-reviews" className="nav-link">
                <i className="nav-icon fas fa-comments" />
                <p>리뷰 관리</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* 추가 사이드바 메뉴 */}
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* 대시보드 */}
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>대시보드</p>
              </Link>
            </li>
            {/* 위젯 */}
            <li className="nav-item">
              <Link to="/widgets" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>위젯</p>
              </Link>
            </li>
            {/* 레이아웃 옵션 */}
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-cogs" />
                <p>
                  레이아웃 옵션
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/layout-top-nav" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>상단 네비게이션</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/layout-boxed" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>박스형</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
