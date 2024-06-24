import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

import Login from "./pages/Login";
import LoginModal from "./components/LoginModal";
import JobDetailModal from "./components/JobDetailModal";

function App() {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      <Routes
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="job/:id" element={<JobDetail />} /> */}
          <Route path="login" element={<Login />} />
        </Route>
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      {state ? (
        <Routes>
          <Route path="/job/:id" element={<JobDetailModal />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/job/:id" element={<LoginModal />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;