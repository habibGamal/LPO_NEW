import { Link } from "@inertiajs/inertia-react"
import React from "react"

export default function Dashboard() {
    return (
        <div className="container py-4">
            <h2 className="text-center font-sans my-4 text-3xl font-bold">HI <span className="highlight-header"> DR.Maha</span></h2>
            <p className="text-center font-sans text-2xl">This is a dashboard to manage your website</p>
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 justify-items-center mt-16">
                <Link href="/books/create">
                    <DashboardCard imgSrc="./images/material.png" title="Manage Books" />
                </Link>
                <Link href="/meetings/create">
                    <DashboardCard imgSrc="./images/meeting.jpg" title="Manage Meetings" />
                </Link>
                {/* <Link href="/display-scores">
                    <DashboardCard imgSrc="./images/quiz.png" title="Exam Scores" />
                </Link> */}
                <Link href="/articles/create">
                    <DashboardCard imgSrc="./images/articles.png" title="Manage Articles" />
                </Link>
                <Link href="/list-students">
                    <DashboardCard imgSrc="./images/students.png" title="Manage Students" />
                </Link>
            </div>
        </div>
    )
}

const DashboardCard = ({ title, imgSrc }: { title: string, imgSrc: string }) => {
    return (
        <div className="rounded hover:scale-105 transition-transform cursor-pointer bg-ov-white p-4 shadow-sm max-w-[400px]">
            <img className="w-full aspect-square object-contain" src={imgSrc} alt="" />
            <h2 className="text-xl my-4 text-center">{title}</h2>
        </div>
    )
}
