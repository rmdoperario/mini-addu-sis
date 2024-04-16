function createStudentTable() {
    let html = `
    <div class="container mx-auto my-8 px-4">
        <table class="table-auto w-full border-collapse border border-gray-300 bg-white shadow-md rounded-md overflow-hidden">
            <thead class="bg-gray-200">
                <tr>
                    <th class="px-4 py-2">Code</th>
                    <th class="px-4 py-2">Student Name</th>
                    <th class="px-4 py-2">Final</th>
                    <th class="px-4 py-2">Grade Type</th>
                    <th class="px-4 py-2">Year Lvl</th>
                    <th class="px-4 py-2">Acad Status</th>
                    <th class="px-4 py-2">Year of Entry</th>
                    <th class="px-4 py-2">Entry Year Lvl</th>
                </tr>
            </thead>
            <tbody id="student-data">
                <!-- Student data will be inserted here -->
            </tbody>
        </table>
    </div>
    `;
    return html;
}