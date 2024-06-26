import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store } from './modules/store';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <Provider store={store}>
      <Home />
      <ToastContainer theme='colored' />
    </Provider>
  );
};
