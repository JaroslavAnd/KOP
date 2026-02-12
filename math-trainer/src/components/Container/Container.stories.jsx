import React from 'react';
import Container from './Container';

export default {
  title: 'Components/Container', 
  component: Container,
  argTypes: {
    children: {
      control: 'text',
      description: 'Контент, який буде відображено всередині контейнера',
    },
  },
};

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div style={{ 
      backgroundColor: '#3b82f6', 
      color: 'white', 
      padding: '40px', 
      textAlign: 'center',
      borderRadius: '8px',
      fontFamily: 'sans-serif'
    }}>
      Це тестовий контент всередині вашого Container. 
      Він має бути по центру і не ширшим за 800px!
    </div>
  ),
};

export const TextContent = Template.bind({});
TextContent.args = {
  children: 'Це просто текстовий контент всередині контейнера. Зайдіть у вкладку "Controls" внизу і спробуйте змінити цей текст!',
};

export const MultipleElements = Template.bind({});
MultipleElements.args = {
  children: (
    <div style={{ padding: '20px', border: '2px dashed #ccc', borderRadius: '8px' }}>
      <h2 style={{ color: '#333', marginTop: 0 }}>Заголовок всередині контейнера</h2>
      <p style={{ color: '#666' }}>
        Контейнер може містити будь-яку кількість дочірніх елементів.
        Всі вони будуть обмежені максимальною шириною та відцентровані.
      </p>
      <button style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#f5a623', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
        Тестова кнопка
      </button>
    </div>
  ),
};