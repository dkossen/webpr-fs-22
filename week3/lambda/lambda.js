    // Lambda boolean logic

    const id    = x =>      x;
    const konst = x => y => x;

    const snd = x => y => y; // 'Second'

    const T = konst;
    const F = snd;

    // const and = p => q => p ( q (T) (F) ) ( q (F) (F) );
    // const and = p => q => p ( q (T) (F) ) ( F );
    // const and = p => q => p ( q (T) (F) ) ( p );
    const and = p => q => p (q) (p);

    // const or = p => q => p ( q (T) (T) ) ( q (T) (F) );
    // const or = p => q => p ( q (T) (T) ) (q);
    // const or = p => q => p (T) (q);
    const or = p => q => p (p) (q);

    //

    // id(id)
    // p(p)
    // M = f => f(f) // Mockingbird
    // // Y = M(M) // Y-Combinator 'Selbstreplikation'
    // M(M) = (f => f(f)) (f => f(f))
    // M(M) = (f => f(f)) (g => g(g)) // Alpha Translation
    // M(M) = (g => g(g)) (g => g(g))
    // M(M) = (f => f(f)) (f => f(f)) // Alpha Translation

    //

    // Pair, Product Type
    const Pair      = x => y => f => f(x)(y);
    // const firstname = x => y => x;
    const firstname = konst;
    // const lastname = x => y => y;
    const lastname  = snd;

    // Either, Co-Product, Sum
    const Left   = x => f => g => f(x);
    const Right  = x => f => g => g(x);
    // const either = e => f => g => e(f)(g);
    // const either = e => f => e(f) // done: Eta Reduction
    // const either = e => e // done: Eta Reduction
    const either = id;


    // const konst = x => y => x;
    // const snd   = x => y => y;
    //
    // const T = konst;
    // const F = snd;
    //
    // const and = p => q => p (q) (p);
    // const or  = p => q => p (p) (q);
    //
    // const Pair      = x => y => f => f(x)(y);
    // const firstname = konst;
    // const lastname  = snd;
    //
    // const Left   = x => f => g => f(x);
    // const Right  = x => f => g => g(x);
    // const either = id;
    //
    //
    // ----- special -----
    //
    // const Tuple = n => [
    //     parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    //     ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
    // ];
    //
    // const iOfN = n => i => value => // from n curried params, take argument at position i,
    //     n === 0
    //     ? value
    //     : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );
    //
    //
    // const parmStore = n => args => onDone =>  // n args to come
    //     n === 0
    //     ? onDone(args)
    //     : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array
    //
    // const Choice = n => [
    //     ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    //     id
    // ];




