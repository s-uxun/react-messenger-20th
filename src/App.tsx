import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// 전역 스타일 설정
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";

// 페이지 임포트
import ChattingPage from "./pages/ChattingPage";
import ChattingList from "./pages/ChattingList";
import FriendList from "./pages/FriendList";

function App() {
  // 뷰포트 높이 계산
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Router>
          <Routes>
            <Route path="/friendlist" element={<FriendList />} />
            <Route path="/chatlist" element={<ChattingList />} />
            <Route path="/chatroom/:roomId" element={<ChattingPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
