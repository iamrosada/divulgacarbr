import styled from "styled-components"


export const Container = styled.div`
  //width: 100%;
  //height:100%;
  display:flex;
  flex-direction:column;
  background:var(--color-white);

  

/* quando esta no computador */
  @media(max-width:1180px){
   
    >main{
      margin:0;
      padding:0 34px;
  
      background:var(--color-white);
      
    }
  }
`;

export const Main = styled.div`
  display:none;
  
   @media(min-width:1180px){
   
   background:var(--color-white);
   display:flex;
   flex-direction:column;

  //width: 100%;
   //height:100%;
    margin-bottom:20px;
   }

`;

export const ContentHeaderMobile = styled.div`
  display:flex;
  flex-direction:column;
  background:var(--color-white);

  @media(min-width:1180px){
   display:none;
  
 }

`;