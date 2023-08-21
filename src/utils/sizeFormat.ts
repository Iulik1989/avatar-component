import {AvatarSizeType} from "../typings/avatar";

const sizeMapping = {
    xs: 24,
    sm: 32,
    lg: 48,
    xl: 80,
    xxl: 144
}

export const sizeFormat = (size: AvatarSizeType) => {
    if (typeof size === 'string') {
        return sizeMapping[size];
    }
    return size;
}
