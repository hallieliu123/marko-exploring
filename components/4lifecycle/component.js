module.exports = class {
    onCreate(input,out){
        console.log('onCreate - input,out');
    }
    onInput(input,out){
        console.log('onInput - input,out');
    }
    onRender(out){
        console.log('onRender - out');
    }
    onDestroy(){
        console.log('onDestroy');
    }
}

