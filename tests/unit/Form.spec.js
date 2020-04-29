import { shallowMount } from '@vue/test-utils';
import Form from '@/components/Form'


let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Form, {
    propsData: {
      formData: {
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

describe('Form Component Tests', () => {
  test('should render form input and button', () => {
    const input = wrapper.find('.form__input');
    const button = wrapper.find('.form__btn');
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  test('should display employee form on render with props.', () => {
    const EmployeeWrapper = shallowMount(Form, {
      propsData: {
        formData: {
          formA: false, //Employer form tab inactive.
          formB: true,  //Employee form tab active.
          formAInput: null,
          formBInput: null
        }
      }
    })
    const label = EmployeeWrapper.find('label');
    const input = EmployeeWrapper.find('input');
    const button = EmployeeWrapper.find('button');
    expect(label.text()).toBe("Enter Employee Offer");
    expect(input.element.getAttribute('placeholder')).toBe("Min offer: £50,000");
    expect(button.text()).toBe("Send Employee Offer");
  })
  

  test('should update inputValue two-way binding on change', () => {
    const inputValue = "90";
    const input = wrapper.find('.form__input');
    input.element.value = inputValue;
    input.trigger('input');
    expect(wrapper.vm.inputValue).toBe(inputValue)
  })

  test('should display input validation text with incorrect value.', async() => {
    const inputValue = "Hello World.";
    const input = wrapper.find('.form__input');
    const button = wrapper.find('.form__btn');
    input.element.value = inputValue;
    input.trigger('input');
    button.trigger('click');
    const errorSpan = await wrapper.find('.errorMessage');
    expect(wrapper.vm.errorMessage).toBe(null);
    expect(errorSpan.element).toBeTruthy();
  });

  test('should call $emit() form onSubmit with correct input.', async() => {
    const inputValue = 90;
    const form = wrapper.find('.form');
    const input = wrapper.find('.form__input');
    input.element.value = inputValue;
    input.trigger('input');
    form.trigger('submit');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().formAInput).toBeTruthy();
  });

  test('should set show modal to true.', async() => {
    const Employeewrapper = shallowMount(Form, {
      propsData: {
        formData: {
          formA: false,  //Employer form tab inactive.
          formB: true, //Employee form tab active.
          formAInput: null,
          formBInput: 90
        }
      }
    })
    const form = Employeewrapper.find('.form');
    const input = Employeewrapper.find('.form__input');
    input.element.value = Employeewrapper.vm.formData.formBInput;
    input.trigger('input');
    form.trigger('submit');
    await Employeewrapper.vm.$nextTick();
    expect(Employeewrapper.emitted().formBInput).toBeTruthy();
  });  


})
