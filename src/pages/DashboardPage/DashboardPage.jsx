import { useLocation } from "react-router-dom";
import "./DashboardPage.scss"

function Dashboard() {
    const location = useLocation();
    const {name, email, username, bio, avatar} = location.state || {};

    return (
        <section className="dashboard">


        </section>
    )
}

export default Dashboard;