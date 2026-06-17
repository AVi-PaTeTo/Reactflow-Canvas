import { motion } from 'motion/react';
import { useAppStore } from '@/store/useStore';
import { useHotkey } from '@tanstack/react-hotkeys';
import ApplicationTab from '@/components/rightPanel/ApplicationTab';
import NodeInspector from '@/components/rightPanel/NodeInspector';

const sidepanelVariant = {
    full: { height: '100%' },
    minimize: { height: 'auto' },
};

export default function Sidepanel() {
    const sidePanelOpen = useAppStore((s) => s.sidePanelCollapsed);
    const fullscreen = useAppStore((s) => s.fullscreenActive);
    const toggleSidePanel = useAppStore((s) => s.toggleSidePanel);
    useHotkey('P', () => toggleSidePanel());

    return (
        <div
            className={`z-50 m-3  [grid-area:sidepanel] relative hidden  pointer-events-none ${fullscreen ? '' : 'md:flex'}`}
        >
            <motion.div
                variants={sidepanelVariant}
                initial={{ height: 'auto' }}
                animate={sidePanelOpen ? 'full' : 'minimize'}
                transition={{ duration: 0.4 }}
                className={`overflow-hidden border flex flex-col gap-3 w-full bg-card/70 backdrop-blur-xs absolute rounded-md p-3 pointer-events-auto shadow-sm`}
            >
                <ApplicationTab />
                <NodeInspector />
            </motion.div>
        </div>
    );
}
