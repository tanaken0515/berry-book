{
    type Human = {
        height: number;
        weight: number;
    };
    const x: Human = { height: 1.84, weight: 72 }

    // 関数宣言（function declaration）
    function calcBMIasFunctionDeclaration(human: Human): number {
        return human.weight / human.height ** 2
    }
    console.log(`function declaration: ${calcBMIasFunctionDeclaration(x)}`)

    // 関数式（function expression）
    const calcBMIasFunctionExpression = function(human: Human): number {
        return human.weight / human.height ** 2
    }
    console.log(`function expression: ${calcBMIasFunctionExpression(x)}`)

    // アロー関数式（arrow function expression）
    const calcBMIasArrowFunctionExpression = (human: Human): number => {
        return human.weight / human.height ** 2
    }
    console.log(`arrow function expression: ${calcBMIasArrowFunctionExpression(x)}`)

    // アロー関数式（arrow function expression）の省略形
    const calcBMIasArrowFunctionExpressionShorter = (human: Human): number => human.weight / human.height ** 2
    console.log(`arrow function expression shorter: ${calcBMIasArrowFunctionExpressionShorter(x)}`)
}
