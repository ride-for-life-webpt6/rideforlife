class Button {
    constructor (buttonElement) {
        this.buttonElement = buttonElement;
        this.buttonDiv = this.buttonElement.querySelector('.buttondiv');
        this.nonhover = this.buttonElement.querySelector('.button');
        this.hover = this.buttonElement.querySelector('.buttonhover');
        this.hover.style.display = none;
        this.button.addEventListener('mouseenter', () => { this.toggleContent() })
    }
    toggleContent() {
        this.content.classList.toggleContent('buttonhover');
    }
}

let buttonElement = document.querySelector('.buttondiv');
let button = new Button(buttonElement);