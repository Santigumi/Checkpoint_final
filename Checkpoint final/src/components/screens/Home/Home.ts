import { getProducts } from "../../../utils/storage";
import Card, { Attribute } from "../../cart/cart";
import { AttributePostbtn } from "../../menu/Postbtn";
import { AttributeHomebtn } from "../../menu/Homebtn";
import { Products } from "../../../types/store";

export class Home extends HTMLElement {
    constructor(){
    super();
    this.attachShadow({mode:'open'})
    }

    connectedCallback(){
    this.render()
    }

    async render(){
    const Homebtn = this.ownerDocument.createElement('home-button') 
    Homebtn.setAttribute(AttributeHomebtn.text, 'Home');
    this.shadowRoot?.appendChild(Homebtn);

    const postbtn = this.ownerDocument.createElement('post-button') 
    postbtn.setAttribute(AttributePostbtn.text, 'Post');
    this.shadowRoot?.appendChild(postbtn);

    const sectionCards = document.createElement('section');
    const products = await getProducts()
    console.log(products)
    products.forEach((card: Products)=>{
    const cart = document.createElement('app-card') as Card;
    cart.setAttribute(Attribute.imagen, card.imagen);
    cart.setAttribute(Attribute.album, card.album);
    cart.setAttribute(Attribute.artista, card.artista);
    cart.setAttribute(Attribute.precio, JSON.stringify(card.precio));
    cart.setAttribute(Attribute.cantidad, JSON.stringify(card.cantidad));
    sectionCards.appendChild(cart)
    this.shadowRoot?.appendChild(sectionCards)
    })
    }
}

export default Home
customElements.define('app-home', Home)