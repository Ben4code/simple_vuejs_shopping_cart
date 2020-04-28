import { shallowMount, mount } from '@vue/test-utils';
import Tabs from '@/components/Tabs'



let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Tabs)
})

afterEach(() => {
  wrapper.destroy()
})

describe('Tabs Components Tests', () => {

  test('should mount component', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should display two tabs and correct text', () => {
    const tabsHandle = wrapper.findAll('.tabs__control');
    const EmployerTab = tabsHandle.at(0)
    const EmployeeTab = tabsHandle.at(1)
    expect(EmployerTab.text()).toBe('Employer');
    expect(EmployeeTab.text()).toBe('Employee');
    expect(tabsHandle.length).toBe(2);
  });

  test('should upadate active tab when toggleForm() is clicked', () => {
    const EmployerTab = wrapper.findAll('.tabs__control').at(0);
    EmployerTab.trigger('click');
    expect(wrapper.vm.state.formA).toBe(true);
    expect(wrapper.vm.state.formB).toBe(false);

    const EmployeeTab = wrapper.findAll('.tabs__control').at(1);
    EmployeeTab.trigger('click');
    expect(wrapper.vm.state.formA).toBe(false);
    expect(wrapper.vm.state.formB).toBe(true);
  });
});