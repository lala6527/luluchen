import { useState, useEffect, useRef } from "react";
import { Button } from "../../components/Button";

export const Todo = () =>{
  const [todos, setTodos] = useState([]);
  const [errorName, setErrorName] = useState(null);
  const [errorDate, setErrorDate] = useState(null);
  const inputNameRef = useRef();
  const inputDateRef = useRef();

  const handleFinish = (id) =>{
    setTodos(todos.map(todo =>{
      if(todo.id !== id) return todo;
      return{
        ...todo,
        state: !todo.state
      }
    }))
  }

  const handleAdd = () =>{
    if(!inputNameRef.current.value){
      setErrorName("請輸入名稱");
    }else{
      setErrorName(null);
    }
    if(!inputDateRef.current.value){
      setErrorDate("請選擇日期");
    }else{
      setErrorDate(null);
    }

    if(!inputDateRef.current.value || !inputNameRef.current.value){
      return;
    }

    setTodos([...todos,
      {
        id: todos.length + 1,
        name: inputNameRef.current.value,
        state: false,
        dueDate: inputDateRef.current.value,
      }])
    inputNameRef.current.value= "";
    inputDateRef.current.value= "";
  }

   useEffect(()=>{
    document.title = "Todo List";
   },[])

   return(

    <div>
      <h6 className="m-0 px-4 py-8 font-sans font-medium text-xl tracking-wider leading-relaxed 
      overflow-hidden text-ellipsis whitespace-nowrap bg-[#69A8aa] text-white shadow-sm">Todo List</h6>
      <div className="grid grid-cols-2 gap-5 m-7">
      <div className="bg-[#eeeeee] p-7">
      <label htmlFor="name" className="flex flex-col mx-0 my-5">
      <span className="mt-2">名稱：</span>
      <input type ="text" id="name" ref={inputNameRef} className="p-2" />
      {errorDate && (<span className="mt-2 text-red">{errorName}</span>)}
      </label>
      <label htmlFor="date" className="flex flex-col mx-0 my-5">
      <span className="mt-2">預計完成日期：</span>
      <input type="date" id="date" ref={inputDateRef} className="p-2"/>
      {errorDate &&(<span className="mt-2 text-red">{errorDate}</span>)}
      </label>
      <Button onClick={handleAdd} className="w-full">新增</Button>
      </div>

      <div className="">
        {todos.map((item,index ) =>{
          let tag =item.state ? "已完成" : "未完成";
          return(
            <div className="border-solid-[-[#243c5a] p-5 rounded-xl mb-5" key={`todo-${index}`}>
            <h3 className="mt-0 flex justify-between">
              <span>{item.id}.{item.name}</span>
              {/* <span className={item.states ? 
              "align-top inline-block ml-2 bg-[#69A8aa] text-white p-1 text-xs rounded"
              :styles.tag}>{tag}</span> */}
            </h3>
            <p>{item.state ? "完成日期: " : "預計完成日期:"}{item.dueDate}</p>
            {!item.state && (<Button onClick={() =>handleFinish (item.id)}>完成</Button>)}
            </div>
          )
        })}

      </div>
      </div>

    </div>
   )
}