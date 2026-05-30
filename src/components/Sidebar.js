import './Sidebar.css';

export default class Sidebar extends HTMLDivElement {
    connectedCallback() {
        const overlayElem = document.createElement('x-overlay');
        overlayElem.addEventListener('click', (e) => {
            e.stopPropagation();
            this.hidden = true
        });
        this.appendChild(overlayElem);
    }
}