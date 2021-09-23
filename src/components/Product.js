import React from 'react';

export default class Product extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        product: props.product
      }
  
    }
  
    toCurrency(price){
      return price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
  
    render(){
      let { title, image, prevPrice, todayPrice, wishList } = this.props.product;
      return (
          <div className="product">
            <img className="product__image" alt={title} src={`assets/img/${image}`} />
            <button
              onClick={_ => this.props.wishList(this.state.product)}
              className={`product__add-heart-btn product__add-heart-btn--${wishList?'wl-in':'wl-out'}`} >
                <i className={`${wishList?'fas': 'far'} fa-heart`}></i>
            </button>
            <h5 className="product__title"> {title} </h5>
            <span className="product__prev-price"> {this.toCurrency(prevPrice)} </span>
            <br/>
            <span className="product__today-price"> {this.toCurrency(todayPrice)} </span>
            <p className="product__conditions">
              Em até <span>10x de { this.toCurrency(this.state.product.todayPrice / 10) }</span> sem juros
            </p>
            <button
              className={`product__add-button product__add-button--${wishList?'wl-in':'wl-out'}`}
              onClick={_ => this.props.wishList(this.state.product)}>
                {wishList && <i className="fas fa-check"></i>}
              {wishList ? 'Adicionado' : 'Adicionar'}
            </button>
          </div>
        )
    }
  }