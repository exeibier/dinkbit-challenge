import { tableForm } from './utils/Airtable'

export default async (req, res) => {
  const { completeName, email, phone, message } = req.body
  try {
    const createdRecords = await tableForm.create([{ fields: { completeName, email, phone, message } }])
    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields
    }
    res.statusCode = 200
    res.json(createdRecord)
  } catch (error) {
    console.log(error)
    res.statusCode = 500
    res.json({ msg: 'something whet wrong' })
  }
}
