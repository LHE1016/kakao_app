import React from 'react'

// props :부모 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터

// function Macaron(props) { //자식 컴포넌트
//     console.log(props);
//   return (
//     <div>
//         <h1>Macaron No.{props.propsid}</h1>
//         <h2>Macaron Name : {props.propsname}</h2>
//         <img src={props.propsimg} alt={props.propsname} />
//     </div>
//   )
// }
// export default Macaron

// function Macaron(props) { //구조분해할당1
//     console.log(props); //object
//     const {propsname, propsid, propsimg} = props;
//   return (
//     <div>
//         <h1>Macaron No.{propsid}</h1>
//         <h2>Macaron Name : {propsname}</h2>
//         <img src={propsimg} alt={propsname} />
//     </div>
//   )
// }
// export default Macaron


//구조분해할당2
function Macaron({propsid, propsname, propsimg}) { 
  return (
    <div>
        <h1>Macaron No.{propsid}</h1>
        <h2>Macaron Name : {propsname}</h2>
        <img src={propsimg} alt={propsname} />
    </div>
  )
}
export default Macaron
