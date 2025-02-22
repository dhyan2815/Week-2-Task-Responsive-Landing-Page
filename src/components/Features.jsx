import React, { useEffect, useState } from "react";

const Benefits = () => {
    // Countdown Timer Logic
    const [timeLeft, setTimeLeft] = useState({
        days: 10,
        hours: 14,
        minutes: 54,
        seconds: 32,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;
                if (seconds > 0) seconds--;
                else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-black p-10" id="features">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left Section */}
                <div>
                    <h2 className="text-4xl mplus mt-10 text-white font-light">
                        We Enable You{" "}
                        <span className="font-bold text-yellow-500">Proof yourself</span>{" "}
                        and{" "}
                        <span className="font-bold text-yellow-500">your Experiences!</span>
                    </h2>
                    <p className="text-white mplus text-xl mt-16">
                        Black boot, the first provider to enable you to prove your
                        experiences through Soulbound Tokens and NFTs!
                    </p>

                    {/* Public Sale container */}
                    <div className="bg-white shadow-md rounded-lg p-5 mt-16 h-70 w-140">
                        <h3 className="text-3xl mplus font-semibold text-purple-600">
                            Public Sale
                        </h3>
                        <div className="flex justify-between items-center text-xl mt-3">
                            <p className="text-gray-700 font-bold">Token Price</p>
                            <p className="text-blue-500 text-2xl font-semibold">$0.003 ≈ 0.00001 Ξ</p>
                        </div>
                        <div className="flex justify-between items-center text-xl mt-3">
                            <p className="text-gray-700 font-bold">Tokens For Sale</p>
                            <p className="text-gray-900 text-2xl font-semibold">900m Ξ</p>
                        </div>
                        <div className="mt-4 mplus">
                            <p className="text-red-600 text-2xl font-bold">Remaining Time To Buy</p>
                            <div className="flex gap-3 text-2xl font-semibold mt-6">
                                <span>{timeLeft.days}d</span>:<span>{timeLeft.hours}h</span>:
                                <span>{timeLeft.minutes}m</span>:
                                <span>{timeLeft.seconds}s</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Statistics Section */}
            <div className="mplus grid grid-cols-2 md:grid-cols-4 gap-10 text-center mt-30 mb-20">
                <div>
                    <h4 className="text-3xl font-bold text-gray-600">3K+</h4>
                    <p className="text-white">
                        CVs viewed by businesses on our platform
                    </p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-red-500">200+</h4>
                    <p className="text-white">
                        Job titles we have worked with
                    </p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-blue-600">1M+</h4>
                    <p className="text-white">Tokens traded on our platform</p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-indigo-600">100+</h4>
                    <p className="text-white">
                        Events and conferences subscribed
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;