[[_TOC_]]

## Initial Setup

### Setting up this project

1. Clone this project
1. In the new folder, run `yarn install`
1. Copy `.env.example` to `.env.development` and set the values
1. Run `yarn develop` to get going

## Scroll Top

Scroll Top is a feature that allows us to change how an element (usually the
menu bar) is styled once the page has been scrolled a little.

### Configuration

To configure how far the page has to be scrolled (in pixels) before this
triggers:

1. Edit `src/main.js`
1. Change the `SCROLL_OFFSET` constant at the top of the file to your desired
   value.

### Usage

This is all done using the `scrolled` variant in Tailwind.

#### Example

To have a `div` that starts with a white background and a height of 32, which
then changes to a black background and a height of 16 on scroll, you could use:

```html
<div class="h-32 bg-black scrolled:h-16 scrolled:bg-white">
  ...
</div>
```

## Animate On Scroll

This feature allows for an element to animate when it's scroll into or out of
view.

More accurately, it allows swapping the classes on an element when it's
scrolled into or out of view.

### Usage

To enable the animate on scroll feature for an element, add the `v-aos`
directive to it.

You can then specify the classes that are on the element when it is off screen
with the `aos-from` attribute and the classes that those are swapped to when
the element is on the screen with the `aos-to` attribute.

#### Configuration

The `v-aos` accepts the exact same options as [`vue-observe-visibility`][obs].
The main use case here will be specifying the `rootMargin` option to change
where the intersection is calculated from.

#### Example

A full-screen div that will change from red to green over 1 second when it is
scrolled into the page.

```html
<div
  v-aos
  class="h-screen w-full transition-all duration-1000 ease-in-out"
  aos-from="bg-red-800"
  aos-to="bg-green-800"
>
  ...
</div>
```

## Forms

There are base implementations of text, textarea, radio and checkbox fields.
The text-based fields use floating labels -- labels that look like placeholders
until the field is focused or has a value. These fields also have a subtle
border and label effect for when the field is invalid and has a value (e.g. a
required field that is empty will not show this).

All fields are styled in a way that adding tailwind classes will override any of the default styles.

Default colours are set using [CSS Custom Properties][props] in
[`src/main.css`](src/main.css).

### Text fields - `<FormInput>`

This is your standard `<input>` field, with a type set to something other than
`checkbox`, `radio` or `file`.

The default slot is used to populate the label.

The outer `div` has a `group` class and the `input` has a `peer` class,
allowing for the use of the `group-*` and `peer-*` variants.

| Prop | Description | Default |
| --- | --- | --- |
| `id` | The ID of the field. The `for` attribute of the `label` is also set to this. | Random number |
| `type` | The [type][type] of the input | `text` |
| `label-class` | A class list to add to the `label` | |
| `input-class` | A class list to add to the `input` | |
| `class` | A class list to add to the outer `div` | |

All other props are passed directly to the `input`.

### Textarea fields - `<FormTextarea>`

This is the `<textarea>` field.

The default slot is used to populate the label.

The outer `div` has a `group` class and the `textarea` has a `peer` class,
allowing for the use of the `group-*` and `peer-*` variants.

| Prop | Description | Default |
| --- | --- | --- |
| `id` | The ID of the field. The `for` attribute of the `label` is also set to this. | Random number |
| `label-class` | A class list to add to the `label` | |
| `input-class` | A class list to add to the `textarea` | |
| `class` | A class list to add to the outer `div` | |

All other props are passed directly to the `textarea`.

### Radio fields - `<FormRadio>`

This is the `<input type="radio">` field.

The default slot is used to populate the label.

The `label` directly wraps the `input` rather than using a separate div. This
label has a `group class` and the `input` has a `peer` class, allowing for the
use of the `group-*` and `peer-*` variants.

| Prop | Description | Default |
| --- | --- | --- |
| `id` | The ID of the field. | Random number |
| `input-value` | The value to set for the `value` attribute on the `input`. This is also what the `v-model` is set to. | |
| `label-class` | A class list to add to the `label` | |
| `input-class` | A class list to add to the `input` | |
| `class` | A class list to add to the outer `label` | |

All other props are passed directly to the `input`.

### Checkbox fields - `<FormCheckbox>`

This is the `<input type="checkbox">` field.

The default slot is used to populate the label.

The `label` directly wraps the `input` rather than using a separate div. This
label has a `group class` and the `input` has a `peer` class, allowing for the
use of the `group-*` and `peer-*` variants.

| Prop | Description | Default |
| --- | --- | --- |
| `id` | The ID of the field. | Random number |
| `input-value` | The value to set for the `value` attribute on the `input`. This is also what the `v-model` uses if it is an array. | |
| `true-value` | The value to set the `v-model` to when checking this checkbox, if it's not an array | `true` |
| `false-value` | The value to set the `v-model` to when unchecking this checkbox, if it's not an array | `false` |
| `label-class` | A class list to add to the `label` | |
| `input-class` | A class list to add to the `input` | |
| `class` | A class list to add to the outer `label` | |

All other props are passed directly to the `input`.

This is also the only field with special handling of `v-model`. If it's an
array then:
* Checking the checkbox will add the `input-value` to the array
* Unchecking the checkbox will remove the `input-value` from the array
* The checkbox will show as checked if the `input-value` is in the array

[obs]: https://www.npmjs.com/package/vue-observe-visibility#usage
[props]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
[type]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
