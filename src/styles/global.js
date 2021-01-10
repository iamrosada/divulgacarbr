import styled, {createGlobalStyle} from 'styled-components'


export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
 *{
   margin:0;
   padding:0;
   outline:0;
   box-sizing:border-box;

 }
 html,body,#root {
   background:#e5e5e5;
   -webkit-font-smoothing: antialiased;
   height:100%;
   width:100%;
   
    

 }
 body, input, button{
   font:14px Roboto, sans-serif;
 }

#root{
  --color-header:#283e4a;
  --color-divulgacar:#0077b5;
  --color-input:#e1e9ee;
  --color-icons:#c7d1d8;
  --color-white:#fff;
  --color-black:rgba(0,0,0,.9);
  --color-gray:rgba(0,0,0,.15);
  --color-menu: #0071ce;
  --color-border-bottom: #ebecef;
  --color-border-top: #ebecef;
  --color-text:#66676c;
  --color-input-desable: #ebecef;
  

   
  }

 button{
   cursor:pointer;
 }
`;
 