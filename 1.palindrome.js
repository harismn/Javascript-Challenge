function palindrome(kata) {
    // you can only write your code here!

  //   var hasil='';
  //   for (var a= kata.length -1; a>=0;a--) {
  //     hasil+= kata[a];
  //     // console.log(hasil);
  //   }
  //  // console.log(hasil);
  //   if (kata === hasil){
  //       return true;
  //     } else {
  //       return false;
  //     }

    for (var i = 0; i < kata.length/2; i++) {
      if (kata[i] === kata[kata.length - 1 -i]){
            return true;
      }else{
          return false;
      }
    }
  }

  console.log(palindrome('ibu ratna antar ubi')); // true
