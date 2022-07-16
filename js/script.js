const linkField = document.querySelector('.link-field'),
    copyLink = document.querySelector('#copy');

linkField.style.display = 'none';

const send = () => {
    let number = document.querySelector('#number').value,
        message = document.querySelector('#message').value,
        submit = document.querySelector('#submit'),
        reset = document.querySelector('#reset'),
        link = document.querySelector('#link'),
        open = document.querySelector('#open');

    // Base URL
    const baseUrl = 'https://wa.me/55';

    const textUrl = `?text=${message}`;

    if (number == '') {
        alert('O campo número é obrigatório');
        return false;
    } else {
        const result = `${baseUrl + number}`;

        if (message != '') {
            link.value = `${baseUrl + number + textUrl}`;
            open.href = `${baseUrl + number + textUrl}`;
        } else {
            link.value = result;
            open.href = result;
        }
        linkField.style.display = 'block';
    }
};

submit.addEventListener('click', (e) => {
    e.preventDefault();
});

reset.addEventListener('click', (e) => {
    linkField.style.display = 'none';
});

copyLink.addEventListener('click', (e) => {
    link.focus();
    link.select();

    try {
        var ok = document.execCommand('copy');
        if (ok) {
            alert('Copiado');
        }
    } catch (e) {
        alert(e);
    }
});