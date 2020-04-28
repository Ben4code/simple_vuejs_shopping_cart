import { shallowMount } from '@vue/test-utils';
import Modal from '@/components/Modal'


beforeEach(() => {
  wrapper = shallowMount(Modal, {
    propsData: {
      formState: {
        formA: true,  //Employer form tab active.
        formB: false, //Employee form tab inactive.
        formAInput: null,
        formBInput: null
      }
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})



describe('Modal Component Tests', () => {
  test('should render modal component', () => {
    const div = wrapper.find('.modal__content');
    expect(div).toBeTruthy();
  });

  test('should render success modal', async() => {
    // await wrapper.vm.$nextTick();
    // const title = EmployeeWrapper.find('h4');
    // const body = EmployeeWrapper.find('p');
    // const button = EmployeeWrapper.find('button');
    // expect(label.text()).toBe("Enter Employee Offer");
    // expect(input.element.getAttribute('placeholder')).toBe("Min offer: £50,000");
    // expect(button.text()).toBe("Send Employee Offer");
  });
})
