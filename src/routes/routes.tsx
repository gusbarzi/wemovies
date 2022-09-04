import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import PurchaseMade from '../pages/PurchaseMade';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/success" component={PurchaseMade} />
    </Switch>
  );
};

export default Routes;
