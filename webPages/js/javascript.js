function date() {
      var currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear();
  document.getElementById('date').innerHTML =day + "/" + month + "/" + year;
}

function time() {
    	var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

	if (minutes < 10) {
	 minutes = "0" + minutes;
  }

	document.getElementById('time').innerHTML =hours + ":" + minutes;
}