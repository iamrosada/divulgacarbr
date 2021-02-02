import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  
  //margin:18px;
  flex-basis: 243px;
   height:auto;
  


`;

export const ImagemOportu  = styled.img`
   /*vertical-align: baseline;
    
    margin:0;
    padding:0;
    height: 350px;
    min-width: 320px;
    width:100%;
    display: flex;
   
    border-radius: 4px;
    margin-bottom:10px;*/
    max-height: 508px;
    //max-width:908px;
    -webkit-flex-basis: 208px;
    -ms-flex-preferred-size: 208px;
    flex-basis: 208px;
    //width: 100%;
    height: auto;
    border-radius: 4px;
    object-fit: cover;
    flex: 2 1;
    margin-bottom: 20px;
    
   
   

  
`;

export const OportunidadeDoDia  = styled.h2`
    display:flex;
    
    padding: 8px 16px;
    border-radius: 4px;
    background:var(--color-header) ;
    color:var(--color-white);
    font-size: 1.375rem;
    font-weight: 600;
   
    margin-top:-30px;
    //width:290px;
    margin-left:6px;
    max-width:400px;
   
   // width:100%;

    
   
    

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
`;

export const Caracteristicas  = styled.ul`
 display:flex;
 padding:4px 0;

 
 
 >li{
   display:flex;
   text-decoration:none;
   padding:4px;
 }
`;

export const ValorDoCarro  = styled.div`
    display:flex;
    font-size: 22px;
    line-height: 26px;
    font-weight: 600;
    letter-spacing: normal;
    font-style: normal;
     margin:8px;
`;

export const Moeda  = styled.sup`
    padding-left: 4px;
    font-size: 10px;
    line-height: 20px;
`;
