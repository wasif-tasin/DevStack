# 🚀 DevStack

A simple and interactive technology stack builder where developers can explore different technologies and create their own preferred stack.

## 📌 Project Description

DevStack allows users to browse available technologies, add them to their personal stack, and remove technologies whenever they want.

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

## ✨ Features

1. **Explore Technologies**
   - Browse different frontend, backend, database, and programming technologies.

2. **Build Your Stack**
   - Add technologies to your personal stack and see the selected technology count.

3. **Manage Your Stack**
   - Remove individual technologies or remove all selected technologies from the stack.

---

# 📚 React Questions & Answers

### i. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript.  
It makes React UI code easier to read and write.

---

### ii. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time and cause the UI to update.

---

### iii. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data inside a React component.

In this project, I used `useState` to store the selected technologies:

```tsx
const [selectedCards, setSelectedCards] = useState<ITechnology[]>([]);


### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to handle side effects such as API calls and data fetching.

In this project, I did not use `useEffect` to load the JSON data. I used a Promise with React `Suspense` and the `use()` hook instead.


### v. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It helps React efficiently update, add, or remove items when the list changes.


### vi. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it to show an empty stack message when no technology is selected.

```tsx
selectedCards.length === 0
  ? "Your stack is empty."
  : `${selectedCards.length} Technology Selected`


### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**.

In this project, `AvailableTechnology` passes `selectedCards` and `setSelectedCards` to `TechnologyCard`.

The child component uses `setSelectedCards` to update the parent's state.

```tsx
<TechnologyCard
  technology={technology}
  selectedCards={selectedCards}
  setSelectedCards={setSelectedCards}
/>

