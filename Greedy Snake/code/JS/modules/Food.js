class Food {
    constructor() {
        // ! 非空断言
        this.element = document.getElementById("food");
    }
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    change() {
        let height = parseInt(getComputedStyle(document.getElementById("stage"), null)["height"]) / this.element.offsetHeight;
        let width = parseInt(getComputedStyle(document.getElementById("stage"), null)["width"]) / this.element.offsetWidth;
        let left = Math.floor(Math.random() * width) * this.element.offsetWidth;
        let top = Math.floor(Math.random() * height) * this.element.offsetHeight;
        this.element.style.left = left + "px";
        this.element.style.top = top + "px";
    }
}
export default Food;
