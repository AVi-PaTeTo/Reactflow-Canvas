import { IGraphData } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useGraphData = (appId: string) => {
    return useQuery<IGraphData, Error>({
        queryKey: ['apps', appId],
        queryFn: async () => {
            const res = await fetch(`/api/apps/${appId}/graph`);
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        },

        enabled: !!appId,
    });
};
