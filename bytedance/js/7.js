var bird={
  name:'bird',
  speak:function(){
      console.log("I am a "+this.name);
  }
}
var duck={
  name:"duck",
  speak:function(){
      console.log("I am a "+this.name);
  }
}
const type=(animal)=>{
  if(typeof animal.speak == "function"){
      animal.speak();
      return true;
  }
  return false;
}
console.log(type(bird));
console.log(type(duck));
