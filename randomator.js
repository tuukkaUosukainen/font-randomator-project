 // Get api key from: https://developers.google.com/fonts/docs/developer_api
  const API_KEY = key;  // <-- Add YOUR-API-KEY
  const FONT_URL = 'https://www.googleapis.com/webfonts/v1/webfonts?key=' + API_KEY;
  const fonts = $.ajax({
      dataType: "json",
      url: FONT_URL,
      async: false,
  });

  randomize();
  setInterval(randomize, 1000 * 10);

function randomize() {

  let number = 0 + Math.floor(Math.random() * fonts.responseJSON.items.length);
  let randomFontFamily = fonts.responseJSON.items[number].family;
  let linkUrl = '<link href="https://fonts.googleapis.com/css?family=' + randomFontFamily + '" rel="stylesheet">';
  $("body").css('font-family', randomFontFamily);

  $('head').append(linkUrl);
  $('p').remove();
  $('body').append(
    '<p class="underline">Your current font: ' + randomFontFamily + '</p>'
  );

}
