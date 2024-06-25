import React, { useEffect, useState } from 'react';
import styles from './SimpleColorPicker.module.css';
import GET_COLOR_PALETTS_QUERY from "@/../graphql/GetColorPalettes.graphql";
import { GraphQLClient } from 'graphql-request';
import { ColorPalette } from "@/webtools/types.ts";
import {useDojoColorPalettesStore} from "@/stores/DojoColorPalettesStore.ts";
import { numRGBToHex } from '@/webtools/utils';


// type GetColorPalettesResponse = {
//   paletteColorsModels: {
//       edges: Array<{
//           node: ColorPalette;
//       }>;
//   };
// };

const colors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#4B0082",
    "#9400D3",
    "#FFFFFF", // white
    "#000000"  // black
];

export interface ColorPickerProps {
    color: string;
    onColorSelect: (color: string) => void;
    // toriiUrl: string | undefined;
}

const SimpleColorPicker: React.FC<ColorPickerProps> = ({onColorSelect, color: selectedColor}) => {
  // const [colors, setColors] = useState<string[]>([]);
  // const [error, setError] = useState<string | null>(null);
  // const { refresh, getColorPalette } = useDojoColorPalettesStore(toriiUrl!);
  // console.log("colorPalettesStore", colorPalettesStore);
  // console.log(colorPalettesStore.getColorPalette());

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await refresh();
  //       const state = getColorPalette();
  //       if (Object.keys(state).length === 0) {
  //         setError('No color palettes found (for the provided game_id).');
  //       } else {
  //         const hexColors = Object.values(state)
  //           .filter((value): value is number => value !== undefined)
  //           .map(numRGBToHex);
  //         setColors(hexColors);
  //         setError(null);
  //       }
  //     } catch (e) {
  //       setError(`An error occurred while fetching color palettes: ${e.message}`);
  //       console.error(e);
  //     }
  //   };

  //   fetchData();
  // }, []);

  selectedColor = `#${selectedColor}`

    return (
        <div className={styles.inner}>
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: color }}
              className={`${styles.button} ${color === '#FFFFFF' ? styles['button-white'] : ''} ${color === selectedColor ? styles.selected : ''}`}
              aria-label={`Color ${color}`}
              onClick={() => onColorSelect(color)}
            >
              <span className={styles.label}>
                {index === 0 ? 'New' : index === 8 ? 'Old' : ''}
              </span>
            </button>
          ))}
        </div>
      );
};

export default SimpleColorPicker;
