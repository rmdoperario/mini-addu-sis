const students = [
    {
        code: "142608",
        name: "Dagatan, Raphael Miguel D.",
        final: "",
        gradeType: "New",
        yearLvl: "1",
        acadStatus: "Regular",
        yearOfEntry: "2022",
        entryYearLvl: "1"
    },
    
    // Add more student objects here
];

window.onload = function() {
    const tbody = document.getElementById("student-data");
    students.forEach(student => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="px-4 py-2">${student.code}</td>
            <td class="px-4 py-2">${student.name}</td>
            <td class="px-4 py-2">
                <select class="grade-dropdown border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500">
                    <option value="" ${student.final === "" ? "selected" : ""} disabled></option>
                    <option value="A" ${student.final === "A" ? "selected" : ""}>A</option>
                    <option value="B+" ${student.final === "B+" ? "selected" : ""}>B+</option>
                    <option value="B" ${student.final === "B" ? "selected" : ""}>B</option>
                    <option value="C+" ${student.final === "C+" ? "selected" : ""}>C+</option>
                    <option value="C" ${student.final === "C" ? "selected" : ""}>C</option>
                    <option value="D" ${student.final === "D" ? "selected" : ""}>D</option>
                    <option value="F" ${student.final === "F" ? "selected" : ""}>F</option>
                    <option value="FD" ${student.final === "FD" ? "selected" : ""}>FD</option>
                </select>
            </td>
            <td class="px-4 py-2">${student.gradeType}</td>
            <td class="px-4 py-2">${student.yearLvl}</td>
            <td class="px-4 py-2">${student.acadStatus}</td>
            <td class="px-4 py-2">${student.yearOfEntry}</td>
            <td class="px-4 py-2">${student.entryYearLvl}</td>
        `;
        tbody.appendChild(tr);
    });
};
