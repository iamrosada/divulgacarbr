import styled from 'styled-components';

export const Container = styled.div`

  display:flex;
  flex-direction:column;
  max-width: 1299px;
  margin: 0 auto;
  margin-bottom:50px;
  margin-top:100px;
`;
 
export const ContainerBackgroun = styled.div`
 
  display:flex;
  background:var(--color-white);
  margin-bottom:160px;
  flex-direction:column;
  border-radius:4px;
  box-shadow: 0 8px 20px 0 rgba(20,35,85,0.1);
  padding: 5px;
 /*background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image:url( "https://images.unsplash.com/photo-1473643068424-cd2485e1ae3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"); 
    width:100%;
    height:65%;
    margin: 0 auto;
    border-radius:4px;*/
`;
export const HeaderContent = styled.div`
    background-repeat: no-repeat;
    background-size: 100% 100%;
    //background-size: 1400px 500px;
    background-image:url( "https://images.unsplash.com/photo-1473643068424-cd2485e1ae3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"); 
    width:100%;
    height:510px;
    margin: 0 auto;
    border-radius:4px; 
    display:flex;
    flex-direction:column;
    margin-bottom:10px;
    
    

`;
export const Content = styled.div`
 display:flex;
 position: relative;
 margin:10px;
`;
export const ButtonMostrarTelefon = styled.button`
  position: absolute;
  right:300px;
  display:flex;
 justify-content:center;
 align-items:center;
 border:0;
 background:none;
 padding: 0 16px;
 border-radius:99px;
 color:var(--color-black);
 background-color:var(--color-white);
 font-size: 16px;
 line-height: 20px;
 font-weight: 600;
 letter-spacing: normal;
 font-style: normal;
 height: 30px;
`;
export const DeixeUmPedido = styled.button`
position: absolute;
right:0;

 display:flex;
 justify-content:center;
 align-items:center;
 border:0;
 background:none;
 
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
 
`;
export const ContentInferior = styled.div`
 display:flex;
 margin-top:150px;
 margin-left:58px;
 
`;
export const FotoAvatar = styled.img`
border-radius:50%;
height:150px;
width:150px;
border:3px solid var(--color-white);

`;
export const ContentNomeDoCentro = styled.div`
 color:var(--color-white);
 margin:12px;
 text-shadow: 0 0 15px rgba(0,0,0,.9);
`;
export const NomeDoCentro = styled.div`
    margin-bottom:10px;
    font-family: "Open Sans","Helvetica Neue",HelveticaNeue,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",rouble;
    margin: 0 0 4px;
    font-size: 24px;
    font-weight: 400;
    line-height: 1;
    text-shadow: 0 0 15px rgba(0,0,0,.9);
`;
export const SloganDoStand = styled.div`
    font-size: 50px;
    font-weight: 700;
    font-family: "Open Sans","Helvetica Neue",HelveticaNeue,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",rouble;
    line-height: 1.07;
    text-shadow: 0 0 15px rgba(0,0,0,.9);
    
`;
export const HeaderInfor = styled.div`
 display:flex;
 justify-content:space-between;
 margin-top:-40px;
 margin-left:10px;
 margin-right:550px;
 
`;
export const ButtonFoto = styled.div`
display:flex;
 justify-content:center;
 align-items:center;
 border:0;
 background:none;
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
`;
export const ButtonAvaliacoes = styled.div`
display:flex;
 justify-content:center;
 align-items:center;
 border:0;
 background:none;
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

`;
export const ButtonPreco = styled.div`
display:flex;
 justify-content:center;
 align-items:center;
 border:0;
 background:none;
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
`;
export const ButtonSobreNos = styled.div`
display:flex;
 justify-content:center;
 align-items:center;
 border:0;
 background:none;
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
`;
export const ButtonContactos = styled.div`
display:flex;
 justify-content:center;
 align-items:center;
 border:0;
 background:none;
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
`;