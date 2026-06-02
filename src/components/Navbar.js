import './Navbar.css';

export class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                ${this.innerHTML}
            </nav>
        `;
    }
}

export class NavbarLogo extends HTMLElement { }

export class NavbarItem extends HTMLElement {
    connectedCallback() {
        const itemVariant = this.getAttribute('variant');

        const itemLink = this.getAttribute('href');
        this.innerHTML = `
            <a ${itemLink ? `href="${itemLink}"` : ''}>${this.innerHTML}</a>
        `;
    }
}