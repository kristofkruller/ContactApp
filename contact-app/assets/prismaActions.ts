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
    console.error(error); 
  }
}

// UPDATE

export async function updateContact(id, data) {
  try {
    await fetch(`http://localhost:3000/api/update/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'PUT',
      body: JSON.stringify(data)
    }).then(response => {
      if (!response.ok) {
        throw new Error(`Error deleting contact: ${response.status}`);
      }
      return response.json();
    })
  } catch (error) {
    console.error(error); 
  }
}
