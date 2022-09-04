//Assets
import success from "../../assets/success.svg"
//React router dom
import { Link } from 'react-router-dom';
//Styled-components
import { Container, SquareContainer, Content } from "./styles";

const PurchaseMade = (): JSX.Element => {

  return (
    <Container>
      <SquareContainer>
        <Content>

          <h1>Compra realizada com sucesso!</h1>
          <img src={success} alt="" width={350}/>

          <Link to="/">
            <button type="button">Voltar</button>
          </Link>

        </Content>
      </SquareContainer>
    </Container>
  );
};

export default PurchaseMade;
