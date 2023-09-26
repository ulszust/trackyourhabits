import {useState} from 'react'
import Calendar from "react-calendar";


export function CalendarComponent() {

return (
    <div>
        <Calendar/>

    </div>
)

}
// export const CalendarComponent = () => {
//     return (
//         <>
//             <div className="border-solid border-2 border-orange-800">
//                 <div className="overflow-x-auto">
//                     <table className="table">
//                         {/* head */}
//                         <thead>
//                         <tr>
//                             <th>aktywnosc</th>
//                             <th>Mon</th>
//                             <th>Tue</th>
//                             <th>Wed</th>
//                             <th>Thu</th>
//                             <th>Fri</th>
//                             <th>Sat</th>
//                             <th>Sun</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {/* row 1 */}
//                         <tr>
//                             <th className="w-40">joga</th>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                         </tr>
//                         {/* row 2 */}
//                         <tr>
//                             <th className="w-40">plywaniechodzenie</th>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                         </tr>
//                         {/* row 3 */}
//                         <tr>
//                             <th className="w-40">czytanie</th>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                         </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     )
// }