const postcss = require('postcss');

const plugin = (options) => {
  const pxReg = /(\d+)px/ig;
  return {
      postcssPlugin: 'postcss-simple-px2rem',
      Declaration (decl) {
          decl.value = decl.value.replace(pxReg, (matchStr, num) => {
              return num/options.base + 'rem';
          });
      }
  }
}

postcss([plugin({
  base: 100
})]).process('a { font-size: 20px; }').then(result => {
  console.log(result.css);
})