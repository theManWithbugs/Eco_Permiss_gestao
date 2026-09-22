import { useEffect, useState } from "react";
import { API_URL, membros_pesq } from "../constants/global";
import { useNavigate } from 'react-router-dom';

import { DocumentLink, Documents, EmptyState, MemberCard, MemberCardHeader, MemberDetails, MembersList, MembersRoot } from '../styles/MembrosPesq';

const CAMPOS_ANEXO = [
  { key: 'doc_ident', label: 'Documento de identificação' },
  { key: 'doc_cpf', label: 'CPF' },
  { key: 'doc_seg_vida', label: 'Seguro de vida' },
  { key: 'doc_cart_vacin', label: 'Carteira de vacinação' },
  { key: 'licenca', label: 'Licença' },
  { key: 'outros', label: 'Outros documentos' }
];

const mediaUrl = (path) => path ? `${API_URL}${path}` : '';
function MembrosPesq({ id }) {
  const navigate   = useNavigate();
  const [membros, setMembros] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access");
    const carregar_dados = async () => {
      const dados = await membros_pesq(token, id);
      setMembros(dados);
    }
    carregar_dados();

  }, [id, navigate])

  return (
    <MembersRoot>
      {membros.length === 0 ? (
        <EmptyState>Nenhum membro cadastrado nesta pesquisa.</EmptyState>
      ) : (
        <MembersList>
          {membros.map(({ id: membroId, nome, rg, cpf, email, instituicao, anexos }) => (
            <MemberCard key={membroId}>
              <MemberCardHeader>
                <h3>{nome}</h3>
              </MemberCardHeader>

                <MemberDetails>
                <div><dt>RG</dt><dd>{rg}</dd></div>
                <div><dt>CPF</dt><dd>{cpf}</dd></div>
                <div><dt>Email</dt><dd>{email}</dd></div>
                <div><dt>Instituição</dt><dd>{instituicao}</dd></div>
              </MemberDetails>

                {anexos?.map(anexo => (
                <Documents key={anexo.id}>
                  <h4>Documentos</h4>
                    {CAMPOS_ANEXO.map(({ key, label }) => {
                      const url = mediaUrl(anexo[key]);
                      return url && (
                        <div key={key}>
                          <DocumentLink
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span aria-hidden="true">📄</span> {label}
                          </DocumentLink>
                        </div>
                      );
                    })}
                </Documents>
              ))}
            </MemberCard>
          ))}
        </MembersList>
      )}
    </MembersRoot>
  )
}

export default MembrosPesq;