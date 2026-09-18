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
