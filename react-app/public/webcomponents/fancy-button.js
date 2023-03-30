class FancyButton extends HTMLElement {
  static get template() {
    return `
    <style>
      button {
        display: inline-block;
        background-color: var(--fancy-button-color, #00829b);
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
        padding: 4px 8px;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
      }
    </style>
    <button>
      <slot></slot>
    </button>
  `;
  }

  constructor() {
    super();
  }
  connectedCallback() {
    this.attachShadow({
      mode: "open",
    }).innerHTML = FancyButton.template;
  }
}
customElements.define("fancy-button", FancyButton);
