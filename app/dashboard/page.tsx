import { lusitana } from '@/app/ui/fonts';
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';

export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    //const numberOfCustomers, numberOfInvoices, totalPaidInvoice, totalPendingInvoices = await fetchCardData();
    const data = await fetchCardData();
    const numberOfCustomers = data.numberOfCustomers;
    const numberOfInvoices = data.numberOfInvoices;
    const totalPendingInvoices = data.totalPendingInvoices;
    const totalPaidInvoice = data.totalPaidInvoices;
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-x1 md:text-2x1`}> Dashboard </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {<Card title="Collected" value={totalPaidInvoice} type="collected" /> }
            { <Card title="Pending" value={totalPendingInvoices} type="pending" /> }
            { <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> }
            { <Card
            title="Total Customers"
            value={numberOfCustomers}
            type="customers"
            /> }
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                { <RevenueChart revenue={revenue}  /> }
                {<LatestInvoices latestInvoices={latestInvoices} /> }
            </div>
        </main>
    )
}