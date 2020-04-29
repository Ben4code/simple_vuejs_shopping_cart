import { shallowMount, config } from '@vue/test-utils';
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

  test('should reset tab when restApp() is called.', async() => {
    wrapper.vm.resetApp();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.negotiate).toBe(false);
    expect(wrapper.vm.showModal).toBe(false);
    expect(wrapper.vm.state.formAInput).toBe(null);
    expect(wrapper.vm.state.formBInput).toBe(null);
  });  

  test('should set show modal to true.', async() => {
    wrapper.vm.state.formAInput = 90;
    wrapper.vm.state.formBInput = 90;
    wrapper.vm.checkNegotiate();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.negotiate).toBe(true);
    expect(wrapper.vm.showModal).toBe(true);
  });  

  // test('should call getFormAInput() on $emit.', async() => {
  //   // jest.mock('checkNegotiate', ()=>{})
  //   wrapper.vm.state.formAInput = 90;
  //   wrapper.vm.getFormAInput(wrapper.vm.state.formAInput);
  //   await wrapper.vm.$nextTick();
  //   expect(wrapper.vm.checkNegotiate).toHaveBeenCalled();
  // });  
});