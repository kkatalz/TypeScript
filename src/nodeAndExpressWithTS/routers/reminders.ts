import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminders";
import Reminder from "../models/reminder";

const router = Router();
let reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.json(reminders);
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).json(reminder);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, isComplete } = req.body;

  const reminder = reminders.find((r) => r.id === id);

  if (!reminder) res.status(404).json({ message: "Reminder not found" });

  if (!!title) reminder!.title = title;
  if (!!isComplete) reminder!.isComplete = isComplete;

  res.status(200).json(reminder);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const reminder = reminders.find((r) => r.id === id);

  reminders = reminders.filter((rems) => rems.id !== id);
  res.status(200).json(reminder);
});

export default router;
