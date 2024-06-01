import { appState, dispatch } from "../../store";
import { changeScreen } from "../../store/actions";
import { addObserver } from "../../store";

export enum AttributeHomebtn {
	'text' = 'text',
}

class Homebtn extends HTMLElement {
	text?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.onButtonClicked = this.onButtonClicked.bind(this);
		addObserver(this)
	}

	static get observedAttributes() {
		const attrs: Record<AttributeHomebtn, null> = {
			text: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.mount();
	}

	attributeChangedCallback(propName: AttributeHomebtn, oldValue: string | undefined, newValue: string | undefined) {
		this[propName] = newValue;
		this.mount();
	}

	mount() {
		this.render();
		this.addListeners();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <button id="homebutton" type="submit">${this.text}</button>
            `;
		}
	}

	addListeners() {
		this.shadowRoot?.querySelector('#homebutton')?.addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked() {
		dispatch(changeScreen('HOME'))
	}
}
export default Homebtn;
customElements.define('home-button', Homebtn);