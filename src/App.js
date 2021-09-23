import React from 'react'
import Product from './components/Product';

import './assets/css/App.css';


export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          title: `Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50`,
          image: `image.png`,
          prevPrice: 2813.99,
          todayPrice: 2599.00,
          wishList: false
        },
        {
          id: 2,
          title: `Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50`,
          image: `image.png`,
          prevPrice: 2813.99,
          todayPrice: 2599.00,
          wishList: false
        }
      ]
    }
    this.actionWishList = this.actionWishList.bind(this)
  }

  
  actionWishList(product){
    let products =  this.state.products.map(_ => {
      let { title, image, prevPrice, todayPrice, id } = _;

      return {
        id, title, image, prevPrice, todayPrice,
        wishList: id === product.id ? _.wishList === true ? false :  true : _.wishList,
      }
    });
  
    this.setState({ products });
  }


  render(){
    return (
      <div className="App">
          {this.state.products.map( ( _, i ) =>
              <Product wishList={this.actionWishList} product={_} key={i} />
          )}
      </div>
    );
  }
}

