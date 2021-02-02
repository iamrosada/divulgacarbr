import styled from 'styled-components';

export const Container = styled.div`
   display:flex;
  background:var(--color-white);
  //margin-top:-19px;
  //margin-top:200px;
  flex-direction:column;
  max-width: 1299px;
  //margin: 0 auto;
  padding: 20px;
  
 // height:100%;
  box-shadow: 0 8px 20px 0 rgba(20,35,85,0.1);
  border-radius:4px;
  margin-bottom:30px;
`;
export const PrecodosMecanicos = styled.span`
 display:flex;
  justify-content:center;
  align-items:center;
  line-height: 1;
  text-align: center;
  font-weight: 700;
  font-family: "Open Sans",HelveticaNeueThin,HelveticaNeue-Thin,"Helvetica Neue Thin","Open Sans","Helvetica Neue",HelveticaNeue,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",rouble;
  font-size: 50px;
  margin-bottom:20px;
`;
export const PrecoApagarMecanicos = styled.table`
 width:100%;
 display:flex;
 justify-content:space-between;
 margin-top:10px;
 >tr.table_de_preco{
   display:flex;
   flex-direction:column;
   >td{
     margin:18px;
     font-size:20px;
     line-height:1.25;
     font-family: "Open Sans","Helvetica Neue",HelveticaNeue,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",rouble;
   }
 }
 
`;