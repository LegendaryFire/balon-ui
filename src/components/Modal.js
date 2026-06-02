import './Modal.css';

export class ModalHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="modal-header-content">
                ${this.innerHTML}
            </div>
            <button class="modal-header-close" type="button" aria-label="Close">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;

        const closeBtn = this.querySelector('button.modal-header-close');
        closeBtn.addEventListener('click', () => {
            const modalElem = this.closest('x-modal');
            if (modalElem) {
                modalElem.closeModal();
            }
        });
    }
}
export class ModalContent extends HTMLElement { }

export class ModalFooter extends HTMLElement { }

export class Modal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <x-overlay></x-overlay>
            <div class="modal-container">
                ${this.innerHTML}
            </div>
        `;
    }

    closeModal() {
        this.remove();
    }
}