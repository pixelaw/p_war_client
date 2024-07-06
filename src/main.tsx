import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import '@/index.css';
import { BrowserRouter } from 'react-router-dom';
import { PixelawProvider } from '@/providers/PixelawProvider.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useProposalSubscription } from '@/hooks/useProposals.ts';
import {Slide, ToastContainer} from "react-toastify";

const queryClient = new QueryClient();

// putting it here for now because App updates like Crazy
const Toast = () => {
    useProposalSubscription();
    return (
        <ToastContainer
            position='top-right'
            className={'top-12 z-999 w-full min-w-[200px] max-w-[420px]'}
            transition={Slide}
            closeButton={false}
            newestOnTop
            hideProgressBar
            toastStyle={{
                background: '#151f2c',
                padding: '15px',
                marginTop: '15px',
                color: '#fff',
                borderRadius: 0,
                boxShadow: '5px 5px 0px #00000029',
            }}
        />
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <PixelawProvider>
                <BrowserRouter>
                    <App />
                    <Toast />
                </BrowserRouter>
            </PixelawProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
