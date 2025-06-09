class HomeRenovation {

    constructor(budget){
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority){
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        } else {
            let taskObj = { description, cost, priority };
            this.tasks.push(taskObj);
            this.budget -= cost;
            return `The task '${description}' has been successfully added to the renovation plan.`;
        }
    }

    markTaskAsCompleted(description){
        let descriptionFound = this.tasks.find(d => d.description === description);

        if (!descriptionFound) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }

        let indexOfDescriptionFound = this.tasks.indexOf(descriptionFound);
        this.completedTasks.push(this.tasks[indexOfDescriptionFound]);
        this.tasks.splice(indexOfDescriptionFound, 1);
        return `The task '${description}' has been successfully completed.`;
    }

    getPriorityTasksCount(minimalPriority){
        if (minimalPriority <= 0) {
            return "The priority cannot be zero or negative.";
        }

        let tasksFound = this.tasks.filter(t => t.priority >= minimalPriority);

        if (tasksFound.length === 0) {
            return `No tasks found with priority ${minimalPriority} or higher.`;
        } else {
            return `You have ${tasksFound.length} tasks to prioritize.`;
        }
    }

    renovationSummary(){
        if (this.tasks.length === 0) {
            throw new Error('No tasks have been completed yet!');
        } else {
            let result1 = [];

            result1.push(`Budget left: $${this.budget}.`);
            result1.push(`You have completed ${this.completedTasks.length} tasks.`);
            result1.push("Pending tasks in the renovation plan:");

            this.tasks.forEach(t => {
                result1.push(`${t.description} - Cost: ${t.cost}, Priority: ${t.priority}`);
            });

            return result1.join('\n');
        }
    }
}