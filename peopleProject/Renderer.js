const Renderer = class {
  renderInfo = function (data) {
    console.log(data[1]);
    $(".user-container").empty();
    const source = $("#first-templet").html();
    const template = Handlebars.compile(source);
    const newHTML = template({
      name: `${data.name.title} ${data.name.first} ${data.name.last}`,
      img: data.picture.large,
      location: `${data.location.city} ${data.location.state}`,
    });
    $(".user-container").append(newHTML);
  };
  renderFrinds = function (data) {
    const source = $("#secound-templet").html();
    const template = Handlebars.compile(source);
    const newHTML = template({
      name: `${data.name.title} ${data.name.first} ${data.name.last}`,
    });

    $(".friends-container").append(newHTML);
  };
  renderQuote = function (data) {
    const source = $("#thierd-templet").html();
    const template = Handlebars.compile(source);
    const newHTML = template({
      quoto: data.quote,
    });

    $(".quote-container").append(newHTML);
  };
  renderPokemon = function (data) {
    const source = $("#fifth-templet").html();
    const template = Handlebars.compile(source);
    const newHTML = template({
      pokemon: data.name,
    });

    $(".pokemon-container").append(newHTML);
  };
  renderBocon = function (data) {
    const source = $("#forth-templet").html();
    const template = Handlebars.compile(source);
    const newHTML = template({
      bocon: data,
    });

    $(".content-container").append(newHTML);
  };
};
