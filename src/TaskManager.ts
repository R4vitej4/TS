interface Task{
    id: number;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date
}

type ReadOnlyTask = Readonly<Task>;


type TaskSummary = Omit<Task, "description" | "createdAt">;


class TaskManager{
    private tasks:Task[]=[];

    addTask(task: ReadOnlyTask): void{
        this.tasks.push(task);
    }

    markAsComplete(id: number): void{
        const task = this.tasks.find(task=>task.id==id);
        if(!task){
            console.log(`Task is not found`);
        }
        else{
            task.completed=true;
            console.log(`TaskId: ${id} is marked as complete`);
        }
    }

    getTasksSummary():TaskSummary[]{
        return this.tasks.map(({ id, title, completed }) => ({ id, title, completed }));
    }

}


const taskManager = new TaskManager();

const newTask: ReadOnlyTask = {
    id: 1,
    title: "Finish TypeScript project",
    description: "Complete the advanced concepts section",
    completed: false,
    createdAt: new Date(),
};

taskManager.addTask(newTask);

taskManager.markAsComplete(1);

const tasksSummary: TaskSummary[] = taskManager.getTasksSummary();
console.log(tasksSummary);
// Output: [{ id: 1, title: "Finish TypeScript project", completed: true }]
