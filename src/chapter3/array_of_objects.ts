{
    type User = {
        name: string;
        age: number;
        premiumUser: boolean;
    };

    const data: string = `
    uhyo,26,1
    John Smith,17,0
    Mary Sue,14,1
    `;

    // User[] 型の変数 users を定義する
    const users: User[] = [];
    for (const line of data.split("\n")) {
        const content = line.trim()
        if (content === '') { continue }

        const [name, age, premiumUser] = content.split(',')
        users.push({name, age: Number(age), premiumUser: premiumUser === '1'})
    }

    for (const user of users) {
        if (user.premiumUser) {
            console.log(`${user.name}（${user.age}）はプレミアムユーザーです。`)
        } else {
            console.log(`${user.name}（${user.age}）はプレミアムユーザーではありません。`)
        }
    }
    // uhyo（26）はプレミアムユーザーです。
    // John Smith（17）はプレミアムユーザーではありません。
    // Mary Sue（14）はプレミアムユーザーです。
}