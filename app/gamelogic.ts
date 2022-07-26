import { Status } from "./gamestatus";

export class Gamelogic {
    gameField: Array<number> = [];

    gameStatus: Status;

    rabbitPosition: number = Math.floor(Math.random() * (8 + 1));

    public constructor() {
        this.gameStatus = Status.STOP;
        this.gameField = [0,0,0,0,0,0,0,0,0];
    }

    gameStart(): void {
        this.gameField = [0,0,0,0,0,0,0,0,0];
        this.gameStatus = Status.START;
    }

    setField(position: number, value: number): void {
        this.gameField[position] = value;
    }
}
