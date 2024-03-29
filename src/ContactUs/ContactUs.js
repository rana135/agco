import React from "react";
import "./ContactUs.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import bg from "../assets/contact.webp";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const ContactUs = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.message.value === "") {
            swal({
                title: "Please fill up Message fields",
                text: "Your Input fields is Empty!",
                icon: "error",
            });
        }
        else {
            swal({
                title: "Massage Sent Successfully!",
                text: "We will get back to you as soon as Possiable!",
                icon: "success",
            });
            navigate("/");
        }
    };
    return (
        <div>
            <div
                style={{
                    background: `url(${bg})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                className="py-5 text-white"
            >
                <div className="lg:ml-28 py-10 ml-8">
                    <h1 className="font-libreBasker font-medium text-6xl">Contact Us</h1>
                    <h5 className="font-openSans font-medium text-xl py-5">
                        Home{" "}
                        <span className="font-montserrat font-light text-xl">
                            / Contact Us
                        </span>
                    </h5>
                </div>
            </div>
            <div className="hero py-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mx-5 lg:pr-20">
                        <div className="">
                            <h1 className="font-libreBasker font-light text-4xl pb-3">
                                Contact Us Now
                            </h1>
                            <p className="font-openSans font-light text-lg">
                                Please get in touch and our expert support <br />
                                team will answer all your questions.
                            </p>
                        </div>
                        <div className="py-10">
                            <p className="font-libreBasker font-light text-4xl pb-3">
                                Address
                            </p>
                            <p className="font-openSans font-light text-lg">
                                Hasnabad, South keraniganj, Dhaka - 1311
                            </p>
                        </div>
                        <div className="">
                            <p className="font-libreBasker font-light text-4xl pb-3">
                                Phone Number & Email
                            </p>
                            <p className="font-openSans font-light text-lg pb-1">
                                +1 080 684 7890
                            </p>
                            <p className="font-openSans font-light text-lg">
                                rana@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center lg:pl-20 lg:pt-0 pt-20">
                        <div className="card w-fit bg-white drop-shadow-2xl">
                            <div className="card-body">
                                <h2 className="text-center font-montserrat font-medium text-4xl">
                                    Send Me a Message!
                                </h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="label-text text-base	font-medium">
                                                Name
                                            </span>
                                        </label>
                                        <input
                                            type="name"
                                            value={user?.displayName}
                                            className="input input-bordered input-success w-full"
                                        />

                                        <label className="label">
                                            <span className="label-text text-base font-medium">
                                                Email
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            value={user?.email}
                                            placeholder="Enter Your Email"
                                            className="input input-bordered input-success w-full "
                                        />
                                        <label className="label">
                                            <span className="label-text text-base font-medium">
                                                Massage
                                            </span>
                                        </label>
                                        <textarea
                                            type="text"
                                            name="message"
                                            className="textarea textarea-success"
                                            placeholder="Enter Your Massage"
                                        ></textarea>
                                    </div>
                                    <input
                                        className="btn btn-primary hover:btn-secondary mt-8 btn-block text-white hover:text-white"
                                        type="submit"
                                        value="Send"
                                    />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;