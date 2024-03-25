import { shallowMount } from '@vue/test-utils';
import UIUnstyleButton from './UIUnstyleButton.vue';
import { describe, it, expect } from 'vitest'

describe('UIUnstyleButton', () => {
  it('renders with default class', () => {
    const wrapper = shallowMount(UIUnstyleButton);

    // Assert the presence of the button element
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);

    // Assert that the default class is applied
    expect(button.classes()).toEqual(['btn']);
  });
});