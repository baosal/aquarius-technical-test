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
        id: '1',
        location: 'Johor, MY',
        time: new Date()
      },
      {
        id: '2',
        location: 'Johor, MYsecondary',
        time: new Date()
      }
    ]
  },
};
