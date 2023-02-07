import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../assets/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
	
	const data: any = {}

  if (req.body.name) data.name = req.body.name;
  if (req.body.email) data.email = req.body.email;
  if (req.body.phone) data.phone = req.body.phone;

	try {

		const contactId = req.query.id
		const target = await prisma.contact.update({
			where: {id: Number(contactId)},
      data
		})
		res.json(target)

	} catch (error) {

		console.error(error);
    res.status(500).send("Error deleting contact");

	}
}
