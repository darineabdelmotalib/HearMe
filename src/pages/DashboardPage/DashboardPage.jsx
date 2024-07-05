import { Link, useLocation } from "react-router-dom";
import "./DashboardPage.scss"
import dummyAvatar from "../../assets/images/profilePics/avatarFemale2.png"

function Dashboard() {
    const location = useLocation();
    const {name, email, username, bio, selectedAvatar} = location.state || {};

    return (
        <section className="dashboard">
            <img src={dummyAvatar} alt="avatar" className="dashboard__avatar"></img>
            <p className="dashboard__title">{`Hello, ${(name && name) || (!name && `User`)}`}</p>

            <div className="dashboard__buttons">
                <Link to={"/dashboard/asltotext"}>
                    <button className="dashboard__buttons__button">ASL to Text</button>
                </Link>

                <Link to={"/dashboard/speechtotext"}>
                    <button className="dashboard__buttons__button">Speech to Text</button>
                </Link>
            </div>

        </section>
    )
}

export default Dashboard;