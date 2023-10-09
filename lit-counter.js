import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class LitCounter extends LitElement {

    static styles = css`
    :host {
      display: block;
      padding: 20px;
      font-family: 'Arial', sans-serif;
      text-align: center;
      background-color: #f6f6f6;
      border-radius: 10px;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
      max-width: 300px;
      margin: 50px auto;
    }
  
    p {
      font-size: 1.5rem;
      color: #333;
      margin: 10px 0;
    }
  
    button {
      background-color: #007BFF;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      margin: 5px;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    button:active {
      transform: scale(0.95);
    }
  `;
  

  static properties = {
    count: { type: Number }
  };

  constructor() {
    super();
    this.count = 0;
  }

  increase() {
    this.count++;
  }

  decrease() {
    if(this.count > 0) {
      this.count--;
    }
  }

  reset() {
    this.count = 0;
  }

  render() {
    return html`
      <div>
        <p>Current count: ${this.count}</p>
        <button @click=${this.increase}>Increase</button>
        <button @click=${this.decrease}>Decrease</button>
        <button @click=${this.reset}>Reset</button>
      </div>
    `;
  }
}

customElements.define('lit-counter', LitCounter);

