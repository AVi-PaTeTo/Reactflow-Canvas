import { useState, useCallback, useEffect } from 'react';
import OriginNode from '@/components/nodes/OriginNode';
import GroupNode from '@/components/nodes/GroupNode';
import ServiceNode from '@/components/nodes/ServiceNode';
import { useQuery } from '@tanstack/react-query';

import {
    Controls,
    Background,
    ReactFlow,
    useNodesState,
    useEdgesState,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useAppStore } from '@/store/useStore';
import type { IGroupNode, IOriginNode, IServiceNode } from '@/types';
import { useGraphData } from '@/queries/graphData';

const nodeTypes = {
    originNode: OriginNode,
    groupNode: GroupNode,
    serviceNode: ServiceNode,
};

type FlowNode = IGroupNode | IOriginNode | IServiceNode;

// const initialNodes: FlowNode[] = [
//     {
//         id: 'n1',
//         type: 'originNode',
//         position: { x: -330, y: 0 },
//         data: { title: 'Uber Eats', description: '', status: 'active' },
//     },
//     {
//         id: 'n2',
//         type: 'groupNode',
//         position: { x: 0, y: 0 },
//         data: { title: 'database' },
//     },
//     {
//         id: 'n3',
//         type: 'serviceNode',
//         position: { x: 300, y: 0 },
//         data: {
//             title: 'Redis',
//             status: 'healthy',
//             cost: '0.03',
//             resources: {
//                 cpu: 5,
//                 memory: 7,
//                 disk: 12,
//                 region: 4,
//             },
//         },
//     },
//     {
//         id: 'n4',
//         type: 'serviceNode',
//         position: { x: 300, y: 200 },
//         data: {
//             title: 'MongoDB',
//             status: 'healthy',
//             cost: '0.03',
//             resources: {
//                 cpu: 5,
//                 memory: 7,
//                 disk: 12,
//                 region: 4,
//             },
//         },
//     },
//     {
//         id: 'n5',
//         type: 'serviceNode',
//         position: { x: 300, y: 400 },
//         data: {
//             title: 'Postgres',
//             status: 'degraded',
//             cost: '0.03',
//             resources: {
//                 cpu: 5,
//                 memory: 7,
//                 disk: 12,
//                 region: 4,
//             },
//         },
//     },
//     {
//         id: 'n6',
//         type: 'serviceNode',
//         position: { x: 100, y: 100 },
//         data: {
//             title: 'Twillio',
//             status: 'down',
//             cost: '0.03',
//             resources: {
//                 cpu: 5,
//                 memory: 7,
//                 disk: 12,
//                 region: 4,
//             },
//         },
//     },
// ];
// const initialEdges = [
//     { id: 'n1-n2', source: 'n1', target: 'n2' },
//     { id: 'n2-n3', source: 'n2', target: 'n3' },
//     { id: 'n2-n4', source: 'n2', target: 'n4' },
//     { id: 'n2-n5', source: 'n2', target: 'n5' },
//     { id: 'n1-n6', source: 'n1', target: 'n6' },
// ];

export default function XYFlow({ className }: { className: string }) {
    const theme = useAppStore((s) => s.theme);
    const selectedAppId = useAppStore((s) => s.selectedAppId);
    const { data: graph } = useGraphData(selectedAppId!);

    const [nodes, setNodes, onNodesChange] = useNodesState<FlowNode>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        if (graph) {
            setNodes(graph.nodes);
            setEdges(graph.edges);
        }
    }, [graph, setNodes, setEdges]);

    const onConnect = useCallback(
        (params) => {
            setEdges((eds) => addEdge(params, eds));
            // If you need to save this to your server:
            // saveNewEdgeToBackend(params);
        },
        [setEdges]
    );

    return (
        <div className={className}>
            <ReactFlow
                deleteKeyCode={['Delete', 'Backspace']}
                nodeTypes={nodeTypes}
                nodes={nodes}
                edges={edges}
                colorMode={theme}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Background color={theme === 'light' ? '#007171' : '#39AAAA'} />
                <Controls className="-translate-y-15 md:translate-y-0" />
            </ReactFlow>
        </div>
    );
}
