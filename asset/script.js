function wait(sec) {
    let start = Date.now(), now = start;
    while (now - start < sec * 1000) {
        now = Date.now();
    }
}

barba.init({
    transitions: [
        {
            name: 'default-transition',
            leave() {

            },
            enter() {
                // create your amazing enter animation here
            }
        }, {
            name: 'whenclickbanner',
            from: {
                namespace: ['home']
            },
            to: {
                namespace: ['detail']
            },
            leave() {
                console.log('fuck')
            }
        }
    ]
});

header = document.querySelector('.topbar')
backicon = document.querySelector('.backicon')
backiconin = backicon.innerHTML
document.addEventListener('scroll', (e) => {
    if (scrollY >= 10) {
        header.style.background = ''
        backicon.innerHTML = '<i class="bi bi-arrow-left-short"></i>'
    }
    else {
        header.style.background = 'none'
        backicon.innerHTML = backiconin
    }
})