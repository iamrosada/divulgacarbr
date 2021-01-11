import styled from "styled-components"


export const Container = styled.div`
  width: 100%;
  height:100%;
  display:flex;
  flex-direction:column;


  

/* quando esta no computador */
  @media(min-width:1180px){
   
    >main{
      margin:0;
      padding:0 34px;
      display:none;
      
    }
  }
`;

export const ContentHeaderMobile = styled.div`
  display:flex;
  flex-direction:column;
  background:var(--color-white);
`;