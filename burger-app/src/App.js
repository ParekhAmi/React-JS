import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';

class App extends Component {
  render()
   {
      return (
          <div>
            <Layout >
                <p>Hello Bond</p>
                <BurgerBuilder />          
            </Layout>    
          </div>
        );
      }
}

export default App;
