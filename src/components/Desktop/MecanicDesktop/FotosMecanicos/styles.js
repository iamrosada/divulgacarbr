import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: var(--color-white);
  //margin-top:-19px;
  //margin-top:200px;
  flex-direction: column;
  max-width: 1299px;
  //margin: 0 auto;
  padding: 20px;

  // height:100%;
  box-shadow: 0 8px 20px 0 rgba(20, 35, 85, 0.1);
  border-radius: 4px;
  margin-bottom: 30px;
`;
export const FotosdosMecanicos = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  text-align: center;
  font-weight: 700;
  font-family: "Open Sans", HelveticaNeueThin, HelveticaNeue-Thin,
    "Helvetica Neue Thin", "Open Sans", "Helvetica Neue", HelveticaNeue,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", rouble;
  font-size: 50px;
  margin-bottom: 20px;
`;
export const AsFotos = styled.img`
  width: 264px;
  height: 264px;
  border-radius: 4px;
  margin-left: 20px;
  box-shadow: 0 8px 20px 0 rgba(20, 35, 85, 0.1);
  display: flex;
  margin-bottom: 25px;
`;
export const GaleriaMecanicos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4px;
  //max-width: 339px;
  margin-top: 15px;
`;
