const id = x => x;
const fst = x => y => x;
const snd = x => y => y;
const M   = f => f (f);

const konst = fst;

const T = first => second => first;
const F = first => second => second;

const and = first => second => first ( second ) ( first );
const or  = M ;

const Pair = first => second => selector  => selector (first) (second);
const firstname = fst;
const lastname  = snd;

// ----- special -----

const id = x => x;
const fst = x => y => x;
const snd = x => y => y;

const M = f => f (f);

const konst = fst;

// and
// const T = first => second => first; // curch encoding named after Alonzo Church (https://en.wikipedia.org/wiki/Alonzo_Church)
// const F = first => second => second;

const T = fst;
const F = snd;

const and = first => second => first(second)(first);

// or
const or = M;

// Pair
const Pair = first => second => f => f (first)(second)
// const firstname = first => second => first
const firstname = fst
// const lastname = first => second => second
const lastname = snd

/* 
 * either = e
 * errorCase = f
 * nonErrorCases = g
 */
const Left = msg => f => g => f(msg)
const Right = res => f => g => g (res)
//const either = e => f => g => e (f) (g) //  Eta Reduktion
//const either = e => f => e (f) // 2nd Eta Reduktion
//const either = e => e // same as id function on line 6
const either = id


// =================================================================
// Hausaufgaben
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




