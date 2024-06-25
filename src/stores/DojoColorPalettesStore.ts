import { useState } from 'react';
import { ColorPalette } from "@/webtools/types.ts";
import { produce } from 'immer';
import GET_COLOR_PALETTS_QUERY from "@/../graphql/GetColorPalettes.graphql";
import { GraphQLClient } from 'graphql-request';
import { areBoundsEqual, MAX_VIEW_SIZE } from "@/webtools/utils.ts";
import { shortString } from "starknet";
import { get } from 'idb-keyval';

// TODO local declaration to deal with typing. Should come from World__Query but thats very generic

type GetColorPalettesResponse = {
    paletteColorsModels: {
        edges: Array<{
            node: ColorPalette;
        }>;
    };
  };

interface ColorPaletteStore {
    refresh: () => void;
    getColorPalette: () => State | undefined;
}

  

// idx -> color
type State = { [key: number]: number | undefined };
// type State = { [key: string]: Pixel | undefined };

// FIXME: should combine this to game_id.
export function useDojoColorPalettesStore(baseUrl?: string) : ColorPaletteStore {
    const [state, setState] = useState<State>({});
    // const [bounds, setBounds] = useState<Bounds>([[0, 0], [MAX_VIEW_SIZE, MAX_VIEW_SIZE]]);
    // const [cacheUpdated, setCacheUpdated] = useState<number>(Date.now());

    const gqlClient = baseUrl ? new GraphQLClient(`${baseUrl}/graphql`) : null;

    function fetchData(): void {
        if (!gqlClient) return;

        // let [[left, top], [right, bottom]] = bounds;

        // if (left > MAX_VIEW_SIZE && left > right) right = MAX_UINT32;
        // if (top > MAX_VIEW_SIZE && top > bottom) bottom = MAX_UINT32;

        gqlClient.request<GetColorPalettesResponse>(GET_COLOR_PALETTS_QUERY, {
            // first: 8
        }).then((data) => {
            const newState: State = {};
            data.paletteColorsModels.edges.forEach(({ node }: { node: ColorPalette }) => {
              newState[node.idx] = node.color;
            });
            setState(produce((draftState) => {
              Object.assign(draftState, newState);
            }));
            
            // data!.paletteColorsModels!.edges!.map(({ node }: { node: ColorPalette }) => {
            //     const ColorPalette: ColorPalette = {
            //         ...node,
            //         // color: parseInt(node.color as string, 16),
            //         color: node.color,
            //         idx: node.idx
            //     };
            //     setState(produce(draftState => {
            //         draftState[node.idx] = node.color;
            //     }));
            // });
            
            
            // data!.pixelModels!.edges!.map(({ node }: { node: Pixel }) => {
            //     const pixel: Pixel = {
            //         ...node,
            //         text: shortString.decodeShortString(node.text),
            //         action: shortString.decodeShortString(node.action),
            //         timestamp: parseInt(node.timestamp as string, 16),
            //     }

            //     setState(produce(draftState => {
            //         draftState[`${node.x}_${node.y}`] = pixel;
            //     }));
            // })

            // setCacheUpdated(Date.now())

        }).catch((e) => {
            console.error("Error retrieving Color Palettes from torii for", e.message)
        })
    }

    const refresh = (): void => {
        console.log("ColorPalettes.refresh");
        fetchData();
    }

    const getColorPalette = (): State => {
        console.log("ColorPalettes.get");
        fetchData();
        console.log(state);
        return state;
    };

    // const prepare = (newBounds: Bounds): void => {
    //     if (!areBoundsEqual(bounds, newBounds)) {
    //         setBounds(newBounds);
    //         refresh();
    //     }
    // };

    // const getPixel = (coord: Coordinate): Pixel | undefined => {
    //     const key = `${coord[0]}_${coord[1]}`;

    //     return state[key];
    // };

    // const setPixel = (key: string, pixel: Pixel): void => {
    //     setState(produce(draft => {
    //         draft[key] = pixel;
    //     }));
    // };

    // const setPixels = (pixels: { key: string, pixel: Pixel }[]): void => {
    //     setState(produce(draft => {
    //         pixels.forEach(({ key, pixel }) => {
    //             draft[key] = pixel;
    //         });
    //     }));
    return { refresh, getColorPalette };

};
