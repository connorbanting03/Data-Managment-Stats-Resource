function primeNumberClicked() {
    document.location.href = "primeNumber.html";

}
function factorialClicked() {
    document.location.href = "factorialCalculator.html";
}

function takeMeHome() {
    document.location.href = "index.html";

}
function centralClicked() {
    document.location.href = "CentralTendency.html";
}
function findDataset() {
    let bigData = document.getElementById("dataSet").value;
    let singleArray = bigData.split("");
    let fixedData = "";
    let numberCollector = "";
    let currentIndex = "";
    for (var x = 0; x < singleArray.length; x++) {
        if (singleArray[x] == " ") {
            currentIndex = ",";
        } else {
            currentIndex = Number(singleArray[x]);
        }

        if (!isNaN(currentIndex)) {
            numberCollector += singleArray[x];
        } else {
            numberCollector = numberCollector.trim();
            if (!numberCollector == "") {
                fixedData += (numberCollector + " ");
                numberCollector = "";
            }


        }

    }
    fixedData += numberCollector;
    let Average = MeanModeRange(fixedData.split(" "))
    Median(fixedData.split(" "));
    StandardDevasion(Average, fixedData.split(" "), false);

}

function MeanModeRange(SplitData) {

    let Min = Number.MAX_SAFE_INTEGER;
    let Max = Number.MIN_SAFE_INTEGER;
    let Mean = document.getElementById("Mean");
    let Mode = document.getElementById("Mode");
    let Range = document.getElementById("Range");
    let Average = 0;
    let modeIndex = 0;
    let allTimeCount = 0;
    for (var x = 0; x < SplitData.length; x++) {
        let matchCount = 0;
        let CurrentThing = Number(SplitData[x]);

        if (Min > CurrentThing) {
            Min = CurrentThing;

        }

        if (Max < CurrentThing) {
            Max = CurrentThing;
        }

        for (var y = 0; y < SplitData.length; y++) {
            if (SplitData[x] == SplitData[y]) {
                matchCount++;
            }

        }

        if (matchCount > allTimeCount && matchCount > 1) {
            modeIndex = x;
            allTimeCount = matchCount;
        }

        Average += Number(SplitData[x]);

    }


    let RangeSentence = "Range: " + (Max - Min);
    Range.innerHTML = RangeSentence;
    let AverageSentence = "Mean: " + (Average / SplitData.length);
    Mean.innerHTML = AverageSentence;

    if (allTimeCount > 1) {
        Mode.innerHTML = "Mode: " + (SplitData[modeIndex]);
    }
    else {
        Mode.innerHTML = "Mode: NA";
    }

    return Average / SplitData.length;

}

function Median(WordMate) {
    let inputArr = []
    for (var x = 0; x < WordMate.length; x++) {
        if (!isNaN(Number(WordMate[x]))) {
            inputArr[x] = Number(WordMate[x]);
        }

    }
    let n = inputArr.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }
        if (min != i) {

            let tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;
        }
    }
    let MedianHelper = document.getElementById("Median");
    if (!(inputArr.length % 2 == 0)) {
        MedianHelper.innerHTML = "Median: " + (inputArr[((inputArr.length - 1) / 2)]);


    } else {

        let word = ((inputArr[inputArr.length / 2] + inputArr[((inputArr.length / 2) - 1)]) / 2)
        MedianHelper.innerHTML = "Median: " + word;

    }


}
function StandardDevasion(Average, DataSet, Sample) {
    let RunningTotal = 0;
    for (var x = 0; x < DataSet.length; x++) {
        RunningTotal += Math.pow(((DataSet[x]) - Average), 2);
        console.log(RunningTotal);

    }
    console.log(RunningTotal);
    let Standard = 0;
    if (!Sample) {
        Standard += (RunningTotal / DataSet.length);
    } else {
        Standard += (RunningTotal / (DataSet.length - 1));
    }

    Standard = Math.sqrt(Standard);

    let StandardDevasion = document.getElementById("Standard");
    let Variance = document.getElementById("Variance");
    StandardDevasion.innerHTML = "Standard Devasion: " + Standard;
    Standard = Math.pow(Standard, 2);
    Variance.innerHTML = "Variance: " + Standard;

}


function primeCheck1() {

    let maybePrime = document.getElementById("primeNumber").value;
    let wordUp = Number(maybePrime);



    let check = 0;
    let x2 = 1000;

    if (x2 > wordUp) {

        x2 = wordUp
    }


    for (var x = 0; x <= x2; x++) {
        console.log(wordUp % x);

        if (wordUp % x == 0) {
            check++;

        }

    }
    if (check == 0 && wordUp != 0) {

        outPutPrime(1);
    }

    else if (check > 2 || wordUp == 0) {
        outPutPrime(2);
    }
    else {
        outPutPrime(3);
    }

}

function outPutPrime(determineNumber) {

    let word = document.getElementById("Prime-Teller");

    if (determineNumber == 1) {
        word.innerHTML = "Not a number";
    }
    else if (determineNumber == 2) {
        word.innerHTML = "This is a composite number";
    }
    else {

        word.innerHTML = "This is a prime number";
    }

}

function deciferSign() {
    var AnswerShower = document.getElementById("Answer");
    AnswerShower.innerHTML = "";
    let invalidNotice = document.getElementById("Message");
    let word = document.getElementById("factorial").value;
    word = word.trim();

    let DeciperArray = word.split("");

    let item;
    let count = 0;
    if ((word.includes("!"))) {
        count++;
        item = "!";


    }
    if ((word.includes("c") || word.includes("C"))) {
        count++;
        item = "c";

    }
    if ((word.includes("p") || word.includes("P"))) {
        count++;
        item = "p";
    }

    if (count != 1) {
        invalidNotice.innerHTML = "Invalid Entry, please try agian with something like 4c2 or 4p2 or 4!"
    }

    if (item == "!") {

        let validResponce = true;
        let numberUsed = "";

        for (var x = 0; x < DeciperArray.length; x++) {
            if (!isNaN(DeciperArray[DeciperArray.lenght - 1])) {
                invalidNotice.innerHTML = "Invalid Entry, please try agian with something like 4c2 or 4p2 or 4!"

                validResponce = false;
                break;
            }


            if (!isNaN(DeciperArray[x])) {
                numberUsed += DeciperArray[x];
            }

        }
        if (validResponce) {
            factorialSolve(Number(numberUsed), true);
        }




    }
    else if (item == "p") {
        let validEntry = true;

        let numberUsed = "";
        for (var x = 0; x < DeciperArray.length - 1; x++) {
            if ((isNaN(DeciperArray[DeciperArray.length - 1]))) {
                invalidNotice.innerHTML = "Invalid Entry, please try agian with something like 4c2 or 4p2 or 4!"
                validEntry = false;
                break;

            }

            if (!isNaN(DeciperArray[x])) {
                numberUsed += DeciperArray[x];
            }
        }
        if (validEntry) {
            permuatatioSolve(Number(numberUsed), Number(DeciperArray[DeciperArray.length - 1]));
        }

    }
    else if (item == "c") {
        let validEntry = true;

        let numberUsed = "";
        for (var x = 0; x < DeciperArray.length - 1; x++) {
            if ((isNaN(DeciperArray[DeciperArray.length - 1]))) {
                invalidNotice.innerHTML = "Invalid Entry, please try agian with something like 4c2 or 4p2 or 4!"
                validEntry = false;
                break;

            }

            if (!isNaN(DeciperArray[x])) {
                numberUsed += DeciperArray[x];
            }
        }
        if (validEntry) {
            combinationsSolve(Number(numberUsed), Number(DeciperArray[DeciperArray.length - 1]));
        }


    }





}

function factorialSolve(yoFam, indivualCall) {
    let x = yoFam;
    for (var k = yoFam - 1; k > 0; k--) {
        x *= k;

    }
    if (indivualCall) {
        var AnswerShower = document.getElementById("Answer");
        AnswerShower.innerHTML = "The answer = " + x;
    }

    return x;
}
function permuatatioSolve(Start, Loops) {
    console.log(Start - Loops);
    let x = Start;
    let v = Start - Loops;
    for (var k = Start - 1; k > v; k--) {
        console.log(x);
        x *= k;
    }

    var AnswerShower = document.getElementById("Answer");
    AnswerShower.innerHTML = "The answer = " + x;
}

function combinationsSolve(Start, Loops) {

    let x1 = Start - Loops
    x1 = factorialSolve(x1, false);
    Start = factorialSolve(Start, false);
    Loops = factorialSolve(Loops, false);
    let Array = [x1, Start, Loops];
    console.log(Array);
    x1 = Start / (Loops * x1);
    var AnswerShower = document.getElementById("Answer");

    if (isNaN(x1)) {
        AnswerShower.innerHTML = "The number you put in may be too big or not a number at all please try agian";
    }
    else {

        AnswerShower.innerHTML = "The answer = " + x1;
    }

}