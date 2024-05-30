import Link from "next/link";

export default function Navbar(){
    return (
        <nav>
            <Link href={'/'}>Abol Ghana</Link>
            <Link href={'/addTopic'}>افزودن تاپیک</Link>
        </nav>
    )
}