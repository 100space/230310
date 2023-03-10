# 0310 로그인 구현

-   헤더
    -   홈
    -   로그인(로그아웃)
    -   회원가입(profile)
    -   (comment) // authorization 으로 검증
    -   (board)
-   body
    -   로그인 화면

# API

## 로그인

back : http://localhost:3005

-   로그인

    -   post : /check
    -   요청 : { userid, userpw }
    -   응답 : { 성공메세지, 응답코드200, isLogin : true } / {실패메세지, status , isLogin : false }

-   로그아웃
    -   delete : /check // authorization 으로 검증

```js
//back server.js
if (userId === req.body.userId && userPw === req.body.userPw) {
    res.status(200).json("로그인 성공")
} else {
    res.status(400).json("아이디와 패스워드를 확인해주세요")
}

//front.js
try {
    const result = await axios.post("http://127.0.0.1:3005/login", { userId, userPw })
    console.log(result)
    if (result.status === 200) {
        dispatch({ type: "LOGIN", payload: !state.isLogin })
        navigate("/")
    } else if (result.status >= 400) {
        throw new Error(`HTTP Error: ${result.status}`)
    }
} catch (e) {
    console.error(e.response.data)
}
```

| - src
| --- hooks
| --- layouts
| --- pages
| ---
|
