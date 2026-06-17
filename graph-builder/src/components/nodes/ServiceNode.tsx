import { Badge } from '@/components/ui/badge';
import type { IServiceNode } from '@/types';

import { Position, Handle, type NodeProps } from '@xyflow/react';
import {
    Cpu,
    CpuIcon,
    Database,
    HardDrive,
    MemoryStick,
    CircleCheck,
    Info,
    TriangleAlert,
} from 'lucide-react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

import { Slider } from '@/components/ui/slider';
import React from 'react';
import { useAppStore } from '@/store/useStore';

interface Status {
    color: 'green' | 'yellow' | 'red';
    icon: React.ReactNode;
}

type StatusType = 'healthy' | 'degraded' | 'down';

const statusColor: Record<StatusType, Status> = {
    healthy: {
        color: 'green',
        icon: <CircleCheck />,
    },
    degraded: {
        color: 'yellow',
        icon: <Info />,
    },
    down: {
        color: 'red',
        icon: <TriangleAlert />,
    },
};

export default function ServiceNode({ id, data, selected }: NodeProps<IServiceNode>) {
    const nodeStatus = statusColor[data?.status];
    const selectedNodeId = useAppStore((s) => s.selectedNodeId);
    const openNodeInspector = useAppStore((s) => s.OpenNodeInspector);
    const selectNode = useAppStore((s) => s.selectNode);
    if (selected) {
        selectNode(id);
        openNodeInspector();
    }

    return (
        <div
            className={`relative pointer-events-auto flex gap-2 flex-col rounded-sm border-2 bg-card p-4 px-6 
                hover:shadow-primary/10 hover:shadow-md w-95 ${selectedNodeId === id ? 'bg-cyan-500/20 backdrop-blur-md' : ''}
                ${selected ? 'border-primary/80 hover:shadow-none' : 'border-foreground/20'}`}
        >
            <div className="flex items-center gap-2 h-fit w-full mb-1">
                <span className="flex flex-1 items-center gap-1">
                    <Cpu size={'20px'} className="shrink-0" />
                    <h1 className=" text-md tracking-wider font-semibold w-full text-foreground">
                        {data?.title}
                    </h1>
                </span>
                <Badge
                    variant={'status'}
                    className={`tracking-wider font-semibold text-active border-active bg-active/30`}
                >
                    ${data?.cost}/HR
                </Badge>
            </div>
            <div className="mb-1">
                <div className="flex w-full text-[9px] font-semibold tracking-wider mb-1">
                    <p className="flex-1 text-center">0.2</p>
                    <p className="flex-1 text-center">3.5 GB</p>
                    <p className="flex-1 text-center">10 GB</p>
                    <p className="flex-1 text-center">1</p>
                </div>
                <Tabs>
                    <TabsList
                        className={` bg-gray-900 flex w-full nodrag p-[1px] px-[2px] pt-[2px] rounded-lg`}
                    >
                        <TabsTrigger
                            className={`text-white hover:text-cyan-500 data-[active]:bg-cyan-500 dark:data-[active]:text-background`}
                            value={`cpu`}
                        >
                            <CpuIcon />
                            CPU
                        </TabsTrigger>
                        <TabsTrigger
                            className={`text-white hover:text-cyan-500 data-[active]:bg-cyan-500 dark:data-[active]:text-background`}
                            value={`memory`}
                        >
                            <MemoryStick />
                            Memory
                        </TabsTrigger>
                        <TabsTrigger
                            className={`text-white hover:text-cyan-500 data-[active]:bg-cyan-500 dark:data-[active]:text-background`}
                            value={`disk`}
                        >
                            <HardDrive />
                            Disk
                        </TabsTrigger>
                        <TabsTrigger
                            className={`text-white hover:text-cyan-500 data-[active]:bg-cyan-500 dark:data-[active]:text-background`}
                            value={`region`}
                        >
                            <Database /> Region
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value={`cpu`}>
                        <div className="flex items-center gap-2 mb-1 pointer-events-none">
                            <Slider
                                defaultValue={0}
                                value={data.resources.cpu}
                                min={0}
                                max={50}
                                step={1}
                                className={`transition-all duration-200`}
                            />
                            <span className="w-20 text-end text-xs border rounded-sm p-1 px-2">
                                {data.resources.cpu}
                            </span>
                        </div>
                    </TabsContent>
                    <TabsContent value={`memory`}>
                        <div className="flex items-center gap-2 mb-1 pointer-events-none">
                            <Slider
                                defaultValue={0}
                                value={data.resources.memory}
                                min={0}
                                max={50}
                                step={1}
                                className={`transition-all duration-200`}
                            />
                            <span className="w-20 text-end text-xs border rounded-sm p-1 px-2">
                                {data.resources.memory}
                            </span>
                        </div>
                    </TabsContent>
                    <TabsContent value={`disk`}>
                        <div className="flex items-center gap-2 mb-1 pointer-events-none">
                            <Slider
                                defaultValue={0}
                                value={data.resources.disk}
                                min={0}
                                max={50}
                                step={1}
                                className={`transition-all duration-200`}
                            />
                            <span className="w-20 text-end text-xs border rounded-sm p-1 px-2">
                                {data.resources.disk}
                            </span>
                        </div>
                    </TabsContent>
                    <TabsContent value={`region`}>
                        <div className="flex items-center gap-2 mb-1 pointer-events-none">
                            <Slider
                                defaultValue={0}
                                value={data.resources.region}
                                min={0}
                                max={50}
                                step={1}
                                className={`transition-all duration-200`}
                            />
                            <span className="w-20 text-end text-xs border rounded-sm p-1 px-2">
                                {data.resources.region}
                            </span>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            <div className="w-full flex items-center justify-between">
                <Badge
                    variant={'health'}
                    color={nodeStatus.color}
                    className={`tracking-wider font-medium`}
                >
                    {nodeStatus.icon}
                    {data?.status}
                </Badge>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 640 640"
                >
                    <path
                        fill="orange"
                        d="M180.4 267c-.7 22.6 10.6 32.7 10.9 39c-.1 1.3-.6 2.5-1.3 3.6s-1.7 2-2.8 2.6l-12.8 9c-1.7 1.2-3.6 1.8-5.6 1.9c-.4 0-8.2 1.8-20.5-25.6c-7.5 9.4-17 16.9-27.9 22s-22.7 7.7-34.7 7.5c-16.3.9-60.4-9.2-58.1-56.2c-1.6-38.3 34.1-62.1 70.9-60c7.1 0 21.6.4 47 6.3v-15.6c2.7-26.5-14.7-47-44.8-43.9c-2.4 0-19.4-.5-45.8 10.1c-7.4 3.4-8.3 2.8-10.8 2.8c-7.4 0-4.4-21.5-2.9-24.2c5.2-6.4 35.9-18.4 65.9-18.2c20.1-1.8 40.1 4.4 55.7 17.3c6.3 7.1 11.2 15.4 14.2 24.4s4.2 18.5 3.5 28v69.3zM94 299.4c32.4-.5 46.2-20 49.3-30.5c2.5-10.1 2.1-16.4 2.1-27.4c-9.7-2.3-23.6-4.9-39.6-4.9c-15.2-1.1-42.8 5.6-41.7 32.3c-1.2 16.8 11.1 31.4 30 30.5zm170.9 23.1c-7.9.7-11.5-4.9-12.7-10.4l-49.8-164.7c-1-2.8-1.6-5.6-1.9-8.6c-.2-1.2.1-2.4.8-3.4s1.8-1.6 3-1.8h22.2c8.8-.9 11.6 6 12.6 10.4l35.8 140.8L308.1 144c.5-3.2 2.9-11.1 12.8-10.2h17.2c2.2-.2 11.1-.5 12.7 10.4l33.3 142.5L421 144.1c.5-2.2 2.7-11.4 12.7-10.4h19.7c.9-.1 6.2-.8 5.3 8.6c-.4 1.8 3.4-10.7-52.8 169.9c-1.1 5.5-4.8 11.1-12.7 10.4h-18.7c-10.9 1.2-12.5-9.7-12.7-10.7l-33.2-137.1l-32.8 137c-.2 1.1-1.7 11.9-12.7 10.7h-18.3zm273.5 5.6c-5.9 0-33.9-.3-57.4-12.3c-2.3-1-4.3-2.6-5.7-4.8s-2.1-4.6-2.1-7.1v-10.7c0-8.5 6.2-6.9 8.8-5.9c10 4.1 16.5 7.1 28.8 9.6c36.7 7.5 52.8-2.3 56.7-4.5c13.2-7.8 14.2-25.7 5.3-34.9c-10.5-8.8-15.5-9.1-53.1-21c-4.6-1.3-43.7-13.6-43.8-52.4c-.6-28.2 25-56.2 69.5-56c12.7 0 46.4 4.1 55.6 15.6c1.4 2.1 2 4.6 1.9 7v10.1c0 4.4-1.6 6.7-4.9 6.7c-7.7-.9-21.4-11.2-49.2-10.8c-6.9-.4-39.9.9-38.4 25c-.4 19 26.6 26.1 29.7 26.9c36.5 11 48.6 12.8 63.1 29.6c17.1 22.2 7.9 48.3 4.3 55.4c-19.1 37.5-68.4 34.4-69.3 34.4zM578.6 433c-70 51.7-171.7 79.2-258.5 79.2C203 513 89.8 469.9 2.8 391.5c-6.5-5.9-.8-14 7.2-9.5c96.5 55.2 205.7 84.2 316.9 84.1c83-.4 165.1-17.3 241.6-49.5c11.8-5 21.8 7.8 10.1 16.4m29.2-33.3c-9-11.5-59.3-5.4-81.8-2.7c-6.8.8-7.9-5.1-1.8-9.5c40.1-28.2 105.9-20.1 113.4-10.6s-2.1 75.4-39.6 106.9c-5.8 4.9-11.3 2.3-8.7-4.1c8.4-21.3 27.4-68.5 18.4-80z"
                    />
                </svg>
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
