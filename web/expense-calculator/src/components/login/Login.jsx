import useForm from "../customhooks/useForm";
import SubmitButton from "../button/Button";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import expenseCalcImage from "../../assets/images/expCalc.JPG";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [formValues, handleChange, resetForm] = useForm({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setUser({ email: formValues.email });
    navigate("/home");
  }

  return (
    <div className="login">
      <div className="img-container">
        <img src={expenseCalcImage} alt="Loading image" />
      </div>
      <div>
        <h1 className="login-title">Craft Your Financial Future</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-container">
            <label>Username</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <SubmitButton>Login</SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
