// esta es la función de dolar a yen

const fromYenToPound = function(valueInYen){

    let valueInPound = valueInYen * 0.8/127.9;
   
    return valueInPound;
}


const fromDollarToYen = function(valueInDollar){

    let valueInYen = valueInDollar * 127.9 /1.2;
   
    return valueInYen;
}




// esta es mi función que suma dos números
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
}




const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };