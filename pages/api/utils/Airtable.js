const Airtable = require('airtable')
const base = new Airtable({ apiKey: 'keyxjKc6Snc86FEUT' }).base('appNFTAcRi0J5fTrZ')

const table = base('blogs')
const tableForm = base('form')
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
