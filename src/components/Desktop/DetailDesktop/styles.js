import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  background:var(--color-white);
  margin-top:200px;
 
 
  padding: 0 10px;
  margin-top:100px;
  ///height:100%;

  border-radius:4px;

`;
export const Content = styled.div`
  display:flex;
  flex-direction:column;
  max-width: 1299px;
  margin: 0 auto;
`;
export const FotoCarroEscolhida = styled.img`
    margin-top:10px;
    max-height: 508px;
    -webkit-flex-basis: 208px;
    -ms-flex-preferred-size: 208px;
    flex-basis: 208px;
    height: auto;
    border-radius: 4px;
    object-fit: cover;
    flex: 2 1;
    margin-bottom: 2px;
    margin-right:20px
`;  
export const ColumnLeft = styled.div`
 
`;

export const GridTodasFotos = styled.div`
  margin: 0 auto;
  display:grid;
  grid-template-columns: repeat(5,1fr);
  grid-gap:2px;
  max-width:639px;
  width:100%;
  
  #fotos{
    margin:0;
    padding:0;

  } 

`;
export const  TodasAsFotos =styled.img`
 height:100px;
 width:110px;
 border-radius:4px;
 margin-bottom:10px;
 
`;
export const  ColumnRight = styled.div`
 display:flex;
 flex-direction:column;
 margin-left:20px;
  
`;

export const NomeDoCarro = styled.h1`
 display:flex;
 margin-top:10px;
`;
export const CaracteristicaDoCarro = styled.ul`
 list-style:none;
 display:flex;
 margin-bottom:26px;
 margin-top:5px;
 >li{
   margin-right:100px;
   font-size:15px;
  
 }
 

`;

export const PrecoDoCarro = styled.div`
    display:flex;
    font-size: 36px;
    line-height: 26px;
    font-weight: 600;
    letter-spacing: normal;
    font-style: normal;
     margin:8px;
`;

export const MoedoDoCarro = styled.sup`
    padding-left: 4px;
    font-size: 15px;
    line-height: 20px;
`;

export const ButtonContactarVendedor= styled.button`
 display:flex;
 justify-content:center;
 align-items:center;
 border:none;
 background:none;
 //border:1px solid var(--color-white);
 height:54px;

 padding: 0 16px;
 border-radius:99px;
 color:var(--color-white);
 background-color:blue;
 font-size: 16px;
 line-height: 20px;
 font-weight: 600;
 letter-spacing: normal;
 font-style: normal;
 min-height: 44px;
 margin-bottom:18px;
 margin-top:18px;
`;
export const ButtonVerTelefon = styled.button`
display:flex;
 justify-content:center;
 align-items:center;
 border:none;
 background:none;
 //border:1px solid var(--color-white);
 height:54px;
 
 padding: 0 16px;
 border-radius:99px;
 color:var(--color-white);
 background-color:blue;
 font-size: 16px;
 line-height: 20px;
 font-weight: 600;
 letter-spacing: normal;
 font-style: normal;
 min-height: 44px;
 margin-bottom:15px;

`;
