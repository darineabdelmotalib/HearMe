import "./LoginPage.scss";
import aslPic from "../../assets/images/asl.png";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";


function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        checkValidation();
      }, [username, password]);


    async function handleLoginSubmit(event) {
        event.preventDefault();
        const doesUserExist = await checkUserExists();
        let name;
        let selectedAvatar;

        if (doesUserExist) {
          name = doesUserExist.name;
          selectedAvatar = doesUserExist.avatar;
        }

        if (checkValidation() && doesUserExist) {
            alert(`Thanks ${name}! You have successfully logged in.`);
            navigate("/dashboard", {
              state: {
                name: name,
                selectedAvatar,
              },
            });
        } else {
          alert(`Invalid login. Could not find a profile under ${username}, try again!`);
        }
    }

    function checkValidation() {
        const newErrors = {};
        if (!username) newErrors.username = "Username is required";
        if (!password) newErrors.password = "Password is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleInputChange(event, setState) {
        event.preventDefault();
        setState(event.target.value);
    }


    async function checkUserExists() {
      try {
        const response = await axios.get("http://localhost:8080/profile/");
        const profiles = response.data;

        const foundProfile = profiles.find((profile) => profile.username === username);

        if (foundProfile) {
          if (password === foundProfile.password) {
            return foundProfile;
          }
        } else {
          return false;
        }

      } catch (error) {
        console.log("error:", error);
      }

    }


  return (
    <section className="login">

      <div className="login__left">
        <img className="login__pic" src={aslPic}></img>
      </div>

      <form onSubmit={handleLoginSubmit} className="login-form">

        <div className="login-form__container">
          <label className="login-form__label">Username:</label>
          <input
            className="login-form__input"
            type="text"
            onChange={(event) => handleInputChange(event, setUsername)}
          />
          {errors.username && <p className="login-form__error">{errors.username}</p>}
        </div>

        <div className="login-form__container">
          <label className="login-form__label">Password:</label>
          <input
            className="login-form__input"
            type={showPassword ? "text" : "password"}
            onChange={(event) => handleInputChange(event, setPassword)}
          />
          {errors.password && <p className="login-form__error">{errors.password}</p>}
        </div>

        <button className="login-form__button">Submit</button>
      </form>
    </section>
  );
}

export default LoginPage;
