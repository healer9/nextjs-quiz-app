import { useRouter } from 'next/router';
import Head from "next/head";
import styles from '../styles/Login.module.css'
import axios from 'axios';
import Link from 'next/link';

export default function LogIn() {
    const router = useRouter()

    function onSubmit(event) {
        event.preventDefault();
        const myObj = {
            "email": event.target.elements.email.value,
            "password": event.target.elements.password.value,
            "remember": event.target.elements.remember.value,
        };

        let url = "https://nestjs-quiz-app.vercel.app/api/v1/users/login";
        axios.post(
            url,
            myObj
        )
        .then((res) => {
            localStorage.setItem("auth-token", res.data.token);
            window.alert("Login Successful! Please proceed with a Quiz.");
            router.push("/");
        })
        .catch((error) => {
            window.alert("Login Failed!");
            router.push("/");
        })
    }


    return (
        <>
            <Head>
                <title>User Log In</title>
                <meta name="description" content="Log In Page for existing users." />
            </Head>

            <div className={styles.login}>

                <div></div>

                <div className={styles.modal}>
                    <div className={styles.leftContainer}>

                    </div>

                    <div className={styles.rightContainer}>

                        <div className={styles.formHeader}>
                            <h1>Hello Again!</h1>
                            <h4>Welcome back QuizApp member!</h4>
                            <p>Please login to explore our rich set of quizes.</p>
                        </div>

                        <div>
                            <form onSubmit={onSubmit}>
                                <div className={styles.formBody}>

                                    <div>
                                        <label for="email"><b>Email </b></label><span>*</span>
                                        <input type="email" placeholder="Enter Email Address" name="email" required />
                                    </div>

                                    <div>
                                        <label for="password"><b>Password </b></label><span>*</span>
                                        <input type="password" placeholder="Enter Password" name="password" required />
                                    </div>

                                </div>

                                <div></div>

                                <div className={styles.rememberBox}>
                                    <label><input type="checkbox" name="remember" /> Remember me</label> <br />
                                </div>

                                <button type="submit" class={styles.loginbtn}>Log In</button>

                            </form>
                        </div>

                        <div>
                            <p>New User? Sign up <Link href='/signup' style={{ color: "#0668E1" }}><b>here</b></Link></p>
                        </div>



                    </div>

                </div>

                <div></div>
            </div>

        </>
    );
}