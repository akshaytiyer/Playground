import { fn } from 'storybook/test';

import { Button } from './Button';

const variants = ['Primary', 'Secondary', 'Tertiary'];
const sizes = ['Small', 'Medium', 'Large'];
const states = ['Default', 'Hover', 'Pressed', 'Focused'];

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Shared Button atom from Figma. Configure with variant (Primary / Secondary / Tertiary), size (Small / Medium / Large), and optional forced state for docs.',
      },
    },
  },
  // Custom docs live in Button.mdx — disable generated autodocs
  tags: ['!autodocs'],
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
    size: {
      name: 'Size',
      control: 'select',
      options: sizes,
      description: 'Button size from Figma: Small, Medium, or Large',
      table: {
        type: { summary: "'Small' | 'Medium' | 'Large'" },
        defaultValue: { summary: 'Medium' },
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
    size: 'Medium',
    state: 'Default',
    type: 'button',
  },
};

export const Small = {
  args: {
    size: 'Small',
    label: 'Button',
  },
};

export const Medium = {
  args: {
    size: 'Medium',
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'Large',
    label: 'Button',
  },
};

/** Full Figma matrix: size × variant × state */
export const AllVariants = {
  parameters: {
    controls: { disable: true },
    layout: 'padded',
  },
  render: () => (
    <div className="flex flex-col gap-10 bg-[#2b2b2b] p-8">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col gap-3">
          <p className="font-['Inter',system-ui,sans-serif] text-sm font-semibold text-white/70">
            {size}
          </p>
          <div className="flex flex-col gap-4">
            {variants.map((variant) => (
              <div key={variant} className="flex items-center gap-4">
                {states.map((state) => (
                  <Button
                    key={state}
                    variant={variant}
                    size={size}
                    state={state}
                    label="Button"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
