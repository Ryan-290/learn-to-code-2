

export default function Section3_2() {

    //타입 추론
    let a = 1;
    let b = "one";
    let c = true;

    function func () {
        return "hello"
    }

    let d ; // 이건 any 타입의 진화 - 초기화를 하지 않으면, 암묵적으로 any 타입이됨
    d = 10; // 여기선 넘버타입
    d = "ten"; // 여기선 string 타입
    d = true; // 여기선 boolean 타입

    //타입 단언
    type Person = {
        name : string;
        age : number;
        user : boolean;
    }

    let person1 = {} as Person;
    person1.name = "라이언";
    person1.age = 20;
    person1.user =false;

    // 단언 규칙
    let num1 = 10 as never;
    let num2 = 10 as unknown;
    // let num3 = 10 as string; // 타입이 맞지 않음 no

    let num4 = 10 as const;

    let cat = {
        name : "냐옹이",
        age : 2,
        color : "흰색"
    } as const;

    //cat.name = "변경불가"
    

    //Non Null 단언
    type Post = {
        title : string,
        author? : string
    }

    let post : Post = {
        title : "오늘 공부한 것",
        author : "라이언"
    }

    const length: number = post.author!.length;


    return (
        <div>
            타입 추론과 타입 단언
        </div>
    )
}