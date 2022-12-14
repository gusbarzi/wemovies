//React Hooks
import { useState, useEffect } from 'react';
import { useCart } from '../../hooks/useCart';
//React icons
import { MdAddShoppingCart } from 'react-icons/md';
//API
import { api } from '../../services/api';
//Util
import { formatPrice } from '../../util/format';
//Styled-components
import { ProductList } from './styles';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount
    return sumAmount
  }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const productsFormated = response.data.map(function(product: Product){
        return {...product, price: formatPrice(product.price)}
      })
      setProducts(productsFormated)

    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    addProduct(id)
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
        <img src={product.image} alt={product.title} />
        <strong>{product.title}</strong>
        <span>{product.price}</span>
        <button
          type="button"
          onClick={() => handleAddProduct(product.id)}
        >
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
            {cartItemsAmount[product.id] || 0}
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      ))}
    </ProductList>
  );
};

export default Home;
