const studentInfo = {
    cardNo: "145734",
    course: "BS-IT",
    year: "1"
};

const subjects = [
    {
        code: "4-114",
        subjNo: "IT 2241",
        title: "Event-Driven Programming",
        schedule: "* 2:05P-4:35P F605 TTh *",
        teacher: "De Jesus, Ian Dwight"
    },
    // Add more subject objects here
];

window.onload = function() {
    const infoTbody = document.getElementById("info-data");
    const subjectsTbody = document.getElementById("subjects-data");

    const infoTr = document.createElement("tr");
    infoTr.innerHTML = `
        <th class="px-4 py-2">Card No:</th>
        <td class="px-4 py-2">${studentInfo.cardNo}</td>
        <th class="px-4 py-2">Course:</th>
        <td class="px-4 py-2">${studentInfo.course}</td>
        <th class="px-4 py-2">Year:</th>
        <td class="px-4 py-2">${studentInfo.year}</td>
    `;
    infoTbody.appendChild(infoTr);

    subjects.forEach(subject => {
        const subjectTr = document.createElement("tr");
        subjectTr.innerHTML = `
            <td class="px-4 py-2">${subject.code}</td>
            <td class="px-4 py-2">${subject.subjNo}</td>
            <td class="px-4 py-2">${subject.title}</td>
            <td class="px-4 py-2">${subject.schedule}</td>
            <td class="px-4 py-2">${subject.teacher}</td>
        `;
        subjectsTbody.appendChild(subjectTr);
    });
};

function createEnrollmentTable() {
    let html = `
    <div class="container mx-auto my-8 px-4">
        <table class="table-auto w-full border-collapse border border-gray-300 bg-white shadow-md rounded-md overflow-hidden mt-4">
            <thead class="bg-gray-200">
                <tr id="info-data">
                    <!-- Student info will be inserted here -->
                </tr>
            </thead>
        </table>

        <h1 class="text-xl font-bold mt-8">Subjects</h1>

        <table class="table-auto w-full border-collapse border border-gray-300 bg-white shadow-md rounded-md overflow-hidden mt-4">
            <thead class="bg-gray-200">
                <tr>
                    <th class="px-4 py-2">Code</th>
                    <th class="px-4 py-2">Subj. No</th>
                    <th class="px-4 py-2">Descriptive Title</th>
                    <th class="px-4 py-2">Schedule</th>
                    <th class="px-4 py-2">Teacher</th>
                </tr>
            </thead>
            <tbody id="subjects-data" class="text-center">
                <!-- Subjects will be inserted here -->
            </tbody>
        </table>
    </div>
    `;
    return html;
}