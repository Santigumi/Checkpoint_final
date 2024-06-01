
export enum Attribute {
    'imagen' = 'imagen',
    'album' = 'album',
    'artista' = 'artista',
    'precio' = 'precio',
    'cantidad' = 'cantidad',
}

export class Card extends HTMLElement{
    imagen?: string;
    album?: string;
    artista?: string;
    precio?: number;
    cantidad?: number;

    constructor(){
    super()
    this.attachShadow({mode:'open'})
    }

    static get observedAttributes(){
        const attrs: Record<Attribute, null> = {
        imagen: null,
        album: null,
        artista: null,
        precio: null,
        cantidad: null,
        }
    return Object.keys(attrs);
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined){
        switch (propName) {
            case Attribute.precio:
                this.precio = newValue ? Number (newValue): undefined
                break;
            case Attribute.cantidad:
                this.cantidad = newValue ? Number (newValue): undefined
                break;
            default:
                break;
        }
    }

    connectedCallback(){
    this.render()
    }

    render(){
    if(this.shadowRoot){
    this.shadowRoot.innerHTML = `
    <img src=${this.imagen}>
    <h3>Album: ${this.album}</h3>
    <h3>Artista: ${this.artista}</h3>
    <p>Precio: ${this.precio}</p>
    <p>Cantidad: ${this.cantidad}</p>
    `
    }
    }
}
export default Card
customElements.define('app-card', Card)