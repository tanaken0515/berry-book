{
    for (const i of sequence(1, 100)) {
        const message = getFizzBuzzString(i)
        console.log(message)
    }

    function sequence(from: number, to: number): number[] {
        const result: number[] = []
        for (let i = from; i <= to; i++) {
            result.push(i)
        }
        return result
    }

    function getFizzBuzzString(i: number): string {
        if (i % 15 === 0) {
            return 'FizzBuzz';
        } else if (i % 3 === 0) {
            return 'Fizz'
        } else if (i % 5 === 0) {
            return 'Buzz'
        } else {
            return String(i)
        }
    }
}
