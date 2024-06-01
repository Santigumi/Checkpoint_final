import "./components/export"
import "./components/screens/Home/Home"
import Home from "./components/screens/Home/Home";
import "./components/screens/Post/Post"
import Post from "./components/screens/Post/Post";

import { appState } from "./store/index";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        switch (appState.screen) {
            case 'HOME':
                const home = document.createElement('app-home') as Home
                this.shadowRoot?.appendChild(home)
                break;
            
            case 'POST':
                const post = document.createElement('post-button') as Post
                this.shadowRoot?.appendChild(post)
                break;

            default:
                break;
        }
    }
}

customElements.define('app-container', AppContainer)