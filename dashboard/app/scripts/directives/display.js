'use strict';
// Display DIRECTIVE
// Description: Define 2 directives in the app: cardDisplay and listDisplay.
// First one is for the card display and second for list display.
app.directive('cardDisplay',function(){
  return{
    templateUrl: "../templates/card.html"
  };
});

app.directive('listDisplay',function(){
  return{
    templateUrl: "../templates/list.html"
  };
});
