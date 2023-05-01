const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
app.use(cors())

const data = require("./data/hotels.json")
const travel_districts = require("./data/locations.json")
app.get('/', (req, res) => {
  res.send('TravelGuru')
})
app.get('/travel_locations', (req, res) => {
  res.send(travel_districts)
})
app.get('/data', (req, res) => {
  res.send(data)
})
app.get('/data/:id', (req, res) => {
  const id = req.params.id
  const hotel = data.find(hotel=> hotel.id == id)
  res.send(hotel)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})