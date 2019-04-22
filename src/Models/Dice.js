export default class Dice{
    constructor(){
        // Max number on the dice (+1)
        this.maxNumber = 7;
        // Min number on the dice
        this.minNumber = 1;
        this.currentNumber = 0;
        this.roll();
    }

    roll(){
        // This function is based on some stack overflow method that was found on mozilla developer
        Math.ceil(this.minNumber)
        Math.floor(this.maxNumber)
        this.currentNumber = Math.floor(Math.random() * (this.maxNumber - this.minNumber)) + this.minNumber
        return this.currentNumber
    }
}