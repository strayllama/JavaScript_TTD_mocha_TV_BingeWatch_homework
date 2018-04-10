const BingeWatch = function () {
}
module.exports = BingeWatch;

BingeWatch.prototype.daysToWatch = function (hoursADay, tvShow) {
  var numberOfDays = 0;
  var totalHours = tvShow.fullDuration();

  numberOfDays = Math.round(totalHours / hoursADay);

  return numberOfDays;
}
