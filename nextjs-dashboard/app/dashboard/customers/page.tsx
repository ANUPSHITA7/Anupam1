import { fetchApiCustomer } from "@/app/lib/data";
import { data } from "@/app/lib/definitions";


export default async function Page() {
  const customers = await fetchApiCustomer();
  // console.log(customers);
    return <>
      <div className="relative overflow-x-auto">
       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Id</th>
            <th scope="col" className="px-6 py-3">Title</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
        {
          customers.map((data:data)=>{
            return (<tr key={data.userId}className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{data.id}</td>
              <td className="px-6 py-4">{data.title}</td>
              <td className={data.completed?"h-2.5 w-2.5 rounded-full bg-green-500 me-2 px-6 py-4":"h-2.5 w-2.5 rounded-full bg-red-500 me-2 px-6 py-4"}></td>
              </tr>)
          })
        }
        </tbody>
       </table>
      </div>
    </>;
  }