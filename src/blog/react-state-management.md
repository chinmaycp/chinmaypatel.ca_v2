---
title: Second Placeholder Blog Post
date: "2025-04-10"
author: Chinmay Patel
excerpt: A short introduction
slug: react-state-management
---

## Managing State in React

State management is a fundamental aspect of building React applications. As apps grow, deciding how to handle state becomes crucial.

### Options

1.  **useState/useReducer:** Great for local component state.
2.  **Context API:** Good for prop drilling avoidance, but can cause performance issues if overused.
3.  **Zustand/Jotai:** Simpler alternatives to Redux, often providing a more streamlined experience.
4.  **Redux Toolkit:** The standard for complex, large-scale state management.

Choosing the right tool depends heavily on the project's complexity. I often start simple and introduce more powerful tools as needed.

```javascript
// Example using useState
import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```
