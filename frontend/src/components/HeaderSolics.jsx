import * as S from "../styles/HeaderSolics";

const CONTENT = {
  PESQUISAS: {
    title: "Solicitações de pesquisa",
    text: "Aqui constam todas as solicitações de pesquisa recebidas, é possível filtrar por seu respectivo status",
    icon: (
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
      </svg>
    ),
  },
  UGAIS: {
    title: "Solicitações de UGAI",
    text: "Aqui constam todas as solicitações de hospedagem em UGAI recebidas, é possível filtrar por seu respectivo status",
    icon: (
      <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M570.24 247.41L512 202.66V56a24 24 0 0 0-24-24h-64a24 24 0 0 0-24 24v55.53L288 5.71a24.05 24.05 0 0 0-29.9 0L5.76 247.41a24 24 0 0 0-3.71 33.75l19.64 24.63a24 24 0 0 0 33.75 3.71L64 302.15V464a48 48 0 0 0 48 48h96a24 24 0 0 0 24-24V344a24 24 0 0 1 24-24h64a24 24 0 0 1 24 24v144a24 24 0 0 0 24 24h96a48 48 0 0 0 48-48V302.15l8.56 6.78a24 24 0 0 0 33.75-3.71l19.64-24.63a24 24 0 0 0-3.71-33.75z" />
      </svg>
    ),
  },
};

function HeaderSolics({ type }) {
  const content = CONTENT[type];

  if (!content) return null;

  return (
    <S.HeaderCard type={type} className="container d-flex justify-content-center">
      <S.CardWrapper>

        <S.CardIcon type={type}>
          {content.icon}
        </S.CardIcon>

        <S.CardContent>

          <S.CardTitleWrapper>
            <S.CardTitle>{content.title}</S.CardTitle>
          </S.CardTitleWrapper>

          <S.CardText>{content.text}</S.CardText>

        </S.CardContent>

      </S.CardWrapper>
    </S.HeaderCard>
  );
}

export default HeaderSolics;