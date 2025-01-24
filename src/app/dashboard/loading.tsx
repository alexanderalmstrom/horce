export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-start gap-2 py-1">
        <div className="h-6 w-full max-w-52 animate-pulse rounded-sm bg-foreground/10" />
      </div>
      <div className="flex flex-wrap gap-3">
        <div className="h-24 max-w-72 grow animate-pulse rounded-lg bg-foreground/10 p-4" />
        <div className="h-24 max-w-72 grow animate-pulse rounded-lg bg-foreground/10 p-4" />
      </div>
    </div>
  );
}
