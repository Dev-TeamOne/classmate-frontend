import { CSSProperties } from 'react';
import { ColorType } from '../../styles/theme';

type BadgeSize = 'xsmall';
type BadgeColor = keyof ColorType | CSSProperties['color'];
