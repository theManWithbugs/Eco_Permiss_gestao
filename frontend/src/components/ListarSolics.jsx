import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import API_URL from "../constants/global";
import { toast } from 'react-toastify';

import icone_pendente from "../img/icone_pendente.png"
import icone_aprovado from "../img/icone_aprovado.png"
import icone_invalido from "../img/icone_invalidado.png"
import icone_finalizado from "../img/icone_finalizado.png"
import {
  StatusCard,
  StatusLabel,
  ButtonContainer,
  Button3D,
  ButtonTop,
  ButtonBottom,
  ButtonBase,
  InfoPagina,
  Header,
  Subtitle,
  ImgMenu,
  CardItems
} from "../styles/ListarSolics"
import * as S from '../styles/InfoPesq'

function ListarSolics({ ident }) {

  // Indetificação da pagina
  const [title, setTitle] = useState("Pendentes");

  const [statusAtual, setStatusAtual] = useState("PENDENTE");
  const [titleColor, setTitleColor] = useState("#e09b1a");
  const [paginaAtual, setPaginaAtual] = useState();
  const [totalPages, setTotalPages] = useState();
  const [dados, setDados] = useState([]);
  const [statusAnimado, setStatusAnimado] = useState(null);
  const token = localStorage.getItem("access");
  const navigate = useNavigate();

  function currentIcon(value) {
    switch (value) {
      case 1:
        setTitle("Pendentes");
        setTitleColor("#e09b1a");
        break;
      case 2:
        setTitle("Aprovados");
        setTitleColor("#2a7d4f");
        break;
      case 3:
        setTitle("Indeferidos");
        setTitleColor("#c0392b");
        break;
      case 4:
        setTitle("Encerrados");
        setTitleColor("#546e7a");
        break;
    }
  }

  const StatusBadge = ({ status }) => {
    return status === 'APROVADO' ? <S.BadgeAtivo>{ status }</S.BadgeAtivo> :
      status === 'PENDENTE' ? <S.BadgePendente>{ status }</S.BadgePendente> :
        status === 'INDEFERIDO' ? <S.BadgeInativo>{ status }</S.BadgeInativo> :
          status === 'ENCERRADO' ? <S.BadgeFinalizado>{ status }</S.BadgeFinalizado> : null;
  };

  function limparAnimacao() {
    setStatusAnimado(null);
  }

  function InfoPage(id_public) {
    if (ident === "PESQUISAS") {
      return navigate(`/page_pesq/${id_public}`)
    }

    if (ident === "UGAIS") {
      return navigate(`/inform_de_ugai/${id_public}`)
    }
  }

  function carregarPagina(numeroDaPagina) {
    const local_token = localStorage.getItem("access");
    if (!local_token) {
      toast.warning("⚠️ Você precisa estar logado");
      navigate('/login');
      return;
    }
    if (numeroDaPagina < 1) return;

    let currentURL = ''
    if (ident === 'PESQUISAS') {
      currentURL = 'pesq_solicitadas/';
    }

    if (ident === 'UGAIS') {
      currentURL = 'ugais_solics/';
    }

    fetch(`${API_URL}/${currentURL}?page=${numeroDaPagina}&status=${statusAtual}`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${local_token}`
      },
    })
      .then(response => {
        if (!response.ok) {
          window.location.reload();
        }
        return response.json();
      })
      .then(data => {
        setDados(data.objs || []);
        setPaginaAtual(data.currentPage || 1);
        setTotalPages(data.totalPages || 1);

        // Mostrar a mensagem ao usuário se existir
        if (data.message) {
          toast.info(data.message);
        }
      })
      .catch(error => {
        toast.error(`Erro ao carregar os dados: ${error.message}`);
      })
    }

  useEffect(() => {
    if (!token) {
      toast.warning("⚠️ Você precisa estar logado");
      navigate('/login');
      return;
    }
    carregarPagina(1);
  }, [statusAtual]);

  return (
    <>
      <br />
      <Header className="container">
        <Subtitle>
          <span style={{ color: 'white' }}>Solicitações:</span><span style={{ color: titleColor }}> {title}</span>
        </Subtitle>
      </Header>
      <div className="container">
          <div className="row align-items-start gap-3">

            {/* Passamos o evento "e" para a função e adicionamos o onAnimationEnd */}
            <StatusCard
              className="col"
              $ativo={statusAtual === "PENDENTE"}
              $animado={statusAnimado === "PENDENTE"}
              onClick={() => { setStatusAtual("PENDENTE"); setStatusAnimado("PENDENTE"); currentIcon(1); }}
              onAnimationEnd={limparAnimacao}
            >
              <ImgMenu src={icone_pendente} />
              <StatusLabel variant="pendente">Pendentes</StatusLabel>
            </StatusCard>

            <StatusCard
              className="col"
              $ativo={statusAtual === "APROVADO"}
              $animado={statusAnimado === "APROVADO"}
              onClick={() => { setStatusAtual("APROVADO"); setStatusAnimado("APROVADO"); currentIcon(2); }}
              onAnimationEnd={limparAnimacao}
            >
              <ImgMenu src={icone_aprovado} />
              <StatusLabel variant="aprovado">Aprovados</StatusLabel>
            </StatusCard>

            <StatusCard
              className="col"
              $ativo={statusAtual === "INDEFERIDO"}
              $animado={statusAnimado === "INDEFERIDO"}
              onClick={() => { setStatusAtual("INDEFERIDO"); setStatusAnimado("INDEFERIDO"); currentIcon(3); }}
              onAnimationEnd={limparAnimacao}
            >
              <ImgMenu src={icone_invalido} />
              <StatusLabel variant="indeferido">Indeferidos</StatusLabel>
            </StatusCard>

            <StatusCard
              className="col"
              $ativo={statusAtual === "ENCERRADO"}
              $animado={statusAnimado === "ENCERRADO"}
              onClick={() => { setStatusAtual("ENCERRADO"); setStatusAnimado("ENCERRADO"); currentIcon(4); }}
              onAnimationEnd={limparAnimacao}
            >
              <ImgMenu src={icone_finalizado} />
              <StatusLabel variant="encerrado">Encerrados</StatusLabel>
            </StatusCard>

            {ident === 'PESQUISAS' &&
              dados.map((item) => (
                <>
                  <CardItems key={item.id_public}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <h5 style={{ margin: 0, fontWeight: 700, textTransform: 'uppercase', color: '#1e293b' }}>
                        {item.acao_realizada?.length > 60
                          ? item.acao_realizada.slice(0, 60) + '...'
                          : item.acao_realizada}
                      </h5>

                      <StatusBadge status={item.status} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#475569' }}>
                      <span>
                        <strong>Solicitação:</strong> {item.acao_realizada || '—'}
                      </span>
                    </div>

                    <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'flex-end' }}>
                      <a
                        onClick={() => InfoPage(item.id_public)}
                        style={{
                          textDecoration: 'none',
                          color: '#7c3aed',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        Ver detalhes
                      </a>
                    </div>
                  </CardItems>
                </>
              ))
            }

            {ident === 'UGAIS' &&
              dados.map((item) => (
                <CardItems key={item.id_public}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <h5 style={{ margin: 0, fontWeight: 700, textTransform: 'uppercase', color: '#1e293b' }}>
                      {item.ugai}
                    </h5>

                    <StatusBadge status={item.status} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#475569' }}>
                    <span>
                      <strong>Solicitação:</strong> {item.ativ_desenv || '—'}
                    </span>
                  </div>

                  <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'flex-end' }}>
                    <a
                      onClick={() => InfoPage(item.id_public)}
                      style={{
                        textDecoration: 'none',
                        color: '#7c3aed',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Ver detalhes
                    </a>
                  </div>
                </CardItems>
              ))
            }

            <ButtonContainer>
              <Button3D
                id="btn-anterior"
                title="Página anterior"
                onClick={() => carregarPagina(paginaAtual - 1)}
              >
                <ButtonTop>
                  <span className="material-icons">❮</span>
                </ButtonTop>

                <ButtonBottom />
                <ButtonBase />
              </Button3D>

              <InfoPagina id="info-pagina">
                Página {paginaAtual} de {totalPages}
              </InfoPagina>

              <Button3D
                id="btn-proximo"
                title="Próxima página"
                onClick={() => carregarPagina(paginaAtual + 1)}
              >
                <ButtonTop>
                  <span className="material-icons">❯</span>
                </ButtonTop>

                <ButtonBottom />
                <ButtonBase />
              </Button3D>
            </ButtonContainer>
          </div>
        </div>
    </>
  );
}

export default ListarSolics;