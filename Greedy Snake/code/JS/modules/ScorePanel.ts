class ScorePanel {
    score : number = 0;
    level : number = 1;
    maxLevel : number;
    sourcesAddLevel : number;

    scoreElement : HTMLElement;
    levelElement : HTMLElement;

    constructor(maxLevel : number = 10, sourcesAddLevel : number = 10) {
        this.scoreElement = document.getElementById("score")!;
        this.levelElement = document.getElementById("level")!;
        this.maxLevel = maxLevel;
        this.sourcesAddLevel = sourcesAddLevel;
    }

    addScore() {
        this.scoreElement.innerHTML = ++this.score + "";

        if (this.score % this.sourcesAddLevel === 0) {
            this.addLevel();
        }
    }
    addLevel() {
        if (this.level < this.maxLevel) {
            this.levelElement.innerHTML = ++this.level + "";
        }
    }
}

export default ScorePanel;