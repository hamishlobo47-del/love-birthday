function timeElapse(date){
    var current = new Date();
    var seconds = (current - date) / 1000;
    var days = Math.floor(seconds / (3600 * 24));
    seconds %= 3600 * 24;
    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    var minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    document.getElementById("clock").innerHTML =
        days + " days " +
        hours + " hours " +
        minutes + " minutes " +
        seconds + " seconds";
}
