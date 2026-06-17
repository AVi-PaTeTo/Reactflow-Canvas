import { Badge } from "@/components/ui/badge";
import type { IOriginNode } from "@/types";
import { Position, Handle, type NodeProps } from "@xyflow/react";
import { Globe } from "lucide-react";

export default function OriginNode({ data, selected }: NodeProps<IOriginNode>) {
    const statusColor = {
        active: "text-active border-active bg-active/30",
        suspended: "text-suspended border-suspended bg-suspended/30",
        stopped: "text-error border-error bg-error/30",
    }[data?.status];

    return (
        <div
            // tabIndex={0}
            className={`relative pointer-events-auto flex flex-col rounded-sm border-2 bg-card p-4 
                hover:shadow-primary/10 hover:shadow-md
                ${selected ? "border-primary/80 hover:shadow-none" : "border-foreground/20"}`}
        >
            <div className="flex items-center h-fit w-fit max-w-120 gap-15  ">
                <span className="flex items-center gap-1">
                    <Globe size={"22px"} className="shrink-0" />
                    <h1 className=" text-2xl font-semibold text-foreground">
                        {data?.title}
                    </h1>
                </span>
                <Badge
                    variant={"status"}
                    className={`tracking-wider font-semibold ${statusColor}`}
                >
                    {data?.status}
                </Badge>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                className="!border-2 !border-card-foreground/80 !bg-card !h-[10px] !w-[10px] translate-y-[1px] "
            />
        </div>
    );
}
