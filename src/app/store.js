import { configureStore } from "@reduxjs/toolkit"
import Task from "./creactSclice"

export const store=configureStore({
    reducer:Task
})