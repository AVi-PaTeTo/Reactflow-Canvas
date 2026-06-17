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
                type: 'serviceNode',
                position: { x: 100, y: 400 },
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
                id: 'n2',
                type: 'serviceNode',
                position: { x: 400, y: 100 },
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
        edges: [],
    },
    {
        id: 'medium-scale-node',
        appId: 'medium-scale',
        nodes: [
            {
                id: 'n4',
                type: 'serviceNode',
                position: { x: 100, y: 400 },
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
                id: 'n5',
                type: 'serviceNode',
                position: { x: 400, y: 100 },
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
                id: 'n12',
                type: 'serviceNode',
                position: { x: 500, y: 200 },
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
                id: 'n13',
                type: 'serviceNode',
                position: { x: 370, y: 120 },
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
        edges: [],
    },
    {
        id: 'large-scale-node',
        appId: 'large-scale',
        nodes: [
            {
                id: 'n7',
                type: 'serviceNode',
                position: { x: 100, y: 400 },
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
                id: 'n8',
                type: 'serviceNode',
                position: { x: 400, y: 100 },
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
                id: 'n9',
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
            {
                id: 'n10',
                type: 'serviceNode',
                position: { x: 120, y: 400 },
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
                id: 'n11',
                type: 'serviceNode',
                position: { x: 250, y: 400 },
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
        edges: [],
    },
];
