"use client"

export default function EditTopicForm({ id, title, description }) {
    return (
        <form className="flex flex-col gap-3">
        <input className="border border-slate-500 px-8 py-2" type="text" placeholder="ویرایش تاپیک" />

        <input className="border border-slate-500 px-8 py-2" type="text" placeholder="توضیحات تاپیک" />

        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">ویرایش تاپیک</button>
    </form>
    );
}