class Rectalngle { // классы начинаються с большой буквы
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangWithText extends Rectalngle { // создаеться класс наследуемый прототип другого класса
    constructor(height, width, text, bgColor) {
        super(height, width); //супер свойства родителя (наследуеться свойство прототипа класса которые записываем в аргумент)
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
    }

}

const div = new ColoredRectangWithText(25, 10, 'Hello World', 'red');

console.log(div.calcArea())

const square = new Rectalngle(20, 10); // создаеться обьект со свойствоми класса

console.log(square.calcArea());