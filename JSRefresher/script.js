function custom(element) {
    if (element.innerText == 'Blue Pill') {
        alert("The story ends, you wake up in your bed and believe whatever you want to believe.")
    }

    else if (element.innerText == 'Red Pill') {
        alert("You stay in wonderland, and I show you how deep the rabbit hole goes.")
    }
}

function out(element) {
    if (element.innerText == 'Blue Pill') {
        element.innerText = 'Red Pill';
        element.style.backgroundColor = 'red';
        return
    }

    if (element.innerText =='Red Pill') {
        element.innerText = 'Blue Pill';
        element.style.backgroundColor = 'blue';
        return
    }
}

