import styled from 'styled-components';

export const ContainerMercado = styled.div`
  
  .grid-container > div{
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 33px 0;
  font-size: 30px;
  display:flex;
  border-radius:4px;
  justify-content:center;
  align-items:center;
  color:var(--color-white);
}


`;

export const ContainerAnuncio= styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:30px;
  margin-bottom:25px;
  margin-left:10px;
  margin-right:10px;
  align-items:center;

  

`;
export const VerTodosAnuncios= styled.div`
 display:flex;
 align-items:center;
 justify-content:  center;
 font-size: 20px;
 line-height: 80px;
 color: grey;
`;
export const MercadodePecas = styled.div`
  font-size:40px;
  color:#333;
  font-weight:bold;
  line-height: 1;
  font-family: Roboto,Inter,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
`;
export const MercadoGridFotos = styled.div`
 margin-bottom:50px;
 display:grid;
 
   
  grid-template-areas: 'a h h t n n pa pe pi fa fa' 
                       'c h h m n n na na ne fa fa'
                      'ma ma me ca ca ce na na ba ba be'
                      'ma ma mi ca ca da da ka ba ba bi'
                      'ha he ke ke ta da da te ti to to'
                      'ga ga ke ke ge ge gi go go to to'
                      'ga ga sa se ge ge si go go so su '
                     
                       ; 
  
  
  grid-gap: 5px;
 //background-color: #2196F3;
  padding: 10px;

.item1 { 
  grid-area: h; 
  background-repeat: no-repeat;
  background-size: 218px 205px;
  background-image:url( "https://images.unsplash.com/photo-1543747255-94b72995ac74?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
  
 }
  
  
.item2 {
  grid-area: a; 
  background-image:url( "https://images.unsplash.com/photo-1534637950656-9e6753b6da6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
 
}
.item3 {
   grid-area: c; 
  background-image:url( "https://images.unsplash.com/photo-1557411255-5e444ee1ae9c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
    }
.item4 { 
  grid-area: t; 
  background-image:url( "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w5ODQ0MDg1fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
  
  }
.item5 {
  grid-area:n;
  background-repeat: no-repeat;
  background-size: 218px 205px;
  background-image:url( "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60");  


}
.item6 { 
  grid-area: m;
  background-image:url( "https://images.unsplash.com/photo-1563199753-b63bbebd64aa?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwxMTM1ODUwOHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
   }

.item7 { 
  grid-area: pa;
  background-image:url( "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMTM1ODUwOHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
   }
.item8 { 
  grid-area: pe; 
  background-image:url( "https://images.unsplash.com/photo-1529926290624-b309403feeb6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
  }
.item9 { 
  grid-area: pi;
  background-image:url( "https://images.unsplash.com/photo-1525736645172-e29cad0f7312?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMDg4ODQwfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
   }
.item10 { 

  grid-area: fa;
  background-repeat: no-repeat;
  background-size: 218px 205px;
  background-image:url( "https://images.unsplash.com/photo-1511871549716-f14e90f022a3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"); 
   
   }
.item11 { 
  grid-area:ne;
  background-image:url( "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwyMDg4ODQwfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
  
   }
.item12 { 
  grid-area: na; 
  background-repeat: no-repeat;
  background-size: 218px 205px;
 
  background-image:url( "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
  }

.item13 { 
  grid-area: ma; 
  background-repeat: no-repeat;
  background-size: 218px 205px;
  background-image:url( "https://images.unsplash.com/photo-1473643068424-cd2485e1ae3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"); 
  
  }
.item14 { 
  grid-area: me; 
  background-image:url( "https://images.unsplash.com/photo-1557598628-bdd7d0767917?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8OTM5NDE1MHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
  }

.item15 { 
  
  grid-area: ca;
  background-repeat: no-repeat;
  background-size: 218px 205px;
  background-image:url( "https://images.unsplash.com/photo-1504222490345-c075b6008014?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MjIwMzU4M3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"); 
  
   }

.item16 { 
  grid-area: ce;
  background-image:url( "https://images.unsplash.com/photo-1491921125492-f0b9c835b699?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
   }
.item17 { 
  grid-area: be;
  background-image:url( "https://images.unsplash.com/photo-1491497875599-6c21f33c7e19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
   }
.item18 { 
  grid-area: ba;
  background-repeat: no-repeat;
  background-size: 218px 205px;
  background-image:url( "https://images.unsplash.com/photo-1454988501794-2992f706932e?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwyMjAzNTgzfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"); 
 }
.item19 { 
  grid-area: mi; 
  background-image:url( "https://images.unsplash.com/photo-1553260168-69b041873e65?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
  
  }
.item20 { 
  grid-area: da;
  background-repeat: no-repeat;
  background-size: 218px 205px;
  background-image:url( "https://images.unsplash.com/photo-1506968515952-44586e41e005?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyMjAzNTgzfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
   }
.item21 { 
  grid-area: ka;
  background-image:url( "https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
   }
.item22 { 
  grid-area: bi;
  background-image:url( "https://images.unsplash.com/photo-1553201108-3cb4c5a04302?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;


 }






.item23 { 
  grid-area: ha;
  background-image:url( "https://images.unsplash.com/photo-1537988489137-33d67a16f3ec?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
   }
.item24 { 
  grid-area: he; 
  background-image:url( "https://images.unsplash.com/photo-1554744512-783e8dc69b10?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
  }
.item25 {
  grid-area: ke;
  background-repeat: no-repeat;
  background-size: 218px 205px;
  background-image:url( "https://images.unsplash.com/photo-1464963160608-a6834f70b421?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80"); 
 }
.item26 { 
  grid-area: ta;
  background-image:url( "https://images.unsplash.com/photo-1560574188-6a6774965120?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
   }
.item27 { 
  
  grid-area: te; 
  background-image:url( "https://images.unsplash.com/photo-1547757015-025b1a633637?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
  }
.item28 { 
  grid-area: ti; 
  background-image:url( "https://images.unsplash.com/photo-1567093322102-6bdd32fba67d?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5ODYwNTE2fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
}
.item29 { 
  grid-area: to; 
  background-repeat: no-repeat;
  background-size: 218px 205px;
  background-image:url( "https://images.unsplash.com/photo-1578586524259-489a03948798?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"); 
  }


.item30 { 
  
  grid-area: ga; 
  background-repeat: no-repeat;
  background-size: 218px 205px;
  background-image:url( "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"); 
  
  }

.item32 {
   grid-area: ge; 
   background-repeat: no-repeat;
  background-size: 218px 205px;
  background-image:url( "https://images.unsplash.com/photo-1503791774117-08c379dd7f7c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMjAzMDQ5fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
   }
.item33 { 
  
  grid-area: gi; 
  background-image:url( "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
  }
.item34 { 
  grid-area: go;
  background-repeat: no-repeat;
  background-size: 218px 205px;
  background-image:url( "https://images.unsplash.com/photo-1473621038790-b778b4750efe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
   }


.item36 { 
  
  grid-area: sa; 
  background-image:url( "https://images.unsplash.com/photo-1515871401659-95f03af5fb36?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
  }
.item37 { 
  grid-area: se; 
  background-image:url( "https://images.unsplash.com/photo-1489686995744-f47e995ffe61?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
  }
.item38 { 
  grid-area: si;
  background-image:url( "https://images.unsplash.com/photo-1550615162-30dcc978d172?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw5ODQ0MDg1fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
   }
.item39 { 
  grid-area: so;
  background-image:url( "https://images.unsplash.com/photo-1570733577524-3a047079e80d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
   }
.item40 { 
  grid-area: su; 
  background-image:url( "https://images.unsplash.com/photo-1545340085-5f798780a920?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"); 
  background-size: 108px 110px;
  background-repeat: no-repeat;
 
  }
 
  
`;




