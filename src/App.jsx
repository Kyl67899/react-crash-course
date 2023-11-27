import './App.css';
// import Todo from './components/Todo.jsx';
// import Title from './components/Title.jsx';
// import Modal from './components/Modal.jsx';
// import React, { useState, useEffect } from 'react';
// import Counter from './components/Counter.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Nav from './pages/Nav';
import Users from './pages/User'

function App() {
  // const [showModal, setShowModal] = useState(false)
  // return <Counter />

  // function onTodoDelete(){
  //   showModal(true)
  //   console.log('onTodoDelete()');
  // }

  // function closeModal(){
  //   setShowModal(false)
  // }

  // function confirmModal(){
  //   setShowModal(false)
  // }

  // useEffect(() => {
  //   console.log('Only on mount');
  // })

  // useEffect(() => {
  //   console.log('on mount')
  // }, [showModal])

  // useEffect(() => {
  //   console.log('EVERY render')
  // }, [showModal])

  return (
    <div>
      {/* <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className='todo__wrapper'>
        <Todo 
          title="Finish Frontend Simplified"
        />
        <Todo 
          onTodoDelete={onTodoDelete}
          title="Finish the interview section"
        />
        <Todo 
          onTodoDelete={onTodoDelete}
          title="Land a $100k job"
        />
      </div>
       {/* {isModalOpen && <Modal title="Confirm delete?"/>} */}
       {/* {or} */}
       {/* {showModal ? <Modal 
          cancelModal={closeModal} 
          confirmModal={confirmModal} 
          title="Confirm delete?"
          />: null} */}
      <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/users/:id' element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
    </div>
  )
};

export default App;