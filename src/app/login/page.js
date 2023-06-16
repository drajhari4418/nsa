'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login =()=>{
    const router = useRouter();
    return(
        <div>
            <h1>login page</h1>
            <br></br>
            <Link href="/">Go to home page</Link>
            <br />
            <br />
            <button onClick={()=>router.push("/login/loginstudent")}>Go to student login page</button>
            <br />
            <br />
            <button onClick={()=>router.push("login/loginteacher")}>Go to teacher login page</button>
            </div>
    )
}

export default Login;