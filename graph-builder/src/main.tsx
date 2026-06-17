import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { initializeTheme } from '@/store/useStore.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactFlowProvider } from '@xyflow/react';

const queryClient = new QueryClient();
initializeTheme();

const { worker } = await import('./mocks/browser');
await worker.start({
    onUnhandledRequest: 'warn',
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactFlowProvider>
                <App />
            </ReactFlowProvider>
        </QueryClientProvider>
    </StrictMode>
);
