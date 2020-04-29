import { shallowMount } from '@vue/test-utils';
import Modal from '@/components/Modal'


// beforeEach(() => {
  
// })

// afterEach(() => {
//   wrapper.destroy()
// })



describe('Modal Component Tests', () => {
  
  test('should render success modal', async() => {
    const wrapper = shallowMount(Modal, {
      propsData: {
        formState: {
          formAInput: 1000, 
          formBInput: 800   
        }
      }
    })
    await wrapper.vm.$nextTick();
    const title = wrapper.find('h4');
    const body = wrapper.find('p');
    expect(title.text()).toBe("Success🤝");
    expect(body.text()).toBe("You have reached an agreement.");
  });

  test('should render failure modal', async() => {
    const wrapper = shallowMount(Modal, {
      propsData: {
        formState: {
          formAInput: 800, 
          formBInput: 1000   
        }
      }
    })
    await wrapper.vm.$nextTick();
    const title = wrapper.find('h4');
    const body = wrapper.find('p');
    expect(title.text()).toBe("Negotiation Failed 😞");
    expect(body.text()).toBe("You were unable to reach an agreement. Try again.");
  });

  test('should call $emit() when closeModal() is clicked.', async () => {
    const wrapper = shallowMount(Modal, {
      propsData: {
        formState: {
          formAInput: 800, 
          formBInput: 1000   
        }
      }
    })
    const button = wrapper.find('button');
    button.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().reset).toBeTruthy();
  })
  
})
