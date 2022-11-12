import React, { useState } from "react";
import Navbar from "../../lib/navbar/Navbar";
import LandingImage from "../../pages/landing/LandingImage";
import Logo from "../../lib/logo/Logo";
import Register from "../../components/Register";
import Modal from "../../lib/modal/Modal";
import SignIn from "../../components/SignIn";
import { AuthModals } from "../../components/types";

const LandingPage = () =>{

    const [openModal, setModalOpen] = useState(AuthModals.CLOSED);

    return (
        <>
            <LandingImage />
            <Modal
                isOpen={openModal === AuthModals.SIGNUP} 
                close={() => setModalOpen(AuthModals.CLOSED)}>
                <SignIn setModalOpen={setModalOpen}/>
            </Modal>
            <Modal
                isOpen={openModal === AuthModals.REGISTER} 
                close={() => setModalOpen(AuthModals.CLOSED)}>
                <Register setModalOpen={setModalOpen}/>
            </Modal>
            <div className="mid-board board-content">
                Welcome to the <br/> Reacturant
            </div>
            <Logo />
            <Navbar setModalOpen={setModalOpen}/>
        </>
    );
};   

export default LandingPage;