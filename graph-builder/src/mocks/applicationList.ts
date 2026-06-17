import { IApplication, IGraphData } from '@/types';

export const apps: IApplication[] = [
    {
        id: 'small-scale',
        title: 'Small Scale',
        description: '',
        status: 'active',
    },
    {
        id: 'medium-scale',
        title: 'Medium Scale',
        description: '',
        status: 'active',
    },
    {
        id: 'large-scale',
        title: 'Large Scale',
        description: '',
        status: 'active',
    },
];

export const nodes: IGraphData[] = [
    {
        id: 'small-scale-node',
        appId: 'small-scale',
        nodes: [
            {
                id: 'n1',
                type: 'originNode',
                position: { x: 100, y: 400 },
                data: {
                    title: 'Todo App',
                    status: 'active',
                },
            },
            {
                id: 'n2',
                type: 'serviceNode',
                position: { x: 400, y: 100 },
                data: {
                    title: 'Postgres',
                    status: 'healthy',
                    cost: '0.03',
                    resources: {
                        cpu: 5,
                        memory: 7,
                        disk: 12,
                        region: 4,
                    },
                },
            },
            {
                id: 'n3',
                type: 'serviceNode',
                position: { x: 200, y: 200 },
                data: {
                    title: 'Postgres',
                    status: 'degraded',
                    cost: '0.03',
                    resources: {
                        cpu: 5,
                        memory: 7,
                        disk: 12,
                        region: 4,
                    },
                },
            },
        ],
        edges: [
            { source: 'n1', target: 'n3', id: 'xy-edge__n1-n3' },
            { source: 'n1', target: 'n2', id: 'xy-edge__n1-n2' },
        ],
    },
    {
        id: 'medium-scale-node',
        appId: 'medium-scale',
        nodes: [
            {
                id: 'n4',
                type: 'originNode',
                position: { x: 0, y: 0 },
                data: {
                    title: 'Ecommerce App',
                    status: 'active',
                },
            },
            {
                id: 'n5',
                type: 'serviceNode',
                position: { x: -200, y: 200 },
                data: {
                    title: 'Postgres',
                    status: 'degraded',
                    cost: '0.03',
                    resources: {
                        cpu: 5,
                        memory: 7,
                        disk: 12,
                        region: 4,
                    },
                },
            },
            {
                id: 'n6',
                type: 'serviceNode',
                position: { x: 200, y: 200 },
                data: {
                    title: 'Redis',
                    status: 'down',
                    cost: '0.03',
                    resources: {
                        cpu: 5,
                        memory: 7,
                        disk: 12,
                        region: 4,
                    },
                },
            },
            {
                id: 'n12',
                type: 'serviceNode',
                position: { x: 350, y: 450 },
                data: {
                    title: 'MongoDB',
                    status: 'healthy',
                    cost: '0.03',
                    resources: {
                        cpu: 5,
                        memory: 7,
                        disk: 12,
                        region: 4,
                    },
                },
            },
            {
                id: 'n13',
                type: 'serviceNode',
                position: { x: -350, y: 450 },
                data: {
                    title: 'Kafka',
                    status: 'healthy',
                    cost: '0.03',
                    resources: {
                        cpu: 5,
                        memory: 7,
                        disk: 12,
                        region: 4,
                    },
                },
            },
        ],
        edges: [],
    },
    {
        id: 'large-scale-node',
        appId: 'large-scale',
        nodes: [
            {
                id: 'n7',
                type: 'originNode',
                position: { x: 0, y: -100 },
                data: {
                    title: 'Uber Eats',
                    status: 'active',
                },
            },
            {
                id: 'n8',
                type: 'groupNode',
                position: { x: 0, y: 200 },
                data: {
                    title: 'Database',
                },
            },
            {
                id: 'n9',
                type: 'serviceNode',
                position: { x: -350, y: 400 },
                data: {
                    title: 'Postgres',
                    status: 'healthy',
                    cost: '0.03',
                    resources: {
                        cpu: 5,
                        memory: 7,
                        disk: 12,
                        region: 4,
                    },
                },
            },
            {
                id: 'n10',
                type: 'serviceNode',
                position: { x: 150, y: 400 },
                data: {
                    title: 'Postgres',
                    status: 'healthy',
                    cost: '0.03',
                    resources: {
                        cpu: 5,
                        memory: 7,
                        disk: 12,
                        region: 4,
                    },
                },
            },
            {
                id: 'n11',
                type: 'serviceNode',
                position: { x: 550, y: 100 },
                data: {
                    title: 'Twillio',
                    status: 'down',
                    cost: '0.03',
                    resources: {
                        cpu: 5,
                        memory: 7,
                        disk: 12,
                        region: 4,
                    },
                },
            },
        ],
        edges: [
            { source: 'n7', target: 'n8', type: 'step', animated: true, id: 'xy-edge__n7-n8' },
            { source: 'n8', target: 'n9', type: 'step', animated: true, id: 'xy-edge__n8-n9' },
            { source: 'n8', target: 'n10', type: 'step', animated: true, id: 'xy-edge__n8-n10' },
            { source: 'n7', target: 'n11', type: 'step', animated: true, id: 'xy-edge__n7-n11' },
        ],
    },
];
