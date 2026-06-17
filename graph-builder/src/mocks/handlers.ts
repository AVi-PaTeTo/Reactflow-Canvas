import { http, HttpResponse, delay } from 'msw';
import { apps, nodes } from './applicationList';

export const handlers = [
    http.get('api/apps', async () => {
        await delay(1000);
        return HttpResponse.json(apps);
    }),

    http.get('api/apps/:id/graph', ({ params }) => {
        const { id } = params;
        const foundGraph = nodes.find((node) => node.appId === id);
        if (!foundGraph) {
            return new HttpResponse(null, { status: 404 });
        }
        return HttpResponse.json(foundGraph);
    }),
];
