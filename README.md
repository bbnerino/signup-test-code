# 시작

npm install
npm start

# 회원 정보

회원 가입은 총 6페이지로 이루어져 있습니다
`export type SignupChapter = 1 | 2 | 3 | 4 | 5 | 6;`

회원가입에 필요한 정보는 SignupForm 에서 관리합니다.

- 직무, 소속기관, 면허 번호, 메일, 비밀번호를 갖습니다.
- 면허 번호는 없을 수도 있습니다.
- job은 name 과 value로 이루어져 있습니다.
  - 직업마다 **소속 기관**을 선택할 수 있는지 **면허 번호**가 있는지 boolean 값으로 판단합니다.
  - 그 값으로 2페이지와 3페이지를 조건에 따라 렌더링합니다.

```js
SignupForm {
  job: Job | null;
  company: string;
  license?: string;
  email: string;
  password: string;
}

interface Job {
  name: string;
  value: string;
  hasCompany: boolean;
  hasLicense: boolean;
}
```

# 컴포넌트 구조

i = 1~6 까지 이루어져 있습니다.
모든 컴포넌트는 세개의 공통 prop를 갖습니다.

- `setChapter` : 현재의 챕터를 변경할 수 있습니다 (1~6)
- `signupForm`,`setSignupForm` = 회원 정보에 관련된 데이터 입니다.

```ts
const props = { setChapter, signupForm, setSignupForm };
<Signup[i] {...props} />
```

테스트의 용이함을 위해 부모 컴포넌트인 `<SignupPage/>` 에서는 이 데이터들을 prop으로 받을 수 있습니다.
default는 props 를 안넣어도 되지만, 테스트 환경일 때는, job과 데이터들을 미리 주입해야하기 때문에 존재합니다.

아래와 같이 테스트 환경에서 사용 가능합니다.

```ts
const signupForm = new SignupForm();
signupForm.job = JOB_LIST[1];

render(<SignupPage chapterData={2} initailForm={signupForm} />);
```

### Job

job 은 기본적으로 네개의 데이터를 사용합니다.
`types/constants` 에서 데이터를 추가, 변경 가능합니다.

```ts
export const JOB_LIST: Job[] = [
  { name: "의사", value: "doctor", hasCompany: true, hasLicense: true },
  { name: "간호사", value: "nurse", hasCompany: true, hasLicense: true },
  { name: "연구자", value: "researcher", hasCompany: false, hasLicense: false },
  {
    name: "행정 담당자",
    value: "administrator",
    hasCompany: false,
    hasLicense: false,
  },
];
```

### 소속 기관 데이터

`src/library/hooks` 의 `useFetchTxt` 에서 데이터를 불러올 수 있습니다.

useHooks 형태로 사용 가능하며, `{data,loading,error}` 형태로 반환됩니다.

### Input

custom input 을 이용했습니다.

- 타입(text,password) 에 따라 visible 버튼(eye)이 보입니다.
- focus 인식합니다.
- 에러 여부에 따라 메시지와 테두리가 변경됩니다.
- search 모드일 때는 돋보기가 표시됩니다.

### 계정 중복확인

status 의 결과에 따라,
버튼이 변경되거나, 에러 메세지를 출력합니다.

중복 호출방지를 위해 모래시계 효과를 만들었습니다.

테스트 환경에서는 mock 데이터를 이용했습니다.

```js
export const MockSignupService = {
  checkDuplicateEmail: (email: string) => {
    if (email === "test@3billion.io" || email === "abc@3billion.io") {
      return { status: 409 };
    }
    return { status: 200 };
  },
};
```

email을 확인해서 중복 데이터일 경우 409를 반환하고, 아래와 같이 사용했습니다.

```ts
import fetch from "jest-fetch-mock";
const EMAIL = "test@3billion.io";

fetch.mockResponseOnce(
  JSON.stringify(MockSignupService.checkDuplicateEmail(EMAIL))
);
```
