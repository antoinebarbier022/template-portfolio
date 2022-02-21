import { ComponentStory } from '@storybook/react';

import Home from '../Home';

export default {
    title: 'Template',
    component: Home
};

const Template: ComponentStory<typeof Home> = (args) => <Home  />;


export const Default = Template.bind({});
Default.storyName = "Default";
Default.args = {

};


