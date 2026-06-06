import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageFooter extends LitElement {

    static properties = {
        year: {type: Number }
    };

    static styles = css`
        :host { 
            display: block;
            font-family: monospace;  
        }

    footer {
            background-color: black; 
            color: white; 
            text-align: center;
            padding: 10px;
}
;

    render() {
        return html`
        <footer>
            ‹p›copyright ${this.year) &copy; Aarohi Gediya</p>
        </footer>`
    }
}
customElements.define('page-footer', PageFooter);





