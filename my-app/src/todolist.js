import { useEffect, useState } from "react";

function App(){
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); // 여러개의 toDo를 받는 빈 배열, 기본값은 빈 배열로 설정
  const onChange = (e) => setToDo(e.target.value); // setTodo 함수는 toDo값을 수정하는 함수
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === ""){
      return; // toDo가 비어있을 경우 함수를 중단
    }
    setToDos((currentArray) => [toDo, ...currentArray]); // submit 할 때마다 생성되는 toDO + 이전의 toDos를 합쳐 새로운 배열에 넣어줌
    setToDo(""); // form에 submit 이벤트 발생하면 input창 초기화
  };
  console.log(toDos);
  return (
    <div>
      <h3>ToDos ( {toDos.length} )</h3>
      <form onSubmit={onSubmit}>
      <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do" />
      <button>Add To Do</button>
      <ul>
        <li>a</li>
      </ul>
      </form>
    </div>
  );
}

export default App;