let letters = ["a", "b", "c", "d", "e", "f",
 "g", "h", "i", "j", "k", "l", "m", "n", "o",
 "p", "q", "r", "s", "t", "u", "v", "w", "x",
 "y", "z"
]


function generateRandomly() {
 let password = " "
 for (let i = 0; i < 8; i++) {
  password += letters[Math.floor(Math.random() *
   26)]
 }
 document.getElementById("Pass").textContent =
  password
}
