import {defineField, defineType} from 'sanity'
import { FaPencilAlt } from "react-icons/fa";

export const reviewType = defineType({
    name: 'review',
    title: 'Review',
    type: 'document',
    icon: FaPencilAlt,
    fields:  [
        defineField({
            name: 'userId',
            title: 'User Id',
            description: 'The user ID that made this review.',
            type: 'reference',
            to: [{type: 'user'}],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'reviewClearedForLanguage',
            title: 'Review cleared for site',
            type:'string',
            description: 'App Support Team This boolean prevents reviewBody from showing up on site until language has been checked for profanity and good taste.',
        }),
        defineField({
            name: 'reviewTitle',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'reviewRating',
            title: 'Review Rating',
            description: 'The star rating 1-5. 5 is best',
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
            name: 'RoasterId',
            title: 'Roaster Id',
            description: 'The RoasterID(Biz ID) that is getting reviewed.',
            type: 'reference',
            to: [{type: 'business'}]
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
            description: 'User review description',
            type: 'string',
            validation: rule => rule.required()
        })
        
    ]
})