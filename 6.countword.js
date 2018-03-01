// function countWord(str) {
//       let pisah = str.split(' ')
//       pisah.forEach((pisah) => {
//         console.log(pisah.length)
//       } )
// }

// console.log(countWord('Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali'))



// function averageLengthWord(words) {
//
//     var kata = words.split(" ");
//     var mean = [];
//     var hasil = 0;
//         for (var i =0; i < kata.length; i++){
//
//     var abjad = kata[i].length;
//         mean.push(abjad);
//         }
//         for (var a = 0; a < mean.length; a++){
//             hasil += mean[a];
//         } var b = hasil/mean.length;
//         // console.log(b);
//         var rata2 = Math.round(b);
//         var hasil = [];
//         for (var j = 0; j < kata.length; j++) {
//             if (rata2 == kata[j].length) {
//                 hasil.push(kata[j]);
//             }
//         }
//
//         return hasil;
//     }
//     console.log(averageLengthWord('Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali'))

//
// function averageLengthWord(words) {
//       for(let i = 0; i < words.length; i++){
//
//       }
//
// }
//
// console.log(averageLengthWord('Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali'))


//
// function gali(input) {
//     let data = 'Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali';
//         let kosong = 0;
//         for (let a =0; a < data.length; a++){
//             console.log(input.indexOf(data[a])!==-1);
//         if (input.indexOf(data[a]) !==-1){
//             kosong++;
//         }
//
//     }if (kosong == 0){
//          return 'tidak ada';
//     }else {
//         return kosong;
//     }

    // let total = 0;
    // let hasil = [];
    // for (var a = 0; a < data.length; a++) {
    //     if (input.indexOf(data[a]) !== -1) {
    //         hasil.push(input);
    //     }
    // }
    // if (hasil.length == 0) {
    //     return 'ga ada'
    // } else {
    //     return hasil.length;
    // }

// }
// console.log(gali('aku')); //7
// console.log(gali('f')); //ga ada
// console.log(gali('w')); //2
// console.log(gali('q')); //1


function wordFreq(str){
  let string = 'Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali'.toLowerCase().split(' ');
  let result = 0;
  for(var i = 0; i < string.length; i++){
    if(string[i] === str){
      result += 1;
    }
  }
  return result;
}

console.log(wordFreq('aku'));
console.log(wordFreq('ingin'));
console.log(wordFreq('dapat'));
