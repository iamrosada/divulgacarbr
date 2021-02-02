import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  max-width: 1299px;
  margin: 0 auto;
  margin-top:100px;
  background-color: #fff;
  border-radius:4px;
  margin-bottom:40px;
`;

export const ContainerLeft = styled.div`

 padding: 20px;
 border-radius:4px;
 margin-bottom:30px;
 display:flex;
 flex-direction:column;
 width:840px;
 min-width:0;
 flex:none;

`;
export const  ContainerInput  = styled.div`
    border-radius: 6px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 4px 25px rgb(0 0 0 / 7%);
    margin-bottom: 20px;
    padding: 20px 20px;
    background-color: #fff;
    
    border: 1px solid #999;
    

`;
export const Input  = styled.input`
    padding-left: 28px;
    border-radius: 99px;
    padding-right: 27px;
    background: #e8e8e8;
    border-color: #e8e8e8;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,background-color ease-in-out .15s;
    width: 670px;
   
    padding: 20px;
    font-size: 15px;
    color: #333;
    height: 30px;
    line-height: normal;
    border:none;

`;
export const  ContainerGeral  = styled.form`
  display:flex;
  flex-direction:column;
  border-radius: 6px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 4px 25px rgb(0 0 0 / 7%);
    //position: relative;
    margin-bottom: 20px;
    padding: 20px 20px;
    background-color: #fff;
    
    border: 1px solid #999;
    

`;
export const ContainerFilho =styled.div`
display:flex;
flex-direction:column;

  >ul{
    list-style:none;
    display:flex;
    flex-wrap:wrap;
   // margin: 0 auto;
    max-width:500px;
    margin-bottom:10px;
    
    >li{
    margin-right:10px;
    font-size:14px;
    line-height: 1.4;
    font-variant-numeric: tabular-nums;
    font-family: sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",rouble;
    

    }
  }
`;
export const Categoria = styled.h2`
 margin-bottom:10px;
 font-size:20px;
 line-height: 1.4;
 font-variant-numeric: tabular-nums;
 font-family: sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",rouble;
   

`;
export const ContainerRight   = styled.div`
 display:flex;
 flex-direction:column;
;
 padding: 20px;
 border-radius:4px;

 display:flex;
 flex-direction:column;
 
 min-width:0;
 flex:none;
`;
export const AdicionarAnuncio  = styled.div`
    border-radius: 6px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 4px 25px rgb(0 0 0 / 7%);
    margin-bottom: 20px;
    padding: 20px 20px;
    background-color: #fff;
    
    border: 1px solid #999;
    width:380px;
    min-width:0;
    flex:none;
    height:82px;
    display:flex;
    justify-content:center;
    align-items:center;

    
`;
export const  ButtonAdicionar  = styled.button`
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
 //margin-bottom:13px;
 height:26px;
 margin:0 auto;
`;
export const ContainerAnuncioGratis  = styled.div`

border-radius: 6px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 4px 25px rgb(0 0 0 / 7%);
    margin-bottom: 20px;
    padding: 20px 20px;
    background-color: #fff;
    border: 1px solid #999;
    width:380px;
    min-width:0;
    flex:none;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
export const Titulo  = styled.h2`
    font-size: 25px;
    font-weight: 700;
    line-height: 1;
    margin-bottom:20px;
`;
export const FotoIlustrativa  = styled.img`
 
 border-radius:50%;
 //height:150px;
 ///width:200px;
 width: 240px;
 aspect-ratio: auto 240 / 240;
 height: 240px;
 margin-bottom:15px;  

`;
export const Paragrafo  = styled.div`
  margin-right:10px;
    font-size:14px;
    line-height: 1.4;
    font-variant-numeric: tabular-nums;
    font-family: sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",rouble;
    

`;

