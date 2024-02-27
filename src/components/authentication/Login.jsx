import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
  const nav = useNavigate();
  const { logIn } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignIn() {
    try {
      await logIn(email, password);
      nav("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Box className="box">
      <Box>
        <img
          style={{ objectFit: "cover" }}
          width={500}
          height={"715px"}
          src="https://s3-alpha-sig.figma.com/img/6b8f/83a8/251c3c72c8b2ac4b87c3b3b3cccd1bd0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B28FakmoPA~svXdcSHLpQcnPaO1dGV6Y1EcA-z2TGD5W6-otY2dcJxdvR2pr7052ZuH1ZpmNiYMvpZ6A7CeR4qNcyVN~D-83LA8qrooP6MG9~UGTA6ZYseObzCG4L2l7v1UTJA7XoNQ40JVYdIMNcSk3T39ekFCL2vdYxNvPKRbuoixi0qppluW0phYZUz6rUJGytx75gCnGxAV1qC2ThsHgle8j2CBivQvSfDFpFgpMAQgGj5Y5OSWH6nnwmEsj30Wzm3~-kUxGCgwnN0pU6Ri8mrFPxVDD202bYtG97ahsVq8hgHvdqgWMR7dU7e1NUqu8ITSIK~c24k65tZJaDQ__"
          alt=""
        />
      </Box>
      <Box className="box2">
        {error && <Alert severity="error">{error}</Alert>}
        <Typography
          sx={{ fontWeight: "500px", fontSize: "30px", letterSpacing: "1px" }}
        >
          Добро пожаловать
        </Typography>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: "400px" }}
          id="standard-basic"
          label="Введите свою почту"
          variant="standard"
        />
        <Box>
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            sx={{ width: "400px", position: "relative" }}
            id="standard-basic"
            label="Введите свою пароль"
            type="password"
            variant="standard"
            autoComplete="on"
          />
        </Box>
        <Button
          onClick={handleSignIn}
          sx={{
            width: "400px",
            height: "40px",
            fontWeight: "bold",
            letterSpacing: "1px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          variant="outlined"
        >
          Вход
        </Button>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "300px" }}>
            У вас нет аккаунта?
          </Typography>
          <Typography
            onClick={() => nav("/regis")}
            sx={{
              fontSize: "20px",
              fontWeight: "300px",
              color: "blue",
              cursor: "pointer",
              p: "5px 10px",
              borderRadius: "20px",
              "&:hover": {
                background: "blue",
                color: "#fff",
                transition: "0.5s",
              },
            }}
          >
            Зарегистрироваться
          </Typography>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Login;
