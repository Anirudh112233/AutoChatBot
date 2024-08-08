document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('queryButton');

    // Toggle Button Color
    button.addEventListener('click', () => {
        button.classList.toggle('is-black');
        button.classList.toggle('is-aqua');
    });

    document.getElementById('queryButton').addEventListener('click', () => {
        const query = document.getElementById('queryInput').value;
        chrome.runtime.sendMessage({ action: 'queryGemini', query }, (response) => {
            if (response.result) {
                document.getElementById('result').textContent = response.result;
            } else if (response.error) {
                console.error(response.error);
            }
        });
    });
});
