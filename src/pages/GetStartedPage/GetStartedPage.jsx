import "./GetStartedPage.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GetStartedPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bio, setBio] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    checkValidation();
  }, [name, username, password, confirmPassword, selectedAvatar]);

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
      alert(`Thanks ${name}! You have successfully signed up`);
      navigate("/dashboard", {
        state: {
          name,
          username,
          bio,
          selectedAvatar,
        },
      });
    }
  }

  function checkValidation() {
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    if (!confirmPassword) newErrors.confirmPassword = "Confirm your password";

    if (password && confirmPassword) {
      if (password !== confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
    }

    if (!selectedAvatar) newErrors.avatar = "Please select an avatar";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form__left">
        <div className="form__container">
          <label className="form__label">Name:</label>
          <input
            className="form__input"
            type="text"
            onChange={(event) => handleInputChange(event, setName)}
          />
          {errors.name && <p className="form__error">{errors.name}</p>}
        </div>

        <div className="form__container">
          <label className="form__label">Username:</label>
          <input
            className="form__input"
            type="text"
            onChange={(event) => handleInputChange(event, setUsername)}
          />
          {errors.username && <p className="form__error">{errors.username}</p>}
        </div>

        <div className="form__container">
          <label className="form__label">Password:</label>
          <input
            className="form__input"
            type={showPassword ? "text" : "password"}
            onChange={(event) => handleInputChange(event, setPassword)}
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
            onChange={(event) => handleInputChange(event, setBio)}
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
