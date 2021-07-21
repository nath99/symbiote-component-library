# Symbiote Component Library

The Symbiote component library.

## Installation

Using npm:

```
npm install -D @symbiotetech/symbiote-component-library
```

or yarn:

```
yarn install -D @symbiotetech/symbiote-component-library
```

## Example Usage

Import the element you need

```jsx
import { Button } from '@symbiotetech/symbiote-component-library';

function App() {
    return (
        <div className="App">
            <Button type="primary" size="md">Example Button</Button>
        </div>
    );
}

export default App;
```

## Local Development

Clone the repository `git clone git@github.com:symbiote/symbiote-component-library.git`.

Install the node modules `yarn install` or `npm install`

If testing the components locally before pushing to NPM the library can be included by adding the following to your projects dependencies

`'@symbiotetech/symbiote-component-library': 'link:<relative_path_to_component_library>'`

e.g.

`'@symbiotetech/symbiote-component-library': 'link:../symbiote-component-library'`

### NPM Scripts

Build the package `yarn run build`

Run unit tests: `yarn run test` or `yarn run test:watch`