import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: #fff;
  border-radius: 4px;



  button {
    background: #009EDD;
    width: 220px;
    height: 50px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;
    &:hover {
      background: #00BFFF;
    }
  }
}
`;

export const SquareContainer = styled.div`
  width: "100%";
  height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: auto;
  width: 400px;
  position: relative;

  h1{
    position: absolute;
    top: -100px;
  }

  img{
    margin-bottom: 20px;
  }
`