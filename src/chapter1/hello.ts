// 変数 message をほかのファイルでも使えるように（グローバル変数にしないために）ブロックで括る
{
    const message: string = "Hello, world!";
    console.log(message);
}
