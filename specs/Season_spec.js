const assert = require('assert');
const Season = require('../Season.js');


describe('Season', function () {
  let season1;
  let season2;

  beforeEach( function () {
    season1 = new Season(1, 320);
    season2 = new Season(2, 350);
  });

  it('should have a number', function () {
    const result = season1.number;
    assert.strictEqual(result, 1);
  });

  it('should have a duration', function () {
    const result = season2.duration;
    assert.strictEqual(result, 350);
  });

}); // end of Season describe
