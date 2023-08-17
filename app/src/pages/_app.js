import React from 'react';
import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Layout from './layout';
// import Main from './mainpage/index';
// import PlantDetails from '../components/PlantDetails'; 

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