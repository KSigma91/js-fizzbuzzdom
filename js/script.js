// creo una lista per i numeri
const ul = document.querySelector ("ul.list");
// const li = document.createElement ('li');

// numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    console.log("numero: " + i);

    /*
      se ci sono multipli di 3 stampo Fizz
      se ci sono multipli di 5 stampo Buzz
      se ci sono sia multipli di 3 e che di 5 stampo FizzBuzz
    */
    if ((i % 3 === 0) && (i % 5 === 0)) {
        const element = `<li class="box fizz-buzz">FizzBuzz</li>`;
        ul.innerHTML += element;
    } else if (i % 3 === 0) {
        const element = `<li class="box fizz">Fizz</li>`;
        ul.innerHTML += element;
    } else if (i % 5 === 0)  {
        const element = `<li class="box buzz">Buzz</li>`;
        ul.innerHTML += element;
    } else {
        const element = `<li class="box number">${i}</li>`;
        ul.innerHTML += element;
    }

    console.log(ul);

    // document.getElementById("mio_id").innerHTML = ;
}

