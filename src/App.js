import React, { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  const [ title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  const [ like , setLike] = useState([0,0,0])
  const [ modal, setModal] = useState(false);
  const [ subtitle , setSubTitle] = useState(0);
  const [ content, setContent] = useState('')

  const clickHandler = (i) => {
    let likeCopy = [...like];
    likeCopy[i] = likeCopy[i] +1;
    setLike(likeCopy)
    
    
  }

  const toggleContent = (i) => {
    setModal(!modal)
    setSubTitle(i)
  }

  const contentHandler = (e) => {
    e.preventDefault()
    setContent(e.target.value);
  }

  const addHandler = () => {
      const newTitleArray = [content, ...title ]
      
      setTitle(newTitleArray);
  }
  
  const deleteHandler = (i) => {
      let deleteTitleArray = [...title];
      deleteTitleArray.splice(i, 1)

      setTitle(deleteTitleArray)
  }
 
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      {
        title.map((a, i) => {
          return(
            <div className='list' key={i}>
            <h4 onClick={() => toggleContent(i)}>{title[i]}</h4>
            <span onClick={() => clickHandler(i)}>👍</span>{like[i]}
            <button onClick={() => deleteHandler(i)}>삭제</button>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      <input onChange={contentHandler} value={content} placeholder='헬로우'></input>
      <button onClick={addHandler}>발행</button>
      { modal === true ? <Modal setTitle={setTitle} subtitle={subtitle} title={title}></Modal> : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className='modal'>
      <h4>{props.title[props.subtitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App;
