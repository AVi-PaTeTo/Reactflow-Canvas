import { motion } from 'motion/react';
import { useAppStore } from '@/store/useStore';
import { useHotkey } from '@tanstack/react-hotkeys';
import ApplicationTab from '@/components/rightPanel/ApplicationTab';
import NodeInspector from '@/components/rightPanel/NodeInspector';

const sidepanelVariant = {
    full: { height: '100%' },
    minimize: { height: 'auto' },
};

export default function SidepanelMobile() {
    const sidePanelOpen = useAppStore((s) => s.sidePanelCollapsed);
    const nodeInspectorOpen = useAppStore((s) => s.inspectorOpen);

    const fullscreen = useAppStore((s) => s.fullscreenActive);
    const toggleSidePanel = useAppStore((s) => s.toggleSidePanel);
    useHotkey('P', () => toggleSidePanel());

    return (
        <div className={`z-50 relative flex  pointer-events-none md:hidden`}>
            <motion.div
                variants={sidepanelVariant}
                initial={{ height: 'auto' }}
                animate={sidePanelOpen ? 'full' : 'minimize'}
                transition={{ duration: 0.4 }}
                className={`overflow-hidden flex flex-col gap-3 w-full absolute rounded-md p-3 pointer-events-auto`}
            >
                {!nodeInspectorOpen && <ApplicationTab />}
                {nodeInspectorOpen && <NodeInspector />}
            </motion.div>
        </div>
    );
}
