# HTML Elements


A lightweight typescript/javascript  library to improve read and write of code
generated HTML strings. Each HTML element is a `Element` class that can be
changed after creation and have the HTML re-generated again by calling `toHTML`
function.
Another option is provided to use only functions instead of classes. It is a
better option to build faster HTML code without calling the `toHTML` function if
dynamic code is not needed.

---

### Examples
- #### Use it as classes
```typescript
import classes from 'html_elements';
const { div, h5, hr } = classes;

const html = div(
    // ID
    'my-element-id',
    // Classes,
    ['py-3', 'mt-0', 'd-flex'],
    // Content
    [hr(), 'Testing content...'],
    // Attributes
    {'data-test': 'success'},
).toHTML();
```

- #### Use it as functions
```typescript
import functions from 'html_elements';
const { div, h5, hr } = functions;

const html = div(
    // ID
    'my-element-id',
    // Classes,
    ['py-3', 'mt-0', 'd-flex'],
    // Content
    hr() + 'Testing content...',
    // Attributes
    {'data-test': 'success'},
);
```
