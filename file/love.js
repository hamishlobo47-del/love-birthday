$(function () {
    var together = new Date();
    together.setFullYear(2023, 0, 1); // CHANGE DATE HERE
    together.setHours(0);
    together.setMinutes(0);
    together.setSeconds(0);
    together.setMilliseconds(0);

    setInterval(function () {
        timeElapse(together);
    }, 1000);
});
