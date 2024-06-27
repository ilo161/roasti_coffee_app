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
        // defineField({
        //     name: 'businessType',
        //     type: 'string',
        //     options: {
        //     list: ['roaster', 'cafe'],
        //     layout: 'radio',
        //     },
        // }),
        defineField({
            name: "isRoaster",
            type: "boolean"
        }),
        defineField({
            name: "isCafe",
            type: "boolean"
        }),
        defineField({
            name: 'roasteryUsed',
            title: 'Roaster',
            description: 'The business that roasted this coffee bag.',
            type: 'reference',
            to: [{type: 'business'}],
            validation: rule => rule.required()
        }),
        defineField({          
            name: 'amenities',
            title: 'Amenities',
            type: 'array',
            of: [
                {
                type: 'reference', 
                to: [
                    {type: 'amenity'}
                    ]
                }
             ]
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
            name: "emailAlpha",
            type: "email"
        }),
        defineField({
            name: "emailOwner",
            type: "email"
        }),defineField({
            name: "emailMarketing",
            type: "email"
        }),
        defineField({
            name: "emailSales",
            type: "email"
        }),
        defineField({
            name: "emailOther",
            type: "email"
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

