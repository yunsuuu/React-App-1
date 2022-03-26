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
    setToDos((currentArray) => [toDo, ...currentArray]);
    // 단순히 값을 보내는 게 아니라 함수를 보낼 때 - 함수 첫번째 argument는 현재 값, 
    // submit 할 때마다 생성되는 toDo(현재toDo) + 이전의 toDos를 합쳐 새로운 toDo의 array를 return
    setToDo(""); 
    // form에 submit 이벤트 발생하면 input창 초기화
  };
  return (
    // map() - 예전 array의 item을 가져와서 원하는 값으로 바꿔주고 변형된 값이 담긴 array를 return
    // map의 두번째 argument로 index(고유의값)을 넣어줘야함, key값
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