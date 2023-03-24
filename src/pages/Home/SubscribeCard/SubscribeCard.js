import React from "react";
import bg from "../../../assets/banner/3.png";
import swal from "sweetalert";

const SubscribeCard = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.email.value === "") {
            swal({
                title: "Please fill up Subscribe fields",
                text: "Your Input fields is Empty!",
                icon: "error",
            });
        }
        else {
            swal({
                title: "Subscribe Sent Successfully!",
                text: "We will get back to you as soon as Possiable!",
                icon: "success",
            });
        }
    };
    return (
        <div className="mt-24">
            <div
                className="w-full py-36 bg-gray-500 font-montserrat bg-no-repeat"
                style={{
                    background: `url(${bg})`,
                    // backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="card lg:w-96 md:w-96 sm:w-96 w-80 bg-base-100 shadow-xl image-full">
                    <div className="card-body">
                        <h2 className="card-title">Get Our Updates</h2>
                        <p>Find out about events and other news.</p>
                        <div className="card-actions justify-start">
                            <form onSubmit={handleSubmit}
                                className="mt-3 flex flex-row flex-wrap">
                                <input
                                    type="email"
                                    name="email"
                                    className=" text-gray-600 w-2/3 p-2 pl-5 outline-none rounded-l-lg"
                                    placeholder="rana@exmaple.com"
                                />
                                <button
                                    className=" p-2 w-1/3  bg-indigo-400  rounded-r-lg  text-white hover: hover:bg-indigo-300"
                                    type="submit"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeCard;