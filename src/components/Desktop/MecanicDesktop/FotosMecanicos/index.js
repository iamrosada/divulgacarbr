import React from "react";
import {
  Container,
  FotosdosMecanicos,
  GaleriaMecanicos,
  AsFotos,
} from "./styles";

function FotosMecanicos() {
  return (
    <Container>
      <FotosdosMecanicos>Foto</FotosdosMecanicos>
      <hr />
      <GaleriaMecanicos>
        {Fotos.map((foto) => (
          <AsFotos src={foto.image} key={foto.id} />
        ))}
      </GaleriaMecanicos>
    </Container>
  );
}

const Fotos = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1576289668060-47fd82c89bb6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },

  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1570733577524-3a047079e80d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },

  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1542230387-bfc77d26903e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bWVyY2VkZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },

  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1549041732-a8307955cfdf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3MzAxMzAxfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1549041732-a8307955cfdf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3MzAxMzAxfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
  },
];
export default FotosMecanicos;
