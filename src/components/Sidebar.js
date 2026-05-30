import './Sidebar.css';

export default class Sidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <x-overlay></x-overlay>
            <div class="sidebar-content" style="height: 100dvh;">
                ${this.innerHTML}
            </div>
        `
        const overlayElem = this.querySelector('x-overlay');
        overlayElem.addEventListener('click', (e) => {
            e.stopPropagation();
            this.hidden = true
        });
    }
}