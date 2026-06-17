import { Position, Handle, type NodeProps } from "@xyflow/react";
import type { IGroupNode } from "@/types";

export default function GroupNode({ data, selected }: NodeProps<IGroupNode>) {
    return (
        <div
            className={`relative pointer-events-auto flex flex-col rounded-sm border-2 bg-card p-3 px-8 
                hover:shadow-primary/10 hover:shadow-md 
                ${selected ? "border-primary/80 hover:shadow-none" : "border-foreground/20"}`}
        >
            <div className="flex items-center h-fit w-full ">
                <h1 className=" text-lg font-semibold text-foreground flex-1">
                    {data?.title}
                </h1>
            </div>
            <Handle
                type="target"
                position={Position.Top}
                className="!border-2 !border-card-foreground/80 !bg-card !h-[10px] !w-[10px] -translate-y-[1px] "
            />
            <Handle
                type="source"
                position={Position.Bottom}
                className="!border-2 !border-card-foreground/80 !bg-card !h-[10px] !w-[10px] translate-y-[1px] "
            />
        </div>
    );
}
