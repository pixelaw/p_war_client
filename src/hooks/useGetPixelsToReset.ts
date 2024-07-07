import { useMutation } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';
import GetResetPixels from '@/../graphql/GetPixelsToReset.graphql';
import { useSettingsStore } from '@/stores/SettingsStore.ts';
import useBoard from '@/hooks/useBoard.ts';
import { GAME_ID } from '@/global/constants.ts';

type Data = {
    pixelModels: {
        edges: {
            node: {
                x: number;
                y: number;
            };
        }[];
    };
};

const useGetPixelsToReset = () => {
    const settings = useSettingsStore();
    const baseUrl = settings?.config?.toriiUrl ?? 'http://localhost:8080';
    const gqlClient = new GraphQLClient(`${baseUrl}/graphql`);

    const board = useBoard(GAME_ID);

    return useMutation({
        mutationKey: ['usePixelRecoveryRate'],
        mutationFn: async ({ color }: { color: number }) => {
            if (!board.data) throw new Error('board data not yet loaded');
            const result: Data = await gqlClient.request(GetResetPixels, {
                color,
                xGTE: board.data.origin.x,
                xLTE: board.data.origin.x + board.data.width - 1,
                yGTE: board.data.origin.y,
                yLTE: board.data.origin.y + board.data.height - 1,
                limit: board.data.height * board.data.width,
            });
            return result.pixelModels.edges.map(({ node: { x, y } }) => {
                return { x, y };
            });
        },
        retryDelay: (failureCount) => failureCount * 1_000,
    });
};

export default useGetPixelsToReset;
