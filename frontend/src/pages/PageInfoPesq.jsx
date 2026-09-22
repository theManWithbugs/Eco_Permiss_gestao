import { ToastContainer } from 'react-toastify';
import Navbar from "../components/Navbar.jsx";
import { useParams } from "react-router-dom";
import InfoPesquisa from "../components/InfoPesquisa";
import {
  IconLeaf,
} from '../components/IconesProntos.jsx';
import {
  Root,
  Sheet,
  Header,
  HeaderInner,
  HeaderIcon,
  HeaderContent,
  HeaderTitle,
  HeaderSub,
  LinkMenuContainer,
  LinkMenu,
  MenuButton,
  MenuButtonText,
  MenuButtonIndicator
} from '../styles/InfoPesq.js';

import { useState } from 'react';
import MembrosPesq from '../components/MembrosPesq.jsx';

function PageInfoPesquisa() {
  const [component, setComponent] = useState("main");
  const { id } = useParams();

  function switchComponent(targetComponent) {
    setComponent(targetComponent);
  }

  return (
    <>
      <Navbar />
      <ToastContainer />

      <Root>
        <Sheet>

         <Header>
          <HeaderInner>
            <HeaderIcon>
              <IconLeaf />
            </HeaderIcon>

            <HeaderContent>
              <HeaderTitle>
                Relatório de Pesquisa
              </HeaderTitle>

              <HeaderSub>
                Informações detalhadas da solicitação
              </HeaderSub>
            </HeaderContent>
            </HeaderInner>
          </Header>

          <LinkMenuContainer className="container">
            <LinkMenu>
              <MenuButton
                $active={component === "main"}
                onClick={() => switchComponent("main")}
              >
                <MenuButtonText>
                  Informações gerais
                </MenuButtonText>

                <MenuButtonIndicator />
              </MenuButton>

              <MenuButton
                $active={component === "members"}
                onClick={() => switchComponent("members")}
              >
                <MenuButtonText>
                  Membros inclusos
                </MenuButtonText>

                <MenuButtonIndicator />
              </MenuButton>
            </LinkMenu>
          </LinkMenuContainer>

          {component === "main" && <InfoPesquisa id={id} />}
          {component === "members" && <MembrosPesq id={id} />}
        </Sheet>
      </Root>

    </>
  )
}

export default PageInfoPesquisa;