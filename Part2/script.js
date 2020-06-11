
const id = document.getElementById('id')
const color = document.getElementById('color')
function setCard() {
  const card = document.getElementById(id.value)
  card.style.color = color.value
}