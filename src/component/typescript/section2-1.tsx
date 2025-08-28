export default function Section2_1() {

    console.log("타입 별칭, 인덱스 시그니처")

    // 타입 별칭
    type User = {
        id: number,
        name: string,
        age: number,
        email: string,
        birth: string,
        bio: string,
        location: string,
    }

    // 객체 리터럴 타입
    let user1: User = {
        id : 1,
        name : "John",
        age : 30,
        email : "john@gmail.com",
        birth : "1990-01-01",
        bio : "I am a developer",
        location : "Seoul",
    }

    let user2: User= {
        id : 2,
        name : "Jane",
        age : 25,
        email : "jane@gmail.com",
        birth : "1995-01-03",
        bio : "I am a developer",
        location : "Seoul",
    }

    // 인덱스 시그니처
    type CountryCode = {
        [key: string]: string,
    }

    let countryCodes: CountryCode = {
        Korea : "ko",
        UnitedStates : "us",
        UnitedKingdom : "uk",
        Japan : "jp",
        China : "cn",
        France : "fr",
        Germany : "de",
        Italy : "it",
    }

    // 열거형 타입

    enum Role  {
        ADMIN = 0,
        USER = 1,
        GUEST = 2,
    };

    const userA = {
        name : "John",
        role : Role.ADMIN  // 0번은 관리자
    }

    const userB = {
        name : "Jane",
        role : Role.USER // 1번은 일반 유저
    };

    const userC = {
        name : "Jim",
        role : Role.GUEST // 2번은 게스트
    }

    //any 타입
    let a: any = 1;
    a = "hello";
    a = true;
    a = {};
    a = [];
    a = () => {};
    // 숫자형, 문자형에만 사용하는 코드를 사용해도 문제가 없다.

    //unknown 타입
    let b: unknown = 1;
    b = "hello";
    b = true;
    b = {};
    b = [];
    b = () => {};
    //

    //void 타입 
    function funcA(): void {
        console.log("void");
    }
    funcA();
    //void 타입은 함수의 반환값이 없을 때 사용한다.
    //void 타입은 함수의 반환값이 없을 때 사용한다.

    //never 타입
    // function funcB(): never {
    //     throw new Error("error");
    // }
    // funcB();
    //never 타입은 함수의 반환값이 나오기 힘ㄷ

    return (
        <div>
            <h1>Section2_1</h1>
        </div>
    )

}