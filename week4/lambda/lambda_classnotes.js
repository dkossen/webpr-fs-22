const id    = x => x;
const konst = x => y => x; // Kestrel, K
const fst   = konst;       // just an alias
const snd   = x => y => y; // Kite,    KI

// const T     = x => y => x;
// const F     = x => y => y;
const T     = konst;
const F     = snd;

const and   = p => q => p ( q ) ( p ) ;
const or    = p => q => p ( p ) ( q );

const Pair      = x => y => f => f (x) (y); // Vireo, V
const firstname = fst;
const lastname  = snd;

const Left   = x => f => g => f(x);
const Right  = x => f => g => g(x);
const either = e => bad => good => e (bad) (good);

// todo 'js goodie' video


// todo move
// javascript 'does best effort'
const times = (a, b) => a*b;
times(2) // 2 * undefined = ? /todo check

const times = a => b => a * b;
times(2) // 2

// map
// Anz elemente ist am schluss noch gleich
// "partial" application: map
const times = a => b => a * b;
const twoTimes = times(2);

[1, 2, 3].map(x => times(2)(x));
[1, 2, 3].map(times(2)); // done: Eta reduction
[1, 2, 3].map(twoTimes);

const multiplyTwo = x => x * 2;
const abc = [1, 2, 3].map(multiplyTwo);
document.writeln(abc);


// filter
// gibt nicht gleiche anzahl elem. zurück
const odd = x => x % 2 === 1;
[1, 2, 3].filter(x => x % 2 === 1);
[1, 2, 3].filter(x => odd(x));
[1, 2, 3].filter(odd); // done: Eta reduction

// reduce // todo complete
// acc = accumulator; cur = current elem

let x = [1, 2, 3];
x.reduce((acc, cur) => acc + cur); // = 6 ((1+2)+3
let y = [];
y.reduce((acc, cur) => acc + cur); // type error: reduce of empty array with no initial value
y.reduce((acc, cur) => acc + cur, 0); // = 0

let str = ["Hello", "World"];
str.reduce((acc, cur) => acc + cur);
str.reduce((acc, cur) => acc + cur, "");

let z = [true, false, false, true, true];
z.reduce((acc, cur) => acc + cur, true); // true

z.reduce((acc, cur) => [acc, cur], []); // [[], true]
z.reduce((acc, cur) => [...acc, cur], []); // [true, true, true] // array gets copied




// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];




