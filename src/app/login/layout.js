import Link from "next/link";
import './login.css';
export default function Layout({
    children
}) {
    return (
        <div>
            <ul className="login-menu">
                <li>
                    <Link href="login">login main page</Link>
                    <br></br>
                    <Link href="login/loginstudent">login student page</Link>
                    <br></br>
                    <Link href="login/loginteacher">login teacher page</Link>
                </li>
            </ul>
            {
                children
            }
        </div>
    )
}