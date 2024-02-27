import {
  Alert,
  Box,
  Button,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import GoogleIcon from "@mui/icons-material/Google";

const Register = () => {
  const { register, signInWithGoogle } = useAuthContext();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    try {
      await register(email, password);
      nav("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Box className="main_register">
      <Box className="block">
        {error && <Alert severity="error">{error}</Alert>}
        <Typography
          sx={{ fontWeight: "500px", fontSize: "30px", letterSpacing: "1px" }}
        >
          Регистрация
        </Typography>
        <TextField
          sx={{ width: "400px" }}
          id="standard-basic"
          label="Введите свое имя"
          variant="standard"
        />
        <TextField
          sx={{ width: "400px" }}
          id="standard-basic"
          label="Введите свое фамилие"
          variant="standard"
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: "400px" }}
          id="standard-basic"
          label="Введите свою почту"
          variant="standard"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          sx={{ width: "400px" }}
          id="standard-basic"
          label="Введите свою пароль"
          variant="standard"
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Checkbox sx={{ m: 0, p: "0 10px 0 0" }} {...label} />
          <Typography>Согласен с Условиями</Typography>
        </Box>
        <Button
          onClick={handleSubmit}
          sx={{
            width: "400px",
            height: "40px",
            fontWeight: "bold",
            letterSpacing: "1px",
            fontSize: "16px",
          }}
          variant="outlined"
        >
          Зарегистрироваться
        </Button>
        <Button
          onClick={() => signInWithGoogle()}
          sx={{
            position: "relative",
            width: "200px",
            fontSize: "16px",
            fontWeight: "bold",
            padding: "10px 20px 10px 20px",
          }}
          variant="outlined"
        >
          <GoogleIcon sx={{ m: "0 20px 0 0" }} />
          Google
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
