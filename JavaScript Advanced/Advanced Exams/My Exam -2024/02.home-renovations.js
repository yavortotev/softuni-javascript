class HomeRenovation {

    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        } else {
            let taskObj = { description, cost, priority };
            this.tasks.push(taskObj);
            this.budget -= cost;
            return `The task '${description}' has been successfully added to the renovation plan.`;
        }
    }

    markTaskAsCompleted(description) {
        let descriptionFound = this.tasks.find(d => d.description === description);

        if (!descriptionFound) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }

        let index = this.tasks.indexOf(descriptionFound);
        this.completedTasks.push(this.tasks[index]);
        this.tasks.splice(index, 1);
        return `The task '${description}' has been successfully completed.`;
    }

    getPriorityTasksCount(minimalPriority) {
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

    renovationSummary() {
        if (this.tasks.length === 0) {
            throw new Error('No tasks have been completed yet!');
        } else {
            let result = [];
            result.push(`Budget left ${this.budget}.`);
            result.push(`You have completed ${this.completedTasks.length} tasks.`);
            result.push("Pending tasks in the renovation plan:");
            this.tasks.forEach(t => {
                result.push(`${t.description} - Cost: ${t.cost}, Priority: ${t.priority}`);
            });
            return result.join('\n');
        }
    }
}

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());
