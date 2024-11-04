import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { TaskCard } from '@/components/TaskCard';

const MOCK_TASKS = [
    {
        id: '1',
        title: 'High Priority Task',
        description: 'This needs to be done ASAP',
        priority: 'high',
        completed: false,
    },
    {
        id: '2',
        title: 'Medium Priority Task',
        description: 'Complete this when possible',
        priority: 'medium',
        completed: false,
    },
    {
        id: '3',
        title: 'Low Priority Task',
        description: 'No rush on this one',
        priority: 'low',
        completed: false,
    },
] as const;

export default function Dashboard() {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState(MOCK_TASKS);
    const [showNewTaskModal, setShowNewTaskModal] = useState(false);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        priority: 'medium' as const,
    });
    const [activeTab, setActiveTab] = useState < 'all' | 'completed' > ('all');

    const handleCreateTask = () => {
        const task = {
            id: Date.now().toString(),
            ...newTask,
            completed: false,
        };
        setTasks([task, ...tasks]);
        setNewTask({ title: '', description: '', priority: 'medium' });
        setShowNewTaskModal(false);
    };

    const handleEditTask = (editedTask: any) => {
        setTasks(tasks.map((t) => (t.id === editedTask.id ? editedTask : t)));
    };

    const handleDeleteTask = (id: string) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    const handleToggleTask = (id: string) => {
        setTasks(tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
        ));
    };

    const filteredTasks = tasks.filter((task) =>
        activeTab === 'completed' ? task.completed : !task.completed
    );

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <header className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Button
                                variant="ghost"
                                onClick={() => navigate('/')}
                            >
                                ←
                            </Button>
                            <h1 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">
                                TaskFlow
                            </h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <Input
                                type="search"
                                placeholder="Search tasks..."
                                className="max-w-xs"
                            />
                            <Button onClick={() => setShowNewTaskModal(true)}>
                                + New Task
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav className="-mb-px flex space-x-8">
                            <button
                                onClick={() => setActiveTab('all')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'all'
                                        ? 'border-blue-500 text-blue-600 dark:text-blue-500'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                                    }`}
                            >
                                All Tasks
                            </button>
                            <button
                                onClick={() => setActiveTab('completed')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'completed'
                                        ? 'border-blue-500 text-blue-600 dark:text-blue-500'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                                    }`}
                            >
                                Completed
                            </button>
                        </nav>
                    </div>
                </div>

                <div className="space-y-4">
                    {filteredTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onEdit={handleEditTask}
                            onDelete={handleDeleteTask}
                            onToggle={handleToggleTask}
                        />
                    ))}
                </div>
            </main>

            {/* New Task Modal */}
            <Modal
                isOpen={showNewTaskModal}
                onClose={() => setShowNewTaskModal(false)}
                title="Create New Task"
            >
                <div className="space-y-4">
                    <Input
                        label="Title"
                        value={newTask.title}
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    />
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Description
                        </label>
                        <textarea
                            className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm"
                            value={newTask.description}
                            onChange={(e) =>
                                setNewTask({ ...newTask, description: e.target.value })
                            }
                            rows={3}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Priority
                        </label>
                        <select
                            className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm"
                            value={newTask.priority}
                            onChange={(e) =>
                                setNewTask({
                                    ...newTask,
                                    priority: e.target.value as 'high' | 'medium' | 'low',
                                })
                            }
                        >
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-2 mt-6">
                        <Button
                            variant="secondary"
                            onClick={() => setShowNewTaskModal(false)}
                        >
                            Cancel
                        </Button>
                        <Button onClick={handleCreateTask}>Create Task</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}