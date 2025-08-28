import BackButton from "@/component/common/backbutton";
import Section2 from "@/component/typescript/section2";
import Section2_1 from "@/component/typescript/section2-1";
import Section3 from "@/component/typescript/section3";
import Section3_1 from "@/component/typescript/section3-1";
import Section3_2 from "@/component/typescript/section3-2";
import Section4 from "@/component/typescript/section4";
import Section4_1 from "@/component/typescript/section4-1";

export default function Page() {
    return (
        <div className="max-w-7xl w-full mx-auto">
            <div className="flex items-center justify-center space-x-4 text-center py-20">
                <BackButton/>
                <div className="text-2xl font-bold">TypeScript Study Page</div>
            </div>
            {/* section 2 강의 - 기초 타입 정의*/}
            <section> 
                <Section2/>
                <Section2_1/>
            </section>
            {/* section 3 강의 - 타입스크립트 이해하기*/}
            <section>
                <Section3/>
                <Section3_1/>
                <Section3_2/>
            </section>
            {/* section 4 강의 - 함수와 타입*/}
            <section>
                <Section4/>
                <Section4_1/>
            </section>
        </div>  
    );
}