import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/Navbar";
import ListarSolics from "../components/ListarSolics";
import HeaderSolics from "../components/HeaderSolics";

function PageSolicsUgai() {
  return (
    <>
      <Navbar />
      {/* <SolicsUgai /> */}
      <HeaderSolics type="UGAIS" />
      <ListarSolics ident="UGAIS" />
    </>
  );
}

export default PageSolicsUgai;