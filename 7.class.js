/*#7 Class
Create a Str class with methods to:

Add lower method to convert a string to lower case.
Str.lower('MAKAN') // makan
Add upper method to convert a string to upper case.
Str.upper('malam') // MALAM
Add capitalize method to capitalize all first letter of words.
Str.capitalize('saya ingin makan') // Saya Ingin Makan
Add reverse method to reverse a string.
Str.reverse('kasur') // rusak
Add contains method to determine a text – contains a string or more.
Str.contains('Saya ingin makan sate', 'makan') // true
Str.contains('Saya ingin makan sate', 'rujak') // false
Str.contains('Saya ingin makan sate', ['sate', 'rujak']) // true
Create a random aplhanum string. By default it will generate 16 random chars. But if you pass a number as 1st parameter, it will generate random chars based on that number.
Str.random() // hef2nCi273c8D2dz
Str.random(6) // ckS3jP
Str.random(32) // tbFGeCycTBy8FTfXqOTkDd0YtlQngLt4
Convert a string into slug and ignore all non-alphanum chars.
Str.slug('Kotlin & Swift semakin populer di 2018?') // kotlin-swift-semakin-populer-di-2018 */


class Test{
  constructor(str) {
    this.str = str;
  }
  lower(){
    return this.str.toLowerCase();
    }
  upper(){
    return this.str.toUpperCase();
  }
  capitalize(){
    return this.str.replace(/\w\S*/g,function (teks){return teks.charAt(0).toUpperCase() + teks.substr(1).toLowerCase();
        });
    }
  reverse(){
    return this.str.split("").reverse().join("");
    }
    constains(str, word) {
       this.str.split(' ').some(function(w){return w === word})
    }
    random(){
        return Math.random().toString(36).substr(2, this.str.length)
    }
    convert(){
      return  this.str.replace(/[^A-Za-z0-9/\d+?/] /g, '').split(' ').join('-');
    }
  }

let kelas = new Test('MAKAN TAHU BulAt');
console.log(kelas.capitalize());
console.log(kelas.reverse());
console.log(kelas.convert())
