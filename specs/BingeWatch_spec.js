const assert = require('assert');
const BingeWatch = require('../BingeWatch.js');
const TVShow = require('../TVShow.js');
const Season = require('../Season.js');

describe('BingeWatch', function () {
  let tvShow;
  let season1;
  let season2;
  let seasons;
  let bingeWatcher

  beforeEach( function () {
    season1 = new Season(1, 320);
    season2 = new Season(2, 350);
    seasons = [season1, season2]
    tvShow = new TVShow('The Wire', seasons);
    bingeWatcher = new BingeWatch();
  });

  it('should calculate number of days to watch a show', function () {

    const result = bingeWatcher.daysToWatch(7, tvShow);
    assert.strictEqual(result, 96);
  });


}); // end describe BingeWatch
