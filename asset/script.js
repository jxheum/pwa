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
            leave() {wait(0.6)},
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