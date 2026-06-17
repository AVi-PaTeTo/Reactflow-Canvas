import NodeInspector from '@/components/rightPanel/NodeInspector';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
    selectedAppId: string | null;
    selectedNodeId: string | null;
    searchString: string | null;
    theme: 'dark' | 'light';
    sidePanelCollapsed: boolean;
    isMobilePanelOpen: boolean;
    fullscreenActive: boolean;
    inspectorOpen: boolean;

    selectApp: (appId: string) => void;
    selectNode: (NodeId: string) => void;
    toggleTheme: () => void;
    setSearchString: (string: string) => void;

    OpenNodeInspector: () => void;
    CloseNodeInspector: () => void;
    toggleSidePanel: () => void;
    toggleMobilePanel: () => void;
    toggleFullscreen: () => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set, get) => ({
            selectedAppId: '',
            selectedNodeId: '',
            searchString: '',
            theme: 'light',
            inspectorOpen: false,
            sidePanelCollapsed: false,
            isMobilePanelOpen: false,
            fullscreenActive: false,

            selectApp: (appId) => set(() => ({ selectedAppId: appId })),
            selectNode: (nodeId) => set(() => ({ selectedNodeId: nodeId })),

            setSearchString: (string) =>
                set((state) => ({ searchString: state.searchString + string })),
            toggleTheme: () => {
                const currentTheme = get().theme;
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

                const root = document.documentElement;
                root.classList.remove('light', 'dark');
                root.classList.add(newTheme);

                localStorage.setItem('theme', newTheme);

                set({ theme: newTheme });
            },
            OpenNodeInspector: () => set({ inspectorOpen: true }),
            CloseNodeInspector: () => set({ inspectorOpen: false }),

            toggleSidePanel: () =>
                set((state) => ({ sidePanelCollapsed: !state.sidePanelCollapsed })),

            toggleMobilePanel: () =>
                set((state) => ({ isMobilePanelOpen: !state.isMobilePanelOpen })),

            toggleFullscreen: () => set((state) => ({ fullscreenActive: !state.fullscreenActive })),
        }),
        {
            name: 'app-state',
        }
    )
);

export const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || 'light';

    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(initialTheme);

    useAppStore.setState({ theme: initialTheme });
};
