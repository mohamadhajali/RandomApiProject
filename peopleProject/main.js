const apiMang = new APIManager();
const rander = new Renderer();
$("#load").click(function () {
  apiMang.getMainInfo();
  apiMang.getFrinds();
  apiMang.getQuoteFromApi();
  apiMang.getBoconFromApi();
  apiMang.getPokemonFromApi();
});
$("#display").click(function () {
  $(".friends-container").empty();
  $(".quote-container").empty();
  $(".content-container").empty();
  let person = apiMang.getinfo();

  rander.renderInfo(person[Math.floor(Math.random() * 7)]);
  for (let i = 1; i < person.length; i++) {
    rander.renderFrinds(person[Math.floor(Math.random() * 7)]);
  }
  apiMang.getQuoteFromApi();
  apiMang.getBoconFromApi();
  let quote = apiMang.getQuote();
  rander.renderQuote(quote);
  let bocon = apiMang.getBocon();
  rander.renderBocon(bocon);
  let pkemon = apiMang.getPokemon();
  console.log(pkemon[Math.floor(Math.random() * 7)].name);
  rander.renderPokemon(pkemon[0].name);

  for (let i = 0; i < pkemon.length; i++) {}
});
