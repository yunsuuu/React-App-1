import { useState } from "react";

function App(){
  const [toDo, setToDo] = useState(""); // input창에 입력되는 value
  const [toDos, setToDos] = useState([]); // 여러개의 toDo를 받는 빈 배열(input창에 입력되는 새로운 value + 그전에 입력된 value)
  const onChange = (e) => setToDo(e.target.value); // input창에 변화가 일어나면 setToDo 함수가 실행
  const onSubmit = (e) => { // form에 submit이 일어나면 발생하는 함수
    e.preventDefault();
    if(toDo === ""){
      return; // input창에 아무것도 입력하지 않은 상태에서 엔터 누르면 함수 중단(return 하지 않을 경우, 빈 값의 li가 화면에 출력)
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    // 단순히 값을 보내는 게 아니라 함수를 보낼 때 - 함수 첫번째 argument는 현재 값, 
    // submit 할 때마다 생성되는 toDo(현재toDo) + 이전의 toDos를 합쳐(...currentArray) 새로운 toDo의 array를 return
    setToDo(""); // 엔터친 후 input value 초기화
  };
  return (
    // map() - 기존 array에 담긴 item을 가져와서 원하는 값으로 바꿔주고 변형된 값이 담긴 array를 return
    // 첫번째 argument: value, 두번째 argument: index 넣어줘야함
    // react가 기본적으로 <li>에 있는 모든 item을 인식하기 때문에 각 <li>에 key값을 넣어줘야함
    // key값은 map()의 두번째 argument인 index로 받아옴
    <div>
      <h3>ToDos ( {toDos.length} )</h3>
      <form onSubmit={onSubmit}>
      <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do" />
      <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;