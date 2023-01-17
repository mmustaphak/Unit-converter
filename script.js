const lengthEl = document.getElementById("length")
const massEl = document.getElementById("mass")
const volumeEl = document.getElementById("volume")
const inputEl = document.getElementById("input-el")
const countBtn = document.getElementById("count-btn")

countBtn.addEventListener("click", function(){
    let baseNum = inputEl.value
    const baseNumLength = baseNum*3.28
    const baseNumVolume = baseNum*0.26
    const baseNumMass = Math.ceil(baseNum*2.20)

    lengthEl.textContent = `${baseNum} meters = ${baseNumLength.tofixed(2)} feet`
    massEl.textContent = `${baseNum} kilogram = ${baseNumMass.tofixed(2)} pounds`
    volumeEl.textContent = `${baseNum} liters ${baseNumVolume.tofixed(2)} gallons`
})


