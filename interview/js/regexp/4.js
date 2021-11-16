// var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
var regex = /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/g;
var string = "#ffbbad #Fc01DF #FFF #ffE";
console.log( string.match(regex) ); 
// => ["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]

