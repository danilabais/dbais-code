import { mount } from '@vue/test-utils';
import NoteBase from './NoteBase.vue';

describe('NoteBase', () => {
  it('renders correctly with note data', () => {
    const note = {
      text: 'Sample note text',
      authorMail: 'author@example.com',
      createdAt: new Date('2022-01-01'),
      lastModification: new Date('2022-02-01'),
    };

    const wrapper = mount(NoteBase, {
      props: {
        note,
      },
      slots: {
        controls: '<button>Controls</button>', // Mocking slot content
      },
    });

    // Assert the wrapper element exists
    expect(wrapper.exists()).toBe(true);

    // Assert the header element and controls slot exist
    const headerElement = wrapper.find('.header');
    expect(headerElement.exists()).toBe(true);
    const controlsButton = headerElement.find('button');
    expect(controlsButton.exists()).toBe(true);

    // Assert the lastTimeEdited is displayed based on the note data
    const dateElement = headerElement.find('.date');
    const expectedText = `edited: ${note.lastModification.toLocaleDateString()} (${note.authorMail})`;
    expect(dateElement.text()).toBe(expectedText);

    // Assert the text element contains the note text
    const textElement = wrapper.find('.text');
    expect(textElement.exists()).toBe(true);
    expect(textElement.text()).toBe(note.text);
  });

  it('renders correctly with only note creation date if not edited', () => {
    const note = {
      text: 'Sample note text',
      authorMail: 'author@example.com',
      createdAt: new Date('2022-01-01'),
      lastModification: new Date('2022-01-01'),
    };

    const wrapper = mount(NoteBase, {
      props: {
        note,
      },
      slots: {
        controls: '<button>Controls</button>', // Mocking slot content
      },
    });

    // Assert the lastTimeEdited is the creation date if not edited
    const headerElement = wrapper.find('.header');
    const dateElement = headerElement.find('.date');
    const expectedText = `${note.createdAt.toLocaleDateString()} (${note.authorMail})`;
    expect(dateElement.text()).toBe(expectedText);
  });
});