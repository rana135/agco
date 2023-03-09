import React from "react";
import bg from "../../../assets/banner/3.png";

const SubscribeCard = () => {
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
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <div className="card-body">
                        <h2 className="card-title">Get Our Updates</h2>
                        <p>Find out about events and other news.</p>
                        <div className="card-actions justify-start">
                            <div className="mt-3 flex flex-row flex-wrap">
                                <input
                                    type="text"
                                    className=" text-gray-600 w-2/3 p-2 pl-5 outline-none rounded-l-lg"
                                    placeholder="rana@exmaple.com"
                                />
                                <button
                                    className=" p-2 w-1/3  bg-indigo-400  rounded-r-lg  text-white hover: hover:bg-indigo-300"
                                    type="button"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeCard;