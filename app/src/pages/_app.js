import React from 'react';
import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/styles.css';
import { GlobalStateProvider } from '../context/GlobalState';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
     <GlobalStateProvider>

    <Component {...pageProps} />
    
     </GlobalStateProvider>
    </Layout>
  );
}

export default MyApp;





// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Layout from './layout';
// import Main from './mainpage/index';
// import PlantDetails from '../components/PlantDetails'; 
// // import id from '../components/[id]';

// function MyApp({ Component, pageProps }) {
//   return (
//     <Router>
//       <Layout>
//         <Switch>
//           <Route exact path="/" component={Main} />
//           <Route path="/plant/:id" component={PlantDetails} />
//         </Switch>
//       </Layout>
//     </Router>
//   );
// }

// export default MyApp;