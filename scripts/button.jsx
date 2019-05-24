class Button {
    constructor (buttonElement) {
        this.buttonElement = buttonElement;
        this.buttonDiv = document.querySelector('.button');
        this.buttonDiv.classList.remove('buttonhover');
        this.buttonDiv.addEventListener('mouseenter', () => { this.add() })
        this.buttonDiv.addEventListener('mouseleave', () => { this.remove() })
    }

    add() {
        this.buttonDiv.classList.add('buttonhover');
    }

    remove() {
        this.buttonDiv.classList.remove('buttonhover');
    }
}

let buttonElement = document.querySelector('.button');
let button = new Button(buttonElement);