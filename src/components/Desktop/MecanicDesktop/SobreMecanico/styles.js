import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  background:var(--color-white);
  
  flex-direction:column;
  max-width: 1299px;
  //margin: 0 auto;
  padding: 20px;
  
 // height:100%;
  box-shadow: 0 8px 20px 0 rgba(20,35,85,0.1);
  border-radius:4px;
  margin-bottom:30px;
`;

export const SobreosMecanicos  = styled.span`
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
export const TudoSobreMecanicos  = styled.div`
  display:flex;
  margin-top:30px;
  margin-left:40px;
  margin-right:140px;
`;

export const SobreAequipa   = styled.p`
margin:18px;
     font-size:20px;
     line-height:1.25;
     font-family: "Open Sans","Helvetica Neue",HelveticaNeue,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",rouble;
`;

export const FotoDaEquipa  = styled.img`
width:764px;
 height:300px;
 border-radius:4px;
 box-shadow: 0 8px 20px 0 rgba(20,35,85,0.1);
 display:flex;
 margin-top:20px;
 
`;