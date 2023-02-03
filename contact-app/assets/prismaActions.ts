//PRISMA ACTION FUNCTIONS

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

