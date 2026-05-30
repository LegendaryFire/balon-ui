import './Sidebar.css';

export class Sidebar extends HTMLElement {
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

export class SidebarHeader extends HTMLElement { }
export class SidebarBody extends HTMLElement { }