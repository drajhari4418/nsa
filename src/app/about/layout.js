import Link from "next/link";
export default function Layout({
    children
}) {
    return (
        <div>
            <ul className="about-menu">
                <li>
                    <Link href="about"> Go to about official page</Link>
                    <br />
                    <Link href="about/aboutcollege"> Go to aboutcollege official page</Link>
                    <br />
                    <Link href="about/aboutstudent"> Go to aboutstudent official page</Link>

                </li>
            </ul>
            {
                children
            }

        </div>
    )
}