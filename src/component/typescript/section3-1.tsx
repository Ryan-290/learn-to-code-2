

export default function Section3_1() {

    // 대수 타입

    // 합집합 - union type
    let a: number | string | boolean ;
    a = 1;
    a = "one";
    a = true;

    let arr: (number | string | boolean)[] = [1, true, "two"];

    type Dog = {
        name :string;
        color: string;
    }

    type Person = {
        name : string;
        language: string;
    }

    type Union1 = Dog | Person;

    let union1: Union1 = {
        name: "멍멍이",
        color: "갈색"
    }

    let union2: Union1 = {
        name: "홍길동",
        language: "한국어"
    }

    let union3: Union1 = {
        name: "홍길동",
        language: "한국어",
        color: "갈색"
    }
    
    // let union4: Union1 = {
    //     name : "후후"
    // }

    //  교집합

    let variable: number & string; // 이 경우는 never 타입이 됨

    let InterSection : Dog & Person = {
        name: "홍길동",
        color: "갈색",
        language: "한국어"
    }

    // let InterSection2 : Dog & Person = {
    //     name: "홍길동",
    // }

    // let InterSection4 : Dog & Person = {
    //     name: "홍길동",
    //     language: "한국어",
    // }

    return (
        <div>
            대수타입 배우는 곳
        </div>
    )
}