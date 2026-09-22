import styled from "styled-components";

const THEME = {
  PESQUISAS: {
    gradient: "linear-gradient(135deg, #0f766e 0%, #134e4a 100%)",
    iconBg: "#e6fffa",
    iconColor: "#0f766e",
  },
  UGAIS: {
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #164e63 100%)",
    iconBg: "#e0f2fe",
    iconColor: "#0c4a6e",
  },
};

const getTheme = (type) => THEME[type] || THEME.PESQUISAS;

export const HeaderCard = styled.div`
  width: 1280px;
  min-height: 100px;
  background: ${({ type }) => getTheme(type).gradient};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 20px;
  box-sizing: border-box;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  width: 100%;
`;

export const CardIcon = styled.div`
  width: 42px;
  height: 42px;
  min-width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ type }) => getTheme(type).iconBg};
  border-radius: 50%;

  svg {
    width: 22px;
    height: 22px;
    fill: ${({ type }) => getTheme(type).iconColor};
  }
`;

export const CardContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CardTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

export const CardText = styled.div`
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.5;
  color: white;
`;