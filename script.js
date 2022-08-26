function data() {
    let name = document.getElementById("name")
    let lastName = document.getElementById("lastName")
    let birth = document.getElementById("birth")
    let optionChosen = document.getElementById("course")
     
    let answer = document.getElementById("answer")

    if(name.value.length == 0 || lastName.value.length == 0 || birth.value.length == 0){
        alert('[ERRO] Please, check the data and try again.')
    }else{
        answer.innerHTML =`Congratulations <strong>${name.value} ${lastName.value}</strong>!\n You are <strong>${(2022 - birth.value)}</strong> years and You will study <strong>${optionChosen.value}</strong>.` 
} 

}



