import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async(id) => {
    try {
        const res = await fetch (`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store",
        })

        if (!res.ok) {
            throw new Error ("خطا در فراخوانی تاپیک")
        }

        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export default async function EditTopic({ params }) {

    // دریافت آی دی مربوطه
    const { id } = params;
    // console.log("id: ", id);
    const {topic} = await getTopicById(id);
    const { title, description } = topic;
    return <EditTopicForm id={id} title={title} description={description} />    
}