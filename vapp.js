const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://adrian:adrian123@cluster0.veegpvo.mongodb.net/vdb").then(
    () => {
        console.log("MongoDB connected")
    }
).catch(
    (err) => (
        console.log(err)
    ))

const Volunteer = mongoose.model("Volunteers", new mongoose.Schema(
    {
        volunteerId: String,
        fullName: String,
        email: String,
        phone: String,
        dob: String,
        gender: String,
        bloodGroup: String,
        dept: String,
        yos: String,
        campName: String,
        hoursComp: String,
        address: String,
        unitNo: String
    }
))

app.get("/test", (req, res) => {
    res.send("hello")
})

app.post("/view-volunteer", async (req, res) => {
    const volunteers = await Volunteer.find()
    res.json(volunteers)
})

app.listen(3000, () => {
    console.log("Server started")
})