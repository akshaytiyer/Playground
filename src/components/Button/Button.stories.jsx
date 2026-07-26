import { fn } from 'storybook/test';

import { Button } from './Button';

const variants = ['Primary', 'Secondary', 'Tertiary'];
const states = ['Default', 'Hover', 'Pressed', 'Focused'];

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'Variant',
      control: 'select',
      options: variants,
      description: 'Button style from Figma: Primary, Secondary, or Tertiary',
      table: {
        type: { summary: "'Primary' | 'Secondary' | 'Tertiary'" },
        defaultValue: { summary: 'Primary' },
      },
    },
    state: {
      name: 'State',
      control: 'select',
      options: states,
      description:
        'Visual state. Default is interactive (hover/focus/active). Other values force that appearance for docs.',
      table: {
        type: { summary: "'Default' | 'Hover' | 'Pressed' | 'Focused'" },
        defaultValue: { summary: 'Default' },
      },
    },
    label: {
      name: 'Label',
      control: 'text',
      description: 'Text shown inside the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' },
      },
    },
    className: {
      table: { disable: true },
      control: false,
    },
    type: {
      name: 'Type',
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Native HTML button type',
      table: {
        type: { summary: "'button' | 'submit' | 'reset'" },
        defaultValue: { summary: 'button' },
      },
    },
  },
  args: {
    onClick: fn(),
    label: 'Button',
    variant: 'Primary',
    state: 'Default',
    type: 'button',
  },
};

export const Primary = {
  args: {
    variant: 'Primary',
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    variant: 'Secondary',
    label: 'Button',
  },
};

export const Tertiary = {
  args: {
    variant: 'Tertiary',
    label: 'Button',
  },
};

/** Full Figma matrix: type × state */
export const AllVariants = {
  parameters: {
    controls: { disable: true },
    layout: 'padded',
  },
  render: () => (
    <div className="flex flex-col gap-6 bg-[#2b2b2b] p-8">
      {variants.map((variant) => (
        <div key={variant} className="flex items-center gap-4">
          {states.map((state) => (
            <Button key={state} variant={variant} state={state} label="Button" />
          ))}
        </div>
      ))}
    </div>
  ),
};
