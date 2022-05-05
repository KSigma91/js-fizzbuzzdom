// creo una lista per i numeri
const ul = document.querySelector ("ul.list");
const li = document.createElement ('li');

// numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    const element = `<li class="box box--${i}">${i}</li>`;
    ul.innerHTML += element;
    // li.append (i);
    ul.append (li);
    console.log("numero: " + i);

    /*
      se ci sono multipli di 3 stampo Fizz
      se ci sono multipli di 5 stampo Buzz
      se ci sono sia multipli di 3 e che di 5 stampo FizzBuzz
    */
    if (i % 3 == 0) {
        risultato = "fizz";
    } else if (i % 5 == 0) {
        risultato = "buzz";
    } else {
        risultato = (i % 3 % 5 == 0);
        risultato = "fizzbuzz";
    }
    console.log(risultato);
}

