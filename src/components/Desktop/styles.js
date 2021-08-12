import styled from "styled-components";

export const Container = styled.section`
  display: flex;
`;
export const DesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1299px;
  margin: 0 auto;
  padding: 0 30px;

  margin-top: 100px;

  //para nao aparecer a barra de scolagem no computador
  //.container::-webkit-scrollbar {
  // display: none;

  // }
  .container::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  .container::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
    height: 8px;
    //altura da barra de scroll
  }
  .container::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;
