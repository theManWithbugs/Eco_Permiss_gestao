import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { infoSolicitacao, atualizar_status } from "../constants/global";
import Swal from 'sweetalert2';
import DocRelPesq from "./DocRelPesq.jsx";
import {
  IconFolder,
  IconClipboard,
  IconFlower,
  IconFile,
  IconEye,
  IconCalendar
} from '../components/IconesProntos';
import {
  Body,
  Section,
  SectionLabel,
  Cards,
  Card,
  CardLabel,
  CardValue,
  DocsGrid,
  StatusBar,
  StatusMeta,
  FooterNote,
  IpDivider,
  ButtonAprovar,
  ButtonRecusar,
  Ip_DocCard,
  IpDocCardImg,
  IpDocCardName,
  IpDocBtn,
} from '../styles/InfoPesq.js';
import ImgPDF from '../img/pdf_img.png';
import * as S from '../styles/InfoPesq';

// Lógica feita com styled components no badge
const StatusBadge = ({ status }) => {
  return status === 'APROVADO' ? <S.BadgeAtivo>{ status }</S.BadgeAtivo> :
    status === 'PENDENTE' ? <S.BadgePendente>{ status }</S.BadgePendente> :
      status === 'INDEFERIDO' ? <S.BadgeInativo>{ status }</S.BadgeInativo> :
        status === 'ENCERRADO' ? <S.BadgeFinalizado>{ status }</S.BadgeFinalizado> : null;
};

/* ─── Card de documento PDF ──────────────────────────────── */
const DocCard = ({ href, label }) => (
  <Ip_DocCard>
    <IpDocCardImg
      src={ImgPDF}
      alt="PDF"
      width="56"
      height="56"
      style={{ width: 56, height: 56, objectFit: 'contain' }}
    />
    <IpDocCardName>{label}</IpDocCardName>

    <IpDocBtn href={href} target="_blank" rel="noreferrer">
      <IconEye /> Visualizar
    </IpDocBtn>
  </Ip_DocCard>
);

/* ─── Formatar doc_name ───────────────────────────────── */
const formatarNomeArquivo = (url) => {
  const nome = decodeURIComponent(url.split('/').pop());

  // "?" se sim
  // ":" se não

  return nome.length > 30
    ? `${nome.slice(0, 20)}...`
    : nome;
};


function InfoPesquisa({ id }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('access');
  const [obj, setObj] = useState({});

  const decidir = async (action) => {
    let text = '';

    // 1. Aguarda a decisão do usuário no SweetAlert
    if (action === 'RECUSAR') {
      const result = await Swal.fire({
        input: "textarea",
        inputLabel: "Motivo da recusa",
        inputAttributes: {
          "aria-label": "Digite aqui..."
        },
        showCancelButton: true,
        position: 'top',
        inputValidator: (value) => {
          if (!value || !value.trim()) {
            return "Informe o motivo da recusa.";
          }
        }
      });

      if (!result.isConfirmed) {
        return;
      }

      text = result.value;
    }

    if (action === 'APROVAR') {
      const result = await Swal.fire({
        title: "Tem certeza?",
        text: "Confirme apenas se tiver certeza",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
        position: 'top'
      });

      if (!result.isConfirmed) {
        return;
      }
    }

    try {
      const res = await atualizar_status(
        token,
        id,
        action,
        "PESQ",
        text
      )

      if (res) {
        setObj((objAnterior) => ({
          ...objAnterior,
          status: res.status
        }));

        if (text.action === "APROVAR") {
          toast.success(`${res.message}`)
        }

      }

    } catch (error) {
      toast.error(`${res.message}`);
    }
  };

  useEffect(() => {
    const carregar_dados = async () => {
      const dados = await infoSolicitacao(token, id, "PESQUISA");
      setObj(dados);
    }
    carregar_dados();

    if (!id) {
      return navigate('/page_pesqs');
    }
  }, [id, token])

  if (!obj) return null;

  return (
    <>
       {/*   Body   */}
        <Body>
          {/* Seção 1 — Identificação */}

          {obj.status === 'PENDENTE' &&
            <div className="mb-3">
              <ButtonAprovar onClick={() => decidir('APROVAR')}>
                Aprovar
              </ButtonAprovar>

              <ButtonRecusar onClick={() => decidir('RECUSAR')}>
                Recusar
              </ButtonRecusar>
            </div>
          }

          {obj.status === 'INDEFERIDO' &&
            <div className="alert alert-secondary" role="alert">
              <strong>Motivo da recusa:</strong> { obj.recusa_motivo }
            </div>
          }

          <Section>
            <SectionLabel>
              <IconFolder /> Identificação da Pesquisa
            </SectionLabel>
            <Cards>
              <Card
                borderColor="#4caf50"
                background="#f0f9f1"
              >
                <CardLabel>Ação(s) Realizada(s)</CardLabel>
                <CardValue>{obj.acao_realizada}</CardValue>
              </Card>
            </Cards>
          </Section>

          {/* Seção 2 — Documentação */}
          <Section>
            <SectionLabel>
              <IconClipboard /> Documentação e Autorização
            </SectionLabel>
            <Cards>
              <Card
                borderColor="#e49b3c"
                background="#f0f9f1"
              >
                <CardLabel>Fotografias da UC</CardLabel>
                <CardValue>{obj.foto}</CardValue>
              </Card>
            </Cards>
          </Section>

          {/* Seção 3 — Escopo */}
          <Section>
            <SectionLabel>
              <IconFlower /> Escopo e Impacto
            </SectionLabel>
            <Cards>
              <Card
                borderColor="#3c8de4"
                background="#f0f9f1"
              >
                <CardLabel>Retorno para a Comunidade</CardLabel>
                <CardValue>{obj.retorno_comuni}</CardValue>
              </Card>
            </Cards>
          </Section>

          <IpDivider />

          {/* Seção 4 — Documentos do solicitante */}
          <Section>
            <SectionLabel>
              <IconFile /> Documentos do Solicitante
            </SectionLabel>
            <DocsGrid>
              {obj.doc_ident    && <DocCard href={obj.doc_ident}    label={formatarNomeArquivo(obj.doc_ident)} />}
              {obj.doc_cpf      && <DocCard href={obj.doc_cpf}      label={formatarNomeArquivo(obj.doc_cpf)} />}
              {obj.doc_seg_vida && <DocCard href={obj.doc_seg_vida} label={formatarNomeArquivo(obj.doc_seg_vida)} />}
            </DocsGrid>
          </Section>

          {/* Outros documentos */}
          {obj?.outros_documentos?.length > 0 && (
            <Section>
              <SectionLabel>
                <IconFile /> Outros Documentos
              </SectionLabel>
              <DocsGrid>
                {obj.outros_documentos.map((doc) => (
                  <DocCard key={doc.id} href={doc.doc_url} label={formatarNomeArquivo(doc.doc_url)} />
                ))}
              </DocsGrid>
            </Section>
          )}

          {/* Licenças de instituição */}
          {obj?.licencas?.length > 0 && (
            <Section>
              <SectionLabel>
                <IconFile /> Licenças de Instituição
              </SectionLabel>
              <DocsGrid>
                {obj.licencas.map((doc) => (
                  <DocCard key={doc.id} href={doc.doc_url} label={formatarNomeArquivo(doc.doc_url)} />
                ))}
              </DocsGrid>
            </Section>
          )}

          {/* Documentos do relatório final de pesquisa */}
          <DocRelPesq id_pesq={id} />

          <IpDivider />

          {/* Seção 5 — Status */}
          <StatusBar>
            <StatusMeta>
              <strong>Status da Solicitação</strong>
              <span>Situação atual do processo</span>
            </StatusMeta>

            <StatusBadge status={obj.status} />
          </StatusBar>

          {/* Footer */}
          <FooterNote>
            <IconCalendar />
            Solicitação registrada em {obj.data_solicitacao}
          </FooterNote>

          </Body>
      </>
  );
}

export default InfoPesquisa;