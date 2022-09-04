import { Container, SquareContainer, Content } from "./styles";
import emptyImage from "../../assets/empty.svg";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <Container>
      <SquareContainer>
        <Content>
          <h1>{"Parece que não há nada por aqui :("}</h1>
          <img
            src={emptyImage}
            alt="Parece que não há nada por aqui"
            width={250}
          />
          <hr />

          <Link to="/">
            <button type="button">Voltar</button>
          </Link>
        </Content>
      </SquareContainer>
    </Container>
  );
};

export default Empty;
