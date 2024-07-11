import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./DashboardPage.scss";
import SpeechToTextModal from "./Modal/SpeechToTextModal";
import AslToTextModal from "./Modal/AslToTextModal/AslToTextModal";

function DashboardPage() {
    const location = useLocation();
    const { name, selectedAvatar } = location.state || {};

    const [isSpeechToTextModalOpen, setIsSpeechToTextModalOpen] = useState(false);
    const [isAslToTextModalOpen, setIsAslToTextModalOpen] = useState(false);
    const [avatarSrc, setAvatarSrc] = useState(null);

    useEffect(() => {
        if (selectedAvatar) {
            import(`../../assets/images/profilePics/${selectedAvatar}.png`)
                .then((image) => {
                    setAvatarSrc(image.default);
                })
                .catch((err) => {
                    console.error("Error loading avatar image:", err);
                });
        } 
    }, [selectedAvatar]);

    const openSpeechToTextModal = () => {
        setIsSpeechToTextModalOpen(true);
    };

    const closeSpeechToTextModal = () => {
        setIsSpeechToTextModalOpen(false);
    };

    const openAslToTextModal = () => {
        setIsAslToTextModalOpen(true);
    };

    const closeAslToTextModal = () => {
        setIsAslToTextModalOpen(false);
    };

    return (
        <section className="dashboard">
            {avatarSrc && <img src={avatarSrc} alt="avatar" className="dashboard__avatar" />}
            <p className="dashboard__title">{`Hello, ${(name && name) || "User"}!`}</p>

            <div className="dashboard__buttons">
                <button className="dashboard__buttons__button" onClick={openAslToTextModal}>
                    ASL to Text
                </button>

                <button className="dashboard__buttons__button" onClick={openSpeechToTextModal}>
                    Speech to Text
                </button>
            </div>

            <AslToTextModal isOpen={isAslToTextModalOpen} onClose={closeAslToTextModal} />
            <SpeechToTextModal isOpen={isSpeechToTextModalOpen} onClose={closeSpeechToTextModal} />
        </section>
    );
}

export default DashboardPage;
