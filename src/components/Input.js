import './Input.css';

class InputType {
    static TEXT = 'text'
    static NUMBER = 'number'

    static isValid(inputType) {
        return Object.values(InputType).includes(inputType)
    }
}

export class Label extends HTMLElement {
    connectedCallback() {
        const isRequired = this.nextElementSibling.hasAttribute('required');
        this.innerHTML = `
            <label>
                ${this.innerHTML} ${isRequired ? `<span class="required">*</span>` : ''}
            </label>
        `
    }
}

export class InputWrapper extends HTMLElement { }

export class Input extends HTMLElement {
    connectedCallback() {
        const inputType = this.getAttribute('type')
        if (!InputType.isValid(inputType)) {
            throw new Error("Invalid input type for x-input element.");
        }

        const isRequired = this.hasAttribute('required');
        const placeholderValue = this.getAttribute('placeholder');
        this.innerHTML = `
            <input
                type="${inputType}"
                ${placeholderValue ? `placeholder="${placeholderValue}"` : ''}
                ${isRequired ? "required" : ''}
            />
        `
    }
}