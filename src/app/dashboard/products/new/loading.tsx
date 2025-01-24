export default function Loading() {
  return (
    <div className="flex flex-col items-start gap-5 py-1">
      <div className="h-4 w-full max-w-12 animate-pulse rounded-sm bg-foreground/10" />
      <div className="h-6 w-full max-w-24 animate-pulse rounded-sm bg-foreground/10" />
      <div className="flex w-full flex-col gap-2">
        <div className="h-4 w-full max-w-16 animate-pulse rounded-sm bg-foreground/10" />
        <div className="h-10 w-full animate-pulse rounded-sm bg-foreground/10" />
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="h-4 w-full max-w-16 animate-pulse rounded-sm bg-foreground/10" />
        <div className="h-10 w-full animate-pulse rounded-sm bg-foreground/10" />
      </div>
      <div className="h-12 w-full animate-pulse rounded-sm bg-foreground/20" />
    </div>
  );
}
