import type { Meta, StoryObj } from '@storybook/react';
import { WeatherItemListing } from '../components/WeatherItemListing/WeatherItemListing'; //

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/WeatherItemListing',
  component: WeatherItemListing,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
  },
} satisfies Meta<typeof WeatherItemListing>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Search History',
    onDelete: () => { },
    onSearch: () => { },
    items: [
      {
        name: "Ho Chi Minh City",
        country: "VN",
        state: '',
        long: 106.7017555,
        lat: 10.7758439,
        time: new Date(),
      },
      {
        name: "Ho Chi Minh City2",
        country: "VN",
        state: '',
        long: 106.7017555,
        lat: 10.7758439,
        time: new Date(),
      }
    ]
  },
};
