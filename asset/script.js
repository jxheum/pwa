barba.init({
    transitions: [
        {
            name: 'default-transition',
            leave() {},
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