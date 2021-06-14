// Kilometer to metre converter
function kilometerToMetre(kilo) {
    return kilo * 1000
}

// Budget calculator
function budgetCalculator(watch, phone, laptop) {
    const watchPrice = 50 * watch;
    const phonePrice = 100 * phone;
    const laptopPrice = 500 * laptop;
    return watchPrice + phonePrice + laptopPrice
}

// Hotel room cost
function hotelCost(day) {
    let dayValue;
    if (day < 11) {
        dayValue = 100 * day
    } else if (day > 10 && day < 21) {
        const val = day - 10
        dayValue = (100 * 10) + (80 * val)
    } else if (day > 20) {
        const val = day - 20
        dayValue = (100 * 10) + (80 * 10) + (50 * val)
    }
    return dayValue
}

// Mega Friends
function megaFriends(friends) {
    var longest = friends.sort(
        function (a, b) {
            return b.length - a.length;
        }
    );
    return longest[0]
}

console.log(kilometerToMetre(5))
console.log(budgetCalculator(1,1,1))
console.log(hotelCost(25))
console.log(megaFriends(["Asraful", "Joy", "Alve"]))

