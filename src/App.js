import { Navigate, Route, Routes } from "react-router-dom";
import { Dashbord, HomePage, Login } from "./Components";
import "./app.css"
import Modal from "./Components/modal/Modal";
import { useContext } from "react";
import { ModalStatusContext } from "./context/modalContext";

function App() {
  const ctx = useContext(ModalStatusContext)

  return (
    <div className="app">
      {ctx.modalStatus && <Modal />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashbord" element={<Dashbord />} >
          <Route path=":serverId" element={<Dashbord />} >
            <Route path=":channelId" element={<Dashbord />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
