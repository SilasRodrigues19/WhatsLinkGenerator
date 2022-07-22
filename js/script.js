const linkField = document.querySelector('.link-field');

linkField.style.display = 'none';

const send = () => {
    $('.phone_with_ddd').mask('00000000000');
    let number = document.querySelector('#number').value,
        message = document.querySelector('#message').value,
        submit = document.querySelector('#submit'),
        reset = document.querySelector('#reset'),
        link = document.querySelector('#link'),
        open = document.querySelector('#open');

    // Base URL
    const baseUrl = 'https://wa.me/55';

    const textUrl = `?text=${message}`;

    if (number == '' || number.length < 11) {
        notifyTitle = 'Número é obrigatório';
        pushNotify();
        return false;
    }
    const result = `${baseUrl + number}`;

    if (message != '') {
        link.value = `${baseUrl + number + textUrl}`;
        open.href = `${baseUrl + number + textUrl}`;
    } else {
        link.value = result;
        open.href = result;
    }

    linkField.style.display = 'block';
};

submit.addEventListener('click', (e) => {
    e.preventDefault();
    $('.phone_with_ddd').mask('(00) 00000-0000');
});

reset.addEventListener('click', (e) => {
    $('.phone_with_ddd').mask('(00) 00000-0000');
    linkField.style.display = 'none';
});

let newNotify,
    notifyTitle = '';

const pushNotify = () => {
    newNotify = new Notify({
        status: 'warning',
        speed: 850,
        autoclose: true,
        effect: 'slide',
        title: `${notifyTitle}`,
    });
};

const closeNotify = () => {
    newNotify.close();
};

const textArea = document.querySelector('textarea');

textArea.addEventListener('keyup', (e) => {
    textArea.style.height = 'auto';

    let scrollHeight = e.target.scrollHeight;
    textArea.style.height = `${scrollHeight}px`;
});