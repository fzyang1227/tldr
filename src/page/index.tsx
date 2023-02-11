import {m} from 'malevic';
import {DEFAULT_SETTINGS, DEFAULT_THEME, DEFAULT_COLORS} from '../../../../defaults';
import type {Theme} from '../../../../definitions';
import type {ParsedColorSchemeConfig} from '../../../../utils/colorscheme-parser';
import type {ViewProps} from '../../types';
import { Brightness, Contrast, FontPicker, Grayscale, Mode, ResetButton, Scheme, Scrollbar, SelectionColorEditor, Sepia, TextColor, TextStroke, UseFont, StyleSystemControls, ColorSchemeDropDown, ImmediateModify} from '../controls';

import Collapsible from './collapsible-panel';

interface ThemeGroupProps {
    theme: Theme;
    change: (theme: Partial<Theme>) => void;
}

function MainGroup({theme, change}: ThemeGroupProps) {
    return (
        <Array>
            <Brightness
                value={theme.brightness}
                onChange={(v) => change({brightness: v})}
            />
            <Contrast
                value={theme.contrast}
                onChange={(v) => change({contrast: v})}
            />
            <Sepia
                value={theme.sepia}
                onChange={(v) => change({sepia: v})}
            />
            <Grayscale
                value={theme.grayscale}
                onChange={(v) => change({grayscale: v})}
            />
            <Scheme
                isDark={theme.mode === 1}
                onChange={(isDark) => change({mode: isDark ? 1 : 0})}
            />
            <Mode
                mode={theme.engine}
                onChange={(mode) => change({engine: mode})}
            />
        </Array>
    );
}


interface FontGroupsProps extends ThemeGroupProps {
    fonts: string[];
}

function FontGroup({theme, fonts, change}: FontGroupsProps) {
    return (
        <Array>
            <UseFont
                value={theme.useFont}
                onChange={(useFont) => change({useFont})}
            />
            <FontPicker
                theme={theme}
                fonts={fonts}
                onChange={(fontFamily) => change({fontFamily})}
            />
            <TextStroke
                value={theme.textStroke}
                onChange={(textStroke) => change({textStroke})}
            />
            <StyleSystemControls
                value={theme.styleSystemControls}
                onChange={(styleSystemControls) => change({styleSystemControls})}
            />
            <ImmediateModify
                value={theme.immediateModify}
                onChange={(immediateModify) => change({immediateModify})}
            />
        </Array>
    );
}