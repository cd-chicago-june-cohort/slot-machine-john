function slotMachine(quarters, leaveWith) {
    while (quarters > 0) {
        quarters--;
        var winningNumber = Math.floor(Math.random() * 100) + 1;
        var yourNumber = Math.floor(Math.random() * 100) + 1;
        if (winningNumber === yourNumber) {
            var winnings = Math.floor(Math.random() * 51) + 50;
            quarters += winnings;
            if (quarters >= leaveWith) {
                return quarters;
            } else {
                continue;
            }
        }
    }
    return 0;
}

console.log(slotMachine(100, 119));