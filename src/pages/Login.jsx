import React from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../firebase';
import LoginForm from "../components/LoginForm";

const Login = () => {
  const navigate = useNavigate();


  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      navigate("/", { replace: true });
    }
  }

  return (
    <LoginForm handleSubmit={handleSubmit} />
  )
}

export default Login