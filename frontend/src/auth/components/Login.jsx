import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import API_URL from "../../constants/global";
import "bootstrap/dist/css/bootstrap.min.css"
import styled from 'styled-components';

import ImgBGLogin from "../../img/img_login_gestão.png";

const BigBox = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  max-width: 1100px;
  min-height: 600px;

  margin: 80px auto 0;

  background-image: url(${ImgBGLogin});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  box-sizing: border-box;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    min-height: 100vh;
    margin: 0;
    align-items: stretch;
    border-radius: 0;
  }
`;

const SmallBox = styled.div`
  width: 400px;
  min-height: 600px;

  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
    padding: 30px 25px;

    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 480px) {
    padding: 25px 20px;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 700;
  margin-bottom: 4px;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
  margin-bottom: 24px;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 10px 14px;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #ffc107;
    box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.35);
  }
`;

const LoginButton = styled.button`
  width: 100%;
  border-radius: 8px;
  font-weight: 600;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }
`;

const Spinner = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(0, 0, 0, 0.25);
  border-top-color: #212529;
  border-radius: 50%;
  display: inline-block;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

// Mapeia mensagens conhecidas vindas do backend (DRF / SimpleJWT) para
// mensagens amigáveis em português. Se o backend enviar algo fora dessa
// lista, o texto original (data.detail) é usado como fallback.
const traduzirErro = {
  "No active account found with the given credentials": "Usuário ou senha incorretos",
  "This account is inactive.": "Esta conta está desativada. Entre em contato com o suporte",
  "Unable to log in with provided credentials.": "Usuário ou senha incorretos",
  "User account is disabled.": "Esta conta está desativada. Entre em contato com o suporte",
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [msgInfo, setMsginfo] = useState("");
  const navigate = useNavigate();

  function getErrorMessage(status, data) {
    // Erros de campo específico (ex: {"username": ["Este campo é obrigatório."]})
    if (data?.username) {
      return "Usuário não encontrado";
    }
    if (data?.password) {
      return "Senha incorreta";
    }

    if (data?.detail) {
      return traduzirErro[data.detail] || data.detail;
    }

    switch (status) {
      case 400:
        return "Preencha usuário e senha corretamente";
      case 401:
        return "Usuário ou senha incorretos";
      case 403:
        return "Você não tem permissão para acessar esta conta";
      case 429:
        return "Muitas tentativas de login. Aguarde um momento e tente novamente";
      case 500:
        return "Erro interno no servidor. Tente novamente mais tarde";
      default:
        return "Não foi possível fazer login. Tente novamente";
    }
  }

  async function handleLogin(e) {
    e.preventDefault();

    if (!username || !password) {
      toast.warning("Preencha usuário e senha");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password }),
      });

      let data = {};
      try {
        data = await response.json();
      } catch {
        // resposta sem corpo JSON (ex: erro 500 puro)
      }

      if (!response.ok) {
        toast.error(getErrorMessage(response.status, data));
        return;
      }

      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      navigate("/home");

    } catch (err) {
      toast.warning("Erro ao conectar com o servidor!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />

      <BigBox>
        <SmallBox>
          <Title>Bem-vindo</Title>
          <Subtitle>Faça login para continuar</Subtitle>

          <form onSubmit={handleLogin} className="row">
            <StyledInput
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
            />

            <StyledInput
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              className="mt-2"
            />

            <LoginButton type="submit" className="mt-3 btn btn-warning" disabled={loading}>
              {loading && <Spinner />}
              {loading ? "Entrando..." : "Login"}
            </LoginButton>
          </form>
        </SmallBox>
      </BigBox>

    </>
  )
}

export default Login;