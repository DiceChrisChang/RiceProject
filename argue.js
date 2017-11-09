//This is a test !
function persistence(num) {
    let timeMult = 0;
    while (num > 9) {
        num = num.toString().split('').map(Number)
                .reduce(function(product, value) {
                    return value * product;
                });
        timeMult++;
    }
    
    console.log(timeMult);
}

var num = 999;
persistence(num);

var firstName = 'Jake';
var lastName = 'Rawr';
console.log(`My name is ${firstName} ${lastName}`);
// My name is Jake Rawr