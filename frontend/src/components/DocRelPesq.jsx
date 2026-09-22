import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImgPDF from "../img/pdf_img.png";
import {
  Title,
  DocumentGrid,
  DocumentColumn,
  DocumentCard,
  CardBody,
  PdfContainer,
  CardTitle,
  CardDate,
  ButtonContainer,
  ViewButton
} from "../styles/FileInfoForm";
import API_URL from "../constants/global";

function DocRelPesq({ id_pesq }) {
  const [docs, setDocs] = useState([]);
  const navigate = useNavigate();

  const getDocPesq = async () => {
    const token = localStorage.getItem("access");
    if (!token) {
      alert("⚠️ Você precisa estar logado");
      navigate('/login');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/rel_final_pesq/`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_pesq }),
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }

      const data = await response.json();
      setDocs(data);

      console.log(data);

    } catch (error) {
      console.error(`Erro ao buscar documentos: ${error}`);
      alert(`${error}`);
    }
  }

  useEffect(() => {
    if (id_pesq) {
      getDocPesq();
    }
  }, [id_pesq]);

  function formtNomeDoc(doc) {
    let frmt_name = doc.split("/");
    frmt_name = frmt_name.at(-1);
    return frmt_name;
  }

  function formtDate(data) {
    let frmt_data = data.split("T");
    frmt_data = frmt_data.at(0);
    return frmt_data;
  }

  return (
    <>
      {docs?.length > 0 && (
        <>
          <Title style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            ( Relatórios da pesquisa )
          </Title>
          <DocumentGrid className="row">
            {docs.map((doc, index) => (
              <DocumentColumn
                className="col-md-3 bg-light p-4"
                key={index}
              >
                <DocumentCard className="card">
                  <CardBody className="card-body">
                    <PdfContainer>
                      <img src={ImgPDF} alt="PDF" width="85" />
                    </PdfContainer>

                    <CardTitle title={doc.documento}>
                      {formtNomeDoc(doc.documento)}
                    </CardTitle>

                    <CardDate>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-calendar me-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>

                      {formtDate(doc.upado_em)}
                    </CardDate>

                    <ButtonContainer>
                      <ViewButton
                        href={doc.documento}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-eye-fill me-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>

                        Visualizar
                      </ViewButton>

                    </ButtonContainer>
                  </CardBody>
                </DocumentCard>
              </DocumentColumn>
            ))}
          </DocumentGrid>
        </>
      )}
    </>
  )
}

export default DocRelPesq;