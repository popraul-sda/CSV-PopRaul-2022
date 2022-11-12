import React, { FC, SyntheticEvent, Dispatch, SetStateAction } from "react";
import { AuthModals } from "./types";
import { UserTypes } from "./types";

const Register: FC<{setModalOpen: Dispatch<SetStateAction<AuthModals>>; }> = ({
    setModalOpen,
}) => {

    const onSubmit = async(e: SyntheticEvent) => {
        try{
            e.preventDefault;
            const target = e.target as typeof e.target & {
                [key: string]: {value: string}; 
            }
            const email = target.email.value;
            const password = target.password.value;
            const name = target.name.value;
            const phoneNumber = target.phoneNumber.value;
            const userType = target["user-type-radio"].value;
            if (password.length < 5) {
                alert('Password is too short');
            }

            setModalOpen(AuthModals.CLOSED)
        }
        catch(err){
            console.error(err);
            alert(err);
        }
    }

    return (
        <div className="modal-well">
            <div className="h-inset">
                <h2 className="title-style">Register</h2>
            </div>
            <form onSubmit={onSubmit} className="auth-form">
                <div className="d-flex">
                    <i className="fa-solid fa-envelope bg-secondary"></i>
                    <input 
                        className="style-input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address"/>    
                </div>
                <div className="d-flex">
                    <i className="fa-solid fa-envelope bg-secondary"></i>
                    <input 
                        className="style-input"
                        name="name"
                        id="name"
                        placeholder="Your name"/>
                </div>
                <div className="d-flex">
                    <i className="fa-solid fa-envelope bg-secondary"></i>
                    <input 
                        className="style-input"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Phone Number"/> 
                </div>
                <div className="d-flex">
                    <i className="fa-solid fa-envelope bg-secondary"></i>
                    <input 
                        className="style-input"
                        name="password"
                        type="password"
                        id="password"
                        placeholder="Password"/>                    
                </div>
                <span className="span-style mt-10">I want to register as:</span>
                <div className="mt-10">
                    <label className="label-style" htmlFor="client-radio">
                        <i className="fa-regular fa-circle-user bg-secondary"></i> Client
                    </label>
                    <input type="radio"
                        name="user-type-radio"
                        value={UserTypes.CLIENT}
                        />
                        <label className="label-style" htmlFor="restaurant-radio">
                        <i className="fa-regular fa-circle-user bg-secondary"></i> Restaurant
                    </label>
                    <input type="radio"
                        name="user-type-radio"
                        value={UserTypes.RESTAURANT}
                        />
                </div>
                <input className="btn-grad" type="submit" value="Register"/>
            </form>
            <div className="br"></div>
        </div>
    );
}

export default Register;