function done(){
    var waterAmount = document.getElementById("waterInput").innerHTML;
    var exerciseAmount = document.getElementById("exerciseInput").innerHTML;
    var waterList = []
    var exerciseList = []
    waterList.push(waterAmount)
    exerciseList.push(exerciseAmount)
    console.log(waterList)
    console.log(exerciseList)
    window.location.href = "tab_page.html"
}
