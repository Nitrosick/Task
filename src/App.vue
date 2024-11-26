<script setup>
import items from '@/const/items'
import { ref, computed } from 'vue'

const maxItems = 6

const userItems = computed(() => items.user)
const choiceItems = computed(() => items.choice)
const userSelected = ref([])
const choiceSelected = ref(null)

const addItem = (item) => {
  const { value } = userSelected
  if (value.length >= maxItems) return
  if (value.some(i => i.id === item.id)) return
  value.push(item)
}

const isSelected = (item) => {
  return userSelected.value.some(i => i.id === item.id)
}
</script>

<template>
  <div class="app">
    <div class="app-block user-selected">
      <div
        v-for="i in userSelected"
        :key="i.id"
        class="item"
      >
        {{ i.id }}.
        {{ i.name }}
      </div>
      <button
        v-if="userSelected.length"
        class="clear"
        @click.prevent="userSelected = []"
      >
        X
      </button>
      <span
        v-if="userSelected.length >= maxItems"
        class="maximum"
      >
        Max.
      </span>
    </div>
    <div class="app-block choice-selected">
      <div
        class="item"
        :class="{ 'selected': choiceSelected }"
      >
        <span v-if="choiceSelected">
          {{ choiceSelected.id }}.
          {{ choiceSelected.name }}
        </span>
      </div>
      <button
        v-if="choiceSelected"
        class="clear"
        @click.prevent="choiceSelected = null"
      >
        X
      </button>
    </div>
    <div class="app-block user">
      <button
        v-for="i in userItems"
        :key="i.id"
        class="item"
        :class="{ 'selected': isSelected(i) }"
        @click.prevent="addItem(i)"
      >
        {{ i.id }}.
        {{ i.name }}
      </button>
    </div>
    <div class="app-block choice">
      <button
        v-for="i in choiceItems"
        :key="i.id"
        class="item"
        :class="{ 'selected': choiceSelected && choiceSelected.id === i.id }"
        @click.prevent="choiceSelected = i"
      >
        {{ i.id }}.
        {{ i.name }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
  padding: 2rem;
  border: 1px solid black;
}

.app-block {
  position: relative;
  padding: 1rem;
  border: 1px solid black;
}

.item {
  width: 8rem;
  aspect-ratio: 2/1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 1rem;
  background-color: lightgray;
  cursor: pointer;
}

.selected {
  background-color: gray;
  color: white;
  cursor: default;
}

.clear {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: white;
  padding: 0.3rem;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: 600;
  transform: scale(1, 0.8);
}

.maximum {
  color: red;
}

.user,
.choice,
.user-selected {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}
</style>
