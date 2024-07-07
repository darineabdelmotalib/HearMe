import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./DashboardPage.scss";
import dummyAvatar from "../../assets/images/profilePics/avatarFemale2.png";
import SpeechToTextModal from "./Modal/SpeechToTextModal";


function DashboardPage() {
    const location = useLocation();
    const { name, email, username, bio, selectedAvatar } = location.state || {};

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="dashboard">
            <img src={dummyAvatar} alt="avatar" className="dashboard__avatar"></img>
            <p className="dashboard__title">{`Hello, ${(name && name) || (!name && `User`)}!`}</p>

            <div className="dashboard__buttons">
                <Link to={"/dashboard/asltotext"}>
                    <button className="dashboard__buttons__button">ASL to Text</button>
                </Link>

                <button className="dashboard__buttons__button" onClick={openModal}>
                    Speech to Text
                </button>
            </div>

            <SpeechToTextModal isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
}

export default DashboardPage;
