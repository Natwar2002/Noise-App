import { cn } from "@/lib/utils"; // Optional: for className merging
import { Tooltip } from "@heroui/react";

export default function ChatItem({ icon: Icon, label }) {
  return (
    <Tooltip content={label} placement="right">
      <div
        className={cn(
          "flex items-center gap-3 p-2 rounded-lg cursor-pointer",
          "hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        )}
      >
        <Icon className="size-6 text-slate-700 dark:text-slate-300" />
        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
          {label}
        </span>
      </div>
    </Tooltip>
  );
}
