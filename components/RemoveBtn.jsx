"use client"

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"; // برای ریدایرکت کردن

export default function RemoveBtn( {id} ) {

    const removeTopic = async () => {
        const confirmed = confirm('آیا از حذف مطمئنی؟');
        if (confirmed) {
            await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: "DELETE",
            });
        }
    };

    return (
        <button onClick={removeTopic} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    );
    
}