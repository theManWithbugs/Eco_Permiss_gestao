import styled from "styled-components";

export const Root = styled.div`
  --ip-forest: #1a472a;
  --ip-canopy: #2e7d32;
  --ip-leaf: #4caf50;
  --ip-mist: #f0f7f1;
  --ip-fog: #e8f5e9;
  --ip-ink: #1a2e1e;
  --ip-muted: #5c7a61;
  --ip-line: #d4e8d6;
  --ip-radius: 16px;
  --ip-shadow: 0 8px 32px rgba(26, 71, 42, 0.1);
`;

export const Sheet = styled.div`
  background: #fff;
  border-radius: 24px;
  box-shadow: var(--ip-shadow);
  overflow: hidden;
  max-width: 1080px;
  margin: 0 auto;
`;

// HEADER
export const Header = styled.header`
  max-width: 1080px;
  margin: 0 auto;
  background: linear-gradient(
    135deg,
    #1a472a 0%,
    #2e7d32 60%,
    #388e3c 100%
  );
  padding: 44px 36px 40px;
  border-radius: 16px 16px 0 0;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    pointer-events: none;
  }

  &::before {
    width: 320px;
    height: 320px;
    top: -80px;
    right: -60px;
  }

  &::after {
    width: 180px;
    height: 180px;
    bottom: -60px;
    left: 15%;
  }
`;

export const HeaderInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
`;

export const HeaderIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
  flex-shrink: 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
`;

export const HeaderSub = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
`;

// BODY
export const Body = styled.div`
  max-width: 1080px;
  padding: 24px 24px 48px;
  background: #f7fbf8;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const Section = styled.section`
  background: #fff;
  border: 1px solid #e3efe3;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const SectionLabel = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  color: #1a472a;
  margin: 0 0 16px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
`;

export const Card = styled.div`
  border: 1px solid ${({ borderColor }) => borderColor || '#dcebdc'};
  background: ${({ background }) => background || '#fff'};
  border-radius: 14px;
  padding: 16px;
  min-height: 110px;
`;

export const CardLabel = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #4f6e58;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const CardValue = styled.div`
  color: #1f2e23;
  font-size: 15px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

export const DocsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
`;

export const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: #f5faf6;
  border: 1px solid #dfeee0;
  border-radius: 14px;
`;

export const StatusMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #39573f;
`;

export const FooterNote = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  color: #5f7666;
  font-size: 14px;
`;

// BADGES
export const BadgeAtivo = styled.span`
  background: #dcfce7;
  color: #166534;
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const BadgePendente = styled.span`
  background: #fef3c7;
  color: #92400e;
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const BadgeInativo = styled.span`
  background: #fee2e2;
  color: #991b1b;
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const BadgeFinalizado = styled.span`
  background: #eceff1; /* Corrigido de backrgound para background */
  color: #37474f;
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const IpDivider = styled.hr`
  border: none;
  border-top: 2px solid #d4e8d6;
  margin: 36px 0;
`;

export const ButtonAprovar = styled.button`
  background: #e8f5e9;
  border: 1px solid #72b77a;
  border-radius: 9px;
  color: #1b5e20;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  margin: 0 4px;
  min-width: 98px;
  padding: 10px 16px;
  transition: background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s;

  &:hover {
    background: #c8e6c9;
    border-color: #388e3c;
    box-shadow: 0 5px 12px rgba(27, 94, 32, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid rgba(255, 255, 255, 0.75);
    outline-offset: 2px;
  }
`;

export const ButtonRecusar = styled.button`
  background: #fff1f0;
  border: 1px solid #e57373;
  border-radius: 9px;
  color: #b71c1c;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  margin: 0 4px;
  min-width: 98px;
  padding: 10px 16px;
  transition: background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s;

  &:hover {
    background: #ffcdd2;
    border-color: #d32f2f;
    box-shadow: 0 5px 12px rgba(183, 28, 28, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid rgba(255, 255, 255, 0.75);
    outline-offset: 2px;
  }
`;

// DOCUMENTOS
export const Ip_DocCard = styled.div`
  background: #f0f7f1;
  border: 1.5px solid #d4e8d6;
  border-radius: 16px;
  padding: 20px 14px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: box-shadow .2s, border-color .2s;
`;

export const IpDocCardImg = styled.img`
  width: 60px;
  opacity: .85;
`;

export const IpDocCardName = styled.span`
  font-size: .8rem;
  font-weight: 600;
  color: #1a472a;
  text-align: center;
  line-height: 1.3;
`;

export const IpDocBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: .78rem;
  font-weight: 600;
  color: #fff;
  background: #2e7d32;
  padding: 6px 14px;
  border-radius: 8px;
  text-decoration: none;
  transition: background .2s;
`;

// ─── COMPONENTES ADICIONADOS PARA RESOLVER O ERRO DO SEU LINKMENU ───

export const LinkMenuContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 24px 0;
  border-bottom: 2px solid #e3efe3;
`;

export const LinkMenu = styled.div`
  display: flex;
  gap: 24px;
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 12px 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;
  color: ${props => props.$active ? '#1a472a' : '#5c7a61'};

  &:hover {
    color: #1a472a;
  }
`;

export const MenuButtonText = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

export const MenuButtonIndicator = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  border-radius: 3px 3px 0 0;
  background: #2e7d32;
`;
