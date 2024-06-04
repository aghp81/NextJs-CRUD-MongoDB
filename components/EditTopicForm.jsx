"use client"

import { useState } from "react";

export default function EditTopicForm({ id, title, description }) {

    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    
    return (
        <form className="flex flex-col gap-3">
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