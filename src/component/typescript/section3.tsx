import Image from "next/image";


export default function Section3() {
    
    //타입 계층도
    // 객체 타입 간의 호환성
    type Animal = {
        name: string;
        color: string;
    }

    type Dog = {
        name: string;
        color: string;
        breed: string;
    }

    let animal: Animal = {
        name: "호랑이",
        color: "노랑"
    }

    let dog: Dog = {
        name: "멍멍이",
        color: "갈색",
        breed: "치와와"
    }

    animal = dog;
    let animal2: Animal = dog ;

    return (
        <div>
            <div>
                <div className="text-3xl font-bold">
                    타입 계층도
                </div>
                <div className="relative w-full aspect-[1913/663]">
                <Image
                    src="/typeH.png"
                    alt="타입 계층도"
                    fill
                    className="object-contain"
                />
                </div>
            </div>
        </div>
    )
}
