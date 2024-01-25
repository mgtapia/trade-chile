import { StoreProvider } from 'contexts';
import { Meta } from 'components';
import { APP } from 'stores';
import 'styles/index.scss';

function App({ Component, pageProps }) {  
  return (
    <StoreProvider>
      <Meta config="app" data={APP.config.local} />
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default App;