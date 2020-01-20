// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well
// as by all sequential numbers in the range between these parameters.
//
//     The range will be an array of two numbers that will not necessarily be in numerical order.
//
//     For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that
//     is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
let pushFactors = (val,arrayToPushInto, howmantimes) => {
    for(let c = 0; c < howmantimes; c++) {
        arrayToPushInto.push(val);
    }
};

let countFactors = (arr, what)=>{
    return arr.filter(value => value === what).length;
//    returns the count of int in an array.
//    does the number equal the .length of the array? then you have all
//    the factors.
};

//function to find primeFactors of a number
let primeFactorization = num =>{
    let primefactors = [];
    let p = 2;
    while (num >= p*p){
        if(num % p === 0){
            primefactors.push(p);
            num = num / p;
        }else{
            p++
        }
    }primefactors.push(num);

    return primefactors
};

function smallestCommons(arr) {
    let sortedArray = arr.sort((a, b) => a - b);

    let primefactors = [];
    for(let i = sortedArray[0]; i <= sortedArray[1]; i++){


        primefactors.push(primeFactorization(i));
    }

    //now I need to find out how many of each unique int are in each
    // array and make sure that the same number of int exist in the new
    // array and if any are missing place them in the array.
    // example array1 [2,3] array2 [3,5] array3 [2,5]
    // so for this we need one 2 and one 3 and one 5 then we need to multiply each number with the next until
    // done the lcm = 30


    //first number is the prime number, next number in the count.
    let factors = [];
    let arrayNum = 0;

    console.log(`primefactors = ${primefactors}`);
    while (arrayNum<primefactors.length){
        // get value
        let arrayIteration = 0;
        let currentArray = primefactors[arrayNum];
        let value = currentArray[arrayIteration];
        let primeCount = countFactors(currentArray,value);
        while (arrayIteration < currentArray.length){
            console.log(`Changed to the next array which contains ${currentArray}`);
             value = currentArray[arrayIteration];
            primeCount = countFactors(currentArray,value);
             console.log(`Checking value ${value} from Current Array which contains ${currentArray}`);
            if(!factors.includes(value)){
                console.log(`${value} in not yet in factor array which only contains ${factors}`);
                // add it as many times as it does it primefactors[i] array
                pushFactors(value, factors, primeCount);
                console.log(`Pushed ${value} into the array it is now ${factors} `);
                    arrayIteration++;
                console.log(`Changed arraay index  it is now ${arrayIteration}`);

            }else{
                //  see how many times it appears in factors array
                let howManytimesFactorIsInFinalArray = countFactors(factors,value);

                //  if equal to or more than amount in currentArray array do nothing;
                if(howManytimesFactorIsInFinalArray >= primeCount){
                    console.log(`${howManytimesFactorIsInFinalArray} has the right amount of ${value} which in ${primeCount} times.`);

                    arrayIteration++;
                }else{
                    //  if less than the amount in primefactors[i] add amount in factors === to amount in primefactors[i];
                    let howManyFactorsToAdd = primeCount - howManytimesFactorIsInFinalArray;
                    // todo do this for each array in primefactors;
                    console.log(`Comparing how many ${value} need to be in the factors Array currently there are \n ${howManytimesFactorIsInFinalArray} and it needs to be ${primeCount}`);
                    console.log(`Need to add ${howManyFactorsToAdd}`);
                    pushFactors(value,factors,howManyFactorsToAdd);
                    console.log(`Pushed ${howManyFactorsToAdd} of ${value}`);
                    arrayIteration++;
                    console.log(`Ticked to the next iteration.`)
                }

                console.log(factors);

            }
        }
        arrayNum++;

    }
    // once done multiply all numbers in the array with each other. use .reduce?
    let result = factors.reduce((previousValue, currentValue) => previousValue * currentValue);


    console.log(result);
    return result;

    // get how many time its in the primefactors[i]





}
smallestCommons([23,18]);












