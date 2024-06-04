"use client"

import { useState } from "react"

export default function AddTopic() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if (!title || !description) {
            alert ("تایتل و توضیحات الزامی است.");
            return;
        }

        // ارسال دیتا به دیتابیس
        try {
            const res = await fetch('http://localhost:3000/api/topics', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, description })
            });
        } catch (error) {
            
        }
    }
    
    return <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="افزودن تاپیک" />

        <input 
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="توضیحات تاپیک" />

        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">افزودن تاپیک</button>
    </form>
}