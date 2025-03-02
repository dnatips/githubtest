fn shadowImmutableVariable() {
    let x = 5;
    let x = x + 1;
    {
        let x = x * 2;
        println!("Shadow Immutable -> x in the inner scope is: {}", x);
    }
    println!("Shadow Immutable -> x in the outer scope is: {}", x);
}

fn shadowMutableVariable() {
    let mut x = 5;

    // Following code will not compile because x is immutable
    // let x = x + 1;

    println!("The value of x is: {}", x);
}

fn shadowConstants() {
    const HIGHEST_SCORE: u32 = 100;
    {
        /* Following code will not compile because HIGHEST_SCORE, a constant, 
        cannot be used to redefine same constant through shadowing. */
        // const HIGHEST_SCORE: u32 = HIGHEST_SCORE * 2;

        const HIGHEST_SCORE: u32 = 200;
        println!("Shadow Constant -> HIGHEST_SCORE in the inner scope is: {}", HIGHEST_SCORE);
    }
    println!("Shadow Constant -> HIGHEST_SCORE in the outer scope is: {}", HIGHEST_SCORE);
}

fn main() {
    shadowImmutableVariable();
    shadowMutableVariable();
    shadowConstants();
}
