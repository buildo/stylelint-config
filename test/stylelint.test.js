const stylelint = require('stylelint');
const rules = require('../rules');

const log = (x) => console.log(x);

describe('Stylelint', () => {

  it('should have no error style errors', () => {
    return stylelint.lint({
      config: rules,
      files: "./test/scss/*.scss"
    }).then(res => {
      if (res.errored === true) {
        res.results.filter(r => r.errored).forEach(r => {
          console.log(r.warnings);
        });
        throw new Error('Expected no error!');
      }
    });
  });

});
