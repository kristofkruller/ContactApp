import React from 'react'
import { Contact } from '@prisma/client'

interface DataProp {
  data: Contact[]
}

const ContactCard: React.FC<DataProp> = (data) => {
  return (
    <div>ContactCard</div>
  )
}

export default ContactCard