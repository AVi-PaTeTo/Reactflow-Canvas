import { useQuery } from '@tanstack/react-query';
import { Separator } from '@/components/ui/separator';
import { useAppStore } from '@/store/useStore';
import { IApplication } from '@/types';

function AppList() {
    const selectedAppId = useAppStore((s) => s.selectedAppId);
    const selectApp = useAppStore((s) => s.selectApp);

    const {
        data: apps = [],
        isLoading,
        error,
    } = useQuery({
        queryKey: ['apps'],
        queryFn: async () => {
            const res = await fetch('/api/apps');
            if (!res.ok) throw new Error('Failed to fetch apps');
            return res.json();
        },

        staleTime: 1000 * 60,
        refetchOnWindowFocus: true,
    });

    if (isLoading) {
        return <div>Loading apps...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {apps.map((item: IApplication) => (
                <span key={item.id}>
                    <li
                        onClick={() => selectApp(item.id)}
                        className={`group rounded-sm p-3 cursor-pointer  ${selectedAppId === item.id ? 'bg-indigo-900/40 text-foreground' : ''}`}
                    >
                        <div className="group-hover:translate-x-5 transition-transform duration-200">
                            {item.title}
                        </div>
                    </li>
                    <Separator className={`my-1 w-[90%]`} />
                </span>
            ))}
        </>
    );
}

export default AppList;
