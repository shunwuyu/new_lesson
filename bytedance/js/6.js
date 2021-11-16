function bird(){
  this.name="bird";
}
function duck(){
  this.name="duck";
}
const type=(animal)=>{
  if(animal instanceof bird){
      console.log("I am a bird");
  }else if(animal instanceof duck){
      console.log("I am a duck");
  }
}
var b=new bird();
var d=new duck();
type(b);
type(d);