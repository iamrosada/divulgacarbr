import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  background:var(--color-white);
  margin-top:200px;
  flex-direction:column;
  max-width: 1299px;
  //margin: 0 auto;
  padding: 20px;
  margin-top:18px;
  ///height:100%;
  box-shadow: 0 8px 20px 0 rgba(20,35,85,0.1);
  border-radius:4px;
  margin-bottom:30px;
`;

export const CarrosEmPromocao = styled.h2`
margin-bottom:10px;
font-size:25px;
 //font-weight:400;

`;



export const Section = styled.div`
  display:flex;
 
  overflow-x: auto;

`;
export const SectionProduct = styled.div`
  display:flex;
  flex-direction:column;
  margin-right: 19px;
  //border: 1px solid var(--color-border-top);
  border-radius:4px;
  box-shadow: 0 8px 20px 0 rgba(20,35,85,0.1);
  //flex-shrink: 0;
  margin-left: 16px;
  margin-bottom: 16px;


`;
export const  AnunciDestaque = styled.h2`
    display:flex;
    justify-content:space-between;
    font-size: 22px;
    line-height: 26px;
    font-weight: 600;
    letter-spacing: normal;
    font-style: normal;
     margin-bottom:20px;
`;
export const  VerTudo = styled.a`
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    letter-spacing: .16px;
    font-style: normal;
`;
export const  ImagemProduct = styled.img`
    max-height: 208px;
    -webkit-flex-basis: 208px;
    -ms-flex-preferred-size: 208px;
    flex-basis: 208px;
    width: 100%;
    height: auto;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    object-fit: cover;
    flex: 2 1;
    margin-bottom: 20px;
`;
export const Marca  = styled.div`
display:flex;
margin-bottom: 4px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
font-size: 16px;
line-height: 20px;
font-weight: 600;
letter-spacing: normal;
font-style: normal;
margin-left:6px;
`;
export const Caracteristicas  = styled.ul`
 display:flex;
 padding:4px 0;

 
 
 >li{
   display:flex;
   text-decoration:none;
   padding:4px;
   margin-left:6px;
 }
`;

export const ValorDoCarro  = styled.div`
    display:flex;
    font-size: 22px;
    line-height: 26px;
    font-weight: 600;
    letter-spacing: normal;
    font-style: normal;
     margin:20px;
    
`;

export const Moeda  = styled.sup`
    padding-left: 4px;
    font-size: 10px;
    line-height: 20px;
`;

