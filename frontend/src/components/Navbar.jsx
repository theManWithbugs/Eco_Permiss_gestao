import { useState } from 'react';
import styled from 'styled-components';
import img_sema from '../img/img_sema_ac.png';
import { Link, useLocation } from 'react-router-dom';
import { logout } from "../auth/auth"

const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 1rem;
  background-color: transparent;
  backdrop-filter: blur(50px);
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);

  /* Cria um elemento antes da Navbar que é uma linha com 3px de height */
  &::before {
    /* Define sem conteudo para evitar problemas */
    content: "";
    /* position absoluto prende ao topo */
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #009739 0%, #009739 15%, #2d89ef 45%, #ffcc00 75%, #f2c300 100%);
  }

  @media (min-width: 992px) {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1320px;
  margin-right: auto;
  margin-left: auto;
`;

// --- LOGO ---
const BrandLink = styled(Link)` display: flex; align-items: center; text-decoration: none; margin-right: 1rem; @media (max-width: 991px) { margin-right: 0.5rem; } `;
const Brand = styled.img` display: block; width: 180px; height: auto; max-height: 55px; object-fit: contain; background-color: white; border-radius: 5px; padding: 5px; transition: transform 0.2s ease, box-shadow 0.2s ease; &:hover { transform: scale(1.02); } @media (max-width: 576px) { width: 145px; } `;

// --- BOTÃO HAMBÚRGUER (MOBILE) ---
const Toggler = styled.button`
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: box-shadow 0.15s ease-in-out;

  &:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

const TogglerIcon = styled.span`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://w3.org' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
`;



// --- MENU RETRÁTIL ---
const MenuCollapse = styled.div`
  display: ${props => (props.$isOpen ? 'block' : 'none')};
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;

  @media (min-width: 992px) {
    display: flex !important;
    flex-basis: auto;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 4px;
    margin-left: auto;
  }
`;

const NavItem = styled.li`
  display: flex;
`;

// --- LINKS DO MENU ---
const NavLink = styled(Link)`
  display: block;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;

  /* Cor e fundo baseados no estado ativo/desativado */
  color: ${props => {
    if (props.$disabled) return 'rgba(0, 0, 0, 0.3)';
    if (props.$active) return '#2d89ef';
    return '#fff';
  }};

  background-color: ${props => (props.$active ? 'rgba(45, 137, 239, 0.1)' : 'transparent')};

  /* Gerencia o clique em itens desativados */
  pointer-events: ${props => (props.$disabled ? 'none' : 'auto')};
  cursor: ${props => (props.$disabled ? 'default' : 'pointer')};

  &:hover {
    color: #2d89ef;
    background-color: rgba(45, 137, 239, 0.08);
  }

  @media (min-width: 992px) {
    padding: 0.5rem 1.1rem;
  }
`;

// --- BOTÃO DE SAIR (destacado dos demais por ser uma ação destrutiva) ---
const LogoutLink = styled(NavLink)`
  color: #fff;
  background-color: gray;

  &:hover {
    color: #dc3545;
    background-color: rgba(220, 53, 69, 0.08);
  }
`;

// --- COMPONENTE FINAL ---
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  return (
    <Nav>
      <Container>
        <BrandLink to="/home"> <Brand src={img_sema} alt="SEMA Acre" /> </BrandLink>

        <Toggler type="button" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          <TogglerIcon />
        </Toggler>

        <MenuCollapse $isOpen={isOpen}>
          <NavList>
            {/* <NavItem>
              <NavLink $active={location.pathname === "/home"} to="/home">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink $active={location.pathname === "/painel"} to="#">Painel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink $active={location.pathname === "/perfil"} to="#">Perfil</NavLink>
            </NavItem> */}
            <NavItem>
              <LogoutLink
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}>Sair</LogoutLink>
            </NavItem>
          </NavList>
        </MenuCollapse>
      </Container>
    </Nav>
  );
}