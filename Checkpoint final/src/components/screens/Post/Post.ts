import { Products } from "../../../types/store";
import { addProducts } from "../../../utils/storage";

const formData: Omit<Products, 'id'> = {
    imagen: '',
    album: '',
    artista: '',
    precio: 0,
    cantidad: 0
}

export class Post extends HTMLElement {
    constructor(){
    super();
    this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
    this.render()
    }

    async render(){
    const imagen = this.ownerDocument.createElement('input');
    imagen.type = 'url'
    imagen.placeholder = 'Añada la portada del albúm'
    imagen.addEventListener('change', this.addImage)
    this.shadowRoot?.appendChild(imagen)

    const album = this.ownerDocument.createElement('input');
    album.type = 'text'
    album.placeholder = 'Añada el nombre del album'
    album.addEventListener('change', this.addAlbum)
    this.shadowRoot?.appendChild(album)

    const artista = this.ownerDocument.createElement('input');
    artista.type = 'text'
    artista.placeholder = 'Añada el nombre del artista'
    artista.addEventListener('change', this.addArtista)
    this.shadowRoot?.appendChild(artista)

    const precio = this.ownerDocument.createElement('input');
    precio.type = 'number'
    precio.placeholder = 'Añada el precio (Solo número)'
    precio.addEventListener('change', this.addPrecio)
    this.shadowRoot?.appendChild(precio)

    const cantidad = this.ownerDocument.createElement('input');
    cantidad.type = 'number'
    cantidad.placeholder = 'Añada la cantidad (Und.)'
    cantidad.addEventListener('change', this.addCantidad)
    this.shadowRoot?.appendChild(cantidad)
    
    const save = this.ownerDocument.createElement('button');
    save.innerHTML = 'Guardar publicacion'
    save.addEventListener('click', this.submitForm)
    this.shadowRoot?.appendChild(save)
    }

    
    addImage(e: any){
        formData.imagen = e.target?.value
    }

    addAlbum(e: any){
        formData.album = e.target?.value
    }

    addArtista(e: any){
        formData.artista = e.target?.value
    }

    addPrecio(e: any){
        formData.precio = e.target?.value
    }

    addCantidad(e: any){
        formData.cantidad = e.target?.value
    }

    submitForm(){
        addProducts(formData)
        alert("Se ha subido tu disco")
    }
}

export default Post
customElements.define('app-post', Post)

// Si funciona 