import styled from 'styled-components';

export const  Container = styled.div`
display:flex;

`;
export const Content = styled.div`
  background:var(--color-white);
   position:fixed;
   margin-top:53px;
   height:40px;
   width:100%;
   border-top:1px solid var(--color-border-top);
   display:flex;
   padding:0 5px;
   overflow-x: auto;
  /*Parte do scroll horizontal x */
 
 

   
  //overflow-y: hidden;



  >ul {
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    padding: 8px 16px;
     
    >li {
      display:flex;
      justify-content:center;
      align-items:center;
     
     
      
      

   
     >span{
     
     display:flex;
     justify-content:center;
     align-items:center;
     font-size:12px;
     color:var(--color-text);
     font-weight:700;   
 
   }
    

    }
  
    
    
    }
   
   
  
`;


export const IconImage  = styled.img`
  max-height:60px;
  padding-right:10px;

`;