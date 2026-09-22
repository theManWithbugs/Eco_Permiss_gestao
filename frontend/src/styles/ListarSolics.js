import styled from "styled-components";

export const StatusCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 18px 10px;
  background: #fff;
  border: ${({ $ativo }) => $ativo ? '2px solid #1a3a5c' : '2px solid #dde3ec'};
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;

  // É aplicado a animação direto no styled component
  ${({ $animado }) => $animado && 'animation: flipInX 0.6s;'}
`

export const StatusLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 20px;
  color: #fff;
  background: ${({ variant }) => {
    switch (variant) {
      case 'pendente':
        return '#e09b1a';
      case 'aprovado':
        return '#2a7d4f';
      case 'indeferido':
        return '#c0392b';
      case 'encerrado':
      default:
        return '#546e7a';
    }
  }};
`

export const Header = styled.div`
  padding: 24px 0 12px;
  border-bottom: 2px solid #1a3a5c;
  margin-bottom: 24px;
`

export const Subtitle = styled.p`
  font-size: 0.90rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #1a3a5c;
  margin-bottom: 2px;
`

export const ImgMenu = styled.img`
  height: 52px;
`

// PAGINATOR
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  color: white;
`;

export const Button3D = styled.button`
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  border-width: 0;
  padding: 0 8px;
  min-width: 4em;
  min-height: 4em;
  box-sizing: border-box;
  background: transparent;
  font: inherit;
  cursor: pointer;
  margin: 10px;
  border-radius: 20px;
`;

export const ButtonTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  padding: 8px 16px;
  transform: translateY(0);
  color: #fff;
  background-image: linear-gradient(145deg, #a0a0a0, #505050);
  text-shadow: 0 -1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transition: transform 0.3s, border-radius 0.3s, background 10s;

  ${Button3D}:active & {
    border-radius: 10px 10px 8px 8px / 8px;
    transform: translateY(2px);
    background-image: linear-gradient(145deg, #505050, #a0a0a0);
  }
`;

export const ButtonBottom = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 4px;
  left: 4px;
  border-radius: 20px;
  padding-top: 6px;
  width: calc(100% - 8px);
  height: calc(100% - 10px);
  background-image: linear-gradient(145deg, #a0a0a0, #505050);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
  transition: border-radius 0.2s, padding-top 0.2s;

  ${Button3D}:active & {
    border-radius: 10px 10px 8px 8px / 8px;
    padding-top: 0;
  }
`;

export const ButtonBase = styled.div`
  position: absolute;
  z-index: 0;
  top: 4px;
  left: 0;
  border-radius: 20px;
  width: 100%;
  height: calc(100% - 4px);
  background-color: rgba(0, 0, 0, 0.15);
  box-shadow:
    0 1px 1px 0 rgba(255, 255, 255, 0.75),
    inset 0 2px 2px rgba(0, 0, 0, 0.25);
  transition: border-radius 0.2s, padding-top 0.2s;

  ${Button3D}:active & {
    border-radius: 10px 10px 8px 8px / 8px;
  }
`;

export const InfoPagina = styled.span`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

// Card de solicitações
export const CardItems = styled.div`
  border-radius: 14px;
  margin-bottom: 16px;
  padding: 20px 22px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid #e2e8f0;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08);
  transition: all 0.25s ease;
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
  }
`;
