window.addEventListener('DOMContentLoaded', (event) => {
    const banner = document.getElementById('banner');
    const navbar = document.getElementById('navbar');

    function adjustPadding() {
        const bannerHeight = banner.offsetHeight;
        if (navbar.classList.contains('fixed-top')) {
            document.body.style.paddingTop = `${bannerHeight}px`;
        } else {
            document.body.style.paddingTop = '0';
        }
    }

    adjustPadding();

    window.addEventListener('resize', adjustPadding);
});

function nextQuestion(currentQuestion) {
    const currentElement = document.getElementById(`question${currentQuestion}`);
    const nextElement = document.getElementById(`question${currentQuestion + 1}`);
    
    if (currentElement && nextElement) {
        currentElement.classList.add('d-none');
        nextElement.classList.remove('d-none');
    }
}

function showResult() {
    const selectedClub = document.getElementById('club').value;
    const resultText = document.getElementById('resultText');
    const clubLink = document.getElementById('clubLink');

    let clubName = '';
    let clubPage = '#';

    switch (selectedClub) {
        case 'science':
            clubName = 'Science Club';
            clubPage = 'science-club.html';
            break;
        case 'art':
            clubName = 'Art Club';
            clubPage = 'art-club.html';
            break;
        case 'music':
            clubName = 'Music Club';
            clubPage = 'music-club.html';
            break;
        case 'sports':
            clubName = 'Sports Club';
            clubPage = 'sports-club.html';
            break;
    }

    resultText.textContent = `Based on your preferences, we suggest you join the ${clubName}.`;
    clubLink.href = clubPage;

    document.getElementById('surveyForm').classList.add('d-none');
    document.getElementById('result').classList.remove('d-none');
}