import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import API_URL from "../constants/global";
import {
  EmptyState,
  Header,
  Kicker,
  LoadingState,
  Occupancy,
  Page,
  Spinner,
  Subtitle,
  Summary,
  Table,
  TableFrame,
  TableHead,
  TableRow,
  Title,
  UgaiName,
  UgaiType
} from "../styles/GestaoUgais";

function GestaoUgais() {
  const token = localStorage.getItem('access');
  const [objs, setObjs] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const receberDadosUgais = async () => {
    try {
      setCarregando(true);
      const response = await fetch(`${API_URL}/gestao_ugais/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if (!response.ok) {
        alert('Ocorreu um erro!');
        return;
      }

      setObjs(data.dados);
    } catch (error) {
      alert(`Ocorreu um erro! ${error}`);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    receberDadosUgais();
  }, []);

  return (
    <>
      <Navbar />
      <Page className="container">
        <Header>
          <div>
            <Kicker>Painel operacional</Kicker>
            <Title>Gestão de UGAIs</Title>
            <Subtitle>Panorama de ocupação das Unidades de Gestão Integrada.</Subtitle>
          </div>
          {!carregando && <Summary><strong>{objs.length}</strong> unidades listadas</Summary>}
        </Header>

        {carregando ? (
          <LoadingState><Spinner /> <span>Carregando dados das UGAIs...</span></LoadingState>
        ) : objs.length > 0 ? (
          <TableFrame>
            <Table>
              <TableHead>
                <tr>
                  <th>Unidade de Gestão Integrada</th>
                  <th>Vagas ocupadas</th>
                </tr>
              </TableHead>
              <tbody>
                {objs.map((item, index) => (
                  <TableRow key={`${item.nome_ugai}-${index}`}>
                    <td>
                      <UgaiName>{item.nome_ugai}</UgaiName>
                      <UgaiType>Unidade de conservação</UgaiType>
                    </td>
                    <td><Occupancy>{item.vagas_ocupadas}</Occupancy></td>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableFrame>
        ) : (
          <TableFrame><EmptyState>Nenhuma UGAI encontrada.</EmptyState></TableFrame>
        )}
      </Page>
    </>
  );
}

export default GestaoUgais;