let timer = null
function interval(func, wait){
    let interv = function(){
        func.call(null);
        timer=setTimeout(interv, wait);
    };
    timer= setTimeout(interv, wait);
 }

 interval(function() {
   console.log('------')
 }, 1000)

 if (timer) {
  window.clearSetTimeout(timer);
  timer = null;
}