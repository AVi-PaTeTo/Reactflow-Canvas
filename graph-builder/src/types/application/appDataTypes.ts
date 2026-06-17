import { IEdge, FlowNode } from '../nodes/nodeTypes';

export interface IApplication {
    id: string;
    title: string;
    description?: string;
    status: 'active' | 'suspended' | 'stopped';
}

export interface IGraphData {
    id: string;
    appId: string;
    nodes: FlowNode[];
    edges: IEdge[];
}
