'use client';

import { useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from "react-icons/io";

export default function BackButton() {

    const router = useRouter();

    return (
        <div>
            <button
            onClick={() => router.back()}
            className="text-3xl text-gray-300 hover:text-blue-700"
            >
                <IoMdArrowRoundBack/>
            </button>
        </div>
    )
}