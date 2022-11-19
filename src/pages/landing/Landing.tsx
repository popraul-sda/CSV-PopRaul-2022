import React, { useState } from "react";
import Navbar from "../../lib/navbar/Navbar";
import LandingImage from "../../pages/landing/LandingImage";
import Logo from "../../lib/logo/Logo";
import Register from "../../components/auth/Register";
import Modal from "../../lib/modal/Modal";
import SignIn from "../../components/auth/SignIn";
import { AuthModals } from "../../components/auth/types";

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
                <h1 className="board-header">
                    Welcome to the <br /> Reactaurant
                </h1>
            </div>
            <Logo />
            <Navbar setModalOpen={setModalOpen}/>
        </>
    );
};   

export default LandingPage;