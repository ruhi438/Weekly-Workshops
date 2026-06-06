import (LitElement, html, css from https://cdn.jsdelivr.net/gh/lit/dist@z/core/lit-core.min.js;

class Swcharacter extends LitElement (

static properties = {
      url: {type: string ), 
      data: {type: object }

constructor {
super 0);
this.url=;
this data = null;
}
        
updated(changedProps) {
if (changedProps.has('url') && this.url) {

         fetch(this.url)
             •then (res => res.json())
             •then(data =>
                  this.data = data;
                })
                •catcherr => console.error(err));
      }
}

static styles = css`
       •card {
          border: 1px solid #ccc;
          padding: 10px; 
          margin: 10px; 
          border-radius: 8px;
          background: #f9f9f9;
       }
 `;

render () {
   if (!this. data) {
        return html`<p>Loading character...</p>;
   }
      return html`
      ‹div class="card"›
           <h3>$(this.data.name}</h3>
           <p><strong›Height:</strong>$(this.data.height}</p>
           <p><strong>Mass:</strong>${this.data.mass}</p>
</div>
               `;
       }
}
customElements define('sw-character', Swcharacter);
