
import { Card } from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {fetchDescInvoices ,fetchAsecInvoices,fetchUser,fetchTotalRevenue, currentRevenue} from '@/app/lib/data';

export default async function Page() 
{ 

  const DescInvoices= await fetchDescInvoices();
  const AsecInvoices=await fetchAsecInvoices();
  const TotalUsers = await fetchUser();
  const TotalRevenue =await fetchTotalRevenue();
  const LatestRevenue = await currentRevenue();
    // const Oddrevenue= await fetchOddRevenue();
    // const Evenrevenue=await fetchEvenRevenue();
    // const revenue = await fetchRevenue();
    // const latestInvoices = await fetchLatestInvoices();
    // const {
    //     numberOfInvoices,
    //     numberOfCustomers,
    //     totalPaidInvoices,
    //     totalPendingInvoices,
    //   } = await fetchCardData();
    
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Users" value={TotalUsers} type="customers" />
        <Card title="current Revenue" value={LatestRevenue} type="invoices" />
        <Card title="Total Revenue" value={TotalRevenue} type="invoices" />
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        
        <LatestInvoices latestInvoices={AsecInvoices} />
        <LatestInvoices latestInvoices={DescInvoices} />
      </div>
    </main>
  );
}
