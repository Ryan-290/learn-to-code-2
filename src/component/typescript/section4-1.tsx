export default function Section4_1() {

    // 함수 오버로딩
    // 오버로드 시그니처 - 버전들을 명시
    function func (a:number) : void ;
    function func (a:number, b:number) : void ;
    function func (a:number, b:number, c:number) : void ;

    // 구현 시그니처 - 실제 구현부
    function func (a: number, b?: number, c?: number) {
       if (typeof b === "number" && typeof c !== "number") {
            console.log (a + b);
        } else if (typeof b === "number" && typeof c === "number") {
            console.log (a * b * c);
        } else {
            console.log (20*a);
        }
    }
    
    // 사용자 정의 타입가드
    type Dog = {
        name : string,
        isBark : boolean,
    }

    type Cat = {
        name : string,
        isScratch : boolean,
    }

    type Animal = Dog | Cat;

    function isDog (animal: Animal) : animal is Dog {
        return (animal as Dog).isBark !== undefined;
    }

    function isCat (animal: Animal) : animal is Cat {
        return (animal as Cat).isScratch !== undefined;
    }

    function warning (animal : Animal) {
        if (isDog(animal)) {
            console.log ("강아지");
        } else if (isCat(animal)) {
            console.log ("고양이");
        } else {
            console.log ("동물");
        }
    }

    return (
        <div>
            함수 오버로딩
        </div>
    )
}