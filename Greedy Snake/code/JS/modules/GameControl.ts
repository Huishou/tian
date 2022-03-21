import Food from "./Food.js";
import ScorePanel from "./ScorePanel.js";
import Snake from "./Snake.js";

class GameControl {

    food : Food;
    snake : Snake;
    scorePanel : ScorePanel;
    direction : string = "";
    start : HTMLElement;
    isLive : boolean = true;

    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.start = document.getElementById("start")!;

        this.init();
    }

    // 游戏入口
    init() {

        this.start.addEventListener("click", this.clickHandler.bind(this));

        this.run();
    }

    clickHandler() {
        // bind() 使 GameControl调用，而不是 document
        document.addEventListener("keydown", this.keydownHandler.bind(this));
    }

    keydownHandler(event : KeyboardEvent) {
       this.direction = event.key;

       // this.run();   在此处调用只能一直按住才移动
    }

    run() {

        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case "w":
            case "ArrowUp": Y -= this.snake.size;
                break;
            case "a":
            case "ArrowLeft": X -= this.snake.size;
                break;
            case "s":
            case "ArrowDown": Y += this.snake.size;
                break;
            case "d":
            case "ArrowRight": X += this.snake.size;
        }
        
        // 吃到食物
        if (X === this.food.X && Y === this.food.Y) {
            this.changeFood();
            this.scorePanel.addScore();
            this.snake.addBody();
        }

        // 更新坐标（所有蛇结点）
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert((e as Error).message + " GAME OVER");
            this.isLive = false;
            window.location.reload();
        }

        // 递归自动执行
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    changeFood() {
        this.food.change();
        let x = this.food.X;
        let y = this.food.Y;

        for (let i = 0; i < this.snake.body.length; i++) {
            if (x === this.snake.body[i].offsetLeft && y === this.snake.body[i].offsetTop) {
                this.changeFood();
                break;
            }
        }
    }

}

export default GameControl;