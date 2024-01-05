{
    type T = {
        foo: string;
    }
    type S = {
        foo: string;
        bar: number;
    }

    const t1: T = { foo: 'a' };
    const t2: T = { foo: 'b' };
    const s1: S = { foo: 'c', bar: 1 };

    const t3: T = s1; // コンパイルエラーにならない

    console.log(t1) // { foo: 'a' }
    console.log(t2) // { foo: 'b' }
    console.log(t3) // { foo: 'c', bar: 1 }

    // console.log(t3.bar) // これはコンパイルエラーになる "Property 'bar' does not exist on type 'T'."

    // const t4: T = { foo: 'd', bar: 2 } // これはコンパイルエラーになる "Object literal may only specify known properties, and 'bar' does not exist in type 'T'."
}