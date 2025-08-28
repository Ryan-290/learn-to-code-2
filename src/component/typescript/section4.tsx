

export default function Section4() {


    // 함수 타입 정의
    function func1(a: number, b: number) {
        return a + b ; // 결과값은 매개변수를 통해서 자동으로 number 타입으로 추론
    }

    // 화살표 함수의 정의
    const add = (a: number, b: number) => {
        return a + b ; // 결과값은 매개변수를 통해서 자동으로 number 타입으로 추론
    }

    function introduce (name : string, tall? : number) {
        console.log(`내 이름은 ${name}이야.`)
        if (typeof tall === "number") {
        console.log(`내 키는 ${tall}cm 이야.`)
        }
    }

    function getSum (...rest : number[]) {
        let sum = 0 ;
        rest.forEach((it) => (sum += it))
        return sum ;
    }

    getSum(1,5,67,7,5,19);

    //함수 타입 표현식
    type Operation = (a: number, b:number) => number // 함수 타입 표현식

    const add1: Operation = (a, b) => a + b ;
    const sub1: Operation = (a, b) => a - b ;
    const mul1: Operation = (a, b) => a * b ;
    const div1: Operation = (a, b) => a/b ;

    //호출 시그니쳐 (콜 시그니처)
    type Operation2 = {
        (a: number, b:number) : number;
    } // 자바스크립트 상, 함수는 객체이다.

    const add2: Operation2 = (a, b) => a + b ;
    const sub2: Operation2 = (a, b) => a - b ;
    const mul2: Operation2 = (a, b) => a * b ;
    const div2: Operation2 = (a, b) => a/b ;

    //함수타입의 호환성
    // 기준 1 , 반환값이 호환되는가 ?
    type A = () => number ;
    type B = () => 10 ;

    let a : A = () => 10 ;
    let b : B = () => 10 ;

    a = b ;
    // b = a ; // 에러 발생 

    // 기준 2, 매개변수가 호환되는가 ?
    // 2-1 매개변수의 개수가 같을 때

    type AA = (value: number) => void ;
    type BB = (value: 10) => void ;

    let aa : AA = (value) => {};
    let bb : BB = (value) => {};
    // aa = bb ; // 에러 발생 aa가 슈펴, bb가 서브 , 업캐스팅 발생
    bb = aa ;

    type Animal = {
        name : string;
        color : string;
    }

    type Dog = {
        name : string;
        color : string;
        breed : string
    }
    
    let animalFunc = (animal : Animal) => {
        console.log(animal.color)
    }

    let dogFunc = (dog : Dog) => {
        console.log(dog.breed)
    }

    // animalFunc = dogFunc ;  // 매개변수의 animal은 슈퍼, dog는 서브로 업캐스팅 -> 업캐스팅의 경우 에러발생
    dogFunc = animalFunc ; // 다운캐스팅 -> 매개변수의 경우 다운캐스팅이 ok
    
    // 2-2 매개변수의 개수가 다를 때
    type Fun11 = (a: number, b: number) => void ;
    type Fun22 = (a: number) => void ;
    
    let fun11 : Fun11 = (a, b) => {};
    let fun22 : Fun22 = (a) => {};
    fun11 = fun22 ; // 가능
    // fun22 = fun11 ; // 에러 발생 

    return (
        <div>
            함수 !
        </div>
    )
}