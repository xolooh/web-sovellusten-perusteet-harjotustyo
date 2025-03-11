let kavijalaskuri = localStorage.getItem('kavijalaskuri') || 0;

function updateCounter() {
    const counterElement = document.getElementById('laskuri');
    counterElement.textContent = kavijalaskuri;
}
function incrementCounter() {
    kavijalaskuri++;
    localStorage.setItem('kavijalaskuri', kavijalaskuri);
    updateCounter();
}
incrementCounter();