import "./GetStartedPage.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function GetStartedPage() {
  const [givenName, setGivenName] = useState("");
  const [givenUsername, setGivenUsername] = useState("");
  const [givenPassword, setGivenPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [givenBio, setGivenBio] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    checkValidation();
  }, [givenName, givenUsername, givenPassword, confirmPassword, selectedAvatar]);

  function handleAvatarButton(event, buttonNumber) {
    event.preventDefault();
    setSelectedAvatar(buttonNumber);
  }

  function handleInputChange(event, setState) {
    event.preventDefault();
    setState(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (checkValidation()) {
      alert(`Thanks ${givenName}! You have successfully signed up`);
      addProfileToDataBase();
      navigate("/dashboard", {
        state: {
          name: givenName,
          selectedAvatar,
        },
      });
    }
  }

  function checkValidation() {
    const newErrors = {};

    if (!givenName) newErrors.name = "Name is required";
    if (!givenUsername) newErrors.username = "Username is required";
    if (!givenPassword) newErrors.password = "Password is required";
    if (!confirmPassword) newErrors.confirmPassword = "Confirm your password";

    if (givenPassword && confirmPassword) {
      if (givenPassword !== confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
    }

    if (!selectedAvatar) newErrors.avatar = "Please select an avatar";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }


  async function addProfileToDataBase() {
    const newProfile = {
      name: givenName,
      username: givenUsername,
      password: givenPassword,
      bio: givenBio,
      avatar: selectedAvatar
    }

    try {
      const response = await axios.post("http://localhost:8080/profile", newProfile);
      console.log(response);

    } catch (error) {
      console.log("Could not add new warehouse:", error)
    }

  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form__left">
        <div className="form__container">
          <label className="form__label">Name:</label>
          <input
            className="form__input"
            type="text"
            onChange={(event) => handleInputChange(event, setGivenName)}
          />
          {errors.name && <p className="form__error">{errors.name}</p>}
        </div>

        <div className="form__container">
          <label className="form__label">Username:</label>
          <input
            className="form__input"
            type="text"
            onChange={(event) => handleInputChange(event, setGivenUsername)}
          />
          {errors.username && <p className="form__error">{errors.username}</p>}
        </div>

        <div className="form__container">
          <label className="form__label">Password:</label>
          <input
            className="form__input"
            type={showPassword ? "text" : "password"}
            onChange={(event) => handleInputChange(event, setGivenPassword)}
          />
          {errors.password && <p className="form__error">{errors.password}</p>}
        </div>

        <div className="form__container">
          <label className="form__label">Confirm Password:</label>
          <input
            className="form__input"
            type={showPassword ? "text" : "password"}
            onChange={(event) => handleInputChange(event, setConfirmPassword)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="form__showPass"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          {errors.confirmPassword && (
            <p className="form__error">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="form__container">
          <label className="form__label">Bio:</label>
          <textarea
            className="form__input form__input--text"
            type="text"
            onChange={(event) => handleInputChange(event, setGivenBio)}
          ></textarea>
        </div>
      </div>

      <div className="form__container form__container--avatar">
        <label className="form__label form__label--avatar">
          Pick an avatar:
        </label>

        <div className="avatar">
          <div className="avatar__container">
            <button
              className={`avatar__button avatar__button--1 ${
                selectedAvatar === "avatarFemale1"
                  ? "avatar__button--selected"
                  : ""
              }`}
              onClick={(event) => handleAvatarButton(event, "avatarFemale1")}
            ></button>
            <button
              className={`avatar__button avatar__button--2 ${
                selectedAvatar === "avatarFemale2"
                  ? "avatar__button--selected"
                  : ""
              }`}
              onClick={(event) => handleAvatarButton(event, "avatarFemale2")}
            ></button>
            <button
              className={`avatar__button avatar__button--3 ${
                selectedAvatar === "avatarFemale3"
                  ? "avatar__button--selected"
                  : ""
              }`}
              onClick={(event) => handleAvatarButton(event, "avatarFemale3")}
            ></button>
          </div>

          <div className="avatar__container">
            <button
              className={`avatar__button avatar__button--4 ${
                selectedAvatar === "avatarMale2"
                  ? "avatar__button--selected"
                  : ""
              }`}
              onClick={(event) => handleAvatarButton(event, "avatarMale2")}
            ></button>
            <button
              className={`avatar__button avatar__button--5 ${
                selectedAvatar === "avatarMale3"
                  ? "avatar__button--selected"
                  : ""
              }`}
              onClick={(event) => handleAvatarButton(event, "avatarMale3")}
            ></button>
            <button
              className={`avatar__button avatar__button--6 ${
                selectedAvatar === "avatarMale1"
                  ? "avatar__button--selected"
                  : ""
              }`}
              onClick={(event) => handleAvatarButton(event, "avatarMale1")}
            ></button>
          </div>
          {errors.avatar && <p className="form__error">{errors.avatar}</p>}
        </div>

        <button className="form__container__button">Submit</button>
      </div>
    </form>
  );
}

export default GetStartedPage;
