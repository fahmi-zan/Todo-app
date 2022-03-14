import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./pages/user/SignIn"
import Register from "./pages/user/SignUP"
import Home from "./pages/home/Home"
import CreateTodo from "./pages/todos/CreateTodo"
import EditTodo from "./pages/todos/EditTodo"
import { useDispatch } from 'react-redux'
import allStore from './store/actions';



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allStore.fetchPost())
  }, [dispatch]);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="/create" element={<CreateTodo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
