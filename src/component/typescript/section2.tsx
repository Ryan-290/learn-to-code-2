// 타입스크립트 section2 - 기본 타입

export default function Section2() {
    console.log("타입스크립트 section2 - 기본 타입에 대해서 시작합니다.");
    //number
    let num1: number = 123;
    let num2: number = -123.456;
    let num3: number = Infinity;
    let num4: number = NaN;

    //String
    let str1: string = "Hello";
    let str2: string = "hello";
    let str3: string = `Hello ${str1}`;

    //boolean
    let bool1: boolean = true;
    let bool2: boolean = false;

    //null
    let null1: null = null;
    
    //undefined
    let undefined1: undefined = undefined;

    // 리터럴 타입
    let numA: 10 = 10;
    let strB: "hello" = "hello";
    let boolC: true = true;
    let nullD: null = null;
    let undefinedE: undefined = undefined;

    // 배열 타입
    let arr1: number[] = [1, 2, 3];
    let arr2: string[] = ["hello", "world"];
    let boolArr : Array<boolean> = [true, false];

    // 배열안에 들어가는 요소들의 타입이 다양할 경우
    let multiArr: (number | string | boolean)[] = [1, "hello", true];

    // 다차원의 배열의 타입을 정의하는 법
    let doubleArr: number[][]= [
        [1, 2, 3],
        [4, 5],
    ];

    let doubleArr2: (number | string | boolean)[][] = [
        [1, 2, 3],
        ["hello", "world"],
        [true, false],
    ]

    // 튜플 타입
    let tuple0: [number, number] = [1, 2];
    let tuple1: [number, string] = [1, "hello"];
    let tuple2: [number, string, boolean] = [1, "hello", true];
    let userInfo : [string, number][] = [
        ["John", 30],
        ["Jane", 25],
        ["Jim", 35],
    ];

    // 객체
    // 객체 리터널 타입을 사용한다. 객체의 타입을 property을 기반으로 타입을 정의한다.
    // object 로 타입을 정의하면, property를 사용할 떄 문제가 발생한다.
    // 구조적 타입 시스템 : property based type system 
    // 명목적 타입 시스템 : 이름을 기반으로 타입을 만든다. -> 객체는 object , 타입스크립튼느 이걸 사용하지 않는다.
    let user : {
        id?: number,
        name: string,
    }= {
        id : 1,
        name : "John",
    };
    // 불변성을 유지해야할 때
    let config: {
        readonly apikey: string,
    } = {
        apikey : "my api key"
    }
}