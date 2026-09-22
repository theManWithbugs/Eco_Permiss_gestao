import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/Navbar";
import HeaderSolics from "../components/HeaderSolics";
import ListarSolics from "../components/ListarSolics";

function PageSolicsPesq() {
  return (
    <>
      <Navbar />
      <HeaderSolics type="PESQUISAS" />
      <ListarSolics ident="PESQUISAS" />
    </>
  );
}

export default PageSolicsPesq;