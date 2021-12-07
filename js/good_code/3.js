const actions = new Map([
  [/^sign_[1-3]$/, () => 'A'],
  [/^sign_5$/, () => 'B'],
  
]);

let status = 2
const action = [...actions].filter(([key, value]) => key.test(`sign_${status}`));

action.forEach(([key, value]) => console.log(value()));
// Object  entries
// console.log(...actions);