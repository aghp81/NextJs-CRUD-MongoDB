import EditTopicForm from "@/components/EditTopicForm";

export default function EditTopic({ params }) {

    // دریافت آی دی مربوطه
    const { id } = params;
    console.log("id: ", id)

    return <EditTopicForm />    
}