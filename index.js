const names = ['Ricky', 'Peter', 'Jane', 'Tyler', 'John', 'Kate', 'Tess', 'Cat'];
const occupations = ['Chef', 'Actor', 'Sales', 'Accountant', 'Plumber', 'Self-Employed','Nurse', 'Doctor'];
const rates = ['10', '20', '30', '40', '50', '60', '70', '80', '90'];
const maxWriters = 20;

const freeLanceWriters = [
  {
    name: 'Alice',
    occupation: 'Writer',
    startingPrice: 30
  },
  {
    name: 'Bob',
    occupation: 'Teacher',
    startingPrice: 50
  },
  {
    name: 'Carol',
    occupation: 'Programmer',
    startingPrice: 70
  }
]

render();

startCounter(1);

function render() {
  let sum = 0;
  const avgPriceEl = document.querySelector("#average-price");
  const freeLanceWritersEl = document.querySelector("tbody");
  const template = freeLanceWriters.map(writer => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = writer.name;
    const td2 = document.createElement("td");
    td2.textContent = writer.occupation;
    const td3 = document.createElement("td");
    td3.textContent = writer.startingPrice;
    tr.append(td1, td2, td3);
    sum += parseInt(writer.startingPrice);
    return tr;
  });
  freeLanceWritersEl.replaceChildren(...template);
  avgPriceEl.innerHTML = sum/freeLanceWriters.length;
}

function addWriter() {
  const name = names[Math.floor(Math.random()*names.length)];
  const occupation = occupations[Math.floor(Math.random()*occupations.length)];
  const rate = rates[Math.floor(Math.random()*rates.length)];
  const startingPrice = parseInt(rate);
  console.log(name + ':' + occupation + ':' + rate);
  freeLanceWriters.push({name, occupation, startingPrice});
  render();
}

function startCounter(counter){
  if(counter < 20){
    setTimeout(function(){
      counter++;
      console.log(counter);
      setTimeout(addWriter(), 10000);
      startCounter(counter);
    }, 1000);
  }
}
