function done(){
    var waterAmount = document.getElementById("waterInput").value;
    var exerciseAmount = document.getElementById("exerciseInput").value;
    var waterList = [];
    var exerciseList = [];
    waterList.push(waterAmount);
    exerciseList.push(exerciseAmount);
    console.log(waterList);
    console.log(exerciseList);
    window.location.href = "tab_page.html";
}
