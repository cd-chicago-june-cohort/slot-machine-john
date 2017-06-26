
function slotMachine(quarters) {
    while (quarters > 0) {
        var winningNumber = Math.floor(Math.random() * 100) + 1;
        var yourNumber = Math.floor(Math.random() * 100) + 1;
        if (winningNumber === yourNumber) {
            var winnings = Math.floor(Math.random() * 51) + 50;
            quarters += winnings;
            return quarters;
        }
        quarters--;
    }
    return 0;
}

console.log(slotMachine(100));