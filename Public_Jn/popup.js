$('label.popup-toggle > input').on('change', (e) => {
    let content = e.currentTarget.parentElement.parentElement.querySelector('.popup-content');
    if(e.currentTarget.checked) {
        content.classList.remove('hide');
        content.classList.add('show');
    } else {
        content.classList.remove('show');
        content.classList.add('hide');
    }
});