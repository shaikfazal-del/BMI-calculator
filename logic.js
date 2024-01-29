let ht = document.querySelector("#height")
let wt = document.querySelector("#weight")
let out = document.querySelector(".val")
let show = document.querySelector(".showinfo")
let show2 = document.querySelector(".tips")

let feet = document.querySelector("#feet")
let meter = document.querySelector("#meter")
let output1 = document.querySelector("#output1")
let output2 = document.querySelector("#output2")
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
        show2.innerText = (`Nutrient-Rich Diet:
        Consume a well-balanced diet rich in lean proteins, whole grains, fruits, and vegetables to ensure adequate nutrition.
        Increase Caloric.

        Intake:
        Eat more frequent, smaller meals and include healthy snacks to boost overall calorie consumption.

        Strength Training:
        Incorporate resistance training exercises to build muscle mass and improve overall body composition.`)
        show2.style.color = "yellow"
        show2.style.backgroundColor = "black"
        show2.style.border = "3px solid yellow"
    }
    else if (res > 16.0 && res <= 16.9) {
        show.innerText = "Underweight (Moderate thinness)"
        show.style.color = "yellow"
        show.style.backgroundColor = "black"
        show2.innerText = (`Nutrient-Rich Diet:
        Consume a well-balanced diet rich in lean proteins, whole grains, fruits, and vegetables to ensure adequate nutrition.
        Increase Caloric.

        Intake:
        Eat more frequent, smaller meals and include healthy snacks to boost overall calorie consumption.

        Strength Training:
        Incorporate resistance training exercises to build muscle mass and improve overall body composition.`)
        show2.style.color = "yellow"
        show2.style.backgroundColor = "black"
        show2.style.border = "3px solid yellow"
    }
    else if (res > 17.0 && res < 18.4) {
        show.innerText = "Underweight (Mild thinness)"
        show.style.color = "yellow"
        show.style.backgroundColor = "black"
        show2.innerText = (`Nutrient-Rich Diet:
        Consume a well-balanced diet rich in lean proteins, whole grains, fruits, and vegetables to ensure adequate nutrition.
        Increase Caloric.

        Intake:
        Eat more frequent, smaller meals and include healthy snacks to boost overall calorie consumption.

        Strength Training:
        Incorporate resistance training exercises to build muscle mass and improve overall body composition.`)
        show2.style.color = "yellow"
        show2.style.backgroundColor = "black"
        show2.style.border = "3px solid yellow"
    }
    else if (res > 18.5 && res < 24.9) {
        show.innerText = "Normal range"
        show.style.color = "green"
        show.style.backgroundColor = "#333333"
        show2.innerText = `Balanced Diet:
        Adopt a well-balanced diet rich in fruits, vegetables, lean proteins, and whole grains. 

        Regular Physical Activity:
        Engage in regular physical activity, including both aerobic exercises (e.g., walking, jogging, swimming) and strength training, to support overall health and weight management.

        Healthy Lifestyle Habits:
        Establish and maintain healthy lifestyle habits, including adequate sleep, stress management, and mindful eating.`
        show2.style.color = "green"
        show2.style.backgroundColor = "#333333"
        show2.style.border = "3px solid green"
    }
    else if (res > 25.0 && res < 29.9) {
        show.innerText = "Overweight (Pre-obese) "
        show.style.color = "red"
        show.style.backgroundColor = "#ADD8E6"
        show2.style.border = "3px solid red"
        show2.style.backgroundColor = "#ADD8E6"
        show2.style.color = "red"
        show2.innerText = (`Balanced Diet:
        Adopt a balanced and portion-controlled diet, focusing on whole foods like fruits, vegetables, lean proteins, and whole grains while limiting processed and high-calorie foods.
    
        Regular Physical Activity:
        Engage in regular aerobic exercises like walking, jogging, or cycling, along with strength training exercises, to promote weight loss and overall health.
        
        Behavioral Changes:
        Implement mindful eating practices, manage stress, and establish healthy lifestyle habits to support long-term weight management.`)

    }
    else if (res > 30.0 && res < 34.9) {
        show.innerText = "Obese (Class I) "
        show.style.color = "red"
        show.style.backgroundColor = "#ADD8E6"
        show2.style.border = "3px solid red"
        show2.style.backgroundColor = "#ADD8E6"
        show2.style.color = "red"
        show2.innerText = `Calorie Control and Nutrient Density:
        Adopt a calorie-controlled diet with an emphasis on nutrient-dense foods, such as vegetables, lean proteins, whole grains, and fruits, to support weight loss.

        Regular Exercise Routine:
        Establish a consistent exercise routine that includes both cardiovascular activities (like brisk walking or cycling) and strength training to help burn calories and improve overall fitness.

        Behavioral Changes and Support:
        Focus on behavioral changes, including mindful eating, stress management, and seeking support from healthcare professionals, nutritionists, or support groups to facilitate long-term weight management.`
    }
    else if (res > 35.0 && res < 39.9) {
        show.innerText = "Obese (Class II) "
        show.style.color = "red"
        show.style.backgroundColor = "#ADD8E6"
        show2.style.border = "3px solid red"
        show2.style.backgroundColor = "#ADD8E6"
        show2.style.color = "red"
        show2.innerText = `Medical Consultation:
        Seek professional medical guidance to assess and address any underlying health conditions contributing to obesity. Develop a personalized plan with healthcare providers.

        Structured Weight Management Program:
        Enroll in a comprehensive weight management program that includes a balanced, calorie-controlled diet, regular exercise, and behavioral support to promote sustainable weight loss.

        Lifestyle Changes:
        Implement significant lifestyle changes, focusing on long-term habits. This includes adopting a healthy, balanced diet, increasing physical activity, and addressing factors like stress and sleep to support weight loss and overall well-being.`
    }
    else if (res > 40.0) {
        show.innerText = "Obese (Class III) "
        show.style.color = "red"
        show.style.backgroundColor = "#ADD8E6"
        show2.style.border = "3px solid red"
        show2.style.backgroundColor = "#ADD8E6"
        show2.style.color = "red"
        show2.innerText = `Medical Supervision:
        Seek immediate and ongoing medical supervision to address the severe health risks associated with Class-3 obesity. Work closely with healthcare professionals, including doctors and dietitians, to create a tailored plan.

        Multidisciplinary Approach:
        Engage in a multidisciplinary approach that combines dietary intervention, regular exercise, and potential medical interventions under the guidance of healthcare experts to achieve significant and sustained weight loss.

        Behavioral and Emotional Support:
        Prioritize behavioral and emotional support, including therapy or counseling, to address potential underlying issues contributing to obesity. Emotional well-being is crucial for making and maintaining positive lifestyle changes.`
    }
}

const feet_cm = () => {
    let feetval = feet.value
    use1 = feetval * 30.48
    output1.innerText = `${(use1.toFixed(1))}cm`
}
const meter_cm = () => {
    let meterval = meter.value
    use2 = meterval * 100
    output2.innerText = `${(use2.toFixed(1))}cm`
}
const nothing = () => {
    let val_1 = ht.value = " "
    let val_2 = wt.value = " "
}
const nothing2 = (output1, output2) => {
    let val__1 = feet.value = " "
    let val__2 = meter.value = " "
}