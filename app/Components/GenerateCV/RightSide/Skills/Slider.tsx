import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


interface SliderSizesProps {
    levelLabels: string[];
    handleSliderChange: (value: number) => void;
    sliderValue: number;
}
/*
0-25 maps to Base
26-50 maps to Elementary
51-75 maps to Intermediate
76-100 maps to Advanced
 */

export default function SliderSizes({ levelLabels, handleSliderChange, sliderValue }: SliderSizesProps) {
    return (
        <Box sx={{ width: 300 }}>
            <Slider
                defaultValue={0}
                onChange={(e, newValue) => handleSliderChange(newValue as number)}
                min={0}
                max={100}
                step={25}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => levelLabels[(value / 25)]}
                aria-label="Competence Level"
            />
        </Box>
    );
}
