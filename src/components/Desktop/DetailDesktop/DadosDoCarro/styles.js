import styled from 'styled-components';

export const Container = styled.div`
  
  display:flex;
  background:var(--color-white);
  margin-top:200px;
  flex-direction:column;
  max-width: 1299px;
  margin: 0 auto;
  padding: 20px;
  margin-top:18px;
  ///height:100%;
  display:flex;
  box-shadow: 0 8px 20px 0 rgba(20,35,85,0.1);
  border-radius:4px;
  margin-bottom:20px;
`;
export const Header  = styled.div`
 display:flex;
 justify-content:space-between;
`;

  
export const ColumnLeft  = styled.div`
 display:flex;
 margin-bottom:20px;
`;


export const AvatarVendedor = styled.img`
border-radius:50%;
height:125px;
width:128px;
`;
export const ColumnRight = styled.div`
 display:flex;
 justify-content:space-between;
`;
export const ButtonSeInscrever = styled.button`
 display:flex;
 justify-content:center;
 align-items:center;
 border:0;
 background:none;
 border:1px solid var(--color-white);
 

 padding: 0 16px;
 height:54px;
 border-radius:99px;
 color:var(--color-white);
 background-color:blue;
 font-size: 16px;
 line-height: 20px;
 font-weight: 600;
 letter-spacing: normal;
 font-style: normal;
 height: 30px;
 margin-bottom:18px;
 margin-top:18px;
`;
export const ButtonMensagem = styled.button`
display:flex;
 justify-content:center;
 align-items:center;
 border:0;
 background:none;
 border:1px solid var(--color-white);
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
 height: 30px;
 margin-bottom:18px;
 margin-top:18px;
 margin-left:20px
`;
export const DadosDoPerfil  = styled.div`
 margin:10px;
`;
export const NomeDoVendidor  = styled.h2``;
export const About = styled.div``
export const LocalizacaoDoPropriet = styled.div`
color:var(--color-sinza);
`;

export const AvaliacaoDoProprietario = styled.div`
display:flex;
flex-direction:column;
>p{
  font-size:20px;
  margin-right:130px;
}
`;
export const Dados = styled.h1`
margin-bottom:10px;
margin-top:10px;
`;
export const DadosDoPassaporte  = styled.div`
 display:flex;
 flex-direction:column;
 >ul{
  list-style:none;
  display:flex;
  font-size:16px;
  
  flex-direction:column;
  >li{
   margin-bottom:10px;
   
  }

 }


`;