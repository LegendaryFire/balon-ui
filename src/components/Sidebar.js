import './Sidebar.css';
import { createElement, icons } from 'lucide';

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

export class SidebarHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="sidebar-header-title">${this.innerHTML}</div>
            <button class="sidebar-header-close" type="button" aria-label="Close"></button>
        `;
        const closeElem = this.querySelector('button.sidebar-header-close');
        closeElem.appendChild(createElement(icons.X));
        closeElem.addEventListener('click', () => {
            // Get the sidebar in which the header is located in and set it to hidden to close.
            const sidebar = this.closest('x-sidebar');
            if (sidebar) {
                sidebar.hidden = true;
            } else {
                throw new Error('Sidebar was not found in the DOM tree.');
            }
        });
    }
}

export class SidebarBody extends HTMLElement { }
export class SidebarFooter extends HTMLElement { }