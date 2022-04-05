
const minX =  0;
const maxX =  6;
const minY = -1;
const maxY =  1;

function start() {
    const userFunction = document.getElementById('user_function');
    const canvas       = document.getElementById('canvas');

    // display(canvas, x => Math.sin(x)); // fixed, not considering user input
    // console.log(userFunction.value); // user input

    // const f = () => display(canvas, x => eval(userFunction.value)); // eval wird 100x aufgerufen
    // userFunction.onchange = _ => f(); // change on user input
    // userFunction.onchange = f; // done: eta-reduction

    // improvement: function only gets called once instead of a 100: use 'Function()'
    // let f = Function("x", "return " + userFunction.value)
    // userFunction.onchange = _ => {
    //     f = Function("x", "return " + userFunction.value);
    //     display(canvas, f);
    // }

    const makeF = () => Function("x", "return " + userFunction.value + ";");

    userFunction.onchange = _ =>  display(canvas, makeF());

    display(canvas, makeF());

}

function display(canvas, f) {
    // clear
    const context     = canvas.getContext("2d");
    context.fillStyle = "papayawhip";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // draw the function plot
    const normx = normalizeX(canvas.width);
    const normy = normalizeY(canvas.height);

    context.fillStyle = "black";
    context.beginPath();
    context.moveTo(normx(minX), normy(f(minX)));

    const stride = (maxX - minX) / 100; // 100 Stützstellen
    for (let x = minX; x <= maxX; x += stride) {
        context.lineTo(normx(x), normy(f(x)));
        context.stroke();
    }
}

const normalizeY = height => y => {
    const scaleFactor = height / (maxY - minY);
    return height - (y - minY) * scaleFactor;
};

const normalizeX = width => x => {
    const scaleFactor = width / (maxX - minX);
    return ( x - minX) * scaleFactor;
};