function createCourseTable() {
    let html = `
    <div class="container mx-auto my-8 px-4">
        <table class="table-auto w-full border-collapse border border-gray-300 bg-white shadow-md rounded-md overflow-hidden">
            <thead class="bg-gray-200">
                <tr>
                    <th class="px-4 py-2">Course code</th>
                    <th class="px-4 py-2">Course Name</th>
                    <th class="px-4 py-2">Number of slots</th>
                    <th class="px-4 py-2">Number of slots remained</th>
                    <th class="px-4 py-2">Start Time</th>
                    <th class="px-4 py-2">End Time</th>
                    <th class="px-4 py-2">Days</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="px-4 py-2 text-center">IT 2241</td>
                    <td class="px-4 py-2 text-center">Event Driven Programming</td>
                    <td class="px-4 py-2 text-center">40</td>
                    <td class="px-4 py-2 text-center">15</td>
                    <td class="px-4 py-2 text-center">2:05PM</td>
                    <td class="px-4 py-2 text-center">4:35PM</td>
                    <td class="px-4 py-2 text-center">TTh</td>
                </tr>
            </tbody>
        </table>
    </div>
    `;
    return html;
}