import { mount } from '@vue/test-utils';
import UserProfileBase from './UserProfileBase.vue';
import {describe,it,expect} from 'vitest'

describe('UserProfileBase', () => {
  it('renders correctly', () => {
    const props = {
      image: 'profile.jpg',
      name: 'John Doe',
    };
    const wrapper = mount(UserProfileBase, {
      props,
    });

    // Assert the wrapper element exists
    expect(wrapper.exists()).toBe(true);

    // Assert the wrapper has the correct class
    const wrapperElement = wrapper.find('.wrapper');
    expect(wrapperElement.exists()).toBe(true);

    // Assert the image exists and has the correct props
    const imageComponent = wrapper.findComponent({ name: 'UIImageBase' });
    expect(imageComponent.exists()).toBe(true);
    expect(imageComponent.props('size')).toBe('xs');
    expect(imageComponent.props('alt')).toBe(props.name);
    expect(imageComponent.props('src')).toBe(props.image);

    // Assert the name element exists and has the correct text
    const nameElement = wrapper.find('.name');
    expect(nameElement.exists()).toBe(true);
    expect(nameElement.text()).toBe(props.name);
  });
});