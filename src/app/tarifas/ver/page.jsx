import React from 'react';

const users = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
    { name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' },
    { name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' },
    { name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' },
    { name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member' },
];

export default function Page(){
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">

            <div className="bg-gray-50 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
                <div>
                <h2 className="text-lg font-semibold text-gray-800">Users</h2>
                <p className="text-sm text-gray-500">
                    A list of all the users in your account including their name, title, email and role.
                </p>
                </div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700">
                Add user
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-100 text-gray-600 text-sm">
                    <tr>
                    <th className="text-left py-3 px-4 font-medium">Name</th>
                    <th className="text-left py-3 px-4 font-medium">Title</th>
                    <th className="text-left py-3 px-4 font-medium">Email</th>
                    <th className="text-left py-3 px-4 font-medium">Role</th>
                    <th className="text-left py-3 px-4 font-medium"></th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-sm divide-y divide-gray-200">
                    {users.map((user, index) => (
                    <tr key={index}>
                        <td className="py-3 px-4">{user.name}</td>
                        <td className="py-3 px-4">{user.title}</td>
                        <td className="py-3 px-4">{user.email}</td>
                        <td className="py-3 px-4">{user.role}</td>
                        <td className="py-3 px-4 text-blue-600 hover:underline cursor-pointer">
                        Edit
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>

        </div>
    )
}