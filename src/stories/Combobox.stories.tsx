import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from 'components/Combobox/Combobox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Combobox',
  component: Combobox,
  decorators: [
    (Story) => (
      <div className='w-screen max-w-[700px]'>
        <Story />
      </div>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    value: '',
    onSelectItem: () => { },
    onSearch: () => { },
    options: [
      {
        "name": "Hawaii",
        "country": "US",
        "state": "Hawaii",
        "long": -155.44869830348483,
        "lat": 19.58955475
      },
      {
        "name": "Hawai",
        "country": "PK",
        "state": "Khyber Pakhtunkhwa",
        "long": 72.6111619,
        "lat": 35.288205
      },
      {
        "name": "Hawai",
        "country": "IN",
        "state": "Arunachal Pradesh",
        "long": 96.8124468,
        "lat": 27.8843894
      },
      {
        "name": "Hawai",
        "country": "BR",
        "state": "Minas Gerais",
        "long": -44.0089753,
        "lat": -19.8131397
      },
      {
        "name": "Hawai",
        "country": "IN",
        "state": "Himachal Pradesh",
        "long": 77.2202116,
        "lat": 31.8770838
      }
    ]
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
  },
};
