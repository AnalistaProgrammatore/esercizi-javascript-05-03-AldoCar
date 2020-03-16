
function tempAvg(){
    var temperature = [[5, 7, 9, 10, 8, 10 ,11], [4, 8, 5, 3, 4, 6, 7], [8 , 10, 18, 14, 15, 16, 14], [8, 10, 11, 13, 5, 7 ,11]]
    var total = 0
    var average = 0.0
    for (var row = 0; row < temperature.length; ++row) {
        for (var col = 0; col < temperature[row].length; ++col) {
            total += temperature[row][col];
        }
    averageWeek = total / temperature[row].length
    console.log("Week " + parseInt(row+1) + " average:" + averageWeek.toFixed(2))
    total = 0
    average = 0
    }
    
}


console.log(tempAvg([]))



//devo fare un update dove implemento una funzione per pushare nell'array vuoto i valori
