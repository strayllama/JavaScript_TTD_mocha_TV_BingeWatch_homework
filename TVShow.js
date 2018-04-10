const TVShow = function (name, seasons) {
  this.name = name;
  this.seasons = seasons;
}

module.exports = TVShow;

TVShow.prototype.numberOfSeasons = function () {
  return this.seasons.length;
}

TVShow.prototype.fullDuration = function () {
  let totalDuration = 0;

  for (var i = 0 ; i < this.numberOfSeasons() ; i++ ) {
    totalDuration += this.seasons[i].duration;
  }

  // for (season of this.seasons) {
  //   totalDuration += season.duration;
  // }

  return totalDuration;
}
