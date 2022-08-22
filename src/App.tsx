import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
	const [updateData, setUpdateData] = useState<boolean>(false);
	const [keyData, setKeyData] = useState<number>(0);
	const [task, setTask] = useState<string>("");
	const [deadline, setDealine] = useState<number>(0);
	const [todoList, setTodoList] = useState<ITask[]>([]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.name === "task") {
			setTask(event.target.value);
		} else {
			setDealine(Number(event.target.value));
		}
	};

	const addTask = (): void => {
		const newTask = { taskName: task, deadline: deadline };
		if (task.length > 0) {
			if (deadline > 0) {
				setTodoList([...todoList, newTask]);
				setTask("");
				setDealine(0);
			} else {
				alert("deadline should be greater than 0");
			}
		} else {
			alert("Please enter task name");
		}
	};

	const completeTask = (taskNameToDelete: string): void => {
		setTodoList(
			todoList.filter((task) => {
				return task.taskName !== taskNameToDelete;
			})
		);
	};

	const updateToggle = (key: number, task: ITask): void => {
		console.log("task", task);
		setTask(task.taskName);
		setDealine(task.deadline);
		setUpdateData(true);
		setKeyData(key);
	};

	const updateTask = (): void => {
		const newTask = { taskName: task, deadline: deadline };
		todoList[keyData] = newTask;
		console.log("todoList", todoList);
		setUpdateData(false);
		setTask("");
		setDealine(0);
	};

	console.log("updateData", updateData);
	return (
		<div className='App'>
			<div className='header'>
				<div className='inputContainer'>
					<input
						type='text'
						placeholder='Task...'
						name='task'
						value={task}
						onChange={handleChange}
					/>
					<input
						type='number'
						placeholder='Deadline (in Days)...'
						name='deadline'
						value={deadline}
						onChange={handleChange}
					/>
				</div>
				<button onClick={addTask}>Add Task</button>
			</div>
			<div className='todoList'>
				{/* {todoList.map((task: ITask, key: number) => {
					return <TodoTask key={key} task={task} completeTask={completeTask} updateTask={updateTask} />;
				})} */}
				<TodoTask
					task={todoList}
					completeTask={completeTask}
					updateToggle={updateToggle}
				/>
			</div>

			{updateData && (
				<div className='header'>
					<div className='inputContainer'>
						<input
							type='text'
							placeholder='Task...'
							name='task'
							value={task}
							onChange={handleChange}
						/>
						<input
							type='number'
							placeholder='Deadline (in Days)...'
							name='deadline'
							value={deadline}
							onChange={handleChange}
						/>
					</div>
					<button onClick={updateTask}>Update</button>
				</div>
			)}
		</div>
	);
};

export default App;
