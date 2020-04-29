import { shallowMount } from '@vue/test-utils';
import Modal from '@/components/Modal'
import moxios from 'moxios'
import {baseUrl} from '../../src/WeatherService'

beforeEach(() => {
  moxios.install()
})

afterEach(() => {
  moxios.uninstall()
})

const weatherMockData = {
  city: "The London Weather Report",
  weather: [{status: "Sunny"}],
  main: {
    temp: "15",
    humidity: "10",
    pressure: "1000"
  }
}

describe('Modal Component Tests', () => {
  
  test('should render success modal and weather', async() => {
    const wrapper = shallowMount(Modal, {
      propsData: {
        formState: {
          formAInput: 1000, 
          formBInput: 800   
        }
      }
    });

    await wrapper.vm.$nextTick();
    const title = wrapper.find('.modal__title');
    const body = wrapper.find('.modal__body');
    // const city = wrapper.find('.modal__location');
    expect(title.text()).toBe("Success🤝");
    expect(body.text()).toBe("You have reached an agreement.");
    // expect(city.text()).toBe("The London Weather Report");
  });

  test('should render failure modal and weather', async() => {
    const wrapper = shallowMount(Modal, {
      propsData: {
        formState: {
          formAInput: 800, 
          formBInput: 1000   
        }
      }
    })
    await wrapper.vm.$nextTick();
    const title = wrapper.find('.modal__title');
    const body = wrapper.find('.modal__body');
    // const city = wrapper.find('.modal__location');
    expect(title.text()).toBe("Negotiation Failed 😞");
    expect(body.text()).toBe("You were unable to reach an agreement. Try again.");
    // expect(city.text()).toBe("The London Weather Report");
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

  test('should render weather data from service api', async () => {
    const wrapper = shallowMount(Modal, {
      propsData: {
        formState: {
          formAInput: 1000, 
          formBInput: 800   
        }
      }
    });
    moxios.stubRequest(baseUrl, {
      status: 200,
      response: weatherMockData
    });
    await wrapper.vm.$nextTick();
    const city = wrapper.find('.modal__location').text();
    const status = wrapper.find('.modal__status').text();
    const temp = wrapper.find('.modal__temp').text();
    const pressure = wrapper.find('.modal__pressure').text();
    const humidity = wrapper.find('.modal__humidity').text();
    moxios.wait(()=>{
      expect(city).toBe("The London Weather Report")
      expect(status).toBe("Sunny")
      expect(temp).toBe("15")
      expect(pressure).toBe("1000")
      expect(humidity).toBe("10")
    })
  });
  
})
