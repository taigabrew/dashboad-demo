<template>
  <input
    v-test="{ id: 'field' }"
    v-bind="{ id, name: id, autocomplete, type, value, dataCy, required }"
    :aria-describedby="hint ? `${id}hint` : null"
    :aria-invalid="!!error"
    :aria-required="required"
    :data-vv-name="type === 'tel' ? 'phone' : null"
    :inputmode="numeric ? 'numeric' : null"
    :pattern="numeric ? '[0-9]*' : null"
    :disabled="readOnly"
    :class="{ 'c-input--readonly': readOnly }"
    @input="update"
    @keyup.stop
    v-on="listeners"
    class="c-input px-3"
  />
</template>

<script>
import extractOtherListerners from '~/functions/extarctOtherListeners'

export default {
  name: 'BaseInput',
  model: {
    event: 'update'
  },
  props: {
    id: {
      type: String,
      default: null,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: null
    },
    hint: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    autocomplete: {
      type: String,
      default: null
    },
    numeric: {
      type: Boolean,
      default: null
    },
    dataCy: {
      type: String,
      default: null
    }
  },
  setup(props, ctx) {
    const listeners = extractOtherListerners(ctx, ['update'])

    const update = event => {
      ctx.emit('update', event.target.value)
    }

    return {
      listeners,
      update
    }
  }
}
</script>
