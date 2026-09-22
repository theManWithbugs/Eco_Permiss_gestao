import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Page = styled.main`
  // width: min(100%, 1120px);
  margin: 0 auto;
  padding: 38px 24px 64px;
  color: #20333a;

  @media (max-width: 600px) {
    padding: 28px 16px 48px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 24px;
  padding: 10px;
  border-bottom: 3px solid #e7c45b;
  background-color: #ffffffe0;
  border-radius: 5px;
  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }
`;

export const Kicker = styled.span`
  display: block;
  margin-bottom: 8px;
  color: #23745c;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  color: #16324f;
  font-size: clamp(1.55rem, 4vw, 2.25rem);
  line-height: 1.1;
`;

export const Subtitle = styled.p`
  max-width: 560px;
  margin: 10px 0 0;
  color: #64777c;
  font-size: 0.96rem;
  line-height: 1.5;
`;

export const Summary = styled.div`
  flex: 0 0 auto;
  padding: 12px 16px;
  border-left: 3px solid #23745c;
  background: #f1f7f4;
  color: #23745c;
  font-size: 0.82rem;
  font-weight: 700;

  strong {
    display: block;
    margin-bottom: 2px;
    color: #16324f;
    font-size: 1.35rem;
    line-height: 1;
  }
`;

export const TableFrame = styled.div`
  overflow: hidden;
  border: 1px solid #d9e4e3;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(22, 50, 79, 0.08);

  @media (max-width: 600px) {
    overflow-x: auto;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
  text-align: left;
`;

export const TableHead = styled.thead`
  background: #16324f;
  color: #fff;

  th {
    padding: 15px 20px;
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  th:last-child {
    text-align: right;
  }
`;

export const TableRow = styled.tr`
  transition: background 0.18s ease;

  &:not(:last-child) {
    border-bottom: 1px solid #e5edec;
  }

  &:hover {
    background: #f5faf8;
  }

  td {
    padding: 18px 20px;
    vertical-align: middle;
  }

  td:last-child {
    text-align: right;
  }
`;

export const UgaiName = styled.div`
  color: #20333a;
  font-weight: 700;
`;

export const UgaiType = styled.span`
  display: block;
  margin-top: 4px;
  color: #7a8b8e;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Occupancy = styled.span`
  display: inline-flex;
  min-width: 48px;
  justify-content: center;
  padding: 7px 12px;
  border-radius: 6px;
  background: #e9f3ef;
  color: #176149;
  font-size: 1rem;
  font-weight: 800;
`;

export const EmptyState = styled.div`
  padding: 44px 20px;
  color: #64777c;
  text-align: center;
`;

export const LoadingState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 44px 20px;
  color: #64777c;
`;

export const Spinner = styled.span`
  width: 22px;
  height: 22px;
  border: 3px solid #d9e4e3;
  border-top-color: #23745c;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
