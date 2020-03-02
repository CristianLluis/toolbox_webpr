// requires lambda.js


let ok = [];

// id
//1
ok.push( id(1) === 1 );
//2
ok.push( id(id) === id );

// // konst
//3
ok.push( konst(42)(0) === 42 );
//4
ok.push( konst(42)(1) === 42 );
//5
ok.push( konst(42)(null) === 42 );

// // kite
//6
ok.push( snd(null)(42) === 42 );

// // true
//7
ok.push( T(1)(0) === 1 );
//8
ok.push( F(1)(0) === 0 );

// // and
// 9
ok.push( and(F)(F) === F );
//10
ok.push( and(T)(F) === F );
//11
ok.push( and(F)(T) === F );
//12
ok.push( and(T)(T) === T );

// // or
//13
ok.push( or(F)(F) === F );
//14
ok.push( or(T)(F) === T );
//15
ok.push( or(F)(T) === T );
//16
ok.push( or(T)(T) === T );

// // flip
// // flip(f)(x)(y) = f(y)(x)
//
// // not
//
// // beq
//
// // Pair

const dierk = Pair("Dierk")("König"); // immutable
ok.push( dierk(firstname) === "Dierk");
ok.push( dierk(lastname)  === "König");

// const tdierk = Triple("Dierk")("König")(50); // immutable
// ok.push( tdierk(tfirstname) === "Dierk");
// ok.push( tdierk(tlastname)  === "König");
// ok.push( tdierk(tage)       === 50);
//
// // tuple
// const [Person, fn, ln, ag] = Tuple(3);
// const person = Person("Dierk")("König")(50);
// ok.push( person(fn) === "Dierk");
// ok.push( person(ln) === "König");
// ok.push( person(ag) === 50);
//
// // composed Tuple
//
// const [Team, lead, deputy] = Tuple(2);
// const team = Team (person) (Person("Roger")("Federer")(35));
// ok.push( team(lead)(fn)   === "Dierk");
// ok.push( team(deputy)(ln) === "Federer");
//
// // Pair equal
//
// // either
//
const safeDiv = num => divisor =>
    divisor === 0
    ? Left("schlecht!")
    : Right(num / divisor);

either( safeDiv(1)(2)  )
      (msg => console.error(msg))
      (res => console.log(res));
//
//
// const [Cash, CreditCard, Invoice, PayPal, pay] = Choice(4);
// const cash = Cash ();
// const card = CreditCard ("0000-1111-2222-3333");
// const invo = Invoice    ({name:"Roger", number:"4711"});
// const pal  = PayPal     (person);  // the payload can be a partially applied function, e.g. Tuple ctor
// const doPay = method =>
//     pay (method)
//         ( _       => "paid cash")
//         ( number  => "credit card "+number)
//         ( account => account.name + " " + account.number )
//         ( person  => "pal: " + person(fn) );
//
// ok.push( doPay(cash) === "paid cash");
// ok.push( doPay(card) === "credit card 0000-1111-2222-3333");
// ok.push( doPay(invo) === "Roger 4711");
// ok.push( doPay(pal ) === "pal: Dierk");




// test result report
if ( ok.every( elem => elem) ) {
    document.writeln("All "+ ok.length +" tests ok.");
} else {
    document.writeln("Not all tests ok! Details:");
    for (let i = 0; i<ok.length; i++) {
        if(ok[i]) {
            document.writeln("Test "+ i +" ok" + '<br>');
        } else {
            document.writeln("Test "+ i +" failed" + '<br>');
        }
    }
}
