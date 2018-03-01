    // for(var counter1= 1; counter1 <=100; counter1++){
    //
    // if (counter1 % 2 === 1){
    //   console.log(counter1 + " ganjil")
    // }
    // else {
    //   console.log(counter1 + " genap")
    //
    // }
    // }
      // for(var counter5 = 1; counter5 <=100; counter5++){
      //   if (counter5 % 5 == 0){
      //     console.log(counter5 + " KELIPATAN 5")
      //   }
      // }

    for (var counter = 2; counter <= 100; counter++) {
    var value = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            value = true;
        }
    }
    if (value === false) {
                console.log(`${counter} BILANGAN PRIMA`);
    }
}
