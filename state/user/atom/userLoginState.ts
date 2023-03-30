import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const userLoginState = atom({
    key: "userLoginState",
    default: {
        userNickname: "",
        token: "",
        refreshToken: "",
        isLogin: false
    },
});

const userIsLoginState = atom( {
    key: "userIsLoginState",
    default: false,
//    effects_UNSTABLE: [persistAtom],
})

export {userLoginState, userIsLoginState};