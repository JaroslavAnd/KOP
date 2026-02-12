import React from 'react';
import Button from './Button'; 

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' }, 
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Почати гру', 
  className: 'primary-button', 
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Скасувати',
  className: 'secondary-button', 
};