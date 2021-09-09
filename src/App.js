import './App.css';
import Routes from './Routes/Routes';

// redux
import { Provider } from 'react-redux';
import store from './store';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Routes />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
