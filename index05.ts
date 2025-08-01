// Classes in TS
class Player {
    name: string;
    level: number = 0;

    constructor (
        name: string,
        level?: number
    ) {
        this.name = name;
        if(level === undefined) level = 0;
        this.level = level;
    }

    upgrade(levelUp?: number) {
        if(levelUp === undefined) levelUp = 0;
        this.level += levelUp;
    }
}

const player1 = new Player("prakhar", 100);
player1.upgrade(20);
console.log(player1.level);



// "Single source of truth" theory: avoid writing classes like "userProfile", "userPRofileWithoutPic", "userProfileUnauthenticated", etc, sicne it become seasy to mess up in large setups.

// Partial & Required & Readonly: To make the required fields in a class as (optional) and (required) and (Readonly) respectively.
function myFun(player1: Partial<Player>): void {
    console.log(player1.name, player1.level);
}
function myFun2(player1: Required<Player>): void {
    console.log(player1.name, player1.level);
}
function myFun3(player1: Readonly<Player>): void {
    console.log(player1.name, player1.level);
}
