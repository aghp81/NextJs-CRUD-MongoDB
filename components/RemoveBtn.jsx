"use client"

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"; // برای ریدایرکت کردن

export default function RemoveBtn( {id} ) {
    const router = useRouter();
    const removeTopic = async () => {
        const confirmed = confirm('آیا از حذف مطمئنی؟');
        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: "DELETE",
            });
            // اگر حذف انجام شد صفحه رفرش شود
            if (res.ok) {
                router.refresh()
            }
            
        }
    };

    return (
        <button onClick={removeTopic} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    );
    
}