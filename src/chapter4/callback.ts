{
    // 関数型 F を定義して map1 関数の第2引数の型として宣言する
    type F = (x: number) => number;
    function map1(array: number[], callback: F): number[] {
        const result: number[] = [];
        for(const element of array) {
            result.push(callback(element));
        }
        return result;
    }

    const data1 = [1, 1, 2, 3, 5, 8, 13];
    const result1 = map1(data1, (x) => x * 10);
    console.log(result1); // [10, 10, 20, 30, 50, 80, 130]

    // ジェネリック関数（型引数を持つ関数）の型 G を定義して map2 関数の第2引数の型として宣言する
    // なお、map2 関数もジェネリック関数であり「型Uの値の配列を受け取り callback 関数で処理した結果として型Vの値の配列を返す」関数である
    type G<S, T> = (x: S) => T;
    function map2<U, V>(array: U[], callback: G<U, V>): V[] {
        const result: V[] = [];
        for(const element of array) {
            result.push(callback(element));
        }
        return result;
    }
    const data2 = [1, -3, -2, 8, 0, -1];
    const result2 = map2(data2, (x) => x >= 0);
    console.log(result2); // [true, false, false, true, true, false]

    // callback 関数として渡す関数 `g` を、型引数を指定した上で定義する（むしろ↑は型引数を定義していないので、型推論にまかせている）
    const g: G<number, boolean> = (x) => x >= 0;
    const result3 = map2(data2, g);
    console.log(result3); // [true, false, false, true, true, false]
}
