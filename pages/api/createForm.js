import { tableForm } from './utils/Airtable'

export default async (req, res) => {
  const { completeName, email, phone, country, message, token } = req.body
  try {
    const createdRecords = await tableForm.create([{ fields: { completeName, email, phone, country, message, token } }])
    const human = await validateHuman(token)
    if (!human) {
      res.statusCode = 400
      res.json({ errors: ['NO HUMAN'] })
      return
    }
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

async function validateHuman (token) {
  const secret = '6LdOf9QZAAAAALvpnxMdmkWMaqAoXOx853s7_voH'
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
    method: 'POST'
  })
  const data = await response.json()

  return data.success
}
