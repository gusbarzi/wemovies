//React Router Dom
import { BrowserRouter } from 'react-router-dom';
//React Toast
import { ToastContainer } from 'react-toastify';
//Routes
import Routes from './routes/routes';
//Global Styles
import GlobalStyles from './styles/global';
//Components
import Header from './components/Header';
//React hooks
import { CartProvider } from './hooks/useCart';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
