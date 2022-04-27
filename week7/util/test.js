"use strict";

// find a solution for suite, test, assert

const Assert = ok => {
    const equals = (actual, expected) => {
        const result = actual === expected; // create local variable: 'ctrl + alt + v'
        ok.push(result);
        if ( false === result ) { // yoda conditional (avoiding errors by using a constant as a left hand)
            console.error("failed: got", actual, "expected", expected);
            // debugger (use debugger in browser window)
        }
    }
    return { equals }  // 'ctrl + shift + j' um Zeilen zu kürzen/joinen
}

/**
 * Make a local scope in which to execute and report assertions.
 */
const test = (origin, callback) => {
    const ok = [];      // array of bools anlegen (die assert Ergebnisse)
    callback(Assert(ok));       // push the assertions
    report(origin, ok);
}



// const Assert = () => {
//     const ok = [];
//     return {
//         is    : (a, b, message) => {
//             if (a === b) {
//                 ok.push(true);
//             } else {
//                 if (message) {
//                     console.log(message);
//                 }
//                 console.error("test failed! expected:" + a + " but got " + b);
//                 ok.push(false);
//             }
//         },
//         getOk : () => ok
//     }
// }

// const test = (origin, callback) => {
//     // make the ok array
//     const assert = Assert();
//     // pushed booleans into the array
//     callback(assert);
//     // reporting the result
//     report(origin, assert.getOk());
// }



// test result report
// report :: String, [Bool] -> DOM ()
function report(origin, ok) {
    const extend = 20;
    if ( ok.every( elem => elem) ) {
        document.writeln(" "+ padLeft(ok.length, 3) +" tests in " + padRight(origin, extend) + " ok.");
        return;
    }
    let reportLine = "    Failing tests in " + padRight(origin, extend);
    bar(reportLine.length);
    document.writeln("|" + reportLine+ "|");
    for (let i = 0; i < ok.length; i++) {
        if( ! ok[i]) {
            document.writeln("|    Test #"+ padLeft(i, 3) +" failed                     |");
        }
    }
    bar(reportLine.length);
}

function bar(extend) {
    document.writeln("+" + "-".repeat(extend) + "+");
}

// padRight :: String, Int -> String
function padRight(str, extend) {
    return "" + str + fill(str, extend);
}

function padLeft(str, extend) {
    return "" + fill(str, extend) + str;
}

function fill(str, extend) {
    const len = str.toString().length; // in case str is not a string
    if (len > extend) {
        return str;
    }
    return " ".repeat(extend - len);
}
