import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "..";
//import env from "react-dotenv";


async function ReadUsers() {
    fetch(API_URL + "/users/paginate?Page=2")
        .then(res => res.json())
        .then(
            (results) => {
                return { results: results }
            }
        )
}



async function UserListComponent() {

    const { results } = await ReadUsers()
    /*
    const [users, setUsers] = useState([]);

    useEffect(async () => {
        const user = await ReadUsers()
        console.log('====================================');
        console.log(user, "user");
        console.log('====================================');
    }, [])
    */


    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between px-20 py-2">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                Users List
                            </h2>
                        </div>
                        <div className="mt-5 flex lg:mt-0 lg:ml-4">
                            <span className="hidden sm:block">
                                {/* <Link to="/create">
                                    <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                        </svg>
                                        CREATE
                                    </button>
                                </Link> */}
                            </span>
                        </div>
                    </div>
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-10 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th scope="col" className="px-10 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        F Name
                                    </th>
                                    <th scope="col" className="px-10 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        L Name
                                    </th>
                                    <th scope="col" className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Email Address
                                    </th>
                                    <th scope="col" className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Email Address
                                    </th>

                                    <th scope="col" className="relative px-6 py-1">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {results && results.items && results.items.map((user) => (
                                    <tr key={user.id}>
                                        <td className="px-10 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">
                                                {user.id}
                                            </div>
                                        </td>


                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">
                                                {user.firtName}
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">
                                                {user.lastName}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">
                                                {user.email}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 space-x-2 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-800 border-blue-600 hover:bg-blue-300 hover:text-blue-500 mt-4 lg:mt-0">EDIT</button>
                                            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-red-800 border-red-600 hover:bg-red-300 hover:text-red-500 mt-4 lg:mt-0">DELETE</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserListComponent;