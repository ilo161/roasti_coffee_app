import {defineField, defineType} from 'sanity'
import { CiCoffeeBean } from "react-icons/ci";

export const businessType = defineType({
    name: 'business',
    title: 'Business',
    type: 'document',
    icon: CiCoffeeBean,
    fields:  [
        defineField({
            name: 'businessName',
            type: 'string'
        }),
        defineField({
            name: 'businessType',
            type: 'string',
            options: {
            list: ['roaster', 'cafe', 'hybrid'],
            layout: 'radio',
            },
        }),
        defineField({
            name:'motto_slogan',
            type: 'string'
        }),
        defineField({
            name:'continent',
            type: "string",
            options: {
                list: ['africa', 'asia', 'europe', 'north-america', 'south-america', 'oceania'],
                layout: 'radio',
            }
        }),
        defineField({
            name:'country',
            type: 'string'
        }),
        defineField({
            name: "region",
            type: "string"
        }),
        defineField({
            name: "address",
            type: "string"
        }),
        defineField({
            name: "city",
            type: "string"
        }),
        defineField({
            name: "state",
            type: "string"
        }),
        defineField({
            name: "zipCode",
            type: "string"
        }),
        defineField({
            name: "website",
            type: "url"
        }),
        defineField({
            name: "phone",
            type: "string"
        }),
        defineField({
            name: "phoneExt",
            type: "string"
        }),
        defineField({
            name: "isRoaster",
            type: "boolean"
        }),
        defineField({
            name: "roasteryUsed",
            description: 'Which Roaster Do They Use?',
            type: "string"
        }),
        defineField({
            name: "isOrganic",
            type: "boolean"
        }),
        defineField({
            name: "hasOnlineOrdering",
            type: "boolean"
        }),
        defineField({
            name: "hasPastry",
            type: "boolean"
        }),
        defineField({
            name: "hasFood",
            type: "boolean"
        }),
        defineField({
            name: "openTime",
            type: "number"
        }),
        defineField({
            name: "closeTime",
            type: "number"
        }),
        defineField({
            name: "openTimeSat",
            type: "number"
        }),
        defineField({
            name: "closeTimeSat",
            type: "number"
        }),
        defineField({
            name: "openTimeSun",
            type: "number"
        }),
        defineField({
            name: "closeTimeSun",
            type: "number"
        }),
        defineField({
            name: "hasWifi",
            type: "boolean"
        })
    ],
})

