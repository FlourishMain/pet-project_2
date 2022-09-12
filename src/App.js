import React from "react";
import "./scss/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactList from "./pages/ContactList.page";
import AddContact from "./pages/AddContact.page";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
