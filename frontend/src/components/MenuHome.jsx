import { useState } from "react"
import img_ugais from "../img/img_gestao_ugais.png"
import img_solics_uc from "../img/new_img_solic_pesq.png"
import img_solic_ugais from "../img/solicitacoes_ugai_copia.png"
import img_dashboard from "../img/new_img_dashboard.png"
import styled from 'styled-components';
import { Link } from "react-router-dom"

// ---------- Layout geral ----------
const MhRoot = styled.section`
  padding: 48px 0 56px;
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`

// ---------- Trilha (linha de percurso entre os módulos) ----------
const Track = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: stretch;
`

const PathRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 22px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 4%;
    right: 4%;
    top: 4px;
    height: 1px;
    background-image: linear-gradient(to right, #c7cdc4 0 6px, transparent 6px 12px);
    background-size: 12px 1px;
    background-repeat: repeat-x;
  }

  @media (max-width: 860px) {
    display: none;
  }
`

const PathItem = styled.div`
  flex: 1 1 260px;
  display: flex;
  justify-content: center;
`

const PathDot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid ${p => p.$accent};
  transform: scale(${p => (p.$active ? 1.4 : 1)});
  transition: transform 0.2s ease, background-color 0.2s ease;
  background-color: ${p => (p.$active ? p.$accent : '#fff')};
`

// ---------- Card de módulo ----------
const ModuleCard = styled(Link)`
  flex: 1 1 260px;
  min-width: 230px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid rgba(24, 36, 28, 0.1);
  border-left: 4px solid ${p => p.$accent};
  border-radius: 6px;
  padding: 22px 22px 20px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-3px);
    box-shadow: 0 14px 28px -20px ${p => p.$accent};
  }

  &:focus-visible {
    outline: 2px solid ${p => p.$accent};
    outline-offset: 3px;
  }
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
`

const Emblem = styled.div`
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 2px solid ${p => p.$accent};
  background: ${p => p.$accent}14;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 68%;
    height: 68%;
    object-fit: contain;
  }
`

const Title = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 18px;
  font-weight: 700;
  color: #1f2b22;
  margin: 0;
  line-height: 1.3;
`

const Body = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  line-height: 1.65;
  color: #5b6b60;
  margin: 0 0 18px;
  flex: 1;
`

const Access = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: ${p => p.$accent};
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 3px;
  transition: text-decoration-color 0.2s ease;

  ${ModuleCard}:hover &,
  ${ModuleCard}:focus-visible & {
    text-decoration-color: ${p => p.$accent};
  }
`

function LinkMenu() {
  const [hovered, setHovered] = useState(null)

  const accents = {
    ugais: "#1f4959",
    pesquisa: "#2f7d6b",
    solicUgai: "#3a7089",
    dashboard: "#b8863b",
  }

  return (
    <MhRoot>
      <Inner>
        <Track>
          <ModuleCard
            to="/gestao_ugais"
            $accent={accents.ugais}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(0)}
            onBlur={() => setHovered(null)}
          >
            <TitleRow>
              <Emblem $accent={accents.ugais}>
                <img src={img_ugais} alt="" />
              </Emblem>
              <Title>Gestão de Ugais</Title>
            </TitleRow>
            <Body>Gestão das Ugais registradas, informações quanto ao número de vagas e ocupações.</Body>
            <Access $accent={accents.ugais}>Acessar módulo</Access>
          </ModuleCard>

          <ModuleCard
            to="/page_pesqs"
            $accent={accents.pesquisa}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(1)}
            onBlur={() => setHovered(null)}
          >
            <TitleRow>
              <Emblem $accent={accents.pesquisa}>
                <img src={img_solics_uc} alt="" />
              </Emblem>
              <Title>Solicitações de Pesquisa</Title>
            </TitleRow>
            <Body>Solicitações de pesquisas em unidade de conservação classificadas por status.</Body>
            <Access $accent={accents.pesquisa}>Acessar módulo</Access>
          </ModuleCard>

          <ModuleCard
            to="/page_ugai"
            $accent={accents.solicUgai}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(2)}
            onBlur={() => setHovered(null)}
          >
            <TitleRow>
              <Emblem $accent={accents.solicUgai}>
                <img src={img_solic_ugais} alt="" />
              </Emblem>
              <Title>Solicitações de UGAI</Title>
            </TitleRow>
            <Body>Solicitações para locação em ugai recebidas até o momento, organizado por status.</Body>
            <Access $accent={accents.solicUgai}>Acessar módulo</Access>
          </ModuleCard>

          <ModuleCard
            to="#"
            $accent={accents.dashboard}
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(3)}
            onBlur={() => setHovered(null)}
          >
            <TitleRow>
              <Emblem $accent={accents.dashboard}>
                <img src={img_dashboard} alt="" />
              </Emblem>
              <Title>Dashboard</Title>
            </TitleRow>
            <Body>Geração de gráficos quanto às solicitações de ugai recebidas, análise de dados.</Body>
            <Access $accent={accents.dashboard}>Acessar módulo</Access>
          </ModuleCard>
        </Track>

        <PathRow>
          <PathItem><PathDot $accent={accents.ugais} $active={hovered === 0} /></PathItem>
          <PathItem><PathDot $accent={accents.pesquisa} $active={hovered === 1} /></PathItem>
          <PathItem><PathDot $accent={accents.solicUgai} $active={hovered === 2} /></PathItem>
          <PathItem><PathDot $accent={accents.dashboard} $active={hovered === 3} /></PathItem>
        </PathRow>
      </Inner>
    </MhRoot>
  )
}

export default LinkMenu;