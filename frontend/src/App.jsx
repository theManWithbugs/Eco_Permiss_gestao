import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard";
import PageLogin from "./auth/Pages/PageLogin";
import PrivateRoute from "./components/PrivateRoute";
import PageSolicsPesq from "./pages/PageSolicsPesq";
import PageSolicsUgai from './pages/PageSolicsUgai';
import InfoPesquisa from "./components/InfoPesquisa";
import InfoUgai from "./components/InfoUgai";
import GestaoUgais from "./pages/GestaoUgais";
import PageInfoPesquisa from "./pages/PageInfoPesq";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas de auteticação */}
        {/* ----------------- */}
        <Route path="/login" element={<PageLogin />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Pages of each element */}
          <Route
            path="/page_pesqs"
            element={
              <PrivateRoute>
                <PageSolicsPesq />
              </PrivateRoute>
            }
          />

          <Route
            path="/page_ugai"
            element={
              <PrivateRoute>
                <PageSolicsUgai />
              </PrivateRoute>
            }
          />


        {/* infoPesq page */}
            <Route
              path="/page_pesq/:id"
              element={
                <PrivateRoute>
                  <PageInfoPesquisa />
                </PrivateRoute>
              }
            >

            </Route>

        {/* The components */}
          <Route
            path="/inform_de_pesq/"
            element={
              <PrivateRoute>
                <InfoPesquisa />
              </PrivateRoute>
            }
          />

          <Route
            path="/inform_de_ugai/:id"
            element={
              <PrivateRoute>
                <InfoUgai />
              </PrivateRoute>
            }
          />

          <Route
            path="/gestao_ugais"
            element={
              <PrivateRoute>
                <GestaoUgais />
              </PrivateRoute>
            }
          />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
