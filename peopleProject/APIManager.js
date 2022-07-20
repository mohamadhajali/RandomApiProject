//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
    this.Quote = {};
    this.bocon = {};
    this.pokemon = {};
  }
  getMainInfo = function () {
    const rander = new Renderer();
    $.ajax({
      url: "https://randomuser.me/api/?results=7",
      method: "GET",
      success: (data) => {
        this.data = data.results;
      },
      error: () => {
        alert("error");
      },
    });
  };
  getinfo() {
    return this.data;
  }

  getFrinds = function () {
    $.ajax({
      url: "https://randomuser.me/api/?results=7",
      method: "GET",
      success: (data) => {
        this.data = data.results;
      },
      error: () => {
        alert("error");
      },
    });
  };
  getData = function () {
    return this.data;
  };
  getQuoteFromApi = function () {
    $.ajax({
      url: "https://api.kanye.rest/",
      method: "GET",
      success: (data) => {
        this.Quote = data;
      },
      error: () => {
        alert("error");
      },
    });
  };
  getQuote() {
    return this.Quote;
  }
  getPokemonFromApi = function () {
    $.ajax({
      url: "https://pokeapi.co/api/v2/berry-firmness/5/",
      method: "GET",
      success: (data) => {
        this.pokemon = data.berries;
      },
      error: () => {
        alert("error");
      },
    });
  };
  getPokemon() {
    return this.pokemon;
  }
  getBoconFromApi = function () {
    $.ajax({
      url: "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1",
      method: "GET",
      success: (data) => {
        this.bocon = data;
      },
      error: () => {
        alert("error");
      },
    });
  };
  getBocon() {
    return this.bocon;
  }
}
