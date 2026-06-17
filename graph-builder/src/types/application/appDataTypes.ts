import { IEdge, IServiceNode } from '../nodes/nodeTypes';

export interface IApplication {
    id: string;
    title: string;
    description?: string;
    status: 'active' | 'suspended' | 'stopped';
}

export interface IGraphData {
    id: string;
    appId: string;
    nodes: IServiceNode[];
    edges: IEdge[];
}
