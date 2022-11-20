import React, { FC, SyntheticEvent, Dispatch, SetStateAction } from "react";
import { AuthModals } from "./types";
import { UserTypes } from "./types";
import './auth-styles.css';
import { useUserAuth } from "../../contexts/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const Register: FC<{ setModalOpen: Dispatch<SetStateAction<AuthModals>>; }> = ({
    setModalOpen,
}) => {

    const { signUp } = useUserAuth();


    const onSubmit = async (e: SyntheticEvent) => {
        try {
            e.preventDefault();
            const target = e.target as typeof e.target & {
                [key: string]: { value: string; };
            };
            console.log(target);
            const email = target.email.value;
            const password = target.password.value;
            const checkPassword = target.confirmPassword.value;
            const name = target["name"].value;
            const phoneNumber = target.phoneNumber.value;
            const userType = target["user-type-radio"].value;
            await signUp(email,password,phoneNumber,name,userType);
            // Custom validation
            if (password.length < 5) {
                toast.error("Password must be at least 6 characters")
            }
            if (name.length <= 7) {
                toast.error("Name should be at least 7 characters")
            }

            if (checkPassword !== password) {
                toast.error("Passwords do not match")
            }
            setModalOpen(AuthModals.CLOSED);
            toast.success("Registered successfully")
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
            return;
        }
    };
    return (
        <>
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
                            placeholder="Email address "
                            required
                        />
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-user bg-secondary"></i>
                        <input
                            className="style-input"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-phone bg-secondary"></i>
                        <input
                            className="style-input"
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-lock bg-secondary"></i>
                        <input
                            className="style-input"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-lock bg-secondary"></i>
                        <input
                            className="style-input"
                            type="password"
                            name="confirmPassword"
                            id="confirmPssword"
                            placeholder="Confirm Password"
                            required
                        />
                    </div>
                    <span className="span-style mt-10">I want to register as a:</span>
                    <div className="mt-10">
                        <input
                            type="radio"
                            name="user-type-radio"
                            value={UserTypes.CLIENT}
                            defaultChecked
                            required
                        />
                        <label className="label-style" htmlFor="client-radio">
                            <i className="fa-regular fa-circle-user bg-secondary"></i> Client
                        </label>
                        <input
                            type="radio"
                            name="user-type-radio"
                            value={UserTypes.RESTAURANT}
                            required
                        />
                        <label className="label-style" htmlFor="restaurant-radio">
                            <i className="fa-solid fa-utensils bg-secondary"></i> Restaurant
                        </label>
                    </div>
                    <input className="btn-grad" type="submit" value="Register" />
                </form>
                <div className="br"></div>
            </div>
            <ToastContainer className="toast"/>
        </>
    );
};

export default Register;