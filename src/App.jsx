import Admin from "./Admin.jsx";
import User from "./User.jsx"
import Contact from "./Contact.jsx"
import Notice from "./Notice.jsx"
// 부트스트랩 임포트
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
// CSS 임포트
import './css/base.css';
import './css/layout.css';
import './css/component.css';
import './css/page.css';
import './css/response.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<User />} />
                    <Route path="/Admin" element={<Admin/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/Notice" element={<Notice/>}/>
                </Routes>
            </div>
        </BrowserRouter>

        
    );
  }

export default App;