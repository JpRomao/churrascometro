function calculate() {
  const hours = Math.round(document.getElementById("duration").value);
  const adults = Math.round(document.getElementById("adults").value);
  const beer = Math.round(document.getElementById("beer").value);
  const childs = Math.round(document.getElementById("childs").value);
  const results = document.getElementById("results");

  const meatByPerson = hours > 5 ? 600 : 450;
  const beerByPerson = hours > 5 ? 1800 : 1200;
  const drinkByPerson = hours > 5 ? 1600 : 1200;

  if(beer > adults) {
    results.style.color = "#F30000";
    return results.innerHTML = "Verifique o tanto de pessoas que bebem. Não pode ser maior que o número de adultos.";
  }

  const totalMeat = (((meatByPerson * adults) + ((meatByPerson / 2) * childs)) / 1000).toFixed(3);
  const totalBeer = Math.ceil(((beerByPerson * beer) / 350));
  const totalDrinks = (((drinkByPerson * adults) + ((drinkByPerson / 2) * childs)) / 1000).toFixed(3);

  const meatKg = totalMeat.split('.')[0];
  const meatG = totalMeat.split('.')[1];

  const drinksL = totalDrinks.split('.')[0];
  const drinksMl = totalDrinks.split('.')[1];

  results.style.color = "#008900";
  return (results.innerHTML =
    `
    <ul>
      <li>${meatKg > 0 ? `${meatKg}kg` : ''} ${ meatG > 0 ? `${meatG}g` : '' } de carne.</li>
      <li>${totalBeer} latas de cerveja</li>
      <li>${drinksL > 0 ? `${drinksL}L` : ''} ${ drinksMl > 0 ? `${drinksMl}ml` : '' } de bebidas(Refrigerante, água, suco).</li>
     </ul>`);
}