"use client"

import { useState } from "react";

export default function EditTopicForm({ id, title, description }) {

    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription }),
            });

            if (!res.ok) {
                throw new Error("خطا در بروزرسانی تاپیک")
            }
        } catch (error) {
            
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input 
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="ویرایش تاپیک" />

        <input 
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="توضیحات تاپیک" />

        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">ویرایش تاپیک</button>
    </form>
    );
}