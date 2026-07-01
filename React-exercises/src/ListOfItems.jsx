// ### **3. List Component**

// **Task:** Create a list that shows items.

// **What to do:**

// - Make a React component that takes a list (array) of items.
// - Show the items as a numbered list or a regular bullet list.
// - Add a hover effect (e.g., change the color) when the user points at an item.
// - Add a button to let the user switch between numbered and bullet lists.
// Your mini checklist

// Before you start coding, make sure your component has:

// ✅ An array of items.
// ✅ A state that stores the current list type.
// ✅ A button that changes that state.
// ✅ A map() to render every item.
// ✅ Conditional rendering (<ul> or <ol>).
// ✅ A CSS :hover effect for each list item.
import {useState} from 'react'


const ListOfItems = () => {
    const names =["Mah", "Abd", "Must", "sad"]
    const[name, setNames] = useState()
    
  return (
    <div>
        <button onclick={}>Change</button>

    </div>
  )
}

export default ListOfItems