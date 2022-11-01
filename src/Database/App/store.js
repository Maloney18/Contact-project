import { configureStore } from "@reduxjs/toolkit";
import allData from '../Features/generalData/generalData'
import contactTemplate from '../Features/contactTemplate/contactTemplate'


const store = configureStore({
    reducer : {
        allData: allData,
        contact: contactTemplate
    }
})

export default store