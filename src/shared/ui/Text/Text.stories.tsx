import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Заголовок',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit id facere quo optio excepturi, incidunt ex impedit quis eius quasi neque consectetur, dolore iure voluptatibus cumque quae? Expedita necessitatibus impedit sint architecto officia velit ab porro illo quae sed nemo blanditiis quos, incidunt numquam voluptate odit sapiente ullam excepturi iste?',
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Заголовок',
        text: '',
    },
};

export const OnlyText: Story = {
    args: {
        title: '',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit id facere quo optio excepturi, incidunt ex impedit quis eius quasi neque consectetur, dolore iure voluptatibus cumque quae? Expedita necessitatibus impedit sint architecto officia velit ab porro illo quae sed nemo blanditiis quos, incidunt numquam voluptate odit sapiente ullam excepturi iste?',
    },
};

export const ErrorTheme: Story = {
    args: {
        title: 'Заголовок',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit id facere quo optio excepturi, incidunt ex impedit quis eius quasi neque consectetur, dolore iure voluptatibus cumque quae? Expedita necessitatibus impedit sint architecto officia velit ab porro illo quae sed nemo blanditiis quos, incidunt numquam voluptate odit sapiente ullam excepturi iste?',
        variant: 'error',
    },
};
