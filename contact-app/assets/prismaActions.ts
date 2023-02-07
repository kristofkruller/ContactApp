import { Prisma } from "@prisma/client";

// SAVE ACTION => POST METHOD

export async function saveContact(contact: Prisma.ContactCreateInput) {
  const response = await fetch('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(contact)
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

// DELETE 

export async function deleteContact(id) {
  try {
    await fetch(`http://localhost:3000/api/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
    },
    method: 'DELETE'
    }).then(response => {
      if (!response.ok) {
        throw new Error(`Error deleting contact: ${response.status}`);
      }
    })
  } catch (error) {
   console.log(error); 
  }
}