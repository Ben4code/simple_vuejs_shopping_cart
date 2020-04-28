import { mount } from '@vue/test-utils'
import Counter from './counter'

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
})


it('button click should increment the count', () => {
  expect(wrapper.vm.count).toBe(0)
  const button = wrapper.find('button')
  button.trigger('click')
  expect(wrapper.vm.count).toBe(1)
})


it('button click should increment the count text', async () => {
  expect(wrapper.text()).toContain('0')
  const button = wrapper.find('button')
  await button.trigger('click')
  expect(wrapper.text()).toContain('1')
})

Async
it('updates text', async () => {
  const wrapper = mount(Component)
  await wrapper.trigger('click')
  expect(wrapper.text()).toContain('updated')
  await wrapper.trigger('click')
  wrapper.text().toContain('some different text')
})

wrapper.vm.$emit('foo')
wrapper.vm.$emit('foo', 123)

/*
`wrapper.emitted()` returns the following object:
{
  foo: [[], [123]]
}
*/

// assert event has been emitted
expect(wrapper.emitted().foo).toBeTruthy()

// assert event count
expect(wrapper.emitted().foo.length).toBe(2)

// assert event payload
expect(wrapper.emitted().foo[1]).toEqual([123])

Emitted by Child to Parent
import { mount } from '@vue/test-utils'
import ParentComponent from '@/components/ParentComponent'
import ChildComponent from '@/components/ChildComponent'

describe('ParentComponent', () => {
  it("displays 'Emitted!' when custom event is emitted", () => {
    const wrapper = mount(ParentComponent)
    wrapper.find(ChildComponent).vm.$emit('custom')
    expect(wrapper.html()).toContain('Emitted!')
  })
})
