  import styled from 'styled-components';
  import {FiMenu, FiPlus } from 'react-icons/fi'

  export const Header = styled.div`
    display:flex;
    flex-direction:column;
  `;
  export const Container = styled.header` 
      width:100%;
      display:flex;
      justify-content:space-between;
      background: var(--color-white);
      padding:8px 7px 5px;
      position:fixed;
      
    
  
      > button:nth-child(1){
        border:0;
        background:none;
        color:var(--color-menu);
      }
      > button#vender{
        display:flex;
        justify-content:center;
        align-items:center;
        color:var(--color-white);
        background:none;
        border:0;
        background:var(--color-menu);
        padding:4px;
        border-radius:2px;
        padding: 4px 10px;
        max-width: 110px;
        line-height: 15px;
        font-size: 12px;
        white-space: normal;
        box-shadow: 0 1px 2px 0 rgba(20,35,85,0.5);
        width: auto;
        font-size:13px;
        font-weight:bold;
      }
    
  `;
  
 export const   FiPlusIcon = styled(FiPlus)`
    height: 20px;
    width: 20px;
 `;

  export const MenuIcon = styled(FiMenu)`
     height: 27px;
     width: 27px; 
  `; 
  export const LogotoTipo=styled.span`
      display:flex;
      justify-content:center;
      align-items:center;
      font-size: 15px;
      font-weight:bold;
      color:var(--color-menu);
      border: 1px solid rgba(0,0,0,0.4);
      border-radius:4px;
      padding: 0 12px;
     
  
  `;