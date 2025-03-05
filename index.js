const cardOne = document.getElementById('cardOne');

const cardTwo = document.getElementById('cardTwo');

const cardThree = document.getElementById('cardThree');

const cardFour = document.getElementById('cardFour');

cardOne.onclick = () => {
    let desc = document.getElementById('answerOne');
    let plusIcon = document.getElementById('cardOnePlus');
    let minusIcon = document.getElementById('cardOneMinus');

    if (desc.style.display === "block"){
        desc.style.display = "none";
        plusIcon.style.display = "block";
        minusIcon.style.display = "none";
    }
    else{
        desc.style.display = "block";
        plusIcon.style.display = "none";
        minusIcon.style.display = "block";
    }
}

cardTwo.onclick = () => {
    let desc = document.getElementById('answerTwo');
    let plusIcon = document.getElementById('cardTwoPlus');
    let minusIcon = document.getElementById('cardTwoMinus');

    if (desc.style.display === "block"){
        desc.style.display = "none";
        plusIcon.style.display = "block";
        minusIcon.style.display = "none";
    }
    else{
        desc.style.display = "block";
        plusIcon.style.display = "none";
        minusIcon.style.display = "block";
    }
}

cardThree.onclick = () => {
    let desc = document.getElementById('answerThree');
    let plusIcon = document.getElementById('cardThreePlus');
    let minusIcon = document.getElementById('cardThreeMinus');

    if (desc.style.display === "block"){
        desc.style.display = "none";
        plusIcon.style.display = "block";
        minusIcon.style.display = "none";
    }
    else{
        desc.style.display = "block";
        plusIcon.style.display = "none";
        minusIcon.style.display = "block";
    }
}

cardFour.onclick = () => {
    let desc = document.getElementById('answerFour');
    let plusIcon = document.getElementById('cardFourPlus');
    let minusIcon = document.getElementById('cardFourMinus');

    if (desc.style.display === "block"){
        desc.style.display = "none";
        plusIcon.style.display = "block";
        minusIcon.style.display = "none";
    }
    else{
        desc.style.display = "block";
        plusIcon.style.display = "none";
        minusIcon.style.display = "block";
    }
}