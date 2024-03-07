import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';
import { BrowserRouter } from 'react-router-dom';

const meta = {
    title: 'shared/Flex',
    component: Flex,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Column: Story = {
    args: {
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </>
        ),
        align: 'center',
        direction: 'column',
        justify: 'between',
        gap: '32',
    },
};

export const Row: Story = {
    args: {
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </>
        ),
        align: 'center',
        direction: 'row',
        justify: 'between',
        gap: '8',
    },
};
