import React from 'react';
import RevenueChart from './chart';
import ApexChart from './chart2';
import logo from '../maincontent/assets/logo.png';

const maincontent = () => {
    return (
        <div class="bg w-full rounded-lg p-5 overflow-auto">
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 lg:col-span-9 space-y-4">
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-12 md:col-span-6 lg:col-span-3 bg-[#d0e1e9] rounded-lg p-4 flex flex-col gap-3">
                            <div class="flex justify-between items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M216-223v7-528 521Zm0 79q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v98h-72v-98H216v528h528v-99h72v99q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm288-144q-29.7 0-50.85-21.15Q432-330.3 432-360v-240q0-29.7 21.15-50.85Q474.3-672 504-672h288q29.7 0 50.85 21.15Q864-629.7 864-600v240q0 29.7-21.15 50.85Q821.7-288 792-288H504Zm288-72v-240H504v240h288Zm-144-60q25 0 42.5-17.5T708-480q0-25-17.5-42.5T648-540q-25 0-42.5 17.5T588-480q0 25 17.5 42.5T648-420Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" class="bg-black rounded-full " viewBox="0 -960 960 960" width="20px" fill="white"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" /></svg>
                            </div>
                            <span class="font-semibold text-2xl">$143,865</span>
                            <span class="text-sm font-semibold ">Your bank balance</span>
                        </div>
                        <div class="col-span-12 md:col-span-6 lg:col-span-3 bg-[#d0e1e9] rounded-lg p-4 flex flex-col gap-3">
                            <div class="flex justify-between items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M336-374q9-24 14.5-50.5T356-480q0-29-5.5-55.5T336-586l-74 30q6 18 10 37t4 39q0 20-4 39t-10 37l74 30Zm128 54q17-38 24.5-78t7.5-82q0-42-7.5-82T464-640l-74 30q14 30 20 62.5t6 67.5q0 35-6 67.5T390-350l74 30Zm130 54q21-50 31.5-103.5T636-480q0-57-10.5-110.5T594-694l-74 32q18 42 27 88t9 94q0 48-9 94t-27 88l74 32ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" class="hover:bg-black hover:fill-white rounded-full" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" /></svg>
                            </div>
                            <span class="font-semibold text-2xl">$12</span>
                            <span class="text-sm font-semibold ">Uncategorized transactions</span>
                        </div>
                        <div class="col-span-12 md:col-span-6 lg:col-span-3 bg-[#d0e1e9] rounded-lg p-4 flex flex-col gap-3">
                            <div class="flex justify-between items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-80q-50 0-85-35t-35-85v-120h120v-560h600v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-600H320v480h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm0 0h-40 400-360Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" class="hover:bg-black hover:fill-white rounded-full" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" /></svg>
                            </div>
                            <span class="font-semibold text-2xl">7</span>
                            <span class="text-sm font-semibold ">Employees working today</span>
                        </div>
                        <div class="col-span-12 md:col-span-6 lg:col-span-3 bg-[#d0e1e9] rounded-lg p-4 flex flex-col gap-3">
                            <div class="flex justify-between items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M216-223v7-528 521Zm0 79q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v98h-72v-98H216v528h528v-99h72v99q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm288-144q-29.7 0-50.85-21.15Q432-330.3 432-360v-240q0-29.7 21.15-50.85Q474.3-672 504-672h288q29.7 0 50.85 21.15Q864-629.7 864-600v240q0 29.7-21.15 50.85Q821.7-288 792-288H504Zm288-72v-240H504v240h288Zm-144-60q25 0 42.5-17.5T708-480q0-25-17.5-42.5T648-540q-25 0-42.5 17.5T588-480q0 25 17.5 42.5T648-420Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" class="hover:bg-black hover:fill-white rounded-full" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" /></svg>
                            </div>
                            <span class="font-semibold text-2xl">$3287.49</span>
                            <span class="text-sm font-semibold ">This week's card spending</span>
                        </div>
                    </div>
                    <div class="rounded-lg grid grid-cols-12 gap-4">
                        <div class="col-span-12 md:col-span-4 flex flex-col gap-4">

                            <div class="col-span-12 md:col-span-6 lg:col-span-3 bg-[#d0e1e9] rounded-lg p-4 flex flex-col gap-3">
                                <span class="text-lg font-semibold ">New Clients</span>
                                <div class="flex justify-between items-center">
                                    <span class="font-semibold text-5xl">54</span>
                                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">+18.7%</span>
                                </div>
                            </div>
                            <div class="col-span-12 md:col-span-6 lg:col-span-3 bg-[#d0e1e9] rounded-lg p-4 flex flex-col gap-3">
                                <span class="text-lg font-semibold ">Invoice Overdue</span>
                                <div class="flex justify-between items-center">
                                    <span class="font-semibold text-5xl">6</span>
                                    <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">+2.7%</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-span-12 md:col-span-8 bg-[#d0e1e9] rounded-lg px-6 py-2 shadow-md">

                            <div class="block md:flex justify-between items-center mb-4">
                                <p class="text-lg font-semibold text-black">Revenue</p>
                                <p class="text-sm text-gray-400">Last 7 days VS prior week</p>
                            </div>

                            <div class="relative h-48 overflow-auto">
                                <ApexChart />
                            </div>
                        </div>
                    </div>

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-[#d0e1e9]">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 bg-[#d0e1e9]">
                            <thead class="text-xs text-gray-700 uppercase">
                                <th scope="col" class="px-6 py-3 text-xl">
                                    Recent Emails
                                </th>
                            </thead>
                            <tbody>
                                <tr class=" border-b">
                                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src={require('./assets/logo.png')} alt="Logo" />

                                        <div class="ps-3">
                                            <div class="text-base font-semibold">Neil Sims</div>
                                            <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                        </div>
                                    </th>
                                    <td class="px-6 py-4">
                                        Angular Developer
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center">
                                            <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">

                                        <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                    </td>
                                </tr>
                                <tr class=" border-b">

                                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src={require('./assets/logo.png')} alt="Logo" />

                                        <div class="ps-3">
                                            <div class="text-base font-semibold">Neil Sims</div>
                                            <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                        </div>
                                    </th>
                                    <td class="px-6 py-4">
                                        Node Developer
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center">
                                            <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">

                                        <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                    </td>
                                </tr>
                                <tr class=" border-b">

                                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src={require('./assets/logo.png')} alt="Logo" />

                                        <div class="ps-3">
                                            <div class="text-base font-semibold">Neil Sims</div>
                                            <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                        </div>
                                    </th>
                                    <td class="px-6 py-4">
                                        React Developer
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center">
                                            <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">

                                        <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                    </td>
                                </tr>
                                <tr class=" border-b">

                                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src={require('./assets/logo.png')} alt="Logo" />

                                        <div class="ps-3">
                                            <div class="text-base font-semibold">Neil Sims</div>
                                            <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                        </div>
                                    </th>
                                    <td class="px-6 py-4">
                                        UI Developer
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center">
                                            <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">

                                        <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                    </div>

                </div>
                <div class="col-span-12 lg:col-span-3  rounded-lg  ">
                    <div class="bg-[#e6f1f8]  rounded-lg">
                        <div class="bg-black text-white p-4 rounded-2xl">
                            <div class="flex items-start gap-3">
                                <div class="mt-1">
                                    <span class="block w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                                </div>
                                <div>
                                    <p class="font-semibold text-base">Board meeting</p>
                                    <p class="text-sm text-gray-400">Feb 22 at 6:00 PM</p>
                                    <p class="text-sm mt-2 text-gray-400">
                                        You have been invited to attend a meeting of the Board Directors.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <span class="text-2xl font-semibold">Your To-Do List</span>
                        <div class="flex items-center gap-4 mt-3 px-3 py-4 rounded-lg bg-[#e6f1f8]">
                            <div class="bg-black text-white p-3 rounded-lg flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-80q-50 0-85-35t-35-85v-120h120v-560h600v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-600H320v480h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm0 0h-40 400-360Z" /></svg>
                            </div>
                            <div>
                                <p class="font-semibold text-base">Run payroll</p>
                                <p class="text-sm text-gray-500">Mar 4 at 6:00 pm</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 mt-3 px-3  py-4 rounded-lg bg-[#e6f1f8]">
                            <div class="bg-black text-white p-3 rounded-lg flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" /></svg>
                            </div>
                            <div>
                                <p class="font-semibold text-base">Review time off request</p>
                                <p class="text-sm text-gray-500">Mar 7 at 6:00 pm</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 mt-3 px-3 py-4 rounded-lg bg-[#e6f1f8]">
                            <div class="bg-black text-white p-3 rounded-lg flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560h-80v120H280v-120h-80v560Zm280-560q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" /></svg>
                            </div>
                            <div>
                                <p class="font-semibold text-base">Sign board resolution</p>
                                <p class="text-sm text-gray-500">Mar 4 at 6:00 pm</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 mt-3 px-3 py-4 rounded-lg bg-[#e6f1f8]">
                            <div class="bg-black text-white p-3 rounded-lg flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-80q-50 0-85-35t-35-85v-120h120v-560h600v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-600H320v480h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm0 0h-40 400-360Z" /></svg>
                            </div>
                            <div>
                                <p class="font-semibold text-base">Finish onboarding tony</p>
                                <p class="text-sm text-gray-500">Mar 4 at 6:00 pm</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#e6f1f8]  rounded-lg">
                        <div class="bg-black text-white p-4 rounded-2xl">
                            <div>
                                <p class="font-semibold text-base my-3">Formation status</p>
                                <p class="text-sm text-gray-400">In Progress</p>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 my-5">
                                <div
                                    className="bg-[#80b0c7] h-2.5 rounded-full"
                                    style={{ width: '45%' }}
                                ></div>
                            </div>
                            <div class="text-sm mt-2 text-gray-400 flex flex-col justify-center items-center">
                                <p class="">
                                    Estimated processing
                                </p>
                                <p>4 to 5 business days</p>
                            </div>
                            <button type="button" class="my-3 w-full py-2.5 px-5 me-2 mb-2 text-sm font-semibold text-gray-900 focus:outline-none bg-[#80b0c7] rounded-lg ">Alternative</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default maincontent;