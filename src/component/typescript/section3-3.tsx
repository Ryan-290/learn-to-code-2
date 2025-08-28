export default function Section3_3() {

    // 타입 좋비기

    type Person = {
        name : string;
        age : number;
    }


    function func1(value : number | string | Date | null | Person) {
        
        if (typeof value === "number") {
            console.log(value.toFixed())
        } else if (typeof value === "string") {
            console.log(value.toUpperCase())
        } else if (value instanceof Date) {
            console.log(value.getTime())
        } else if (value && "age" in value) {
            console.log(`${value.name}의 나이는 ${value.age}이다`)
        }
    }

    // 서로소 유니온 타입
    type Admin = {
        tag : "ADMIN";
        name : string;
        kickCount : number;
    }
    type Member = {
        tag : "MEMBER";
        name : string;
        point : number;
    }
    type Guest = {
        tag : "GUEST";
        name : string;
        visitCount : number;
    }
    type User = Admin | Member | Guest;
    
    function func2(user : User) {
        if (user.tag === "ADMIN") {
            console.log(`${user.name}님은 관리자입니다.`)
        } else if (user.tag === "MEMBER") {
            console.log(`${user.name}님은 회원입니다.`)
        } else {
            console.log(`${user.name}님은 게스트입니다.`)
        }
    }


    // 비동기 작업의 결과를 처리하는 객체

    type AsyncTask = {
        state : "loading" | "failed" | "success";
        error? : {
            message : string;
        }
        response? : {
            data : string;
        }
    }
    
    const loading : AsyncTask = {
        state : "loading"
    }

    const failed : AsyncTask = {
        state : "failed",
        error : {
            message : "오류발생원인은!"
        },
    }

    const success: AsyncTask = {
        state : "success",
        response : {
            data : "데이터"
        },  
    }


    return (
        <div>
            타입 좁히기와 서로소 유니온 타입
        </div>
    )
}