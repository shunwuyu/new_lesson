// Decorator Pattern 装饰者模式
// MacBook，加内存（Memory函数装饰）增加75美元，雕刻（Engraving函数装饰）增加200美元，买保险（Insurance函数装饰）增加250美元。
class MacBook {
  cost() {
      return 997;
  }
  screenSize() {
      return 11.6;
  }
}
function Memory(macbook) {
  let v = macbook.cost();
  macbook.cost = function() {
      return v + 75;
  };
}

function Engraving(macbook) {

  let v = macbook.cost();
  macbook.cost = function() {
      return v + 200;
  };
}

function Insurance(macbook) {
  let v = macbook.cost();
  macbook.cost = function() {
      return v + 250;
  };
}

let mb = new MacBook();

Memory(mb);
Engraving(mb);
Insurance(mb);
console.log(mb.cost());// Outputs: 1522
console.log(mb.screenSize());