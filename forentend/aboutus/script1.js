function loadHTML(elementId, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}


loadHTML('header-container', 'header1.html');
loadHTML('achieve-container', 'achieve1.html');
loadHTML('footer-container', 'footer1.html');
loadHTML('review-container', 'review1.html');
loadHTML('moto-container', 'moto.html');