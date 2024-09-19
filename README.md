
=====React=====
공식페이지에서는 사용자 인터페이스를 만드는데에 도움을 주는 JS 라이브러리라고한다. (메타에서 개발)

리액트의 장, 단점
장점: 
1.업데이트 속도가 빠르다 (빠른 업데이트를 위해 Virtual DOM을 사용한다.)
2.Component-Based : 레고블록 조립하듯 컴포넌트들을 모아 개발한다.        
3.재사용성 : 해당 소프트웨어 모듈이 다른곳에도 쉽게 호환할수있도록 개발해야한다 -> 재사용성이 높아지면 유지보수 또한 용이함
4.활발한 지식공유 및 커뮤니티
5. 모바일 웹을 개발하기 위한 React-Native를 개발하기도 편하다.

단점:
1.방대한 학습량 : 기존과는 다른 UI 라이브러리이기때문에 배울게 많다. 또한 바뀌는것도 많다.
2.높은 상태관리 복잡도 : 웹사이트의 규모가 커져 Component의 갯수가 많아지면 상태관리가 힘들다. -> 이런것들을 돕는 redux 라이브러리를 많이 사용한다.  

DOM은 Document Object Model의 약자로 웹페이지 정보를 모두 담고있는 큰 그릇이다.
Virtual DOM은 가상의 DOM인데 실제 DOM과 중간 매개체 역할을 한다.
(업데이트해야할 최소한의 DOM을 찾아내서 업데이트한다.)

=JSX : 자바스크립트의 문법을 확장시킨것이다. (JS + XML / HTML)
JSX의 장점:
1.간결한 코드
2.가독성 향상

=엘리먼트 : 리액트 앱을 구성하는 모든 요소 (리액트 앱을 구성하는 가장 작은 블록)
type (p, h1,h2 등 태그 타입명을 말함), props (props 안에 class명, children이 담긴다), children (children 안에 또 다른 타입, props, children 등이 담긴다. ) 으로 구성되어있다
불변성의 특징을 가지고있다. 즉 엘리먼트 생성후에 children이나 attribute를 바꿀수 없다.

=Component 와 Props 
Component: 레고블록 조립하듯 컴포넌트(객체지향에서 클래스 역할과 비슷)들을 모아 개발 -> 출력물은 Element (객체지향에서 인스턴스 역할과 비슷)
Function Component와 Class Component로 구분
항상 대문자로 시작해야 한다. (소문자로 시작하면 DOM태그로 인식한다.)
Component 합성 - Component 안에 Component를 써서 복잡한 화면을 여러 개의 Component로 구성할 수 있다.
Component 추출 - 한개의 Component를 분할해서 따로 보관하고 index에 Component로 전부 정의한다.

Props: 속성들이 추가 되면 Component가 된다, 읽기전용의 특징을 가능 (값을 변경할 수 없다.)
 (자바스크립트를 예시로 들면 파라미터 역할과 비슷)

=State 와 Lifecycle
State: 리액트 Component의 상태(=데이터),개발하는 개발자가 상태를 정의한다. 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야한다.(그렇지 않으면 성능 저하가 발생될수있다.), 자바스크립트 객체

생명주기: 리액트 Component의 생명주기 Mounting (생성자가 실행되고 컴포넌트가 마운트된다) -> Updating (랜더링되면서 리액트 DOM으로 업데이트되고 컴포넌트가 업데이트 된다.)-> Unmounting (상위 컴포넌트에서 현재컴포넌트를 더 이상 화면에서 표시되지 않게될떄 컴포넌트가 언마운트 된다.) 단계가 있다.

=Hooks의 개념과 useState, useEffect
16.8 버전에 등장한 개념이다.

Functiom component - state 사용불가, Lifecycle에 따른 기능 구현 불가 -> 이런 기능을 제공하기위한것이 Hook
Class component - 생성자에서 state를 정의 , setState() 함수를 통해 state 업데이트, Lifecycle methods 제공

hook -> state 관련 함수, Lifecycle 관련함수, 최적화 관련 함수

useState() 훅 - state를 사용하기 위한 훅
사용법: const [변수명, set함수명] = useState(초기값);

useEffect() 훅 - Side effect (사이드로 실행되는 효과)를  수행하기 위한 훅, Class Component의 생명주기 역할을 함

useEffect(이펙트 함수 (componentDidMount 역할), 의존성 배열 (componentDidUpdate 역할)) => {
return() =>{} (이렇게 리턴을 사용할때 componentDidUnmount가 호출된다.) }

Effect 함수가 한번만 실행하게 하고싶으면 useEffect(이펙트함수,[]);

의존성 배열을 생략하면 업데이트마다 호출됨
useEffect(이펙트함수)

=useMemo, useCallback, useRef
useMemo - 연산양이 많이 드는 호출 값을 기억해놨다가 나중에 다시 사용한다. useEffect 훅에서 실행되야할 sideEffect (서버에서 데이터를 받아오거나, 수동으로 DOM을 변경하는 작업)은 랜더링이 일어나는동안 실행되어선 안되기때문에 사용하면 안된다.

const memorized = useMemo( ()=> {return computerExpensivVal(의존성변수1, 의존성변수2)},
[의존성 변수1, 의존성 변수2]
);

의존성 배열이 빈 배열인 경우 마운트 시에만 호출됨
useMemo( ()=> {return computerExpensivVal(의존성변수1, 의존성변수2)},
[ , ]
);

useCallback - Hook과 유사하지만 값이 아닌 함수를 반환 (특정 변수의 값이 변한경우에만 함수를 정의한다. 변하지않으면 랜더링이 불필요하게 일어나지 않는다.)
const memorizedCallback  = useCallback( ()=> {do Something(의존성변수1, 의존성변수2)},
[의존성 변수1, 의존성 변수2]

useRef = 특정 컴포넌트에 접근할 수있는 객체를 사용하기 위함, 라이프타임 전체에 걸쳐서 유지, Hook 내부 데이터가 변경되었을때 별도로 알리지 않기때문에 재랜더링이 일어나지 않는다. 즉 current값이 변할때 재랜더링이 일어나길 바란다면 useCallback 을 사용해야한다
const refContainer = useRef(초기값);
);

=Hook의 규칙
무조건 최상위 레벨에서만 호출해야한다 (반복문, 조건문 등 중첩된 함수들 안에서 Hook을 호출하면 안된다 즉 랜더링될때마다 같은 순서로 호출되야한다.)
리액트 함수 컴포넌트에서만 훅을 호출해야한다.

도움이 되는 패키지 eslint-plugin-react-hooks 훅의 규칙을 따르게 도와주는 플러그인

Custom Hook을 만들어야하는 상황
훅이 중복될때 Custom Hook을 만든다,커스텀 훅은 규칙은 개발자가 정하기에 규칙이 없어 함수와 같으나 Hook의 형태만 갖는다. 반드시 Custom Hook의 이름은 use로 시작해아한다.
 여러 개의 컴포넌트에서 하나의 Custom Hook을 사용할때 컴포넌트 내부에 있는 모든 state와 effect는 전부 분리되어 있다.각 Custom Hook 호출에 대해서 분리된 state를 얻게된다. 또한 Custom Hook의 호출도 독립적이다.

=Event : 사건을 의미 (버튼을 클릭한 것 등) -> 이벤트 처리하는 역할을 이벤트핸들링이라고 한다. (=이벤트리스너)

const 함수명 = (매개변수) => {
 함수내용
}

<태그 onClick={함수명} />

=Conditional Rendering : 조건부 랜더링 (조건에 따라 랜더링이 달라지는 것) 
자바스크립트에서 Truthy true는 아니지만 true로 여겨지는 값  falsy false는 아니지만 false로 여겨짐
Element Variables 랜더링해야할 컴포넌트를 변수처럼 다루고 싶을때 사용하는 변수

Inline Conditions 조건문을 코드안에 집어 넣는것
Inline If If문의 경우 && 연산자를 이용해 조건문을 코드 안에 집어 넣는 것
true && expression -> expression
false && expression -> false

Inline If-Else If Else문을 필요한곳에 직접 넣어서 사용하는 것 (? 연산자 사용)
condition ? true : false 

component 랜더링을 막고싶다면 null을 리턴해라. (컴포넌트 생명주기에 영향을 미치지 않는다.)

=List and Keys : 리스트는 같은 아이템을 순서대로 모아놓은 것, 키는 객체나 아이템을 구분할 수 있는 고유 값
리액트에서는 리스트와 키를 이용해 여러 개의 컴포넌트를 랜더링할수있다.
map()을 이용한다. (한쪽의 아이템과 다른한쪽에 있는 아이템을 짝지어준다. ma() 함수 안에 있는 Elements는 꼭 key가 필요하다.)
리액트에서의 키 값은 같은 List에 있는 Elements 사이에서만 고유한 값이면 된다. (key로 값,인덱스,id를 사용할수있다.)


=Forms : 값 입력 양식 여기서 값은 리액트가 모두 관리한다. 즉 사용자의 입력을 직접 제어할수 있다. 
Textarea 텍스트 입력받기 위한 태그, value를 통해 전달하고 useState를 통해 제어한다. 값이 변경될때는 onChange를 사용
select Drop-down 목록을 보여주기 위함 select태그, value를 통해 전달하고 useState를 통해 값을 제어한다.값이 변경될때는 onChange를 사용
FileInput 디바이스 저장장치로부터 파일을 선택할수 있게 해주는 태그 (리액트에서는 통제불가능하다.)
마찬가지로 value={null} 을 선언하면 value prop을 넣으면서 사용자가 자유롭게 입력하게 만들수있다.

=Lifting State Up 
하나의 데이터를 여러 컴포넌트로 표현해야하는경우가 생긴다.
각각의 스테이트를 보관하는게 아니라 부모 스테이트를 공유하는게 효율적 이때 Shared State를 사용한다.

=Composition vs Inheritance
Composition : 여러개의 컴포넌트를 합쳐 새로운 컴포넌트를 합성 하는 것 (여러개의 컴포넌트를 어떻게 조합할 것인가를 고민해야한다.)

첫번째 Composition 방법 :  Containment 하위 컴포넌트를 포함하는 형태의 합성 
Sidebar나 Dialog같은 Box형태의 컴포넌트는 자신의 하위 컴포넌트를 미리 알 수 없다. (children props를 사용)
여러개의 Children 집합이 필요하면 별도로 props를 정의해서 각각 원하는 컴퍼넌트를 넣어라.

두번째 Speiciallizartion 방법 : 범용적인 개념을 구별 되게 구체화 하는 것 (객체지향언어에서는 상속을 사용해 구현, 리액트에서는 합성을 사용해 구현)

Inheritance: 다른 컴포넌트로부터 상속받아 새로운 컴포넌트를 만드는 것 (추천하진 않음, 상속보단 합성을 사용하자)

=Context
기존 React는 컴포넌트의 props를 통한 데이터 전달 근데 코드가 복잡해졌다. -> 컴포넌트 트리를 통해 데이터에 쉽게 전달하게끔 만들어준다.

언제 사용할까? 여러개의 컴포넌트들이 접근해야하는 데이터 (로그인 여부, 로그인 정보, UI 테마, 현재 언어 등)
다만 데이터가 많이 필요하는 방법이 아니라면 사용하지 않는게 좋다 왜냐면 재사용성은 떨어지기때문이다.

ContextApi
Context를 사용하기 위해 React.createContext(상위레벨에 매칭되는 Provider가 없다면 기본값) 으로 생성한다.

Context.Provider() 하위 컨텍스트가 데이터를 받을수있게끔 한다,중첩 사용가능,여러 Consumer와 함께 사용할수있다.Provider 컴포넌트가 재랜더링될때마다 모든 하위 consumer 컴포넌트가 재랜더링된다.

Context.Consumer Provider 부모 컴포넌트를 구독한다.

function as a child 컴포넌트의 자식으로 함수를 사용한다.

Context.displayName 컨텍스트는 디스플레이 네임 이라는 속성을 가진다

useContext() 함수컴포넌트에서 Context를 사용하기위해 Consumer로 매번감싸주는것보다 이 방법이 더 낫다.
useContext(여기에는 무조건 컴포넌트 객체를 넣어야 된다. 컨슈머나 프로바이더 넣으면 안된다.)

=Styling 
Selector: 스타일을 어디에 적용 할지 (태그 명으로)Element Selector, (#로 정의)ID selector, (점으로 정의)Class selector가 있다, (*로 정의,전체 정의)Universal selector,(여러 태그 명을 지정)Grouping selector


상태와 관련된 selector
:hover 마우스 커서가 element 위에

:active
주로 링크 태그에 사용, element가 클릭됐을때

:focus
인풋 태그에서 사용, element가 초점을 갖고 있을 경우를 의미

:checked
라디오 버튼이나 체크박스 태그 유형의 인풋 태그가 체크되있는 경우

:first-child, :last-child
상위 element 기준으로 각각 첫번째 child, 마지막 child를 의미

=레이아웃 관련 속성
display - 엘리먼트를 어떻게 표시할 것인가 (none / block / inline / flex )
visibility - 보여줄것인가 감출것인가 (visible / hidden 영역은 차지하지만 감춘다)
position - 어디에 위치시킬것인가 (static 기본 순서 / fixed 브라우저 window에 상대적으로 위치 / relative 보통 위치에 상대적으로 위치 / absolute 절대 위치에 위치)
width, height, min-width, min-height, max-width, max-height -  길이
flexbox - flex-direction (row 행을 따라 가로 순서대로 왼쪽부터/ column 세로 순서대로 위쪽부터 배치 / row-reverse row 반대 /colum-reverse 컬럼 반대)
align-item 아이템 정렬한다. (stretch 아이템을 늘려 컨테이너를 가득 채움 / flext-start cross axis의 시작 지점으로 아이템 정렬 / center cross axis의 중앙으로 아이템 정렬 / flex-end cross axis의 끝 지점으로 아이템 정렬 / baseline 아이템을 baseline 기준으로 정렬)
justify-content 아이템을 어떻게 나란히 맞출것인가 (flex-start, center, flex-end, space-between, space-around)

=폰트 관련 속성
font-family 글꼴, 띄어쓰기 들어갈시 큰따옴표로 묶어야한다
font-size 글꼴 크기 (단위는  px, em, rem)
font-weight 글꼴 두께 100~900까지, 100단위
font-style 글꼴 스타일 지정 (nomal, italic, oblique)
background-color 배경색
border 테두리

=styled-component
css 문법은 그대로 사용하면서 결과물을 스타일링 된 컴포넌트로 만들어주는 오픈소스 라이브러리
리액트 개발에 유용하다.
