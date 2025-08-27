import BackButton from "@/component/common/backbutton";
import Section2 from "@/component/typescript/section2";

export default function Page() {
    return (
        <div className="max-w-7xl w-full mx-auto">
            <div className="flex items-center justify-center space-x-4 text-center py-20">
                <BackButton/>
                <div className="text-2xl font-bold">TypeScript Study Page</div>
            </div>
            <section> {/* 첫 강의 */}
                <Section2/>
            </section>
        </div>  
    );
}