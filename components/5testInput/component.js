module.exports = class {
    onCreate(input) {
        this.state = {
            value: null
        }
        console.log('1 onCreate - input',input);
    }
    onInput(input) {
        console.log('2 onInput - input',input);
    }
    onRender() {
        console.log('3 onRender');
    }
    onMount() {
        console.log('4 onMount');
    }
    onUpdate() {
        console.log('5 onUpdate');
    }
    handleClick(event,el) {
        console.log('event,el',event,el);
        this.setState({ value: 'new name' });
    }
}