class StopWatch {
    constructor() {
        this.startTime = new Date();
    }
    getter(){
        return `${this.startTime} ${this.endTime}`
    }
    start(){
        this.startTime = new Date();
    }
    stop(){
        this.endTime = new Date();
    }

    getElapsedTime(){
        return this.endTime - this.startTime;
    }

}

function selectionSort(arr) {
    let currentValueNewIndex;
    for (let i = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
            let temp = arr[i];
            arr[i] = arr[currentValueNewIndex];
            arr[currentValueNewIndex] = temp;
        }
    }
    return arr;
}
const arr = [];
for (let i=0; i<100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}

let watch = new StopWatch()
watch.start();
selectionSort(arr);
watch.stop();
console.log('Time over: ' + watch.getElapsedTime());
console.log('start and end:  ' + watch.getter());
