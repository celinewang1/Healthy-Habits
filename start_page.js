function done(){
    var waterAmount = document.getElementById("waterInput").value;
    /*console.log(waterAmount);*/
    var exerciseAmount = document.getElementById("exerciseInput").value;
    /*console.log(exerciseAmount);*/
    var waterList = [];
    var exerciseList = [];
    waterList.push(waterAmount);
    exerciseList.push(exerciseAmount);
    console.log(waterList);
    console.log(exerciseList);
<<<<<<< HEAD
    url="https" + "://celinewang1.github.io/Healthy-Habits/tab_page.html?wid=" + encodeURIComponent(waterAmount) + "eid=" + encodeURIComponent(exerciseAmount);
=======
    url="https://celinewang1.github.io/Healthy-Habits/tab_page.html?wid=" + encodeURIComponent(waterAmount) + "eid=" + encodeURIComponent(exerciseAmount);
>>>>>>> 163bc04bba3ba551b5b86ed8df42ec3023639feb
    window.location.href = url;
}
