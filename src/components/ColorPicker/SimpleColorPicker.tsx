import styles from './SimpleColorPicker.module.css';
import {useEntityQuery} from "@dojoengine/react";
import {usePixelawProvider} from "@/providers/PixelawProvider.tsx";
import {Has, HasValue} from "@dojoengine/recs";
import PaletteColor from "@/components/ColorPicker/PaletteColor.tsx";
import SimpleColorPickerItem from "@/components/ColorPicker/SimpleColorPickerItem.tsx";
import {GAME_ID} from "@/global/constants.ts";

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
    onColorSelect: (color: string) => void;
    color: string;
}

const SimpleColorPicker: React.FC<ColorPickerProps> = ({onColorSelect, color: selectedColor}) => {
    selectedColor = `#${selectedColor}`

    const {gameData} = usePixelawProvider();

    const paletteColors = useEntityQuery(
        [
            Has(gameData!.setup.contractComponents.PaletteColors),
            HasValue(gameData!.setup.contractComponents.PaletteColors, {game_id: GAME_ID})
        ], { updateOnValueChange: true }
    )

    if (paletteColors.length) {
        return (
            <div className={styles.inner}>
                {paletteColors.map(paletteColor => (
                    <PaletteColor
                        key={paletteColor.toString()}
                        entityId={paletteColor}
                        onSelect={onColorSelect}
                        selectedColor={selectedColor}
                        lastIndex={paletteColors.length - 1}
                    />
                ))}
            </div>
        )
    }

    return (
        <div className={styles.inner}>
            {colors.map((color, index) => (
                <SimpleColorPickerItem
                    key={color}
                    color={color}
                    onSelect={onColorSelect}
                    selectedColor={selectedColor}
                    old={index === 0}
                    latest={index === colors.length - 1}
                />
            ))}
        </div>
      );
};

export default SimpleColorPicker;
