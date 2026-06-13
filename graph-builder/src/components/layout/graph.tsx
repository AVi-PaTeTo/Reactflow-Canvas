import { useState, useCallback } from "react";
import {
    Controls,
    Background,
    ReactFlow,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const initialNodes = [
    { id: "n1", position: { x: -130, y: 0 }, data: { label: "Node 1" } },
    { id: "n2", position: { x: 0, y: 130 }, data: { label: "Node 2" } },
    { id: "n3", position: { x: 130, y: 0 }, data: { label: "Node 3" } },
];
const initialEdges = [
    { id: "n1-n2", source: "n1", target: "n2" },
    { id: "n3-n2", source: "n3", target: "n2", animated: true },
];

export default function XYFlow({ className }: { className: string }) {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) =>
            setNodes((nodesSnapshot) =>
                applyNodeChanges(changes, nodesSnapshot),
            ),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) =>
            setEdges((edgesSnapshot) =>
                applyEdgeChanges(changes, edgesSnapshot),
            ),
        [],
    );
    const onConnect = useCallback(
        (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    return (
        <div className={className}>
            <ReactFlow
                deleteKeyCode={["Delete", "Backspace"]}
                nodes={nodes}
                edges={edges}
                colorMode="dark"
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Background color="gray" variant="dots" />
                <Controls />
            </ReactFlow>
        </div>
    );
}
