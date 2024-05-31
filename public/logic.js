document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('result').innerHTML = 'Click anywhere to see the event object';
    document.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('result').innerHTML += e;
    });
});