{
    const arr = [1, 2, 4, 8, 16, 32];

    // 空白を使って要素をスキップできる
    const [, foo, , bar, , baz] = arr;
    console.log(foo);
    console.log(bar);
    console.log(baz);
}