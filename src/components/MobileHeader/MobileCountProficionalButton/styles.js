import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  background: blue;
  flex-direction: column;

  color: var(--color-white);
`;
export const StandPergunta = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  margin: 23px;

  font-size: 13px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: normal;
  font-style: normal;
`;
export const CountProficioalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: none;
  border: 1px solid var(--color-white);
  height: 44px;
  margin: 18px;
  padding: 0 16px;
  border-radius: 4px;
  color: var(--color-white);
  margin-top: -5px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: normal;
  font-style: normal;
  min-height: 44px;
`;
