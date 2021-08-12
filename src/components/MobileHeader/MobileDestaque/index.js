import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Section,
  AnunciDestaque,
  VerTudo,
  ImagemProduct,
  Marca,
  Caracteristicas,
  ValorDoCarro,
  Moeda,
  SectionProduct,
} from "./styles";

function MobileDestaque() {
  return (
    <Container>
      <AnunciDestaque>
        Anúncios em Destaque
        <VerTudo>Ver Todos</VerTudo>
      </AnunciDestaque>
      <Link to="/detail">
        <Section>
          {ProductDestaque.map((product) => (
            <SectionProduct key={product.id}>
              <ImagemProduct src={product.image} />
              <Marca>{product.marca}</Marca>
              <Caracteristicas>
                <li>{product.caracteristicas.ano}</li>.
                <li>{product.caracteristicas.km}</li>
                <li>km</li>.<li>{product.caracteristicas.combustivel}</li>.
                <li>{product.caracteristicas.cv}</li>
                <li>cv</li>
              </Caracteristicas>
              <ValorDoCarro>
                {product.valorDoCarro}
                <Moeda>EUR</Moeda>
              </ValorDoCarro>
            </SectionProduct>
          ))}
        </Section>
      </Link>
    </Container>
  );
}

const ProductDestaque = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1576289668060-47fd82c89bb6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    marca: "  Mercedes-Bez A 169 AMG Line",
    caracteristicas: {
      ano: "2020",
      km: "3549",
      combustivel: "Gasolina",
      cv: "109",
    },
    valorDoCarro: "28 990",
  },

  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1570733577524-3a047079e80d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    marca: "Mercedez",
    caracteristicas: {
      ano: "2020",
      km: "2549",
      combustivel: "Gasolina",
      cv: "900",
    },
    valorDoCarro: "8 000",
  },

  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1542230387-bfc77d26903e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bWVyY2VkZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    marca: "Mercedez",
    caracteristicas: {
      ano: "2020",
      km: "2549",
      combustivel: "Gasolina",
      cv: "900",
    },
    valorDoCarro: "8 000",
  },

  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1549041732-a8307955cfdf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3MzAxMzAxfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
    marca: "Maserati",
    caracteristicas: {
      ano: "2010",
      km: "2549",
      combustivel: "Gasolina",
      cv: "900",
    },
    valorDoCarro: "20 000",
  },
];

export default MobileDestaque;
