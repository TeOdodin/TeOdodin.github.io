$('button.show-card').on('click', (e) => {
    let content = e.currentTarget.parentElement.querySelector('.card-content-filter');
    if(e.currentTarget.classList.contains('toggle-hide')) {
        $(content).fadeIn();
    }
});

$('button.close-card').on('click', (e) => {
    let content = e.currentTarget.parentElement.parentElement;
    $(content).fadeOut();
});

$('button.show-article').on('click', (e) => {
    let content = e.currentTarget.parentElement.querySelector('.article-content');
    if(e.currentTarget.classList.contains('toggle-hide')) {
        e.currentTarget.classList.remove('toggle-hide');
        e.currentTarget.classList.add('toggle-show');
        e.currentTarget.innerText = 'Cacher';
        content.classList.remove('hide');
        content.classList.add('show');
    } else {
        e.currentTarget.classList.remove('toggle-show');
        e.currentTarget.classList.add('toggle-hide');
        e.currentTarget.innerText = 'Afficher';
        content.classList.remove('show');
        content.classList.add('hide');
    }
});