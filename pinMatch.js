//** notMatch & Match Display None */
document.getElementById('notMatch').style.display = 'none'
document.getElementById('match').style.display = 'none'


//** Generate Pin Click Handler */ 
function generatePinClickHandler() {
    //** Generate Pin Btn Color Change */
    document.getElementById('generateBtn').style.backgroundColor = '#343A40'
    document.getElementById('generateBtn').style.borderColor = '#57626d'
    document.getElementById('generateBtn').style.borderColor = '#57626d'

    //** Generate Pin Text Change */
    document.getElementById('generateBtn').textContent = 'Pin Generated'

    const generateInput = document.getElementById('generateInput')
    const pinRandom = Math.floor(1000 + Math.random() * 9000);
    generateInput.value = pinRandom

    //** notMatch & Match Display None */
    document.getElementById('notMatch').style.display = 'none'
    document.getElementById('match').style.display = 'none'
}


//** Number Handler */
function numberClickHandler(Btn) {
    const btn = document.getElementById(Btn)
    const btnNumber = parseInt(btn.innerText)

    const inputBox = document.getElementById("inputBox").value
    document.getElementById("inputBox").value = inputBox + btnNumber;
}


//** All Clear Handler */
function allClearHandler() {
    document.getElementById("inputBox").value = ''
}


//** Single Clear Handler */
function singleClearHandler() {
    const inputBox = document.getElementById('inputBox'),
        deleteLastInput = inputBox.value;
    inputBox.value = deleteLastInput.substring(0, deleteLastInput.length - 1);
}


//** Submit Handler */
function pinMatcherSubmit() {
    //** generate Input Value */
    const generateInput = document.getElementById('generateInput').value

    //** Number Input Value */
    const inputBox = document.getElementById('inputBox').value

    if (inputBox == '' || generateInput == '') {
        alert('Attention: Your Input Field is Empty')
    } else {
        if (generateInput == inputBox) {
            document.getElementById('match').style.display = 'block'
            document.getElementById('notMatch').style.display = 'none'
            document.getElementById('generateInput').value = ''
            document.getElementById('inputBox').value = ''
            document.getElementById('generateBtn').style.backgroundColor = '#1EB900'
            document.getElementById('generateBtn').style.borderColor = '#1e8c08'

            //** Generate Pin Text Change */
            document.getElementById('generateBtn').textContent = 'Pin Match'
        } else {
            document.getElementById('notMatch').style.display = 'block'
            document.getElementById('match').style.display = 'none'
            document.getElementById('generateBtn').style.backgroundColor = '#E81700'
            document.getElementById('generateBtn').style.borderColor = '#a01c10'

            //** Generate Pin Text Change */
            document.getElementById('generateBtn').textContent = "Wrong Pin"
        }

        submitTryLeft()
    }


}


//** Submit Handler */
let submitBtnPress = 0
const tryLeft = document.getElementById('tryLeft')

function submitTryLeft() {
    submitBtnPress++
    if (submitBtnPress == 1) {
        tryLeft.innerText = "2 try left"
    }
    if (submitBtnPress == 2) {
        tryLeft.innerText = "1 try left"
    }
    if (submitBtnPress == 3) {
        tryLeft.innerText = "Sorry, Dear Your 3 Time Left is Over! "
        document.getElementById('submitBtn').style.display = 'none'
    }
}