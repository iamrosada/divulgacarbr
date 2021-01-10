import styled from "styled-components"


export const Container = styled.div`
  width: 100%;
  height:100%;
  display:flex;
  

/* quando esta no computador */
  @media(min-width:1180px){
   
    >main{
      margin:0;
      padding:0 34px;
      display:none;
      
    }
  }
`;