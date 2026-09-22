export const API_URL = 'http://127.0.0.1:8000';
import { toast } from 'react-toastify';

// INFORMAÇÕES DA SOLIC
//------------------------------------------------------------
export const infoSolicitacao = async (token, id_public, tipo_solic) => {

  let URL_data = '';
  if (tipo_solic === 'PESQUISA') {
    URL_data = '/info_pesq/'
  }

  if (tipo_solic === 'UGAI') {
    URL_data = '/info_ugai/'
  }

  try {
    const response = await fetch(`${API_URL}${URL_data}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}` ,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id_public)
    });

    const data = await response.json();
    if (!response.ok) {
      return;
    }
    return data;
  } catch (error) {
    alert(`Ocorreu um erro! ${error}`);
  }
}

// ALTERAR STATUS DA SOLIC
//------------------------------------------------------------
export const atualizar_status = async (token, id_public, acao, tipo_solic, text) => {
  try {
    const response = await fetch(`${API_URL}/atualizar_status/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}` ,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id_public, acao, tipo_solic, text })
    });

    const data = await response.json();
    if (!response.ok) {
      return;
    }

    toast.success(`${data.message}`);
    return data;

  } catch (error) {
    alert(`Ocorreu um erro! ${error}`);
  }
}

// Obter dados dos membros da pesquisa
//------------------------------------------------------------
export const membros_pesq = async (token, id_public) => {
  try {
    const response = await fetch(`${API_URL}/info_membros_pesq/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}` ,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id_public })
    });

    const data = await response.json();
    if (!response.ok) {
      return;
    }

    return data;
  } catch (error) {
    alert(`Ocorreu um erro! ${error}`);
  }
}
//------------------------------------------------------------

export default API_URL;
