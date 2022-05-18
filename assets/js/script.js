function linkDelay(url) {
    setTimeout(() => {
        let mainBox = document.getElementById('content');

        mainBox.classList.add('check');
    }, 500);

    setTimeout(() => {
       window.location = url 
    }, 1500);
}