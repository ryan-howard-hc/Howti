import 'bootstrap/dist/css/bootstrap.min.css';

import styles from '../styles/global.module.css';
import { GlobalStateProvider } from '../context/GlobalState';


function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <div className={styles.myGlobalStyles}><Component {...pageProps} /></div>
    </GlobalStateProvider>
  );
  return ;
}
export default MyApp;