import styled from 'styled-components';

export const MembersRoot = styled.section`
  width: min(100%, 980px);
  margin: 0 auto;
  padding: 28px 20px 48px;
  color: #1f2933;
`;

export const MembersList = styled.div`
  display: grid;
  gap: 16px;
`;

export const MemberCard = styled.article`
  padding: 22px;
  border: 1px solid #dbe4e8;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(22, 50, 79, 0.08);
`;

export const MemberCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;

  h3 {
    margin: 0;
    color: #16324f;
    font-size: 1.2rem;
  }

  @media (max-width: 560px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const EditButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 36px;
  padding: 8px 12px;
  border: 1px solid #b9cbd1;
  border-radius: 7px;
  background: #f7faf9;
  color: #1f6f5b;
  font: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    border-color: #1f6f5b;
    background: #eaf4f0;
  }
`;

export const MemberDetails = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px 24px;
  margin: 0;

  div {
    min-width: 0;
  }

  dt {
    margin-bottom: 4px;
    color: #64748b;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  dd {
    overflow-wrap: anywhere;
    margin: 0;
    color: #263746;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Documents = styled.div`
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid #e5ecef;

  h4 {
    margin: 0 0 10px;
    color: #16324f;
    font-size: 0.9rem;
  }
`;

export const DocumentLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 0;
  color: #1f6f5b;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    color: #16324f;
    text-decoration: underline;
  }
`;

export const EmptyState = styled.p`
  margin: 0;
  padding: 28px;
  border: 1px dashed #b9cbd1;
  border-radius: 10px;
  color: #64748b;
  text-align: center;
`;
