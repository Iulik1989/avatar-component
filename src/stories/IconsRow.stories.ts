import type {Meta, StoryObj} from '@storybook/react';
import IconsRow from "../components/IconsRow";
// @ts-ignore
import Photo from "../photo.svg";

const meta: Meta<typeof IconsRow> = {
    component: IconsRow,
};
export default meta;
type Story = StoryObj<typeof IconsRow>;

export const Primary: Story = {
    args: {
        users: [
            {
                photo: Photo
            },
            {
                photo: Photo
            },
            {
                photo: Photo
            },
            {
                photo: Photo
            },
            {
                photo: Photo
            },
        ],
        size: 'lg'
    },
};
