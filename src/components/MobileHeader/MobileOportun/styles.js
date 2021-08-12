import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  
  margin:18px;
  flex-basis: 243px;
 // height:auto;
 //background:var(--color-header) ;


`;

export const ImagemOportu  = styled.img`
  
    
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

   

   // background:var(--color-header) ;
`;

export const OportunidadeDoDia  = styled.h2`
   
    
    padding: 8px 16px;
    border-radius: 4px;
    background:var(--color-header) ;
    color:var(--color-white);
    font-size: 1.375rem;
    font-weight: 600;
    height:100px;
    margin-top:-30px;
    
    margin-left:3px;
    margin-bottom:20px;
    


`;

 export const Marca  = styled.div`
  white-space: nowrap;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: normal;
  font-style: normal;
`;

export const Caracteristicas  = styled.ul`
 display:flex;
 padding:4px 0;
margin-top:5px;
 
 
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
     margin-top:25px;
`;

export const Moeda  = styled.sup`
    padding-left: 4px;
    font-size: 10px;
    line-height: 20px;
   
`;
