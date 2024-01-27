let ht = document.querySelector("#height")
let wt = document.querySelector("#weight")
let out = document.querySelector(".val")
let show = document.querySelector(".showinfo")

const bmi = () => {
    let val1 = wt.value
    let val2 = ht.value
    res = val1 / ((val2 / 100) ** 2);
    out.innerText = (res.toFixed(2))
    info(res)
    out.style.color = ""
}

const info = (res) => {
    if (res <= 16.0) {
        show.innerText = "Underweight (Severe thinness)"
        show.style.color = "yellow"
        show.style.backgroundColor = "black"
    }
    else if (res > 16.0 && res <= 16.9) {
        show.innerText = "Underweight (Moderate thinness)"
        show.style.color = "yellow"
        show.style.backgroundColor = "black"
    }
    else if (res > 17.0 && res < 18.4) {
        show.innerText = "Underweight (Mild thinness)"
        show.style.color = "yellow"
        show.style.backgroundColor = "black"
    }
    else if (res > 18.5 && res < 24.9) {
        show.innerText = "Normal range"
        show.style.color = "green"
        show.style.backgroundColor = "#333333"
    }
    else if (res > 25.0 && res < 29.9) {
        show.innerText = "Overweight (Pre-obese) "
        show.style.color = "red"
        show.style.backgroundColor = "#ADD8E6"
    }
    else if (res > 30.0 && res < 34.9) {
        show.innerText = "Obese (Class I) "
        show.style.color = "red"
        show.style.backgroundColor = "#ADD8E6"
    }
    else if (res > 35.0 && res < 39.9) {
        show.innerText = "Obese (Class II) "
        show.style.color = "red"
        show.style.backgroundColor = "#ADD8E6"
    }
    else if (res > 40.0) {
        show.innerText = "Obese (Class III) "
        show.style.color = "red"
        show.style.backgroundColor = "#ADD8E6"
    }
}
