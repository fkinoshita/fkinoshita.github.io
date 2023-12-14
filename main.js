
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="padded">
            <h1>Personal Website</h1>

            <h2><a class="no-decoration" href="https://felipekinoshita.com">Felipe Kinoshita</a></h2>
            </div>
        </header>
        `;
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>
            &copy; 2023, Felipe Kinoshita.
            </p>
        </footer>
        `;
    }
}

customElements.define('header-component', Header);
customElements.define('footer-component', Footer);
