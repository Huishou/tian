class ScorePanel {
    constructor(maxLevel = 10, sourcesAddLevel = 10) {
        this.score = 0;
        this.level = 1;
        this.scoreElement = document.getElementById("score");
        this.levelElement = document.getElementById("level");
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
