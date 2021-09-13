//创建链表节点
function Node(name){
  this.name=name;
  this.next=null;
}
//链表类
function Ilist(){
  this.head=new Node("head");
  this.head.next=this.head;
  this.find=find;
  this.insert=insert;
  this.display=display;
  this.findPrevious=findPrevious;
  this.remove=remove;
  this.count=count;
  this.back=back;
}
//根据节点内容找到当前节点
function find(ele){
  var currentNode=this.head;
  while(currentNode.name!=ele&&!(currentNode.next.name=="head")){
      currentNode=currentNode.next;
  }
  return currentNode;
}
//根据节点内容找到当前节点的前一个节点
function findPrevious(ele){
  var currentNode=this.head;
  while((currentNode.next.name!=ele)&&!(currentNode.next==null)&&!(currentNode.next.name=="head")){
      currentNode=currentNode.next;
  }
  return currentNode;
}
//在内容为ele的节点后插入内容为newEle的新节点
function insert(newEle,ele){
  var node=new Node(newEle);
  var oldNode=this.find(ele);
  node.next=oldNode.next;
  oldNode.next=node;
}
//删除节点
function remove(ele){
  var preNode=this.findPrevious(ele);
  if(!(preNode.next==null)){
      preNode.next=preNode.next.next;
  }
}
//显示链表所有节点的内容
function display(){
  var currNode=this.head;
  while(!(currNode.next==null)&&!(currNode.next.name=="head")){
      console.log(currNode.next.name, currNode.next, '---------');
      currNode=currNode.next;
  }
}
//计算链表节点个数
function count(){
  var qty=0;
  var currNode=this.head;
  while(!(currNode.next==null)&&!(currNode.next.name=="head")){
      qty++;
      currNode=currNode.next;
  }
  return qty;
}
//内容为ele的节点向后移动step步
function back(ele,step){
  var preNode=this.findPrevious(ele);
  var currNode=preNode.next;
  var prebackNode=currNode;
  for(i=1;i<step;i++){
      prebackNode=prebackNode.next;
  }
  var backnode=prebackNode.next;
  preNode.next=currNode.next;
  currNode.next=prebackNode.next.next;
  backnode.next=currNode;   
}
//计算最终的幸存者,manQty为参加游戏的人数,killNo为被干掉者编号
function survive(manQty,killNo){
  var people=new Ilist();
  for(i=1;i<=manQty;i++){
      var person="位置"+i;
      var prePerson;
      if(i==1){
          prePerson="head";
      }else{
          prePerson="位置"+(i-1);
      }
      people.insert(person,prePerson);      
  }
  people.display();
  console.log('游戏总人数:'+people.count());
  console.log('开始游戏');
  while(people.count()>=killNo){
      var killedNode=people.head;
      for(i=1;i<=killNo;i++){
          killedNode=killedNode.next;
      }
      var killedPerson=killedNode.name;
      var killedPreNode=people.findPrevious(killedPerson);
      people.back("head",killNo);
      people.remove(killedPerson);
      console.log('干掉:'+killedPerson);
      console.log('还剩:'+people.count()+"人");        
  }
  console.log('最终幸存'+people.count()+"人");
  people.display();
}

console.log(survive(40, 3))