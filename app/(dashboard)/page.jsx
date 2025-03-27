import { LogoutIcon } from "../lib/utils";
import { signOut } from "@/auth";
import PotsSummary from "../components/overview/PotsSummary";
import LatestTransactions from "../components/overview/LatestTransactions";
import BudgetsChart from "../components/overview/BudgetsChart";
import RecurringBillsSummary from "../components/overview/RecurringBillsSummary";
import { Suspense } from "react";
import { BudgetsChartSkeleton, CardsWrapperSkeleton, LatestTransactionsSkeleton, PotsSummarySkeleton, RecurringBillsSummarySkeleton } from "../components/skeletons";
import CardsWrapper from "../components/overview/CardsWrapper";

export const dynamic = 'force-dynamic';

export default function OverviewPage(){
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Overview</h1>
        <form 
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/login' });
          }}>
          <button type="submit" className="bg-neutral-900 text-white font-bold rounded-md p-2 hover:bg-neutral-800 transition-all ease-in-out duration-200 flex items-center gap-2">
            <LogoutIcon/>
            <span>
              Logout
            </span>
          </button>
        </form>
      </div>
      
      <Suspense fallback={<CardsWrapperSkeleton />}>
        <CardsWrapper />
      </Suspense>

      <div className="mt-10 lg:mt-8 columns-1 lg:columns-2 gap-6">
        <Suspense fallback={<PotsSummarySkeleton />}>
          <PotsSummary />
        </Suspense>
        <Suspense fallback={<BudgetsChartSkeleton />}>
          <BudgetsChart />
        </Suspense>
        <Suspense fallback={<LatestTransactionsSkeleton />}>
          <LatestTransactions />
        </Suspense>
        <Suspense fallback={<RecurringBillsSummarySkeleton />}>
          <RecurringBillsSummary />
        </Suspense>
      </div>
    </>
  )
}