const assert = require('assert');
const TVShow = require('../TVShow.js');
const Season = require('../Season.js');


describe('TVShow', function () {
  let tvShow;
  let season1;
  let season2;
  let seasons;

  beforeEach( function () {
    season1 = new Season(1, 320);
    season2 = new Season(2, 350);
    seasons = [season1, season2]
    tvShow = new TVShow('The Wire', seasons);

  });

  it('should have a name', function () {
    const result = tvShow.name;
    assert.strictEqual(result, 'The Wire');
  });

  it('should have a collection of seasons', function () {
    const result = tvShow.numberOfSeasons();
    assert.strictEqual(result,2);
  });

  it('should be able to calculate duration of all seasons combined', function () {
    const result = tvShow.fullDuration();
    assert.strictEqual(result, 670);
  });

}); // end of TVShow describe
