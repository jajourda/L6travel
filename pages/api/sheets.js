import { google } from 'googleapis'

export async function getDataFromSheets() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly']
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    )

    const sheets = google.sheets({ version: 'v4', auth: jwt })
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: process.env.HOME_SHEET,
    })

    const rows = response.data.values
    if (rows.length) {
      return rows.map((row) => ({
        modelNumber: row[0],
        modelName: row[1],
        modelType: row[2],
        modelYear: row[3],
        make: row[4],
        floorplan: row[5],
        solar: row[6],
        specs: row[7],
        description: row[8],
        floorSpace: row[9],
        adaptability: row[10],
        philosophyNotes: row[11],
        costRange: row[12],
        used: row[13],
        pros: row[14],
        cons: row[15],
        frame: row[16],
        durability: row[17],
        insulation: row[18],
        roof: row[19],
        axles: row[20],
        youtube: row[21],
        link: row[22],
        warranty: row[23],
        photos: row[24],
      }))
    }
  } catch (err) {
    console.log(err)
  }

  return []
}
