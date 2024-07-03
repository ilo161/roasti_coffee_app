import {defineField, defineType} from 'sanity'
import { FaPencilAlt } from "react-icons/fa";

export const reviewType = defineType({
    name: 'review',
    title: 'Review',
    type: 'document',
    icon: FaPencilAlt,
    fields:  [
        defineField({
            name: 'reviewTitle',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'businessId',
            title: 'Business Id',
            description: 'The business ID that is getting reviewed.',
            type: 'reference',
            to: [{type: 'business'}],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'coffeeBagTypeId',
            title: 'Coffee Bag Id',
            description: 'The coffee bag ID that is getting reviewed.',
            type: 'reference',
            to: [{type: 'coffeeBag'}],
        }),
        defineField({
            name: 'reviewBody',
            title: 'Review Body',
            description: 'The coffee bag ID that is getting reviewed.',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'reviewRating',
            title: 'Review Rating',
            description: 'The star rating 1-5. 5 is best',
            type: 'string',
            validation: rule => rule.required()
        })
    ]
})