import {ToyReact} from './ToyReact'

class MyComponent {
  render() {
    return <div>cool</div>
  }
  setAttribute(name, value) {
    this[name] = value;
  }
  mountTo(parent) {
    let vdom = this.render();
    vdom.mountTo(parent);
  }
}

let a = <MyComponent id="iad" name="a"></MyComponent>

ToyReact.render(a, document.body);