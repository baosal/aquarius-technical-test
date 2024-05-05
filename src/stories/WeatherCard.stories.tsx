import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WeatherCard } from '../components/WeatherCard/WeatherCard';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/WeatherCard',
  component: WeatherCard,
  decorators: [
    (Story) => (
      <div className='w-screen max-w-[700px]'>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
  },
} satisfies Meta<typeof WeatherCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    data: {
      name: 'Johor, MY',
      time: new Date(),
      temp: '26',
      tempMax: '28',
      tempMin: '26',
      humidity: 58,
      weather: 'Clouds'
    }
  },
};
