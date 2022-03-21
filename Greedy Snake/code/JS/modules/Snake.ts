class Snake {

    element : HTMLElement;
    body : HTMLCollectionOf<HTMLElement>;
    head : HTMLElement;
    size : number;

    constructor() {
        this.element = document.getElementById("snake")!;
        this.body = this.element.getElementsByTagName("div");
        this.head = document.querySelector("#snake > div")!;
        this.size = this.head.offsetWidth;
    }

    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }

    set X(value : number) {
        if (this.X === value) {
            return;
        }
        
        let rowBorder = parseInt(getComputedStyle(document.getElementById("stage")!, null)["width"]) - this.size;

        // 禁止掉头
        if (this.body[1] && this.body[1].offsetLeft === value) {
            value = this.X + (this.X - value);
        } 
        
        if (value >= 0 && value <= rowBorder) {
            this.moveBody();
            this.head.style.left = value + "px";
            this.checkSelf();

        } else {
            throw new Error("撞墙了");
        }

    }

    set Y(value : number) {
        if (this.Y === value) {
            return;
        }

        let columnBorder = parseInt(getComputedStyle(document.getElementById("stage")!, null)["height"]) - this.size;
        
         // 禁止掉头
        if (this.body[1] && this.body[1].offsetTop === value) {
            value = this.Y + (this.Y - value);
        } 

        if (value >= 0 && value <= columnBorder) {
            this.moveBody();
            this.head.style.top = value + "px";
            this.checkSelf();
        } else {
            throw new Error("撞墙了");
        }

        
        
    }

    // 添加身体
    addBody() {
        // insertAdjacentHTML 元素中插入 Html
        this.element.insertAdjacentHTML("beforeend", `<div></div>`);
    }

    // 身体随蛇头移动
    moveBody() {
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].style.left = this.body[i-1].offsetLeft + "px";
            this.body[i].style.top =  this.body[i-1].offsetTop + "px";
        }
    }

    checkSelf() {
        for (let i = 1; i < this.body.length; i++) {
            if (this.X === this.body[i].offsetLeft && this.Y === this.body[i].offsetTop) {
                throw new Error("撞到自己了");
            } 
        }
    }
    

}

export default Snake;

