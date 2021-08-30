// 1 - array vuoto
// 2 - chiedere 6 volte un numero
// 3 - se dispari inserisci nell'array

// 1)
var Arr1 = [];

// 2)

for (var i = 0; i < 6; i++) {
    var nuovoNumero = parseInt( prompt('inserisci un numero') );
    
    // 3)
    if (nuovoNumero % 2 > 0) {
        Arr1.push(nuovoNumero)
    }
   
}

console.log(Arr1)