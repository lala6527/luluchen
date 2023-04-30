export const Test = () => {

  const arr = [1, 2, 3, 4, 5];
  const sum = arr.reduce((accumulator, currentValue) => {
    console.log("accumulator:", accumulator, "currentValue:", currentValue);
    return accumulator + currentValue;
  }, 0);
  console.log(sum); // 输出 15


  return (
    <div className="container">
      <h1 style={{ marginBottom: "40px" }}>Test page</h1>

    </div>
  )
}


// export const Test = () => {
//   // new Set Type
//   let classroom = new Set(); //  建立教室這個 set
//   let Aaron = { name: 'Aaron', country: 'Taiwan' };
//   let Jack = { name: 'Jack', country: 'USA' };
//   let Johnson = { name: 'Johnson', country: 'Korea' };

//   // 把物件放入 set 中
//   classroom.add(Aaron);
//   classroom.add(Jack);
//   classroom.add(Johnson);

//   // 檢驗 set 中是否包含某物件
//   if (classroom.has(Aaron)) console.log('Aaron is in the classroom');

//   //  把物件移除 set 中
//   classroom.delete(Jack);
//   console.log(classroom.size); //    看看 set 中有多少元素
//   console.log(classroom);

//   const setToArray = Array.from(classroom);
//   console.log(setToArray);
//   return (
//     <div className="container">
//       <h1 style={{marginBottom: "40px"}}>Test page</h1>
//       {setToArray.map((item, index) => {
//         return (
//           <div key={index} style={{display: "flex"}}>
//             <h2>{item.name}</h2>
//             <p>{item.country}</p>
//           </div>
//         )
//       }
//       )}
//     </div>
//   )
// }