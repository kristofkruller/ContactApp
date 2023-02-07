import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../assets/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
	const contactId = req.query.id

	if(req.method === 'DELETE') {
		const target = await prisma.contact.delete({
			where: {id: Number(contactId)}
		})
		res.json(target)
	} else {
		console.log("Note could not be created");
	}
}

