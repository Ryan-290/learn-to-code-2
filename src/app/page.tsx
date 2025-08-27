import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <div className="text-center text-2xl font-bold py-20 px-auto">
          라이언의 코드 공부 공간
      </div>
      <div className="flex flex-col items-center justify-center space-y-10 px-auto">
        <Link
          className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-2xl"
          href = "/typescript"
        >
          TypeScript Study
        </Link>
      </div>
    </div>
  );
}
