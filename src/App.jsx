import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./components/All";
import AddUser from "./components/AddUser";
import UserCard from "./components/USerCard";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/all" element={<All />} />
          <Route path="/add" element={<AddUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
