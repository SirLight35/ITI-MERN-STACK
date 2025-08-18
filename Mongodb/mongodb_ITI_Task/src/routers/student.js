const express = require("express");
const Student = require("../models/student");

const router = express.Router();

router.get("/students", async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).send(students);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/students/older", async (req, res) => {
  try {
    const students = await Student.find({ age: { $gt: 14 } });
    res.status(200).send(students);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/students/sara", async (req, res) => {
  try {
    const sara = await Student.findOne({ name: "Sara" });
    if (!sara) return res.status(404).send("Sara not found");
    res.status(200).send(sara);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/students/ali-grade", async (req, res) => {
  try {
    const ali = await Student.findOneAndUpdate(
      { name: "Ali" },
      { grade: "10" },
      { new: true, runValidators: true }
    );
    if (!ali) return res.status(404).send("Ali not found");
    res.status(200).send(ali);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/students/sara-age", async (req, res) => {
  try {
    const sara = await Student.findOneAndUpdate(
      { name: "Sara" },
      { $inc: { age: 1 } },
      { new: true }
    );
    if (!sara) return res.status(404).send("Sara not found");
    res.status(200).send(sara);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/students/omar", async (req, res) => {
  try {
    const omar = await Student.findOneAndDelete({ name: "Omar" });
    if (!omar) return res.status(404).send("Omar not found");
    res.status(200).send(omar);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/students/add-subjects-field", async (req, res) => {
  try {
    const result = await Student.updateMany({}, { $set: { subjects: [] } });
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/students/ali-subjects", async (req, res) => {
  try {
    const ali = await Student.findOneAndUpdate(
      { name: "Ali" },
      { $addToSet: { subjects: "Math" } },
      { new: true }
    );
    if (!ali) return res.status(404).send("Ali not found");
    res.status(200).send(ali);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
