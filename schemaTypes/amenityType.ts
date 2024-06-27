import {defineField, defineType} from 'sanity'
import { IoRibbonSharp } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";

// <IoRibbonSharp />

export const amenityType = defineType({
    name: 'amenity',
    title: 'Amenity',
    type: 'document',
    icon: MdMenuBook,
    fields:  [
        defineField({
            name: 'amenityName',
            type: 'string'
        })
    ]
})