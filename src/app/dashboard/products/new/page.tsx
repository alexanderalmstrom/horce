import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import DashboardCreateProductForm from "~/app/_components/DashboardCreateProductForm";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Link
        href="/dashboard/products"
        className="inline-flex items-center gap-1"
      >
        <ChevronLeft size={16} />
        Back
      </Link>
      <h1 className="text-2xl">New product</h1>
      <DashboardCreateProductForm />
    </div>
  );
}
