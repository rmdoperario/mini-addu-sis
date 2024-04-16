function createGradesTable() {
    let html = `
    <div class="container mx-auto my-8 px-4">
        <table class="table-auto w-full border-collapse border border-gray-300 bg-white shadow-md rounded-md overflow-hidden">
            <thead class="bg-gray-200">
                <tr>
                    <th class="px-4 py-2">Subj No.</th>
                    <th class="px-4 py-2">Descriptive Title</th>
                    <th class="px-4 py-2">Prelim</th>
                    <th class="px-4 py-2">Midterm</th>
                    <th class="px-4 py-2">Pre-Final</th>
                    <th class="px-4 py-2">Final</th>
                    <th class="px-4 py-2">Units</th>
                    <th class="px-4 py-2">Credit to</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="px-4 py-2">IT 2241</td>
                    <td class="px-4 py-2 text-center">Event Driven Programming</td>
                    <td class="px-4 py-2"></td>
                    <td class="px-4 py-2"></td>
                    <td class="px-4 py-2"></td>
                    <td class="px-4 py-2"></td>
                    <td class="px-4 py-2 text-center">3.00</td>
                    <td class="px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="px-4 py-2"></td>
                    <td class="px-4 py-2 text-right"><b>Quality Point Index (Q.P.I) or Weighted Percentage Average (W.P.A) =</b></td>
                    <td class="px-4 py-2"></td>
                    <td class="px-4 py-2"></td>
                    <td class="px-4 py-2"></td>
                    <td class="px-4 py-2"></td>
                    <td class="px-4 py-2"></td>
                    <td class="px-4 py-2"></td>
                </tr>
            </tbody>
        </table>
    </div>
    `;
    return html;
}
