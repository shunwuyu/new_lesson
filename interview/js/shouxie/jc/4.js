function object(o){
	function F(){}
	F.prototype = o;
	return new F();
}
// 可能带来一些共享数据的问题
var person = {
	friends : ["Van","Louis","Nick"]
};
var anotherPerson = object(person);
anotherPerson.friends.push("Rob");
var yetAnotherPerson = object(person);
yetAnotherPerson.friends.push("Style");
alert(person.friends);//"Van,Louis,Nick,Rob,Style"
