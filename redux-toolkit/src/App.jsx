import { useState } from 'react'
import './App.css'
// import LandingPage from './pages/LandingPage'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
	const [count, setCount] = useState(0)

	return (
		// <Routes>
		// 	<Route path="/" element={ <LandingPage /> } />
		// 	<Route path="/dashboard" element={ <Dashboard /> } />
		// </Routes>
		<>
			<AddTodo />
			<Todo />
		</>
	)
}

export default App
