import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../assets/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
	
	// let attempts = 0;
	// const maxAttempts = 2;
	// while (attempts <= maxAttempts) {
		try {

			const contactId = req.query.id
			const target = await prisma.contact.delete({
				where: {id: Number(contactId)}
			})
			res.json(target)

		} catch (error) {

			console.error(error);
			// attempts++

      // if (attempts === maxAttempts) {
        res.status(500).send("Error deleting contact");
        // break;
      // }
		}
	// }
}

