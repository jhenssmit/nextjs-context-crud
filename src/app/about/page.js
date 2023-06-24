"use client"

import { useTasks } from '@/context/TasksContext'


function Page() {
    const { tasks } = useTasks()
    console.log(tasks);

    return (
        <div>about page</div>
    )
}

export default Page