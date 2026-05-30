import './Sidebar.css';

export default class Sidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="sidebar-content">
                ${this.innerHTML}
            </div>
            <x-overlay></x-overlay>
        `;
        const overlayElem = this.querySelector('x-overlay');
        overlayElem.addEventListener('click', () => {
            this.hidden = true;
        });
    }
}