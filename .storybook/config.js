import { config } from 'storybox';
config({
  options: {
    name: 'YourComponent',
    showLeftPanel: false,
    showDownPanel: false,
  },
  modules: require('glob!./glob.txt'),
});
