import { isNumber } from 'lodash';

export const isPositiveNumber = value => isNumber(value) && value > 0 && value < Number.MAX_SAFE_INTEGER;