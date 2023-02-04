import { useState, useRef, useEffect } from "react";
import styles from "./todo.module.scss";

const data = [
  {
    id: 1,
    name: "完成前端課程靜態教材",
    state: true,
    dueDate: "2022-08-31",
  },
  {
    id: 2,
    name: "重新設計個人網站",
    state: false,
    dueDate: "2022-10-31",
  },
  {
    id: 3,
    name: "完成前端線上影片課程",
    state: false,
    dueDate: "2022-12-31",
  },
];

export const Todo = () => {
  const [todos, setTodos] = useState(data);
  const [errorName, setErrorName] = useState(null);
  const [errorDate, setErrorDate] = useState(null);
  const inputNameRef = useRef();
  const inputDateRef = useRef();

  const handleFinish = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      return {
        ...todo,
        state: !todo.state
      }
    }))
  }

  const handleAdd = () => {
    if (!inputNameRef.current.value) {
      setErrorName("請輸入名稱");
    } else {
      setErrorName(null);
    }
    if (!inputDateRef.current.value) {
      setErrorDate("請選擇日期");
    } else {
      setErrorDate(null);
    }

    if (!inputDateRef.current.value || !inputNameRef.current.value) {
      return;
    }

    setTodos([...todos,
    {
      id: todos.length + 1,
      name: inputNameRef.current.value,
      state: false,
      dueDate: inputDateRef.current.value,
    }])
    inputNameRef.current.value = "";
    inputDateRef.current.value = "";
  }

  useEffect(() => {
    document.title = "c_14 Todo list";
  }, [])

  return (
<div>
      <h1 className={styles.h1}>Todo List in 2022</h1>
      <div className={styles.grid}>
        <div className={styles.actions}>
          <label htmlFor="name">
            <span>名稱:</span>
            <input type="text" id="name" ref={inputNameRef} />
            {errorName && (<span className={styles.error}>{errorName}</span>)}
          </label>

          <label htmlFor="name">
            <span>預計完成日期:</span>
            <input type="date" id="date" ref={inputDateRef} />
            {errorDate && (<span className={styles.error}>{errorDate}</span>)}
          </label>

          {/* <Button onClick={handleAdd}>新增</Button> */}
        </div>
        <div className={styles.todos}>
          {todos.map((item, index) => {
            let tag = item.state ? "已完成" : "未完成";
            return (
              <div className={styles.todo} key={`todo-${index}`}>
                <h3>
                  <span>{item.id}.{item.name}</span>
                  <span className={item.state ? styles.finish : styles.tag}>{tag}</span>
                </h3>
                <p>{item.state ? "完成日期：" : "預計完成日期："}{item.dueDate}</p>
                {/* {!item.state && (<Button onClick={() => handleFinish(item.id)}>完成</Button>)} */}
              </div>
            )
          })}
        </div>
      </div>
      </div>
  )
}