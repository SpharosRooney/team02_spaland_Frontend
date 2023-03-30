import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import axios from 'axios';
import Swal from 'sweetalert2';
import { userLoginState, userIsLoginState } from '@/state/user/atom/userLoginState';
import { LoginRes } from '@/types/UserRequest/Response';
import { inputUserType } from '@/types/UserInformation/Information'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import Config from '@/configs/config.export';

export default function login() { 

    const router = useRouter();
    const Base_URL = Config().baseUrl;
    const [loginData, setLoginData] = useRecoilState(userLoginState);
    const [cookies, setCookie] =useCookies(["id"]);

    const [inputData, setInputData] = useState<inputUserType>({
        userEmail: "",
        password: ""
    });

    const [isError, setIsError] = useState({
        userEmail: false,
        password: false,
    });

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputData({ ...inputData, [name]: value });
    };

    //로그인 확인용
    const handleSubmit = (event: any) => {
        console.log("/login")
        console.log(inputData);
        if (inputData.userEmail === "" || inputData.password === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "이메일과 비밀번호를 입력해주세요!",
            });
            return;
        } else {
            axios.post('http://10.10.10.71:8080/api/v1/users/login', {
                userEmail: inputData.userEmail,
                password: inputData.password,
            },{withCredentials:true}).then((res) => {
                console.log(res)
                setLoginData({
                    userNickname: res.data.data.userNickname,
                    token: res.data.data.token,
                    refreshToken:res.data.data.refreshToken,
                    isLogin: true
                });
                const refreshToken = res.data.data.refreshToken;
                const userNickname = res.data.data.userNickname;
                const token = res.data.data.token;
                localStorage.setItem("userNickname", userNickname);
                localStorage.setItem("refreshToken", refreshToken);
                setCookie("id", token, {path: "/"})
                Swal.fire({
                    icon: "success",
                    text: "Welcome!",
                })
                router.push("/");
            })
                .catch(err => {
                    console.log(err);
                })
        }
    };

    return (
        <>
            <div className="signupmodalBox">
                <header className="signup-header">
                    <div className="signup-header-cancel">
                    <Link href={"/"}><img src="https://cdn-icons-png.flaticon.com/512/864/864393.png" /></Link>
                    </div>
                    <div className="login-header-bot">
                        <p>로그인</p>
                    </div>
                </header>

                <section className="login-logo">
                    <img src="https://www.starbucks.co.kr/common/img/common/logo.png" />
                </section>

                <section className="login-notice">
                    <p className="hello">안녕하세요.</p>
                    <p className="starbucks">스타벅스입니다.</p>
                    <span>회원 서비스 이용을 위해 로그인 해주세요.</span>
                </section>

                <form onSubmit={handleSubmit}>
                    <section className="id-pwd-input">
                        <div className="input-box">
                            <input
                                className="id"
                                type="email"
                                name='userEmail'
                                maxLength={20}
                                placeholder="이메일"
                                onChange={handleOnChange} />
                            <label htmlFor="id">이메일</label>
                            {isError.userEmail ? (
                                <p className="error-message">이메일을 입력해 주세요.</p>
                            ) : null}
                        </div>
                        <div className="input-box">
                            <input
                                className="pwd"
                                type="password"
                                name='password'
                                maxLength={20}
                                placeholder="비밀번호"
                                onChange={handleOnChange} />
                            <label htmlFor="pwd">비밀번호</label>
                        </div>
                    </section>
                    {isError.password ? (
                        <p className="error-message">비밀번호를 입력해 주세요.</p>
                    ) : null}
                    <section className="find-btn-wrap">
                        <ul>
                            <li><Link href={"/"}>아이디 찾기</Link></li>
                            <li><Link href={"/"}>비밀번호 찾기</Link></li>
                            <li><Link href={"/signup"}>회원가입</Link></li>
                        </ul>
                    </section>
                    <footer className="login-footer">
                        <div className="login-footer-btn">
                            <button type='submit'>로그인하기</button>
                        </div>
                    </footer>
                </form>
            </div>
        </>
    )
}
