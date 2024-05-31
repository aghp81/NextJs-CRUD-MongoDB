import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicsList()
{
    return (
        <>
            <div>
            <h2>عنوان تاپیک</h2>
                <div>توضیحات تاپیک</div>
            </div>

            {/* دکمه حذف */}
            <div>
                <RemoveBtn />
                <Link href={'/editTopic/123'}>
                    <HiPencilAlt size={24} />
                </Link>
            </div>
        </>
    )
}