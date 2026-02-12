import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export const Default = {};

export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};