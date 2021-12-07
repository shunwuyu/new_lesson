// if (status == 1) {
//   console.log('processing');
// } else if (status == 2) {
//   console.log('fail');
// } else if (status == 3) {
//   console.log('success');
// } else if (status == 4) {
//   console.log('cancel');
// } else {
//   console.log('other');
// }

// switch (status) {
//   case 1:
//     console.log('processing');
//     break;
//   case 2:
//     console.log('fail');
//     break;
//   case 3:
//     console.log('success');
//     break;
//   case 4:
//     console.log('cancel');
//     break;
//   default:
//     console.log('other');
//     break;
// }

const actions = {
  1: 'processing',
  2: 'fail',
  3: 'success',
  4: 'cancel',
  default: 'other',
};
let status = 12;
console.log(actions[status] || actions.default);