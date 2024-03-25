import { mount } from '@vue/test-utils';
import UILoaderBase from './UILoaderBase.vue';
import { describe, it, expect } from 'vitest'

describe('UILoaderBase', () => {
  it('renders correctly', () => {
    const wrapper = mount(UILoaderBase);

    // Assert the wrapper element exists
    expect(wrapper.exists()).toBe(true);

    // Assert the wrapper has the correct class
    const wrapperElement = wrapper.find('.wrapper');
    expect(wrapperElement.exists()).toBe(true);

    // Assert the loader element exists and has the correct class
    const loaderElement = wrapper.find('.loader');
    expect(loaderElement.exists()).toBe(true);
  });
});