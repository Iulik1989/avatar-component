import type { Meta, StoryObj } from '@storybook/react';
import Avatar from "../components/Avatar";
// @ts-ignore
import Photo from "../photo.svg"
import {AvatarBorderTypeEnum, AvatarStyleTypeEnum, AvatarVariantEnum} from "../typings/avatar";

const meta: Meta<typeof Avatar> = {
    component: Avatar,
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        variant: AvatarVariantEnum.image,
        borderType: AvatarBorderTypeEnum.square,
        styleType: AvatarStyleTypeEnum.outline,
        size: 'xxl',
        active: true,
        src: Photo,
        initials: {
            firstName: 'Iulian',
            lastName: 'Nicula'
        }
    },
};
