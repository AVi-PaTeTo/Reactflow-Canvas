import type { Node } from '@xyflow/react';

export interface IEdge {
    id: string;
    source: string;
    target: string;
    type?: 'default' | 'straight' | 'step' | 'smoothstep';
    animated?: boolean;
}

// Origin Node
export interface OriginNodeData {
    title: string;
    description?: string;
    status: 'active' | 'suspended' | 'stopped';
    [key: string]: unknown;
}

export type IOriginNode = Node<OriginNodeData, 'originNode'>;

//Group Node
export interface GroupNodeData {
    title: string;
    description?: string;
    [key: string]: unknown;
}

export type IGroupNode = Node<GroupNodeData, 'groupNode'>;

// Service Node
export interface ServiceNodeData {
    title: string;
    description?: string;
    status: 'healthy' | 'degraded' | 'down';
    cost: string;
    resources: {
        cpu: number;
        memory: number;
        disk: number;
        region: number;
    };

    [key: string]: unknown;
}

export type IServiceNode = Node<ServiceNodeData, 'serviceNode'>;
