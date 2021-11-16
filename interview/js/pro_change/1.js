let user = {name: '111'};
Object.defineProperty(user,'name',{
  set:function(key,value){
    // 这也是 Vue 的原理
    console.log('-----------')
    this.key = value
  }
})

user.name = '2222'
console.log(user.name)