import * as prototype from '../prototypes/objects';

const mainModule = (() => {
  const is = type => {
    const element = document.createElement(type)
    return element
  };
  const mainContainer = () => {
    const container = mainModule.is('main')
    container.classes('d-flex', )
    return container
  };

  return {
    is, mainContainer
  }
})()

export default mainModule