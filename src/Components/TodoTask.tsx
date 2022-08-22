import React from "react";
import { ITask } from "../Interfaces";

interface Props {
	task: ITask[];
	completeTask(taskNameToDelete: string): void;
	updateToggle(key: number, task: ITask): void;
}

const TodoTask = ({ task, completeTask, updateToggle }: Props) => {
	return (
		<div>
			{task.map((task: ITask, key: number) => {
				return (
					<div className='task'>
						<div className='content'>
							<span>{task.taskName}</span>
							<span>{task.deadline}</span>
						</div>
						<button
							style={{
								borderRadius: "0",
								borderRightWidth: "1px",
								borderLeftWidth: "0px",
								borderTopWidth: "0px",
								borderBottomWidth: "0px",
								borderStyle: "solid",
							}}
							onClick={() => {
								completeTask(task.taskName);
							}}>
							X
						</button>
						<button
							onClick={() => {
								updateToggle(key, task);
							}}>
							Update
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default TodoTask;

// import React from "react";
// import { ITask } from "../Interfaces";

// interface Props {
// 	task: ITask;
// 	completeTask(taskNameToDelete: string): void;
// 	updateTask(key: number): void;
// }

// const TodoTask = ({ task, completeTask }: Props) => {
// 	return (
// 		<div className='task'>
// 			<div className='content'>
// 				<span>{task.taskName}</span>
// 				<span>{task.deadline}</span>
// 			</div>
// 			<button
// 				style={{
// 					borderRadius: "0",
// 					borderRightWidth: "1px",
// 					borderLeftWidth: "0px",
// 					borderTopWidth: "0px",
// 					borderBottomWidth: "0px",
// 					borderStyle: "solid",
// 				}}
// 				onClick={() => {
// 					completeTask(task.taskName);
// 				}}>
// 				X
// 			</button>
// 			<button
// 				onClick={() => {
// 					alert("update the task");
// 				}}>
// 				Update
// 			</button>
// 		</div>
// 	);
// };

// export default TodoTask;
