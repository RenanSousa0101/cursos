import calculate from "../Projeto/calculate.js"
import copyToClipboard from "../Projeto/copyToClipboard.js"
import { handleButtonPress, handleClear, handleTyping } from "../Projeto/keyHandlers.js"
import switchTheme from "../Projeto/themeSwitcher.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.querySelector("#clear").addEventListener("click", handleClear)
document.querySelector("#input").addEventListener("keydown", handleTyping)
document.querySelector("#equal").addEventListener("click", calculate)
document.querySelector("#copyToClipboard").addEventListener("click", copyToClipboard)
document.querySelector("#themeSwitcher").addEventListener("click", switchTheme)


