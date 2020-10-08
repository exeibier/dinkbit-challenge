const Airtable = require('airtable')
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID)

const table = base(process.env.AIRTABLE_TABLE_BLOG)
const tableForm = base(process.env.AIRTABLE_TABLE_FORM)
const minifyRecords = (records) => {
  return records.map(record => getMinifiedRecord(record))
}

const getMinifiedRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields
  }
}

export { table, tableForm, getMinifiedRecord, minifyRecords }
