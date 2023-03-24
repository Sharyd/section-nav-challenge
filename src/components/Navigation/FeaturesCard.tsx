import React from 'react'
import IconCalendar from '../Icons/IconCalendar'
import IconPlanning from '../Icons/IconPlanning'
import IconReminders from '../Icons/IconReminders'
import IconTodo from '../Icons/IconTodo'

const FeaturesCard = () => {
    return (
        <ul className="right-0 top-12 lg:absolute gap-1 lg:shadow-lg flex flex-col justify-center rounded-xl p-5 bg-white">
            <li className="flex items-center gap-3 p-1.5 hoverActiveLinks">
                <IconTodo classNames="w-5 h-5" />
                <a href="#">Todo List</a>
            </li>
            <li className="flex items-center gap-3 p-1.5 hoverActiveLinks">
                <IconCalendar classNames="w-5 h-5" />
                <a href="#">Calendar</a>
            </li>
            <li className="flex items-center gap-3 p-1.5 hoverActiveLinks">
                <IconReminders classNames="w-5 h-5" />
                <a href="#">Reminders</a>
            </li>
            <li className="flex items-center gap-3 p-1.5 hoverActiveLinks">
                <IconPlanning classNames="w-5 h-5" />
                <a href="#">Planning</a>
            </li>
        </ul>
    )
}

export default FeaturesCard
